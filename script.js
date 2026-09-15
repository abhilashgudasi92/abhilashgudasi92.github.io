// Animate the "8,000+" stat once on load (skipped if reduced motion is preferred)
(function animateStat() {
  var el = document.querySelector('[data-count-to]');
  if (!el) return;

  var target = parseInt(el.getAttribute('data-count-to'), 10);
  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReduced) {
    el.textContent = target.toLocaleString();
    return;
  }

  var duration = 1400;
  var start = null;

  function step(timestamp) {
    if (!start) start = timestamp;
    var progress = Math.min((timestamp - start) / duration, 1);
    var eased = 1 - Math.pow(1 - progress, 3);
    var current = Math.floor(eased * target);
    el.textContent = current.toLocaleString();
    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      el.textContent = target.toLocaleString();
    }
  }

  window.requestAnimationFrame(step);
})();

// Close the mobile nav after a link is tapped
(function closeMobileNavOnLinkClick() {
  var toggle = document.getElementById('nav-toggle');
  var links = document.querySelectorAll('.sidenav a');
  if (!toggle || !links.length) return;

  links.forEach(function (link) {
    link.addEventListener('click', function () {
      toggle.checked = false;
    });
  });
})();
