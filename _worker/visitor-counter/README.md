# Visitor counter

The footer counter on yupengtang.github.io is served by this Cloudflare Worker, backed by a
D1 database. Jekyll ignores this directory, so none of it is published with the site.

Live at `https://visitor-counter.yupengtang.workers.dev`.

| Request | Effect |
| --- | --- |
| `POST /hit` with body `{"path": "/cv/"}` | Counts one page view and returns the totals |
| `GET /stats?path=/cv/` | Returns the totals without counting |

Both answer `{"site_uv": n, "site_pv": n, "page_pv": n}`.

## What is counted

- **Views** (`site_pv`, `page_pv`): every `POST /hit` from a browser on the site.
- **Visitors** (`site_uv`): once per visitor per UTC day. The Worker hashes the IP address and
  user agent with a secret salt and the date, and keeps only the hash, for at most two days.
- Requests from other origins and from recognizable bots are not counted.
- The site script sends `GET /stats` instead of `POST /hit` when the browser asks not to be
  tracked, so those visitors see the totals without being counted.

## Deploying

Requires a Cloudflare account. From this directory:

```bash
npx wrangler login                                   # once per machine
npx wrangler deploy                                  # after changing src/index.js
npx wrangler d1 execute visitor-counter --remote --file=schema.sql   # only to recreate tables
```

The `SALT` secret is set on the Worker with `npx wrangler secret put SALT`. It is not stored
in this repository; replacing it only means returning visitors are counted again that day.

To read the current numbers:

```bash
npx wrangler d1 execute visitor-counter --remote --command "SELECT * FROM totals"
npx wrangler d1 execute visitor-counter --remote --command "SELECT * FROM pages ORDER BY pv DESC"
```
