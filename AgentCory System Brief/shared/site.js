// aiuxaleem.com shared behaviour. Durations and easings come from AgentCory motion tokens at runtime.
export const THEME_KEY = 'aiuxaleem-theme';
const root = () => document.documentElement;
export const cssVar = n => getComputedStyle(root()).getPropertyValue(n).trim();
export const cssPx = n => parseFloat(cssVar(n)) || 0;
export const motionOK = () => matchMedia('(prefers-reduced-motion: no-preference)').matches || root().hasAttribute('data-force-motion');
export const dirX = () => root().dir === 'rtl' ? -1 : 1;
export const lang = () => root().lang === 'ar' ? 'ar' : 'en';
export const pageLangs = () => (root().getAttribute('data-langs') || 'en').split(' ');
export const pageKey = () => root().getAttribute('data-page') || '';
export const query = name => { try { return new URLSearchParams(location.search).get(name); } catch (e) { return null; } };
export const copy = () => window.AIUX_COPY ? window.AIUX_COPY(lang(), query('stress') === '1') : null;
const finePointer = () => matchMedia('(pointer: fine)').matches;
const desktop = () => matchMedia('(min-width: 768px)').matches;

export function waitFor(cond, max = 900) {
  // Time-based (not rAF-based): background tabs throttle requestAnimationFrame to ~1 Hz, which would exhaust a frame budget.
  const deadline = performance.now() + Math.max(15000, max * 16);
  return new Promise(res => { const t = () => { if (cond()) return res(true); if (performance.now() > deadline) return res(false); setTimeout(t, 40); }; t(); });
}

/* GSAP (+ Lenis) load after the design-system bundle, in order, so the bundle's own showcase script never sees them. */
const CDN = 'https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/';
export const GSAP = [CDN + 'gsap.min.js', CDN + 'ScrollTrigger.min.js', CDN + 'SplitText.min.js', CDN + 'CustomEase.min.js', 'https://cdn.jsdelivr.net/npm/lenis@1.3.11/dist/lenis.min.js'];
let motionLoad = null;
export function loadMotion() {
  if (motionLoad) return motionLoad;
  const one = u => new Promise(res => { if ([...document.scripts].some(s => s.src === u)) return res(); const s = document.createElement('script'); s.src = u; s.async = false; s.onload = res; s.onerror = res; document.head.appendChild(s); });
  // Scripts are appended together with async=false: they download in parallel and execute in order, after the DS bundle.
  motionLoad = waitFor(() => window.DesignSystem_ebeb85, 600).then(() => Promise.all(GSAP.map(one)));
  return motionLoad;
}

export function motion() {
  const { gsap, ScrollTrigger, SplitText, CustomEase } = window;
  gsap.registerPlugin(...[ScrollTrigger, SplitText, CustomEase].filter(Boolean));
  const ms = n => cssPx(n) / 1000;
  const bez = (id, n) => { const m = cssVar(n).match(/-?\d*\.?\d+/g) || []; return (CustomEase && m.length === 4) ? CustomEase.create(id, 'M0,0 C' + m[0] + ',' + m[1] + ' ' + m[2] + ',' + m[3] + ' 1,1') : 'power2.out'; };
  return {
    fast: ms('--duration-fast'), base: ms('--duration-base'), slow: ms('--duration-slow'), enter: ms('--duration-enter'), cinematic: ms('--duration-cinematic'), epic: ms('--duration-epic'),
    stagger: ms('--stagger'), staggerMd: ms('--delay-2'), reveal: cssPx('--reveal-distance'),
    out: bez('ac-out', '--ease-out'), inOut: bez('ac-in-out', '--ease-in-out'), cine: bez('ac-cine', '--ease-cinematic'), ok: motionOK(),
  };
}

/* Cross-document page transitions: opt in only at top level (never inside the editor's preview frame), by injecting the rule at runtime */
export function pageTransitions() {
  if (window.top !== window || window.__aiuxVT || !('startViewTransition' in document) || !motionOK()) return;
  window.__aiuxVT = true; const st = document.createElement('style'); st.textContent = '@view-transition { navigation: auto; types: nav; }'; document.head.appendChild(st);
}

/* ---------- Root state observers ---------- */
export function observeRoot(attrs, cb) {
  const mo = new MutationObserver(muts => cb([...new Set(muts.map(m => m.attributeName))]));
  mo.observe(root(), { attributes: true, attributeFilter: attrs });
  return () => mo.disconnect();
}

