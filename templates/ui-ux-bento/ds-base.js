// Loads this design system into the template. In a consuming project, point
// base at the bound DS folder relative to this file (e.g. '_ds/<folder>' at
// the project root, '../_ds/<folder>' one level down) — one line to edit.
(() => {
  if (!document.documentElement.lang) document.documentElement.lang = 'en'; // WCAG 3.1.1: DC pages declare a language
  const base = '../..';
  for (const p of ['styles.css']) {
    const l = document.createElement('link');
    l.rel = 'stylesheet'; l.href = base + '/' + p;
    document.head.appendChild(l);
  }
  const r = document.createElement('script');
  r.src = base + '/tokens/reveal.js';
  document.head.appendChild(r);
  const s = document.createElement('script');
  s.src = base + '/_ds_bundle.js';
  s.onerror = () => console.error('ds-base.js: failed to load ' + s.src + ' — if this is a consuming project, point the base line in ds-base.js at the bound _ds/<folder> tree relative to this page (e.g. _ds/<folder> at the project root, ../_ds/<folder> one level down); in a fresh design system this can just mean the bundle is not compiled yet');
  document.head.appendChild(s);
  // Fit fixed-size artboards (social posts, slides, print pages) to the viewport: sets --fit (0..1) on <html>.
  // A template wraps its canvas in a box sized with calc(W * var(--fit)) and scales the canvas inside, so narrow screens see the whole artboard.
  const fit = () => {
    const c = document.querySelector('[data-fit-canvas]'); if (!c || !c.offsetWidth) return;
    const p = c.parentElement && c.parentElement.parentElement; if (!p) return;
    const cs = getComputedStyle(p); const avail = p.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight) - (+c.getAttribute('data-fit-pad') || 0);
    document.documentElement.style.setProperty('--fit', Math.max(0.1, Math.min(1, avail / c.offsetWidth)).toFixed(4));
  };
  let raf = 0, tm = 0; const queue = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(fit); clearTimeout(tm); tm = setTimeout(fit, 120); }; // timer fallback: rAF is paused in background tabs
  new MutationObserver(queue).observe(document.documentElement, { childList: true, subtree: true });
  window.addEventListener('resize', queue); window.addEventListener('load', fit); document.addEventListener('DOMContentLoaded', fit); queue();
})();
