// AgentCory: PNG export helper for social posts and covers. Loaded by every template's ds-base.js.
// Never navigates and never clicks a hidden download link: the host preview treats that as leaving the page.
(() => {
  const F = "'Plus Jakarta Sans',system-ui,sans-serif";
  const toBlob = (d) => { const b = atob(d.split(',')[1]); const u = new Uint8Array(b.length); for (let i = 0; i < b.length; i++) u[i] = b.charCodeAt(i); return new Blob([u], { type: 'image/png' }); };
  const toDataUrl = (blob) => new Promise((res, rej) => { const r = new FileReader(); r.onload = () => res(r.result); r.onerror = rej; r.readAsDataURL(blob); });
  const el = (tag, css, text) => { const e = document.createElement(tag); if (css) e.style.cssText = css; if (text) e.textContent = text; return e; };
  const dims = (src) => new Promise(res => { const i = new Image(); i.onload = () => res({ w: i.naturalWidth, h: i.naturalHeight }); i.onerror = () => res({ w: 0, h: 0 }); i.src = src; });
  let open = null;
  const onKey = (e) => { if (e.key === 'Escape') close(); };
  const close = () => { if (!open) return; open.remove(); open = null; document.removeEventListener('keydown', onKey); };
  const BTN = 'display:inline-flex;align-items:center;justify-content:center;min-height:44px;padding:12px 20px;border-radius:999px;font-family:inherit;font-size:15px;font-weight:700;line-height:1.2;cursor:pointer;text-decoration:none;box-sizing:border-box';

  window.coryEnsureHtmlToImage = () => {
    if (window.htmlToImage) return Promise.resolve(window.htmlToImage);
    if (window.__coryH2I) return window.__coryH2I;
    const srcs = ['https://cdn.jsdelivr.net/npm/html-to-image@1.11.11/dist/html-to-image.js', 'https://unpkg.com/html-to-image@1.11.11/dist/html-to-image.js'];
    const load = (i) => new Promise((res, rej) => {
      if (window.htmlToImage) return res(window.htmlToImage);
      if (i >= srcs.length) return rej(new Error('image library could not be loaded, check the connection'));
      const s = document.createElement('script'); s.src = srcs[i];
      const next = () => { s.remove(); load(i + 1).then(res, rej); };
      const t = setTimeout(next, 12000);
      s.onload = () => { clearTimeout(t); res(window.htmlToImage); };
      s.onerror = () => { clearTimeout(t); next(); };
      document.head.appendChild(s);
    });
    window.__coryH2I = load(0).catch(e => { window.__coryH2I = null; throw e; });
    return window.__coryH2I;
  };

  window.coryExportFailed = (err) => {
    const msg = (err && err.message) || String(err || 'export failed');
    const old = document.getElementById('cory-export-toast'); if (old) old.remove();
    const t = el('p', 'position:fixed;inset-inline-end:24px;bottom:84px;z-index:2147483000;margin:0;max-width:320px;padding:10px 14px;border-radius:12px;background:#fff;border:1px solid #F3B4B4;font-family:' + F + ';font-size:13px;line-height:1.4;color:#9B1C1C;box-shadow:0 8px 24px rgba(11,31,54,.14);text-wrap:pretty', 'Could not export: ' + msg + '. Check the connection and tap the button again.');
    t.id = 'cory-export-toast'; t.setAttribute('role', 'alert'); document.body.appendChild(t); setTimeout(() => t.remove(), 9000);
  };

  // data: PNG data URL or Blob. Opens a dialog with the rendered image, a Save link, Copy image, and a right-click fallback.
  window.coryExportPng = async (data, fileName) => {
    const blob = data instanceof Blob ? data : toBlob(data);
    const src = typeof data === 'string' ? data : await toDataUrl(blob);
    const { w, h } = await dims(src);
    close();
    const back = el('div', 'position:fixed;inset:0;z-index:2147483000;background:rgba(11,31,54,.72);display:flex;align-items:center;justify-content:center;padding:24px;box-sizing:border-box;font-family:' + F + ';color:#0B1F36');
    back.setAttribute('role', 'dialog'); back.setAttribute('aria-modal', 'true'); back.setAttribute('aria-label', 'Exported PNG'); back.setAttribute('data-export-dialog', '');
    const card = el('div', 'background:#fff;border-radius:24px;padding:20px;width:min(560px,100%);max-height:100%;box-sizing:border-box;display:flex;flex-direction:column;gap:14px;min-width:0;box-shadow:0 24px 64px rgba(11,31,54,.4)');
    const img = el('img', 'display:block;width:100%;height:auto;max-height:56vh;object-fit:contain;border-radius:12px;background:#F4F5FA'); img.src = src; img.alt = 'Exported image, ' + w + ' by ' + h + ' pixels';
    const p = el('p', 'margin:0;font-size:14px;line-height:1.45;color:#3B4253;text-wrap:pretty', 'PNG ready at ' + w + ' by ' + h + ' pixels. Tap Save PNG. If nothing downloads, tap Copy image and paste it anywhere, or right-click the preview and choose Save image as.');
    const row = el('div', 'display:flex;gap:10px;flex-wrap:wrap');
    const save = el('a', BTN + ';background:#1568D4;color:#fff;border:1px solid #1568D4', 'Save PNG'); save.href = src; save.download = fileName || 'export.png'; save.target = '_blank'; save.rel = 'noopener';
    const copy = el('button', BTN + ';background:#fff;color:#0B1F36;border:1px solid #D5D9E4', 'Copy image'); copy.type = 'button';
    copy.onclick = async () => { try { await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]); copy.textContent = 'Copied'; } catch (e) { copy.textContent = 'Copy blocked, right-click the image'; } };
    const x = el('button', BTN + ';background:#fff;color:#0B1F36;border:1px solid #D5D9E4', 'Close'); x.type = 'button'; x.onclick = close;
    row.append(save, copy, x); card.append(img, p, row); back.append(card);
    back.addEventListener('click', e => { if (e.target === back) close(); });
    document.body.appendChild(back); open = back; document.addEventListener('keydown', onKey); save.focus();
    return src;
  };
})();