/* ---------- Theme: instant, synchronized, optional circular reveal from the toggle ---------- */
export const currentTheme = () => root().getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
export function setTheme(next, originEl) {
  const d = root();
  const apply = () => {
    d.setAttribute('data-theme-switching', '');
    d.setAttribute('data-theme', next);
    try { localStorage.setItem(THEME_KEY, next); } catch (e) {}
    requestAnimationFrame(() => requestAnimationFrame(() => d.removeAttribute('data-theme-switching')));
  };
  if (!document.startViewTransition || !motionOK()) return apply();
  const vt = document.startViewTransition(apply);
  if (!originEl) return;
  vt.ready.then(() => {
    const r = originEl.getBoundingClientRect(), x = r.left + r.width / 2, y = r.top + r.height / 2;
    const end = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    d.animate({ clipPath: ['circle(0px at ' + x + 'px ' + y + 'px)', 'circle(' + end + 'px at ' + x + 'px ' + y + 'px)'] },
      { duration: cssPx('--duration-enter'), easing: cssVar('--ease-in-out'), pseudoElement: '::view-transition-new(root)' });
  }).catch(() => {});
}

/* ---------- Language: lives in the URL; same section ids across languages ---------- */
export function applyLangAttrs(l) {
  const d = root(); d.lang = l; d.dir = l === 'ar' ? 'rtl' : 'ltr';
  document.dispatchEvent(new CustomEvent('aiuxaleem:lang', { detail: l }));
}
export function activeSectionId() {
  const line = innerHeight * 0.35; let id = null;
  document.querySelectorAll('main [id][data-section]').forEach(s => { if (s.getBoundingClientRect().top <= line) id = s.id; });
  return id;
}
export function setLang(next) {
  const url = new URL(location.href);
  if (pageLangs().includes(next)) {
    if (next === 'en') url.searchParams.delete('lang'); else url.searchParams.set('lang', next);
    url.searchParams.delete('from');
    history.replaceState(null, '', url);
    if (typeof window.__aiuxLang === 'function') return window.__aiuxLang(next);
    return applyLangAttrs(next);
  }
  // This page has no version in that language: go to the closest one and say so.
  const key = pageKey();
  if (key === 'case') { const u = new URL(location.href); u.searchParams.set('lang', next); location.href = u.href; return; }
  const closest = (window.AIUX_I18N && window.AIUX_I18N.closest[key]) || activeSectionId() || '';
  location.href = 'AIUXAleem Home.dc.html?lang=' + next + '&from=' + encodeURIComponent(pageKey()) + (closest ? '#' + closest : '');
}

/* ---------- Scroll position that survives a rebuild (incl. inside a pin) ---------- */
export function snapshot() {
  const ST = window.ScrollTrigger;
  const pinned = ST && ST.getAll().find(s => s.pin && s.isActive && s.vars.id);
  if (pinned) return { pin: pinned.vars.id, p: pinned.progress };
  const id = activeSectionId(), el = id && document.getElementById(id);
  if (!el) return { y: scrollY };
  const r = el.getBoundingClientRect();
  return { id, ratio: -r.top / Math.max(1, r.height) };
}
export function restore(k) {
  if (!k) return; let y = k.y;
  if (k.pin && window.ScrollTrigger) { const s = window.ScrollTrigger.getById(k.pin); if (s) y = s.start + (s.end - s.start) * k.p; }
  else if (k.id) { const el = document.getElementById(k.id); if (el) { const r = el.getBoundingClientRect(); y = scrollY + r.top + k.ratio * r.height; } }
  if (y != null) scrollTo(y, false);
}

/* One scroll entry point: Lenis when it drives the page, native otherwise. */
export function scrollTo(top, smooth = true) {
  top = Math.max(0, top);
  const L = window.__lenis;
  if (L) return L.scrollTo(top, smooth && motionOK() ? { duration: 1.1 } : { immediate: true });
  window.scrollTo({ top, behavior: smooth && motionOK() ? 'smooth' : 'instant' });
}
export function scrollToId(sel) {
  const el = document.querySelector(sel); if (!el) return false;
  scrollTo(el.getBoundingClientRect().top + scrollY - cssPx('--header-height'));
  if (sel === '#main') el.focus({ preventScroll: true });
  return true;
}

