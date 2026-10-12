import React, { useEffect, useState } from 'react';

/**
 * LTR / RTL switch. Writes dir and lang on <html>, persists to localStorage ('cory-dir'),
 * and fires a 'cory:direction' event. Every token and component mirrors from that one attribute.
 */
export function DirectionToggle({ size = 'md', variant = 'secondary', rtlLang = 'ar', ltrLang = 'en', storageKey = 'cory-dir', labels, onChange, style, ...rest }) {
  const read = () => (typeof document !== 'undefined' && document.documentElement.getAttribute('dir') === 'rtl' ? 'rtl' : 'ltr');
  const [dir, setDir] = useState(read);
  const apply = (next, persist) => {
    const html = document.documentElement;
    html.setAttribute('dir', next);
    html.setAttribute('lang', next === 'rtl' ? rtlLang : ltrLang);
    if (persist) { try { localStorage.setItem(storageKey, next); } catch (e) {} }
    setDir(next);
    window.dispatchEvent(new CustomEvent('cory:direction', { detail: { dir: next } }));
    onChange && onChange(next);
  };
  useEffect(() => {
    let saved = null; try { saved = localStorage.getItem(storageKey); } catch (e) {}
    if (saved && saved !== read()) apply(saved, false);
    const mo = new MutationObserver(() => setDir(read()));
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ['dir'] });
    return () => mo.disconnect();
  }, []);
  const h = { sm: 36, md: 44, lg: 52 }[size] || 44;
  const l = labels || { ltr: 'LTR', rtl: 'RTL' };
  const looks = {
    secondary: { track: 'var(--surface-sunken)', border: 'var(--border-default)', on: 'var(--surface-card)', onText: 'var(--text-strong)', offText: 'var(--text-muted)' },
    onInk: { track: 'var(--on-ink-fill)', border: 'var(--on-ink-border)', on: 'var(--on-ink-strong)', onText: 'var(--navy-800)', offText: 'var(--on-ink-body)' },
  };
  const v = looks[variant] || looks.secondary;
  const seg = (key) => {
    const on = dir === key;
    return (
      <button key={key} type="button" aria-pressed={on} onClick={() => !on && apply(key, true)}
        style={{ flex: '1 1 0', minWidth: h, height: h - 8, padding: '0 12px', border: 0, borderRadius: 'var(--radius-pill)', cursor: on ? 'default' : 'pointer',
          fontFamily: 'var(--font-sans)', fontSize: size === 'sm' ? 'var(--text-micro)' : 'var(--text-caption)', fontWeight: 'var(--weight-bold)', letterSpacing: '0.04em', whiteSpace: 'nowrap',
          background: on ? v.on : 'transparent', color: on ? v.onText : v.offText, boxShadow: on ? 'var(--shadow-xs)' : 'none',
          transition: 'background var(--duration-base) var(--ease-out), color var(--duration-base) var(--ease-out)' }}>
        <bdi>{l[key]}</bdi>
      </button>
    );
  };
  return (
    <div role="group" aria-label="Reading direction" dir="ltr"
      style={{ display: 'inline-flex', alignItems: 'center', gap: 2, padding: 3, height: h, borderRadius: 'var(--radius-pill)', background: v.track, border: `1px solid ${v.border}`, ...style }} {...rest}>
      {seg('ltr')}{seg('rtl')}
    </div>
  );
}
