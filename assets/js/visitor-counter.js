(function () {
  'use strict';
  if (window.siteVisitorCounterStarted) return;
  window.siteVisitorCounterStarted = true;

  var script = document.currentScript;
  var panel = document.querySelector('[data-visitor-counter]');
  var status = panel && panel.querySelector('[data-counter-status]');
  var CACHE_KEY = 'visitor-counter:last';

  if (!script || !script.dataset.siteUrl || !script.dataset.goatcounterCode) return;
  var code = script.dataset.goatcounterCode;
  if (!/^[a-z0-9][a-z0-9-]*$/i.test(code)) return;
  var site;
  try { site = new URL(script.dataset.siteUrl); } catch (_) { return; }
  // Previews, forks and local builds neither count nor display.
  if (location.hostname !== site.hostname || location.protocol !== 'https:') return;
  if (navigator.doNotTrack === '1' || window.doNotTrack === '1' || navigator.globalPrivacyControl === true) return;

  var base = 'https://' + code + '.goatcounter.com';

  // Count this page view. GoatCounter sets no cookies and stores no identifier in the browser.
  var counter = document.createElement('script');
  counter.async = true;
  counter.src = 'https://gc.zgo.at/count.js';
  counter.dataset.goatcounter = base + '/count';
  document.head.appendChild(counter);

  if (!panel || !window.fetch || !window.AbortController) return;

  // Same path rule as GoatCounter's count.js, so the page figure matches what was recorded.
  function pagePath() {
    var loc = location;
    var canonical = document.querySelector('link[rel="canonical"][href]');
    if (canonical) {
      var a = document.createElement('a');
      a.href = canonical.href;
      if (a.hostname.replace(/^www\./, '') === location.hostname.replace(/^www\./, '')) loc = a;
    }
    return (loc.pathname + loc.search) || '/';
  }
  var path = pagePath();

  function readCache() {
    try {
      var saved = JSON.parse(localStorage.getItem(CACHE_KEY));
      if (saved && Number.isSafeInteger(saved.total) && saved.total >= 0 && saved.pages && saved.at) return saved;
    } catch (_) { /* Storage may be unavailable or the entry malformed. */ }
    return null;
  }
  function writeCache(total, page) {
    try {
      var saved = readCache() || { pages: {} };
      saved.total = total;
      if (page !== null) saved.pages[path] = page;
      saved.at = new Date().toISOString();
      localStorage.setItem(CACHE_KEY, JSON.stringify(saved));
    } catch (_) { /* The counter still works without a saved copy. */ }
  }

  function show(total, page, state, message) {
    var totalValue = panel.querySelector('[data-counter-value="total"]');
    var pageValue = panel.querySelector('[data-counter-value="page"]');
    if (totalValue) totalValue.textContent = total.toLocaleString('en-US');
    if (pageValue) {
      var known = Number.isSafeInteger(page) && page > 0;
      if (known) pageValue.textContent = page.toLocaleString('en-US');
      if (pageValue.parentNode) pageValue.parentNode.hidden = !known;
    }
    if (status) status.textContent = message;
    panel.dataset.state = state;
    panel.hidden = false;
  }

  // Paint the last known figures first so the footer never shows placeholders.
  var cached = readCache();
  function showCached() {
    if (!cached || cached.total === 0) return false;
    var when = new Date(cached.at);
    var label = isNaN(when) ? '' : when.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    show(cached.total, cached.pages[path], 'cached', label ? 'Last updated ' + label : 'Showing saved figures');
    return true;
  }
  showCached();

  var controller = new AbortController();
  var timeout = setTimeout(function () { controller.abort(); }, 8000);

  // GoatCounter answers {"count": "1 234"}; a path with no recorded visits answers 404.
  function count(name) {
    return fetch(base + '/counter/' + name + '.json', {
      credentials: 'omit',
      referrerPolicy: 'no-referrer',
      signal: controller.signal
    }).then(function (response) {
      if (response.status === 404) return 0;
      if (!response.ok) throw new Error('Counter request failed');
      return response.json().then(function (result) {
        var value = Number(String(result && result.count).replace(/[^0-9]/g, ''));
        if (!Number.isSafeInteger(value) || !/[0-9]/.test(String(result && result.count))) throw new Error('Invalid counter response');
        return value;
      });
    });
  }

  Promise.all([
    count('TOTAL'),
    count(encodeURIComponent(path)).catch(function () { return null; })
  ]).then(function (values) {
    var total = values[0];
    var page = values[1];
    if (page === null && cached && Number.isSafeInteger(cached.pages[path])) page = cached.pages[path];
    writeCache(total, values[1]);
    // Nothing recorded yet (a new site, or figures not refreshed): stay hidden rather than show zero.
    if (total === 0) { panel.hidden = true; return; }
    show(total, page, 'ready', 'Updated just now');
  }).catch(function () {
    // Service unreachable: keep the saved figures on screen, or stay hidden if there are none.
    if (!showCached()) panel.hidden = true;
  }).finally(function () { clearTimeout(timeout); });
})();
