/* Runs in <helmet> before paint: theme, language and direction, intro gate. Same contract as the v3 boot script. */
(function () {
  var d = document.documentElement, q = new URLSearchParams(location.search), t = q.get('theme'), l = q.get('lang');
  if (t !== 'light' && t !== 'dark') { try { t = localStorage.getItem('aiuxaleem-theme'); } catch (e) {} }
  if (t !== 'light' && t !== 'dark') t = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  if (l !== 'ar' && l !== 'en') { try { l = localStorage.getItem('ax-lang'); } catch (e) {} }
  if (l !== 'ar') l = 'en';
  d.setAttribute('data-theme', t); d.lang = l; d.dir = l === 'ar' ? 'rtl' : 'ltr'; d.setAttribute('data-langs', 'en ar');
  if (matchMedia('(prefers-reduced-motion: no-preference)').matches) {
    d.setAttribute('data-motion', 'pending');
    setTimeout(function () { if (d.hasAttribute('data-motion')) { d.removeAttribute('data-motion'); d.setAttribute('data-intro-shown', ''); } }, 1000);
  }
})();