/* ---------- Smooth (inertial) scrolling: desktop fine pointers only, synced to GSAP's ticker ---------- */
export function smoothScroll() {
  const { Lenis, gsap, ScrollTrigger } = window;
  if (window.__lenis || !Lenis || !gsap || !ScrollTrigger || !motionOK() || !finePointer() || !desktop() || root().hasAttribute('data-qa')) return null;
  const lenis = new Lenis({ lerp: 0.1, smoothWheel: true, syncTouch: false, anchors: false, autoRaf: false });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add(t => lenis.raf(t * 1000)); gsap.ticker.lagSmoothing(0);
  // Menus and dialogs lock the page with overflow:hidden on <html>; Lenis must stop with it.
  const sync = () => { getComputedStyle(root()).overflow === 'hidden' ? lenis.stop() : lenis.start(); };
  new MutationObserver(sync).observe(root(), { attributes: true, attributeFilter: ['style'] });
  window.__lenis = lenis;
  return lenis;
}

/* Header stays pinned; kept as a no-op so callers need no change. */
export function headerScroll() {}

/* ---------- Calm reveals. Already-revealed elements are never re-hidden on a rebuild. ---------- */
const revealed = new WeakSet();
export function reveals(T, scope = document) {
  const gsap = window.gsap;
  const once = els => els.filter(e => !revealed.has(e));
  once([...scope.querySelectorAll('[data-reveal]')]).forEach(el => gsap.from(el, {
    y: T.ok ? T.reveal : 0, opacity: 0, duration: T.ok ? T.enter : T.slow, ease: T.out, clearProps: 'transform,opacity',
    scrollTrigger: { trigger: el, start: 'top 88%', once: true }, onStart: () => revealed.add(el) }));
  scope.querySelectorAll('[data-reveal-group]').forEach(group => {
    const kids = once([...group.children]); if (!kids.length) return;
    gsap.from(kids, { y: T.ok ? T.reveal : 0, opacity: 0, duration: T.ok ? T.enter : T.slow, ease: T.out, stagger: T.stagger, clearProps: 'transform,opacity',
      scrollTrigger: { trigger: group, start: 'top 85%', once: true }, onStart: () => kids.forEach(k => revealed.add(k)) });
  });
  // Clip reveal: the child rises out of an overflow-clipped parent (footer wordmark, big labels)
  if (T.ok) once([...scope.querySelectorAll('[data-reveal-clip]')]).forEach(el => { const kid = el.firstElementChild; if (!kid) return; gsap.from(kid, { yPercent: 100, duration: T.cinematic, ease: T.cine, clearProps: 'transform',
    scrollTrigger: { trigger: el, start: 'top 96%', once: true }, onStart: () => revealed.add(el) }); });
}

/* ---------- Headline line-masks: every main h1/h2 rises line by line out of a clip (SplitText lines only: safe for Arabic) ---------- */
const splitDone = new WeakSet();
export function splitHeadings(T, scope = document) {
  const { gsap, SplitText } = window; if (!T.ok || !SplitText) return [];
  const sel = 'main :is(h1, h2):not([data-no-split]):not([data-hero-title]):not([data-manifesto-text]), [data-split]';
  const els = [...scope.querySelectorAll(sel)].filter(h => !splitDone.has(h) && h.textContent.trim() && !h.closest('[data-qa-cell], dialog, details'));
  return els.map(h => { splitDone.add(h); let played = false; return SplitText.create(h, { type: 'lines', mask: 'lines', autoSplit: true, onSplit: self => {
    gsap.set(self.masks || [], { paddingBlockEnd: '0.16em', marginBlockEnd: '-0.16em' });
    if (played) return; played = true;
    return gsap.from(self.lines, { yPercent: 110, duration: T.cinematic, ease: T.cine, stagger: T.stagger, scrollTrigger: { trigger: h, start: 'top 90%', once: true } });
  } }); });
}

