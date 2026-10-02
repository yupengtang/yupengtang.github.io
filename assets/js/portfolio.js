(function () {
  'use strict';

  var filters = document.querySelector('.project-filters');
  var cards = Array.prototype.slice.call(document.querySelectorAll('#project-grid .portfolio-card'));
  var count = document.querySelector('.project-count');
  if (filters && cards.length && count) {
    filters.hidden = false;
    count.hidden = false;
    function filterProjects(category) {
      var visible = 0;
      cards.forEach(function (card) {
        var show = category === 'all' || card.dataset.categories.split(' ').indexOf(category) !== -1;
        card.hidden = !show;
        if (show) { visible++; card.classList.add('revealed'); }
      });
      filters.querySelectorAll('button').forEach(function (button) {
        button.setAttribute('aria-pressed', String(button.dataset.filter === category));
      });
      count.textContent = visible + ' of ' + cards.length + ' projects';
    }
    filters.addEventListener('click', function (event) {
      var button = event.target.closest('button[data-filter]');
      if (button && filters.contains(button)) { filterProjects(button.dataset.filter); }
    });
    filterProjects('all');
  }

  var elements = document.querySelectorAll('.scroll-reveal');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) {
    elements.forEach(function (element) { element.classList.add('revealed'); });
    return;
  }
  // Hide elements only after enhancement is ready; content remains visible without JS.
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.04 });
  elements.forEach(function (element) {
    element.classList.add('reveal-ready');
    observer.observe(element);
  });
})();
