/* AgentCory DS Showcase — GSAP + Lenis orchestration */
(() => {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const DIR = document.documentElement.getAttribute('dir') === 'rtl' ? -1 : 1; // mirror horizontal motion in RTL
  const CONNECTED = /[\u0590-\u08FF\uFB1D-\uFDFF\uFE70-\uFEFF]/; // Hebrew + Arabic ranges: never split into letters
  gsap.registerPlugin(ScrollTrigger);

  // Smooth scroll
  let lenis = null;
  if (!reduce && window.Lenis) {
    lenis = new Lenis({ lerp: 0.11, wheelMultiplier: 1 });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((t) => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
  }
  // Anchor links via lenis
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const el = document.querySelector(a.getAttribute('href'));
      if (!el) return;
      e.preventDefault();
      if (lenis) lenis.scrollTo(el, { offset: -70 });
      else window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 70, behavior: 'smooth' });
    });
  });

  // Split headline into chars
  document.querySelectorAll('[data-split]').forEach(el => {
    const walk = (node) => {
      [...node.childNodes].forEach(child => {
        if (child.nodeType === 3) {
          // Inline-block pieces are bidi-neutral, so wrap each run in its own direction:
          // letters for Latin (LTR), whole words for connected scripts (RTL), never reversed.
          const rtlRun = CONNECTED.test(child.textContent);
          const frag = document.createElement('span');
          frag.setAttribute('dir', rtlRun ? 'rtl' : 'ltr');
          // Split by words first; spaces stay real text nodes so lines can only break between words.
          child.textContent.split(/(\s+)/).forEach(word => {
            if (!word) return;
            if (/^\s+$/.test(word)) { frag.appendChild(document.createTextNode(' ')); return; }
            const w = document.createElement('span');
            w.className = 'word';
            w.style.cssText = 'display:inline-block;white-space:nowrap';
            // Latin words animate letter by letter; connected scripts (Arabic, Hebrew) move as whole words
            (rtlRun ? [word] : word.split('')).forEach(ch => {
              const s = document.createElement('span');
              s.className = 'ch';
              s.textContent = ch;
              w.appendChild(s);
            });
            frag.appendChild(w);
          });
          node.replaceChild(frag, child);
        } else if (child.nodeType === 1) {
          // Gradient words animate as one unit: background-clip:text cannot paint through child layers
          if (child.classList.contains('grad-text')) child.classList.add('ch'); else walk(child);
        }
      });
    };
    walk(el);
  });

  // Safety net: if the animation clock never starts (background tab, throttled iframe, capture tools), content must not stay hidden
  setTimeout(() => {
    if (gsap.ticker.frame > 5) return;
    gsap.set(['.hero-title .ch', '.hero-fade', '.hero-chip', '.reveal', '.sec-title .ch', '.voice-bubble', '.sec-head .overline', '.sec-sub'], { opacity: 1, x: 0, y: 0, scale: 1, rotateX: 0 });
    gsap.set('.color-band', { scaleY: 1 }); gsap.set('#preloader', { display: 'none' }); gsap.set('.grad-sweep', { backgroundPosition: '0% 0' });
  }, 2600);

  if (reduce) {
    // Reduced motion: keep opacity-only reveals and the gradient sweep, drop all movement, parallax, loops and the preloader
    document.documentElement.classList.add('no-motion');
    const pre = document.getElementById('preloader');
    if (pre) pre.remove();
    gsap.set(['.hero-title .ch', '.hero-fade', '.hero-chip', '.reveal', '.sec-title .ch', '.voice-bubble'], { y: 0, x: 0, scale: 1, rotateX: 0, clearProps: 'transform' });
    gsap.set('.color-band', { scaleY: 1 });
    gsap.timeline()
      .to('.hero-title .ch', { opacity: 1, duration: 0.5, stagger: 0.012, ease: 'power2.out' })
      .to('.grad-sweep', { backgroundPosition: '0% 0', duration: 1.1, ease: 'power2.inOut' }, '-=0.3')
      .to(['.hero-fade', '.hero-chip'], { opacity: 1, duration: 0.6, stagger: 0.06, ease: 'power2.out' }, '-=0.9');
    document.querySelectorAll('.reveal, .sec-title .ch, .voice-bubble').forEach(el => {
      gsap.to(el, { opacity: 1, duration: 0.6, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 90%' } });
    });
    return;
  }

  // Direction switch reload: no preloader, restore the reader's place
  let switching = null; try { switching = sessionStorage.getItem('cory-dir-switch'); sessionStorage.removeItem('cory-dir-switch'); } catch (e) {}
  if (switching !== null) {
    const pre = document.getElementById('preloader'); if (pre) pre.remove();
    window.addEventListener('load', () => setTimeout(() => {
      const max = Math.max(1, document.documentElement.scrollHeight - innerHeight);
      window.scrollTo(0, parseFloat(switching) * max); ScrollTrigger.refresh();
    }, 450));
  }

  // ---- Preloader → hero intro ----
  const intro = gsap.timeline();
  if (switching !== null) intro.timeScale(2.5);
  intro.to('#pre-logo', { scale: 1, opacity: 1, duration: 0.5, ease: 'power3.out' })
    .to('#pre-bar i', { scaleX: 1, duration: 0.55, ease: 'power2.inOut' }, '-=0.2')
    .to('#preloader', { yPercent: -100, duration: 0.7, ease: 'power4.inOut' }, '+=0.1')
    .set('#preloader', { display: 'none' })
    .from('#site-header', { y: -60, opacity: 0, duration: 0.6, ease: 'power3.out' }, '-=0.55')
    .to('.hero-title .ch', { y: 0, opacity: 1, rotateX: 0, transformPerspective: 600, duration: 0.8, stagger: 0.018, ease: 'power4.out', onComplete: function () { this.targets().forEach((t) => { t.style.transform = 'none'; }); } }, '-=0.45')
    .to('.grad-sweep', { backgroundPosition: '0% 0', duration: 1.1, ease: 'power2.inOut' }, '-=0.35')
    .to('.hero-fade', { y: 0, opacity: 1, duration: 0.7, stagger: 0.09, ease: 'power3.out' }, '-=1.0')
    .to('.hero-chip', { y: 0, opacity: 1, scale: 1, duration: 0.7, stagger: 0.08, ease: 'back.out(1.6)' }, '-=0.5');

  // Hero scroll-out: content lifts and fades, chips part, so the fold feels dimensional
  gsap.to('.hero-in', { y: -80, opacity: 0, ease: 'none', scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom 35%', scrub: true } });
  document.querySelectorAll('.hero-chip').forEach((c, i) => {
    gsap.to(c, { y: -(60 + i * 30), x: DIR * (i % 2 ? 1 : -1) * (20 + i * 10), opacity: 0, ease: 'none', scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom 45%', scrub: true } });
  });

  // Hero chips: float + mouse parallax
  document.querySelectorAll('.hero-chip').forEach((c, i) => {
    gsap.to(c, { y: '+=' + (8 + i * 4), duration: 2.4 + i * 0.35, yoyo: true, repeat: -1, ease: 'sine.inOut', delay: i * 0.2 });
  });
  const heroArt = document.querySelector('.hero-art');
  if (heroArt && matchMedia('(pointer:fine)').matches) {
    window.addEventListener('mousemove', (e) => {
      const x = (e.clientX / innerWidth - 0.5), y = (e.clientY / innerHeight - 0.5);
      document.querySelectorAll('.hero-chip').forEach((c, i) => {
        const d = (i % 3 + 1) * 10;
        gsap.to(c, { x: x * d, duration: 0.9, ease: 'power2.out', overwrite: 'auto' });
      });
      gsap.to('.hero-glow', { x: x * 40, y: y * 30, duration: 1.2, ease: 'power2.out', overwrite: 'auto' });
    }, { passive: true });
  }

  // Generic reveals
  document.querySelectorAll('.reveal').forEach(el => {
    gsap.to(el, {
      y: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 86%' },
      delay: parseFloat(el.dataset.delay || 0)
    });
  });

  // Section headline char sweeps
  document.querySelectorAll('.sec-title[data-split]').forEach(el => {
    gsap.to(el.querySelectorAll('.ch'), {
      y: 0, opacity: 1, rotateX: 0, transformPerspective: 600, duration: 0.7, stagger: 0.014, ease: 'power4.out',
      scrollTrigger: { trigger: el, start: 'top 85%' },
      onComplete: function () { this.targets().forEach((t) => { t.style.transform = 'none'; }); }
    });
  });

  // Color bars grow
  gsap.to('.color-band', {
    scaleY: 1, duration: 1, stagger: 0.06, ease: 'power4.out', transformOrigin: 'bottom',
    scrollTrigger: { trigger: '#colors .bands', start: 'top 80%' }
  });

  // Giant type scrub
  gsap.fromTo('.type-giant', { xPercent: 6 * DIR, opacity: 0.25 }, {
    xPercent: -6 * DIR, opacity: 1, ease: 'none',
    scrollTrigger: { trigger: '#type', start: 'top bottom', end: 'bottom top', scrub: 0.6 }
  });

  // Marquees
  document.querySelectorAll('.marquee-track').forEach(track => {
    if (reduce) return; // reduced motion: the strip stands still
    const tw = gsap.to(track, { xPercent: -50, duration: 26, repeat: -1, ease: 'none' }); // marquee is an English LTR island in both directions
    const host = track.parentElement; // WCAG 2.2.2: moving content pauses on hover or keyboard focus
    host.addEventListener('mouseenter', () => tw.pause()); host.addEventListener('mouseleave', () => tw.resume());
    host.addEventListener('focusin', () => tw.pause()); host.addEventListener('focusout', () => tw.resume());
  });

  // Templates: horizontal pin on desktop
  ScrollTrigger.matchMedia({
    '(min-width: 960px)': () => {
      const rail = document.querySelector('.tpl-rail');
      const wrap = document.querySelector('.tpl-pin');
      if (!rail || !wrap) return;
      const dist = () => rail.scrollWidth - wrap.clientWidth;
      gsap.to(rail, {
        x: () => -dist() * DIR, ease: 'none',
        scrollTrigger: { trigger: '#templates', start: 'top top', end: () => '+=' + dist(), pin: true, scrub: 0.7, invalidateOnRefresh: true }
      });
    }
  });

  // Chat bubbles pop in
  gsap.to('.voice-bubble', {
    y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.45, ease: 'back.out(1.5)',
    scrollTrigger: { trigger: '#voice .voice-thread', start: 'top 78%' }
  });

  // Stat counters
  document.querySelectorAll('[data-count]').forEach(el => {
    const end = parseFloat(el.dataset.count);
    const fmt = (v) => (el.dataset.prefix || '') + (el.dataset.decimals ? v.toFixed(1) : Math.round(v).toLocaleString()) + (el.dataset.suffix || '');
    const obj = { v: 0 };
    gsap.to(obj, {
      v: end, duration: 1.6, ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 88%' },
      onUpdate: () => { el.textContent = fmt(obj.v); }
    });
  });

  // Scroll progress bar
  gsap.to('.progress', { scaleX: 1, ease: 'none', scrollTrigger: { start: 0, end: 'max', scrub: 0.3 } });

  // Section heads: overline slides in, subtitle fades, in sequence with the headline
  document.querySelectorAll('.sec-head').forEach(head => {
    const tl = gsap.timeline({ scrollTrigger: { trigger: head, start: 'top 85%' } });
    tl.to(head.querySelector('.overline'), { opacity: 1, x: 0, duration: 0.6, ease: 'power3.out' })
      .to(head.querySelector('.sec-sub'), { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.2');
  });

  // Component cards: 3D tilt toward pointer + spotlight follows the cursor
  if (matchMedia('(pointer:fine)').matches) {
    document.querySelectorAll('.comp-card').forEach(card => {
      card.addEventListener('pointermove', e => {
        const r = card.getBoundingClientRect(); const px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
        card.style.setProperty('--mx', (px * 100) + '%'); card.style.setProperty('--my', (py * 100) + '%');
        gsap.to(card, { rotateY: (px - .5) * 8, rotateX: (.5 - py) * 8, transformPerspective: 900, y: -6, duration: 0.5, ease: 'power2.out', overwrite: 'auto' });
      });
      card.addEventListener('pointerleave', () => gsap.to(card, { rotateX: 0, rotateY: 0, y: 0, duration: 0.7, ease: 'power3.out', overwrite: 'auto' }));
    });
    // Magnetic CTAs: the button leans toward the cursor, snaps back on leave
    document.querySelectorAll('.magnetic').forEach(btn => {
      btn.addEventListener('pointermove', e => {
        const r = btn.getBoundingClientRect();
        gsap.to(btn, { x: (e.clientX - r.left - r.width / 2) * 0.28, y: (e.clientY - r.top - r.height / 2) * 0.28, duration: 0.4, ease: 'power2.out', overwrite: 'auto' });
      });
      btn.addEventListener('pointerleave', () => gsap.to(btn, { x: 0, y: 0, duration: 0.7, ease: 'elastic.out(1, 0.45)', overwrite: 'auto' }));
    });
  }

  // Active nav link follows the section in view
  document.querySelectorAll('section[id]').forEach(sec => {
    const link = document.querySelector('.nav-links a[href="#' + sec.id + '"]');
    if (!link) return;
    ScrollTrigger.create({ trigger: sec, start: 'top 50%', end: 'bottom 50%', onToggle: self => link.classList.toggle('active', self.isActive) });
  });

  // Section parallax: dark CTA glow and type specimen drift against scroll
  gsap.to('#cta .glow', { yPercent: 30, ease: 'none', scrollTrigger: { trigger: '#cta', start: 'top bottom', end: 'bottom top', scrub: true } });
  gsap.fromTo('.voice-thread', { y: 60 }, { y: -40, ease: 'none', scrollTrigger: { trigger: '#voice', start: 'top bottom', end: 'bottom top', scrub: 0.5 } });

  // Header shadow on scroll
  ScrollTrigger.create({
    start: 60, onToggle: (self) => document.getElementById('site-header').classList.toggle('scrolled', self.isActive)
  });

  // Hero canvas: drifting gradient orbs
  const cv = document.getElementById('hero-canvas');
  if (cv) {
    const ctx = cv.getContext('2d');
    let w, h; const orbs = [];
    const resize = () => { w = cv.width = cv.offsetWidth * devicePixelRatio; h = cv.height = cv.offsetHeight * devicePixelRatio; };
    resize(); addEventListener('resize', resize, { passive: true });
    const cols = ['37,138,253', '41,190,221', '31,184,119'];
    for (let i = 0; i < 7; i++) orbs.push({ x: Math.random(), y: Math.random(), r: 0.12 + Math.random() * 0.16, c: cols[i % 3], sp: 0.00008 + Math.random() * 0.00014, ph: Math.random() * Math.PI * 2, a: 0.05 + Math.random() * 0.06 });
    // node field: sparse brand nodes, linked when near, drawn toward the pointer
    const nodes = []; let pointer = null;
    const seed = () => { nodes.length = 0; const n = Math.max(18, Math.min(70, Math.round((cv.offsetWidth * cv.offsetHeight) / 16000))); for (let i = 0; i < n; i++) nodes.push({ x: Math.random(), y: Math.random(), vx: (Math.random() - .5) * .00004, vy: (Math.random() - .5) * .00004, r: 1 + Math.random() * 1.6, c: i % 3 === 0 ? cols[1] : cols[0], ph: Math.random() * 6.28 }); };
    seed(); addEventListener('resize', seed, { passive: true });
    if (matchMedia('(pointer:fine)').matches) { cv.parentElement.addEventListener('pointermove', e => { const r = cv.getBoundingClientRect(); pointer = { x: (e.clientX - r.left) / r.width, y: (e.clientY - r.top) / r.height }; }, { passive: true }); cv.parentElement.addEventListener('pointerleave', () => pointer = null); }
    const inkRgb = () => document.documentElement.getAttribute('data-theme') === 'dark' ? '255,255,255' : '11,31,54';
    let last = 0, vis = true;
    new IntersectionObserver(e => vis = e[0].isIntersecting).observe(cv);
    const tick = (t) => {
      requestAnimationFrame(tick);
      if (!vis || t - last < 33) return; last = t;
      ctx.clearRect(0, 0, w, h);
      const link = Math.min(150, Math.max(90, cv.offsetWidth * 0.1)) * devicePixelRatio, ink = inkRgb();
      nodes.forEach(n => { n.x += n.vx * 33 + Math.sin(t * .0006 + n.ph) * .00008; n.y += n.vy * 33 + Math.cos(t * .0005 + n.ph) * .00008; if (pointer) { const dx = pointer.x - n.x, dy = pointer.y - n.y, d = Math.hypot(dx, dy); if (d < .22 && d > .002) { n.x += dx / d * .0009 * (1 - d / .22); n.y += dy / d * .0009 * (1 - d / .22); } } if (n.x < -.02) n.x = 1.02; if (n.x > 1.02) n.x = -.02; if (n.y < -.02) n.y = 1.02; if (n.y > 1.02) n.y = -.02; });
      ctx.lineWidth = devicePixelRatio;
      for (let i = 0; i < nodes.length; i++) for (let k = i + 1; k < nodes.length; k++) { const a = nodes[i], b = nodes[k]; const d = Math.hypot((a.x - b.x) * w, (a.y - b.y) * h); if (d < link) { const near = pointer && Math.hypot(((a.x + b.x) / 2 - pointer.x) * w, ((a.y + b.y) / 2 - pointer.y) * h) < link * 1.4; ctx.strokeStyle = 'rgba(' + (near ? cols[1] : ink) + ',' + ((near ? .5 : .09) * (1 - d / link)) + ')'; ctx.beginPath(); ctx.moveTo(a.x * w, a.y * h); ctx.lineTo(b.x * w, b.y * h); ctx.stroke(); } }
      nodes.forEach(n => { const near = pointer && Math.hypot((n.x - pointer.x) * w, (n.y - pointer.y) * h) < link * 1.4; ctx.fillStyle = 'rgba(' + n.c + ',' + ((near ? .95 : .55) * (.75 + .25 * Math.sin(t * .0014 + n.ph))) + ')'; ctx.beginPath(); ctx.arc(n.x * w, n.y * h, n.r * devicePixelRatio * (near ? 1.6 : 1), 0, 7); ctx.fill(); });
      orbs.forEach(o => {
        const x = (o.x + Math.sin(t * o.sp + o.ph) * 0.12) * w;
        const y = (o.y + Math.cos(t * o.sp * 0.8 + o.ph) * 0.1) * h;
        const r = o.r * Math.max(w, h);
        const g = ctx.createRadialGradient(x, y, 0, x, y, r);
        g.addColorStop(0, `rgba(${o.c},${o.a})`); g.addColorStop(1, `rgba(${o.c},0)`);
        ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, r, 0, 7); ctx.fill();
      });
    };
    requestAnimationFrame(tick);
  }

  // Refresh after iframes load (heights settle)
  window.addEventListener('load', () => setTimeout(() => ScrollTrigger.refresh(), 400));
})();
