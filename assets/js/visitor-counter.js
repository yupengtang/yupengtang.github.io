(function () {
  'use strict';
  if (window.siteVisitorCounterStarted) return;
  window.siteVisitorCounterStarted = true;

  var script = document.currentScript;
  var panel = document.querySelector('[data-visitor-counter]');
  var status = panel && panel.querySelector('[data-counter-status]');
  function setStatus(message, state) {
    if (status) status.textContent = message;
    if (panel) panel.dataset.state = state;
  }

  if (!script || !script.dataset.siteUrl || !script.dataset.api) return;
  var site;
  try { site = new URL(script.dataset.siteUrl); } catch (_) { return; }
  if (location.hostname !== site.hostname || location.protocol !== 'https:') {
    setStatus('Available on the live site', 'inactive');
    return;
  }
  if (navigator.doNotTrack === '1' || window.doNotTrack === '1' || navigator.globalPrivacyControl === true) {
    setStatus('Privacy preference respected', 'inactive');
    return;
  }
  if (!window.fetch || !window.AbortController) {
    setStatus('Statistics unavailable', 'unavailable');
    return;
  }

  var headers = { 'x-bsz-referer': location.origin + location.pathname };
  // Storage may be unavailable in restricted browsing modes.
  try {
    var identity = localStorage.getItem('bsz-id');
    if (identity) headers.Authorization = 'Bearer ' + identity;
  } catch (_) { /* The provider can still estimate visitors without persistence. */ }

  var controller = new AbortController();
  var timeout = setTimeout(function () { controller.abort(); }, 10000);
  setStatus('Loading statistics', 'loading');

  // One request per page load. No cookies, query strings, or hash fragments are sent.
  // API contract: https://github.com/soxft/busuanzi/wiki/api
  fetch(script.dataset.api, {
    method: 'POST',
    headers: headers,
    credentials: 'omit',
    referrerPolicy: 'no-referrer',
    cache: 'no-store',
    signal: controller.signal
  }).then(function (response) {
    if (!response.ok) throw new Error('Counter request failed');
    var identity = response.headers.get('Set-Bsz-Identity');
    if (identity) {
      try { localStorage.setItem('bsz-id', identity); } catch (_) { /* Optional storage. */ }
    }
    return response.json();
  }).then(function (result) {
    var keys = ['site_uv', 'site_pv', 'page_pv'];
    if (result.success !== true || !result.data || !keys.every(function (key) {
      return Number.isSafeInteger(result.data[key]) && result.data[key] >= 0;
    })) throw new Error('Invalid counter response');
    if (panel) {
      keys.forEach(function (key) {
        var value = panel.querySelector('[data-counter-value="' + key + '"]');
        if (value) value.textContent = result.data[key].toLocaleString('en-US');
      });
    }
    setStatus('Updated just now', 'ready');
  }).catch(function () {
    setStatus('Statistics temporarily unavailable', 'unavailable');
  }).finally(function () { clearTimeout(timeout); });
})();
