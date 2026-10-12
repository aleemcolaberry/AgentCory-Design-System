// Heuristic audit harness: loads each page in an iframe and probes it for contrast, clipping, hit targets, names, type size.
(() => {
  const PAGES = window.AUDIT_PAGES || [];
  const out = document.getElementById('out');
  const results = {}; window.__audit = { results, done: false };
  const parseRGBA = (s) => { const m = s && s.match(/rgba?\(([^)]+)\)/); if (!m) return null; const p = m[1].split(',').map(parseFloat); return { r: p[0], g: p[1], b: p[2], a: p.length > 3 ? p[3] : 1 }; };
  const lum = ({ r, g, b }) => { const f = (c) => { c /= 255; return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4); }; return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b); };
  const ratio = (a, b) => { const l1 = lum(a), l2 = lum(b); return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05); };
  const over = (fg, bg) => ({ r: fg.r * fg.a + bg.r * (1 - fg.a), g: fg.g * fg.a + bg.g * (1 - fg.a), b: fg.b * fg.a + bg.b * (1 - fg.a), a: 1 });
  const hex = (c) => '#' + [c.r, c.g, c.b].map((v) => Math.round(v).toString(16).padStart(2, '0')).join('');
  const snippet = (el) => (el.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 40);
  const visible = (el, cs, rect) => rect.width > 0 && rect.height > 0 && cs.visibility !== 'hidden' && cs.display !== 'none' && parseFloat(cs.opacity) > 0.05;
  function probe(doc, win, meta) {
    const r = { contrast: [], clip: [], canvas: [], target: [], name: [], tiny: [], type: [], misc: [], gradientText: 0, skippedBg: 0, texts: 0 };
    const inlineOnly = (el) => Array.from(el.querySelectorAll('*')).every((c) => { const k = win.getComputedStyle(c); return k.display.indexOf('inline') === 0 && k.position === 'static' && k.float === 'none'; });
    const ownText = (el) => Array.from(el.childNodes).filter((n) => n.nodeType === 3).map((n) => n.textContent).join(' ');
    const html = doc.documentElement, body = doc.body;
    if (!html.getAttribute('lang')) r.misc.push('html has no lang');
    if (html.scrollWidth > win.innerWidth + 1) r.misc.push(`page overflows horizontally: ${html.scrollWidth} > ${win.innerWidth}`);
    const bodyBg = parseRGBA(win.getComputedStyle(body).backgroundColor);
    const canvases = Array.from(doc.querySelectorAll('[data-screen-label]')).map((c) => ({ el: c, rect: c.getBoundingClientRect(), label: c.getAttribute('data-screen-label') }));
    const all = Array.from(body.querySelectorAll('*'));
    const hasText = (el) => Array.from(el.childNodes).some((n) => n.nodeType === 3 && n.textContent.trim().length > 0);
    const effBg = (el) => {
      let node = el, acc = null;
      while (node && node !== doc) {
        const cs = win.getComputedStyle(node);
        const bi = cs.backgroundImage;
        const bc = parseRGBA(cs.backgroundColor);
        if (bi && bi !== 'none') { if (bc && bc.a >= 0.99 && !acc) return { skip: 'image' }; return { skip: 'gradient' }; }
        if (bc && bc.a > 0) { acc = acc ? over(acc, bc) : bc; if (acc.a >= 0.99 || bc.a >= 0.99) { return { bg: acc.a >= 0.99 ? acc : over(acc, { r: 255, g: 255, b: 255, a: 1 }) }; } }
        if (parseFloat(cs.opacity) < 1 && node !== el) return { skip: 'opacity' };
        node = node.parentElement;
      }
      const base = bodyBg && bodyBg.a > 0 ? over(bodyBg, { r: 255, g: 255, b: 255, a: 1 }) : { r: 255, g: 255, b: 255, a: 1 };
      return { bg: acc ? over(acc, base) : base };
    };
    const clipAncestor = (el) => { let n = el.parentElement; while (n && n !== body) { const cs = win.getComputedStyle(n); if (/(hidden|clip|auto|scroll)/.test(cs.overflow + cs.overflowX + cs.overflowY)) return n; n = n.parentElement; } return null; };
    for (const el of all) {
      const tag = el.tagName.toLowerCase();
      if (['script', 'style', 'noscript', 'template', 'svg', 'path', 'title', 'link', 'meta'].includes(tag)) continue;
      const cs = win.getComputedStyle(el);
      const rect = el.getBoundingClientRect();
      if (!visible(el, cs, rect)) continue;
      // interactive targets
      const interactive = (tag === 'a' && el.hasAttribute('href')) || tag === 'button' || tag === 'input' || tag === 'select' || tag === 'textarea' || el.getAttribute('role') === 'button' || el.getAttribute('role') === 'tab' || el.getAttribute('role') === 'switch';
      if (interactive) {
        if (el.type !== 'hidden' && (rect.width < 24 || rect.height < 24) && !(tag === 'a' && cs.display.indexOf('inline') === 0 && cs.display === 'inline')) {
          r.target.push(`${tag}${el.id ? '#' + el.id : ''} "${snippet(el) || el.getAttribute('aria-label') || ''}" ${Math.round(rect.width)}x${Math.round(rect.height)}`);
        }
        const name = (el.getAttribute('aria-label') || el.getAttribute('aria-labelledby') || el.getAttribute('title') || snippet(el) || (el.querySelector('img[alt]') && el.querySelector('img[alt]').alt) || '').trim();
        if (!name && (tag === 'a' || tag === 'button' || el.getAttribute('role') === 'button')) r.name.push(`${tag} without accessible name (${Math.round(rect.width)}x${Math.round(rect.height)})`);
        if (tag === 'input' || tag === 'select' || tag === 'textarea') {
          const t = el.getAttribute('type');
          if (!['hidden', 'submit', 'button', 'reset', 'image'].includes(t)) {
            const lab = (el.id && doc.querySelector(`label[for="${CSS.escape(el.id)}"]`)) || el.closest('label') || el.getAttribute('aria-label') || el.getAttribute('aria-labelledby') || el.getAttribute('title');
            if (!lab) r.name.push(`${tag}${el.id ? '#' + el.id : ''} without label (placeholder: "${el.getAttribute('placeholder') || ''}")`);
          }
        }
      }
      if (tag === 'img' && !el.hasAttribute('alt')) r.name.push(`img without alt: ${(el.getAttribute('src') || '').slice(-40)}`);
      if (tag === 'iframe' && !el.getAttribute('title')) r.name.push('iframe without title');
      if (!hasText(el)) continue;
      r.texts++;
      const fs = parseFloat(cs.fontSize);
      { const words = (el.textContent || '').trim().split(/\s+/).length; const lh = parseFloat(cs.lineHeight) || fs * 1.3; if (words <= 3 && el.children.length === 0 && (rect.height - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom)) > lh * 1.7 && cs.writingMode === 'horizontal-tb' && fs < 30) r.clip.push(`short label wraps: "${snippet(el)}" ${Math.round(rect.width)}x${Math.round(rect.height)} (${cs.position})`); }
      if (fs < 11) r.tiny.push(`${fs}px "${snippet(el)}"`);
      // typography rules: sentences wrap, nothing is truncated, nothing spills out of its own box, no em dashes, Arabic is never tracked, readable measure and leading
      {
        const words = (el.textContent || '').trim().split(/\s+/).filter((t) => /[\p{L}\p{N}]/u.test(t)).length;
        const own = ownText(el);
        const numeric = /^[\s\d.,%$+<>:\-\/x×·]+$/.test(own.trim());
        if (/\u2014/.test(own)) r.type.push(`em dash: "${snippet(el)}"`);
        if ((cs.whiteSpace === 'nowrap' || cs.whiteSpace === 'pre') && words > 4 && !numeric && !el.closest('.cory-visually-hidden, [aria-hidden="true"]')) r.type.push(`nowrap on a sentence (${words} words): "${snippet(el)}"`);
        if (cs.textOverflow === 'ellipsis' && !/^(input|select)$/.test(tag)) r.type.push(`text-overflow: ellipsis: "${snippet(el)}"`);
        if (cs.webkitLineClamp && cs.webkitLineClamp !== 'none') r.type.push(`line-clamp ${cs.webkitLineClamp}: "${snippet(el)}"`);
        if (cs.display !== 'inline' && cs.display !== 'contents' && el.clientWidth > 0 && inlineOnly(el)) {
          if (cs.overflowX === 'visible' && el.scrollWidth > el.clientWidth + 1) r.type.push(`text spills ${el.scrollWidth - el.clientWidth}px past its box: "${snippet(el)}"`);
          if (cs.overflowY === 'visible' && el.scrollHeight > el.clientHeight + Math.max(2, fs * 0.3)) r.type.push(`text spills ${el.scrollHeight - el.clientHeight}px below its box: "${snippet(el)}"`);
        }
        if (el.closest('[lang="ar"], [lang^="ar-"]') && cs.letterSpacing !== 'normal' && Math.abs(parseFloat(cs.letterSpacing)) > 0.01) r.type.push(`letter-spacing ${cs.letterSpacing} on Arabic: "${snippet(el)}"`);
        const lh = parseFloat(cs.lineHeight);
        if (lh && fs < 24 && words > 6 && lh / fs < 1.15 && !/^h[1-6]$/.test(tag) && !el.closest('h1,h2,h3,h4,h5,h6,[aria-hidden="true"]') && (parseInt(cs.fontWeight, 10) || 400) < 700) r.type.push(`leading ${(lh / fs).toFixed(2)} on body text: "${snippet(el)}"`);
        if (/^(p|li|dd|blockquote)$/.test(tag) && words > 14 && rect.width > fs * 46) r.type.push(`measure ~${Math.round(rect.width / (fs * 0.5))}ch (keep under 80): "${snippet(el)}"`);
      }
      // clipping
      const ca = clipAncestor(el);
      if (ca) {
        const cr = ca.getBoundingClientRect();
        if (rect.right > cr.right + 1.5 || rect.bottom > cr.bottom + 1.5 || rect.left < cr.left - 1.5) r.clip.push(`"${snippet(el)}" exceeds ${ca.tagName.toLowerCase()}${ca.className && typeof ca.className === 'string' ? '.' + ca.className.split(' ')[0] : ''} by ${Math.round(Math.max(rect.right - cr.right, rect.bottom - cr.bottom, cr.left - rect.left))}px`);
      }
      if (el.scrollWidth > el.clientWidth + 1 && el.clientWidth > 0 && /(hidden|clip)/.test(cs.overflowX)) r.clip.push(`"${snippet(el)}" self-clips ${el.scrollWidth - el.clientWidth}px`);
      if (cs.whiteSpace === 'nowrap' && el.scrollWidth > el.clientWidth + 1 && el.clientWidth > 0) r.clip.push(`nowrap "${snippet(el)}" wider than box by ${el.scrollWidth - el.clientWidth}px`);
      for (const c of canvases) { if (c.el.contains(el) && (rect.right > c.rect.right + 1 || rect.bottom > c.rect.bottom + 1 || rect.left < c.rect.left - 1 || rect.top < c.rect.top - 1)) { r.canvas.push(`[${c.label}] "${snippet(el)}" leaves the canvas by ${Math.round(Math.max(rect.right - c.rect.right, rect.bottom - c.rect.bottom, c.rect.left - rect.left, c.rect.top - rect.top))}px`); break; } }
      // contrast
      if (cs.webkitTextFillColor && parseRGBA(cs.webkitTextFillColor) && parseRGBA(cs.webkitTextFillColor).a === 0) { r.gradientText++; continue; }
      const fg0 = parseRGBA(cs.color); if (!fg0 || fg0.a === 0) { r.gradientText++; continue; }
      const bgRes = effBg(el);
      if (bgRes.skip) { r.skippedBg++; continue; }
      const fg = fg0.a < 1 ? over(fg0, bgRes.bg) : fg0;
      const weight = parseInt(cs.fontWeight, 10) || 400;
      const large = fs >= 24 || (fs >= 18.66 && weight >= 700);
      const need = large ? 3 : 4.5;
      const rt = ratio(fg, bgRes.bg);
      if (rt < need - 0.005) r.contrast.push(`${rt.toFixed(2)}:1 (need ${need}) ${hex(fg)} on ${hex(bgRes.bg)} ${Math.round(fs)}px/${weight} "${snippet(el)}"`);
    }
    // heading order
    // responsive: anything poking outside the viewport horizontally (ignoring decorative, hidden or scroll-contained nodes)
    const vw = win.innerWidth;
    const scroller = (el) => { let n = el.parentElement; while (n && n !== body) { const cs = win.getComputedStyle(n); if (/(auto|scroll|hidden|clip)/.test(cs.overflowX)) return true; n = n.parentElement; } return false; };
    for (const el of all) {
      const cs = win.getComputedStyle(el); const rect = el.getBoundingClientRect();
      if (!visible(el, cs, rect) || cs.pointerEvents === 'none' || el.closest('[aria-hidden="true"]') || cs.position === 'fixed') continue;
      if ((rect.right > vw + 2 || rect.left < -2) && !scroller(el)) r.offscreen = (r.offscreen || []).concat(`${el.tagName.toLowerCase()}${el.className && typeof el.className === 'string' ? '.' + el.className.split(' ')[0] : ''} "${snippet(el)}" ${Math.round(rect.left)}..${Math.round(rect.right)} (vw ${vw})`);
    }
    // responsive: overlapping text leaves (per line box, so wrapped inline runs do not count)
    const leaves = all.filter((el) => hasText(el) && !el.closest('[aria-hidden="true"]')).map((el) => ({ el, r: el.getBoundingClientRect(), cs: win.getComputedStyle(el), rects: Array.from(el.getClientRects()) })).filter((o) => visible(o.el, o.cs, o.r) && o.cs.position !== 'fixed');
    r.overlap = [];
    for (let a = 0; a < leaves.length; a++) for (let b = a + 1; b < leaves.length; b++) {
      const A = leaves[a], B = leaves[b]; if (A.el.contains(B.el) || B.el.contains(A.el)) continue;
      let hit = null;
      for (const ra of A.rects) { for (const rb of B.rects) { const ix = Math.min(ra.right, rb.right) - Math.max(ra.left, rb.left), iy = Math.min(ra.bottom, rb.bottom) - Math.max(ra.top, rb.top); if (ix > 3 && iy > 3) { const small = Math.min(ra.width * ra.height, rb.width * rb.height); if (ix * iy > 0.2 * small) { hit = `${Math.round(ix)}x${Math.round(iy)}`; break; } } } if (hit) break; }
      if (hit && r.overlap.length < 12) r.overlap.push(`"${snippet(A.el)}" x "${snippet(B.el)}" ${hit}`);
    }
    r.offscreen = uniq(r.offscreen || []);
    const hs = Array.from(doc.querySelectorAll('h1,h2,h3,h4,h5,h6')).filter((h) => h.getAttribute('aria-hidden') !== 'true'); let prev = 0;
    for (const h of hs) { const n = +h.tagName[1]; if (prev && n > prev + 1) { r.misc.push(`heading skips ${prev}→${n} "${snippet(h)}"`); } prev = n; }
    if (!hs.length && r.texts > 10) r.misc.push('no headings');
    return r;
  }
  const uniq = (a) => Array.from(new Set(a));
  const CATS = ['contrast', 'clip', 'canvas', 'target', 'name', 'tiny', 'type', 'misc', 'offscreen', 'overlap'];
  async function run() {
    for (const p of PAGES) {
      const [w, h] = (p.viewport || '1280x900').split('x').map(Number);
      const fr = document.createElement('iframe'); fr.width = w; fr.height = h; fr.style.cssText = `width:${w}px;height:${h}px;border:0;display:block`; fr.title = 'audit ' + p.path;
      document.getElementById('stage').replaceChildren(fr);
      const line = document.createElement('div'); line.textContent = '… ' + p.path; out.appendChild(line);
      try {
        await new Promise((res, rej) => { fr.onload = res; fr.onerror = rej; fr.src = p.path + (p.path.includes('?') ? '&' : '?') + 'audit=1&t=' + Date.now(); setTimeout(res, 15000); });
        const win = fr.contentWindow, doc = fr.contentDocument;
        if (doc && doc.fonts) { try { await doc.fonts.ready; } catch (e) {} }
        await new Promise((res) => setTimeout(res, p.wait || 2500));
        // reveal everything and settle
        try { doc.querySelectorAll('[data-reveal]').forEach((el) => el.classList.add('is-visible')); doc.documentElement.classList.remove('anim'); } catch (e) {}
        await new Promise((res) => setTimeout(res, 400));
        const r = probe(doc, win, p);
        for (const k of CATS) r[k] = uniq(r[k] || []);
        results[p.path + '@' + w] = r;
        const n = CATS.map((k) => `${k}:${r[k].length}`).join(' ');
        line.textContent = `${p.path} @${w}  ${n}  (texts ${r.texts}, gradient ${r.gradientText}, skipped ${r.skippedBg})`;
      } catch (e) { results[p.path] = { error: String(e) }; line.textContent = p.path + '  ERROR ' + e; }
    }
    window.__audit.done = true;
    const det = document.getElementById('details'); det.textContent = '';
    for (const [k, r] of Object.entries(results)) {
      const lines = [];
      if (r.error) lines.push('ERROR ' + r.error);
      else for (const c of CATS) for (const x of (r[c] || []).slice(0, 14)) { if (c === 'misc' && x === 'no headings') continue; if (c === 'clip' && /self-clips|wider than box/.test(x) && /^"?(Loading|Saving|Cory is typing)/.test(x.replace(/^nowrap /, ''))) continue; lines.push(`${c}: ${x}`); }
      if (!lines.length) continue;
      const b = document.createElement('div'); b.className = 'blk'; b.innerHTML = `<b>${k.replace('../', '')}</b>` + lines.map((l) => `<div>${l.replace(/</g, '&lt;')}</div>`).join('');
      det.appendChild(b);
    }
    out.appendChild(Object.assign(document.createElement('div'), { textContent: 'DONE' }));
  }
  run();
})();