/* ---------- Media: covers unveil from the bottom edge while the picture settles from a slight zoom ---------- */
const unveiled = new WeakSet();
export function imageReveals(T, scope = document) {
  const gsap = window.gsap; if (!T.ok) return;
  [...scope.querySelectorAll('[data-img-reveal]')].filter(el => !unveiled.has(el)).forEach(el => {
    const r = getComputedStyle(el).borderRadius || '0px', media = el.querySelector('img, video, image-slot');
    const tl = gsap.timeline({ scrollTrigger: { trigger: el, start: 'top 88%', once: true }, onStart: () => unveiled.add(el) });
    tl.fromTo(el, { clipPath: 'inset(0% 0% 100% 0% round ' + r + ')' }, { clipPath: 'inset(0% 0% 0% 0% round ' + r + ')', duration: T.cinematic, ease: T.cine, clearProps: 'clipPath' }, 0);
    if (media) tl.fromTo(media, { scale: 1.16 }, { scale: 1, duration: T.epic, ease: T.cine, clearProps: 'transform' }, 0);
  });
}

/* ---------- Parallax: data-parallax="0.15" drifts an element by that fraction of its parent's scroll travel ---------- */
export function parallax(T, scope = document) {
  const gsap = window.gsap; if (!T.ok || !desktop()) return;
  scope.querySelectorAll('[data-parallax]').forEach(el => {
    const k = parseFloat(el.getAttribute('data-parallax')) || 0.15;
    gsap.fromTo(el, { yPercent: -k * 50 }, { yPercent: k * 50, ease: 'none', scrollTrigger: { trigger: el.parentElement || el, start: 'top bottom', end: 'bottom top', scrub: true } });
  });
}

/* ---------- Magnetic buttons: the wrapper leans toward a fine pointer, springs back on leave ---------- */
export function magnetic(T, scope = document) {
  const gsap = window.gsap; if (!T.ok || !finePointer() || !desktop()) return () => {};
  const bound = [...scope.querySelectorAll('[data-magnetic]')].map(el => {
    const xTo = gsap.quickTo(el, 'x', { duration: T.slow, ease: T.out }), yTo = gsap.quickTo(el, 'y', { duration: T.slow, ease: T.out });
    const move = e => { const r = el.getBoundingClientRect(); xTo((e.clientX - r.left - r.width / 2) * 0.3); yTo((e.clientY - r.top - r.height / 2) * 0.3); };
    const leave = () => { xTo(0); yTo(0); };
    el.addEventListener('mousemove', move); el.addEventListener('mouseleave', leave);
    return () => { el.removeEventListener('mousemove', move); el.removeEventListener('mouseleave', leave); gsap.set(el, { clearProps: 'transform' }); };
  });
  return () => bound.forEach(off => off());
}

let introDone = false, heroLinesDone = false;
export function heroIntro(T) {
  root().removeAttribute('data-motion');
  // The boot script reveals the hero after 1s if motion arrives late; never re-hide what is already visible.
  if (introDone || !T.ok || root().hasAttribute('data-intro-shown')) { introDone = true; return; }
  introDone = true;
  const { gsap, SplitText } = window;
  const h1 = document.querySelector('[data-hero-title]'), els = [...document.querySelectorAll('[data-hero-el]')];
  if (h1 && SplitText) {
    SplitText.create(h1, { type: 'lines', mask: 'lines', autoSplit: true, onSplit: self => {
      gsap.set(self.masks || [], { paddingBlockEnd: '0.16em', marginBlockEnd: '-0.16em' });
      if (heroLinesDone) return; heroLinesDone = true;
      return gsap.from(self.lines, { yPercent: 115, duration: T.epic, ease: T.cine, stagger: T.staggerMd });
    } });
  } else if (h1) els.unshift(h1);
  if (els.length) gsap.from(els, { y: T.reveal, opacity: 0, duration: T.enter, ease: T.out, stagger: T.stagger, delay: h1 ? T.slow : 0, clearProps: 'transform,opacity' });
}
export function readingProgress(T, fill, article) {
  if (!fill || !article) return;
  window.gsap.fromTo(fill, { scaleX: 0 }, { scaleX: 1, ease: 'none', scrollTrigger: { trigger: article, start: 'top 20%', end: 'bottom bottom', scrub: true } });
}
const counted = new WeakSet();
export function countUp(T, trigger, targets) {
  const { gsap, ScrollTrigger } = window; if (!trigger) return;
  const write = p => targets.forEach(t => { if (t.el) t.el.textContent = t.fmt(t.to * p); });
  if (!T.ok || counted.has(trigger)) { write(1); return; }
  write(0);
  const proxy = { p: 0 };
  ScrollTrigger.create({ trigger, start: 'top 75%', once: true, onEnter: () => { counted.add(trigger); gsap.to(proxy, { p: 1, duration: T.epic, ease: T.cine, onUpdate: () => write(proxy.p) }); } });
}

