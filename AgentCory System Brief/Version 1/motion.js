// AIUXAleem v4 page motion. Builds on ../shared/site.js (GSAP + Lenis loader, headline masks, cover unveils, parallax, magnetic, reveals).
// Adds: 3D tilt on case covers, count-ups, and the Three.js node field on Home. Everything is off under reduced motion.
let site = null;
export async function boot(page, extra) {
  site = await import('../shared/site.js');
  if (window.AX) window.AX.track(page);
  return site.pageInit(T => { tilt(T); counts(T); if (extra) extra(T, site); });
}
export const S = () => site;

/* Covers lean toward a fine pointer: [data-tilt] on the card, the image inside moves the other way for depth */
function tilt(T) {
  const g = window.gsap; if (!T.ok || !matchMedia('(pointer: fine) and (min-width: 768px)').matches) return;
  document.querySelectorAll('[data-tilt]').forEach(card => {
    if (card.__tilt) return; card.__tilt = true;
    const img = card.querySelector('[data-tilt-media]');
    const rx = g.quickTo(card, 'rotationX', { duration: 0.6, ease: 'power3.out' }), ry = g.quickTo(card, 'rotationY', { duration: 0.6, ease: 'power3.out' });
    const ix = img && g.quickTo(img, 'x', { duration: 0.8, ease: 'power3.out' }), iy = img && g.quickTo(img, 'y', { duration: 0.8, ease: 'power3.out' });
    g.set(card, { transformPerspective: 1200 });
    card.addEventListener('pointermove', e => { const r = card.getBoundingClientRect(), px = (e.clientX - r.left) / r.width - 0.5, py = (e.clientY - r.top) / r.height - 0.5; rx(-py * 6); ry(px * 8); if (ix) { ix(-px * 14); iy(-py * 10); } });
    card.addEventListener('pointerleave', () => { rx(0); ry(0); if (ix) { ix(0); iy(0); } });
  });
}

/* [data-count="231"] counts up once when revealed; the final text is already in the DOM for no-JS and reduced motion */
function counts(T) {
  const { gsap, ScrollTrigger } = window; if (!T.ok) return;
  document.querySelectorAll('[data-count]').forEach(el => {
    if (el.__counted) return; el.__counted = true;
    const to = parseFloat(el.getAttribute('data-count')); if (!isFinite(to)) return;
    const final = el.textContent, p = { v: 0 }, fmt = v => Math.round(v).toLocaleString('en-US');
    el.textContent = fmt(0);
    ScrollTrigger.create({ trigger: el, start: 'top 85%', once: true, onEnter: () => gsap.to(p, { v: to, duration: T.epic, ease: T.cine, onUpdate: () => { el.textContent = fmt(p.v); }, onComplete: () => { el.textContent = final; } }) });
  });
}

