/* Page-level states for the React UI kits.
   kitMount('App'): waits for window.App, renders it inside an error boundary, and replaces the loading state
   with a plain-language error and a way forward if the scripts never arrive (blocked CDN, offline) or the app throws. */
(function () {
  var root = function () { return document.getElementById('root'); };
  var THROWN = ['Something went wrong on this page', 'It is not you. Try again, and if it keeps happening, head back to the Showcase.'];
  var fail = function (title, body) {
    var el = root(); if (!el) return;
    el.innerHTML = '<div class="kit-state" role="alert"><h1></h1><p></p><div class="kit-actions">' +
      '<button type="button" class="cory-btn cory-btn-primary">Try again</button>' +
      '<a class="cory-btn cory-btn-secondary" href="../../index.html">Back to the Showcase</a></div></div>';
    el.querySelector('h1').textContent = title; el.querySelector('p').textContent = body;
    el.querySelector('button').addEventListener('click', function () { location.reload(); });
  };
  var NOLOAD = function () {
    fail('I could not load this page', navigator.onLine === false
      ? 'You appear to be offline. Reconnect, then try again.'
      : 'A script this page needs did not arrive. Check your connection or ad blocker, then try again.');
  };
  // Watchdog: kitMount is called from a compiled script, so if the compiler itself never arrives nothing would call it.
  setTimeout(function () { var el = root(); if (el && el.querySelector('.kit-state[role="status"]')) NOLOAD(); }, 15000);
  window.kitMount = function (name, timeoutMs) {
    var t0 = Date.now(), limit = timeoutMs || 15000;
    var go = function () {
      var C = window[name];
      if (!C || !window.React || !window.ReactDOM) {
        if (Date.now() - t0 > limit) { NOLOAD(); return; }
        setTimeout(go, 30); return;
      }
      var R = window.React;
      function Boundary(props) { R.Component.call(this, props); this.state = { broken: false }; }
      Boundary.prototype = Object.create(R.Component.prototype);
      Boundary.prototype.constructor = Boundary;
      Boundary.getDerivedStateFromError = function () { return { broken: true }; };
      Boundary.prototype.componentDidCatch = function (e) { if (window.console) console.error(e); setTimeout(function () { fail(THROWN[0], THROWN[1]); }, 0); };
      Boundary.prototype.render = function () { return this.state.broken ? null : this.props.children; };
      try { window.ReactDOM.createRoot(root()).render(R.createElement(Boundary, null, R.createElement(C))); }
      catch (e) { fail(THROWN[0], THROWN[1]); }
    };
    go();
  };
})();