/* ---------- Sticky card stacks: each card eases back as the next one slides over it ---------- */
export function stackCards(T, scope = document) {
  const gsap = window.gsap; if (!T.ok || !matchMedia('(min-width: 1024px)').matches) return;
  scope.querySelectorAll('[data-stack-cards]').forEach(list => {
    const cards = [...list.children];
    cards.forEach((card, i) => { card.style.setProperty('--i', i); const next = cards[i + 1]; if (!next) return;
      gsap.fromTo(card, { scale: 1 }, { scale: 0.94, transformOrigin: 'center top', ease: 'none', scrollTrigger: { trigger: next, start: 'top bottom', end: 'top ' + (cssPx('--header-height') + 48 + i * 12), scrub: true } });
    });
  });
}

/* ---------- Shared signature layer for any page: headline masks, cover unveils, parallax, magnetic CTAs ---------- */
export function signature(T, scope = document) {
  const splits = splitHeadings(T, scope); imageReveals(T, scope); parallax(T, scope); stackCards(T, scope); const unmag = magnetic(T, scope);
  return () => { splits.forEach(s => { try { s.revert(); } catch (e) {} }); unmag(); };
}

/* ---------- Inner-page boot: matchMedia + context, rebuild on direction change ---------- */
export async function pageInit(extra) {
  await loadMotion();
  const ready = await waitFor(() => window.gsap && window.ScrollTrigger && document.querySelector('[data-site-footer]'));
  root().removeAttribute('data-motion');
  if (!ready) return null;
  if (document.fonts) await document.fonts.ready;
  const base = motion();
  smoothScroll(); pageTransitions();
  heroIntro(base);
  const mm = window.gsap.matchMedia();
  const build = () => mm.add({ motion: '(prefers-reduced-motion: no-preference)', desktop: '(min-width: 768px)' }, ctx => {
    const T = { ...base, ok: ctx.conditions.motion || root().hasAttribute('data-force-motion'), desktop: ctx.conditions.desktop, dir: dirX() };
    const cleanup = signature(T);
    reveals(T);
    if (extra) extra(T);
    return cleanup;
  });
  build();
  observeRoot(['dir'], () => { const k = snapshot(); mm.revert(); build(); window.ScrollTrigger.refresh(); restore(k); });
  watchLayout();
  if (location.hash) requestAnimationFrame(() => scrollToId(location.hash));
  return base;
}

/* ?audit=1 on any page: run the WCAG / visual-integrity audit (a11y-audit.js) and print it to the console */
try { if (new URLSearchParams(location.search).get('audit') === '1' && !window.__aiuxAuditQueued) { window.__aiuxAuditQueued = true; const s = document.createElement('script'); s.src = new URL('./a11y-audit.js', import.meta.url).href; s.onload = () => setTimeout(() => { const r = window.AIUXAudit(document, window); console.log('[audit] ' + r.filter(i => i.level === 'fail').length + ' failures, ' + r.filter(i => i.level === 'warn').length + ' warnings'); console.table(r); }, 4000); document.head.appendChild(s); } } catch (e) {}

/* Re-measure scroll triggers when the page really changes size (fonts, images, viewport), never in response to a refresh's own pin spacers.
   A plain ResizeObserver -> refresh() loops forever: refresh resizes the body, which fires the observer, which refreshes again. */
export function watchLayout() {
  const ST = window.ScrollTrigger; if (!ST || window.__aiuxLayoutWatched) return; window.__aiuxLayoutWatched = true;
  let busy = false, lw = document.body.clientWidth, lh = document.body.scrollHeight, t = 0;
  ST.addEventListener('refreshInit', () => { busy = true; });
  ST.addEventListener('refresh', () => requestAnimationFrame(() => { busy = false; lw = document.body.clientWidth; lh = document.body.scrollHeight; }));
  new ResizeObserver(() => {
    if (busy) return; const w = document.body.clientWidth, h = document.body.scrollHeight;
    if (w === lw && Math.abs(h - lh) < 64) return;
    clearTimeout(t); t = setTimeout(() => { lw = w; lh = h; ST.refresh(); }, 250);
  }).observe(document.body);
}
