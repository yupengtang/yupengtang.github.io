// Visitor counter for yupengtang.github.io, running on Cloudflare Workers with a D1 database.
//
//   POST /hit    body: {"path": "/cv/"}   counts one page view, returns the totals
//   GET  /stats?path=/cv/                 returns the totals without counting
//
// Both answer {"site_uv": n, "site_pv": n, "page_pv": n}.
//
// A visitor is counted once per UTC day. To tell visitors apart, the Worker hashes the IP
// address and user agent with a secret salt and the date, and keeps only that hash, for at
// most two days. No IP address, cookie or persistent identifier is stored.

const SITE_ORIGIN = 'https://yupengtang.github.io';
const MAX_PATH_LENGTH = 200;
const MAX_TRACKED_PAGES = 500;
const BOT = /bot|crawl|spider|slurp|headless|lighthouse|preview|monitor|uptime|curl|wget|python|httpclient|okhttp|go-http|java\//i;

function reply(body, status) {
  return new Response(body === null ? null : JSON.stringify(body), {
    status: status || 200,
    headers: {
      'Access-Control-Allow-Origin': SITE_ORIGIN,
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Max-Age': '86400',
      'Cache-Control': 'no-store',
      'Content-Type': 'application/json; charset=utf-8',
      'Vary': 'Origin',
      'X-Content-Type-Options': 'nosniff',
    },
  });
}

// Keep the pathname only, so query strings and fragments never reach the database.
function cleanPath(value) {
  if (typeof value !== 'string' || value[0] !== '/') return null;
  const path = value.split(/[?#]/)[0];
  if (path.length > MAX_PATH_LENGTH || !/^[A-Za-z0-9/_.~%-]+$/.test(path)) return null;
  return path;
}

async function visitorHash(env, day, request) {
  const ip = request.headers.get('CF-Connecting-IP') || '';
  const agent = request.headers.get('User-Agent') || '';
  const bytes = new TextEncoder().encode([env.SALT, day, ip, agent].join('|'));
  const digest = await crypto.subtle.digest('SHA-256', bytes);
  return Array.from(new Uint8Array(digest).slice(0, 16), (b) => b.toString(16).padStart(2, '0')).join('');
}

async function totals(env, path) {
  const [site, page] = await env.DB.batch([
    env.DB.prepare('SELECT key, n FROM totals'),
    env.DB.prepare('SELECT pv FROM pages WHERE path = ?').bind(path),
  ]);
  const result = { site_uv: 0, site_pv: 0, page_pv: 0 };
  for (const row of site.results) {
    if (row.key === 'site_uv' || row.key === 'site_pv') result[row.key] = row.n;
  }
  if (page.results.length) result.page_pv = page.results[0].pv;
  return result;
}

async function countHit(env, path, request) {
  const day = new Date().toISOString().slice(0, 10);
  const hash = await visitorHash(env, day, request);
  const bump = 'INSERT INTO totals (key, n) VALUES (?, 1) ON CONFLICT (key) DO UPDATE SET n = n + 1';

  // A new page is recorded only while the table is small, so nobody can fill it with junk paths.
  const known = await env.DB.prepare(
    'SELECT (SELECT COUNT(*) FROM pages) AS pages, EXISTS (SELECT 1 FROM pages WHERE path = ?) AS found'
  ).bind(path).first();
  const trackPage = known.found === 1 || known.pages < MAX_TRACKED_PAGES;

  const statements = [
    env.DB.prepare('INSERT OR IGNORE INTO seen (day, hash) VALUES (?, ?)').bind(day, hash),
    env.DB.prepare(bump).bind('site_pv'),
  ];
  if (trackPage) {
    statements.push(env.DB.prepare(
      'INSERT INTO pages (path, pv) VALUES (?, 1) ON CONFLICT (path) DO UPDATE SET pv = pv + 1'
    ).bind(path));
  }
  const [seen] = await env.DB.batch(statements);

  // First request from this visitor today: count the visitor and drop hashes older than yesterday.
  if (seen.meta.changes > 0) {
    const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
    await env.DB.batch([
      env.DB.prepare(bump).bind('site_uv'),
      env.DB.prepare('DELETE FROM seen WHERE day < ?').bind(yesterday),
    ]);
  }
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    try {
      if (request.method === 'OPTIONS') return reply(null, 204);

      if (request.method === 'GET' && url.pathname === '/stats') {
        const path = cleanPath(url.searchParams.get('path') || '/');
        if (!path) return reply({ error: 'invalid path' }, 400);
        return reply(await totals(env, path));
      }

      if (request.method === 'POST' && url.pathname === '/hit') {
        // Browsers always send Origin on a cross-site POST; anything else is not a page view.
        if (request.headers.get('Origin') !== SITE_ORIGIN) return reply({ error: 'forbidden' }, 403);
        let body;
        try { body = JSON.parse(await request.text()); } catch (_) { return reply({ error: 'invalid body' }, 400); }
        const path = cleanPath(body && body.path);
        if (!path) return reply({ error: 'invalid path' }, 400);
        if (!BOT.test(request.headers.get('User-Agent') || '')) await countHit(env, path, request);
        return reply(await totals(env, path));
      }

      return reply({ error: 'not found' }, 404);
    } catch (error) {
      console.error(error);
      return reply({ error: 'unavailable' }, 500);
    }
  },
};