/* ---------- Three.js node field: scattered signal that settles into a lattice as you scroll, then gathers into one point ---------- */
export async function nodeField(canvas, opts = {}) {
  const d = document.documentElement, nav = navigator;
  const reduce = !matchMedia('(prefers-reduced-motion: no-preference)').matches, mobile = matchMedia('(max-width: 767px)').matches;
  const low = (nav.deviceMemory && nav.deviceMemory < 4) || (nav.connection && nav.connection.saveData) || d.hasAttribute('data-qa');
  if (!canvas || reduce || low) { if (canvas) canvas.style.display = 'none'; return null; }
  await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));
  const THREE = await import('https://cdn.jsdelivr.net/npm/three@0.170.0/build/three.module.js').catch(() => null);
  if (!THREE) { canvas.style.display = 'none'; return null; }
  let renderer; try { renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: !mobile, powerPreference: 'low-power' }); } catch (e) { canvas.style.display = 'none'; return null; }
  const dpr = Math.min(devicePixelRatio || 1, mobile ? 1.5 : 2); renderer.setPixelRatio(dpr);
  const scene = new THREE.Scene(), cam = new THREE.PerspectiveCamera(45, 1, 0.1, 100); cam.position.z = 10;
  const N = mobile ? 70 : (opts.count || 150), H = 2 * 10 * Math.tan(Math.PI / 8);
  let seed = 11; const rnd = () => (seed = (seed * 1664525 + 1013904223) % 4294967296) / 4294967296;
  const chaos = new Float32Array(N * 3), order = new Float32Array(N * 3), ph = new Float32Array(N * 3), pos = new Float32Array(N * 3), col = new Float32Array(N * 3), acc = new Uint8Array(N);
  for (let i = 0; i < N * 3; i++) ph[i] = rnd() * 6.283;
  for (let i = 0; i < N; i++) acc[i] = rnd() < 0.1 ? 1 : 0;
  let W = H, dir = 1, spacing = 1;
  const layout = () => {
    dir = d.dir === 'rtl' ? -1 : 1; W = H * cam.aspect;
    for (let i = 0; i < N; i++) { const i3 = i * 3; chaos[i3] = (rnd() - 0.5) * W * 1.2; chaos[i3 + 1] = (rnd() - 0.5) * H * 1.2; chaos[i3 + 2] = (rnd() - 0.5) * 4; }
    const R = Math.min(W, H) * 0.42; spacing = R * Math.sqrt(Math.PI / (0.866 * N)); const pts = [];
    for (let r = -14; r <= 14; r++) for (let c = -14; c <= 14; c++) { const x = (c + (r & 1 ? 0.5 : 0)) * spacing, y = r * spacing * 0.866; pts.push([x, y, x * x + y * y]); }
    pts.sort((a, b) => a[2] - b[2]); const ox = mobile ? 0 : W * 0.2 * dir;
    for (let i = 0; i < N; i++) { order[i * 3] = pts[i][0] + ox; order[i * 3 + 1] = pts[i][1]; order[i * 3 + 2] = 0; }
  };
  const tex = (() => { const c = document.createElement('canvas'); c.width = c.height = 64; const g = c.getContext('2d'); const gr = g.createRadialGradient(32, 32, 0, 32, 32, 32); gr.addColorStop(0, '#fff'); gr.addColorStop(0.35, 'rgba(255,255,255,.9)'); gr.addColorStop(1, 'rgba(255,255,255,0)'); g.fillStyle = gr; g.fillRect(0, 0, 64, 64); return new THREE.CanvasTexture(c); })();
  const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.BufferAttribute(pos, 3)); geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  const pts = new THREE.Points(geo, new THREE.PointsMaterial({ size: mobile ? 0.16 : 0.13, map: tex, vertexColors: true, transparent: true, depthWrite: false }));
  const maxE = N * 4, lp = new Float32Array(maxE * 6), lgeo = new THREE.BufferGeometry(); lgeo.setAttribute('position', new THREE.BufferAttribute(lp, 3));
  const lmat = new THREE.LineBasicMaterial({ transparent: true, opacity: 0.35, depthWrite: false }); const lines = new THREE.LineSegments(lgeo, lmat);
  scene.add(lines, pts);
  const css = n => getComputedStyle(d).getPropertyValue(n).trim();
  const colors = () => { const a = new THREE.Color(), b = new THREE.Color(); try { a.setStyle(css('--node-color') || '#258AFD'); b.setStyle(css('--node-accent') || '#29BEDD'); lmat.color.setStyle(css('--node-line') || '#99A'); } catch (e) {} for (let i = 0; i < N; i++) { const c = acc[i] ? b : a; col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b; } geo.attributes.color.needsUpdate = true; };
  const resize = () => { const w = canvas.clientWidth || innerWidth, h = canvas.clientHeight || innerHeight; renderer.setSize(w, h, false); cam.aspect = w / h; cam.updateProjectionMatrix(); layout(); };
  resize(); colors();
  const st = { o: 0, ot: 0, mx: 0, my: 0, on: true }; let raf = 0;
  const sm = x => { x = Math.max(0, Math.min(1, x)); return x * x * (3 - 2 * x); };
  const tick = now => {
    raf = 0; if (!st.on) return; const t = now * 0.001; st.o += (st.ot - st.o) * 0.06; const o = st.o, amp = (1 - o) * 0.8 + 0.04;
    for (let i = 0; i < N; i++) { const i3 = i * 3, k = sm(o * 1.3 - (i / N) * 0.3);
      const x = chaos[i3] + Math.sin(t * 0.4 + ph[i3]) * amp, y = chaos[i3 + 1] + Math.cos(t * 0.35 + ph[i3 + 1]) * amp, z = chaos[i3 + 2] + Math.sin(t * 0.3 + ph[i3 + 2]) * amp;
      pos[i3] = x + (order[i3] - x) * k; pos[i3 + 1] = y + (order[i3 + 1] - y) * k; pos[i3 + 2] = z + (order[i3 + 2] - z) * k; }
    geo.attributes.position.needsUpdate = true;
    const thr = spacing * (1.9 - 0.75 * o), t2 = thr * thr; let e = 0;
    for (let i = 0; i < N && e < maxE; i++) for (let j = i + 1; j < N && e < maxE; j++) { const dx = pos[i * 3] - pos[j * 3], dy = pos[i * 3 + 1] - pos[j * 3 + 1], dz = pos[i * 3 + 2] - pos[j * 3 + 2]; if (dx * dx + dy * dy + dz * dz < t2) { lp.set([pos[i * 3], pos[i * 3 + 1], pos[i * 3 + 2], pos[j * 3], pos[j * 3 + 1], pos[j * 3 + 2]], e * 6); e++; } }
    lgeo.setDrawRange(0, e * 2); lgeo.attributes.position.needsUpdate = true;
    cam.position.x += (st.mx * 0.5 - cam.position.x) * 0.04; cam.position.y += (st.my * 0.35 - cam.position.y) * 0.04; cam.lookAt(0, 0, 0);
    pts.rotation.z = t * 0.01 * o * dir; lines.rotation.z = pts.rotation.z;
    renderer.render(scene, cam); raf = requestAnimationFrame(tick);
  };
  const io = new IntersectionObserver(es => { st.on = es.some(x => x.isIntersecting) && !document.hidden; if (st.on && !raf) raf = requestAnimationFrame(tick); });
  io.observe(canvas);
  if (matchMedia('(pointer: fine)').matches) addEventListener('mousemove', e => { st.mx = e.clientX / innerWidth * 2 - 1; st.my = -(e.clientY / innerHeight * 2 - 1); }, { passive: true });
  let rt; addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(resize, 150); });
  new MutationObserver(() => { colors(); layout(); }).observe(d, { attributes: true, attributeFilter: ['data-theme', 'dir'] });
  raf = requestAnimationFrame(tick);
  return { progress: v => { st.ot = v; } };
}
