/* AgentCory reveal engine: marks data-reveal elements visible as they enter the viewport.
   Children of a [data-stagger] parent cascade by --stagger (70ms) each; data-delay adds ms.
   Counters: data-count="94" data-prefix="<" data-suffix="%" animate the number when revealed.
   Safe by default: elements are only hidden once this script has run (html.cory-js). */
(() => {
  const html = document.documentElement;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const ease = (t) => 1 - Math.pow(1 - t, 3);
  const count = (el) => {
    const end = parseFloat(el.dataset.count); if (isNaN(end)) return;
    const pre = el.dataset.prefix || '', suf = el.dataset.suffix || '', dec = parseInt(el.dataset.decimals || '0', 10);
    const fmt = (v) => pre + (dec ? v.toFixed(dec) : Math.round(v).toLocaleString()) + suf;
    if (reduce) { el.textContent = fmt(end); return; }
    const dur = parseInt(el.dataset.duration || '1400', 10); const t0 = performance.now();
    const tick = (t) => { const p = Math.min(1, (t - t0) / dur); el.textContent = fmt(end * ease(p)); if (p < 1) requestAnimationFrame(tick); };
    requestAnimationFrame(tick);
  };
  const show = (el) => {
    if (el.classList.contains('is-visible')) return;
    el.classList.add('is-visible');
    el.querySelectorAll('[data-count]').forEach(count); if (el.dataset.count) count(el);
    el.addEventListener('transitionend', () => { el.style.willChange = 'auto'; }, { once: true });
  };
  const prime = (root) => {
    root.querySelectorAll('[data-stagger]').forEach((p) => {
      const step = parseInt(p.dataset.stagger || '70', 10);
      [...p.children].forEach((c, i) => { if (!c.hasAttribute('data-reveal')) c.setAttribute('data-reveal', p.dataset.revealKind || 'up'); c.style.setProperty('--reveal-delay', (i * step + parseInt(c.dataset.delay || '0', 10)) + 'ms'); });
    });
    root.querySelectorAll('[data-reveal][data-delay]').forEach((c) => { if (!c.style.getPropertyValue('--reveal-delay')) c.style.setProperty('--reveal-delay', c.dataset.delay + 'ms'); });
  };
  const io = 'IntersectionObserver' in window ? new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { show(e.target); io.unobserve(e.target); } });
  }, { rootMargin: '0px 0px -12% 0px', threshold: 0.08 }) : null;
  const observe = (root) => { prime(root); root.querySelectorAll('[data-reveal]').forEach((el) => { if (el.classList.contains('is-visible')) return; if (!io || reduce) { show(el); return; } const r = el.getBoundingClientRect(); if (r.top < innerHeight * 0.92 && r.bottom > 0) show(el); else io.observe(el); }); };
  const start = () => { html.classList.add('cory-js'); observe(document); };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
  // Content that streams or mounts later (DC templates, React roots)
  new MutationObserver((muts) => { let dirty = false; muts.forEach((m) => m.addedNodes.forEach((n) => { if (n.nodeType === 1 && (n.hasAttribute('data-reveal') || n.hasAttribute('data-stagger') || n.querySelector('[data-reveal],[data-stagger]'))) dirty = true; })); if (dirty) observe(document); }).observe(document.documentElement, { childList: true, subtree: true });
  // Never leave content hidden if the observer never fires (background tabs, capture tools)
  setTimeout(() => document.querySelectorAll('[data-reveal]:not(.is-visible)').forEach((el) => { const r = el.getBoundingClientRect(); if (r.top < innerHeight) show(el); }), 2500);
  window.coryReveal = { observe, show };
})();
