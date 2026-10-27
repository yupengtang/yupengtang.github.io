(function () {
  'use strict';
  if (window.siteVisitorCounterStarted) return;
  window.siteVisitorCounterStarted = true;

  var script = document.currentScript;
  var panel = document.querySelector('[data-visitor-counter]');
  var status = panel && panel.querySelector('[data-counter-status]');
  var CACHE_KEY = 'visitor-counter:last';
  var KEYS = ['site_uv', 'site_pv'];

  if (!script || !script.dataset.siteUrl || !script.dataset.api) return;
  var site, api;
  try {
    site = new URL(script.dataset.siteUrl);
    api = new URL(script.dataset.api);
  } catch (_) { return; }
  if (api.protocol !== 'https:') return;
  // Previews, forks and local builds neither count nor display.
  if (location.hostname !== site.hostname || location.protocol !== 'https:') return;
  if (!window.fetch || !window.AbortController) return;

  // The counter is the site's own Cloudflare Worker (source in _worker/visitor-counter).
  // It sets no cookie and stores no identifier in the browser.
  var base = api.origin;
  var optedOut = navigator.doNotTrack === '1' || window.doNotTrack === '1' || navigator.globalPrivacyControl === true;

  function valid(data) {
    return !!data && KEYS.every(function (key) { return Number.isSafeInteger(data[key]) && data[key] >= 0; });
  }
  function readCache() {
    try {
      var saved = JSON.parse(localStorage.getItem(CACHE_KEY));
      if (saved && valid(saved.data) && saved.at) return saved;
    } catch (_) { /* Storage may be unavailable or the entry malformed. */ }
    return null;
  }
  function writeCache(data) {
    try {
      localStorage.setItem(CACHE_KEY, JSON.stringify({
        data: { site_uv: data.site_uv, site_pv: data.site_pv },
        at: new Date().toISOString()
      }));
    } catch (_) { /* The counter still works without a saved copy. */ }
  }

  function show(data, state, message) {
    if (!panel) return;
    KEYS.forEach(function (key) {
      var value = panel.querySelector('[data-counter-value="' + key + '"]');
      if (value) value.textContent = data[key].toLocaleString('en-US');
    });
    if (status) status.textContent = message;
    panel.dataset.state = state;
    panel.hidden = false;
  }

  // Paint the last known figures first so the footer never shows placeholders.
  var cached = readCache();
  function showCached() {
    if (!cached || cached.data.site_uv === 0) return false;
    var when = new Date(cached.at);
    var label = isNaN(when) ? '' : when.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    show(cached.data, 'cached', label ? 'Last updated ' + label : 'Showing saved figures');
    return true;
  }
  showCached();

  var controller = new AbortController();
  var timeout = setTimeout(function () { controller.abort(); }, 8000);
  var options = { credentials: 'omit', referrerPolicy: 'no-referrer', cache: 'no-store', signal: controller.signal };
  var path = location.pathname || '/';

  // Do Not Track and Global Privacy Control: read the totals without recording this visit.
  var request = optedOut
    ? fetch(base + '/stats?path=' + encodeURIComponent(path), options)
    : fetch(base + '/hit', Object.assign({ method: 'POST', body: JSON.stringify({ path: path }) }, options));

  request.then(function (response) {
    if (!response.ok) throw new Error('Counter request failed');
    return response.json();
  }).then(function (data) {
    if (!valid(data)) throw new Error('Invalid counter response');
    writeCache(data);
    // Nothing recorded yet: stay hidden rather than show zero.
    if (data.site_uv === 0) { if (panel) panel.hidden = true; return; }
    show(data, 'ready', 'Updated just now');
  }).catch(function () {
    // Service unreachable: keep the saved figures on screen, or stay hidden if there are none.
    if (!showCached() && panel) panel.hidden = true;
  }).finally(function () { clearTimeout(timeout); });
})();
