import React, { useState, useRef, useLayoutEffect, useEffect } from 'react';

/**
 * Tabs / segmented control / filter bar. One component, three looks.
 * `underline` animates an indicator under the active tab; `segmented` slides a pill.
 * Keyboard: arrow keys move (mirrored in RTL), Home/End jump, disabled tabs are skipped.
 */
export function Tabs({ items = [], value, defaultValue, onChange, variant = 'underline', size = 'md', fullWidth = false, label, style, ...rest }) {
  const enabled = items.filter((it) => !it.disabled);
  const [inner, setInner] = useState(defaultValue ?? (enabled[0] && enabled[0].value));
  const active = value !== undefined ? value : inner;
  const refs = useRef({});
  const [ind, setInd] = useState({ left: 0, width: 0 });
  const listRef = useRef(null);
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const bump = () => setTick((n) => n + 1);
    const mo = new MutationObserver(bump); mo.observe(document.documentElement, { attributes: true, attributeFilter: ['dir', 'lang'] });
    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(bump) : null; if (ro && listRef.current) ro.observe(listRef.current);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(bump);
    return () => { mo.disconnect(); ro && ro.disconnect(); };
  }, []);
  useLayoutEffect(() => {
    const el = refs.current[active];
    if (el) setInd({ left: el.offsetLeft, width: el.offsetWidth });
  }, [active, items.length, size, tick]);
  const select = (v) => { if (value === undefined) setInner(v); onChange && onChange(v); };
  const onKey = (e) => {
    const keys = ['ArrowRight', 'ArrowLeft', 'Home', 'End'];
    if (!keys.includes(e.key) || !enabled.length) return;
    e.preventDefault();
    const rtl = listRef.current && getComputedStyle(listRef.current).direction === 'rtl';
    const i = Math.max(0, enabled.findIndex((it) => it.value === active));
    let n = i;
    if (e.key === 'Home') n = 0;
    else if (e.key === 'End') n = enabled.length - 1;
    else { const fwd = (e.key === 'ArrowRight') !== !!rtl; n = (i + (fwd ? 1 : -1) + enabled.length) % enabled.length; }
    const next = enabled[n].value;
    select(next);
    const el = refs.current[next]; el && el.focus();
  };
  const fs = size === 'sm' ? 'var(--text-ui-sm)' : 'var(--text-ui)';
  const seg = variant === 'segmented';
  const pills = variant === 'pills';
  const h = size === 'sm' ? 36 : 44;
  return (
    <div role="tablist" aria-label={label} ref={listRef} onKeyDown={onKey} style={{ position: 'relative', maxWidth: '100%', overflowX: 'auto', overflowY: 'hidden', scrollbarWidth: 'none', display: fullWidth ? 'grid' : 'inline-flex', gridTemplateColumns: fullWidth ? `repeat(${items.length}, 1fr)` : undefined, gap: seg ? 4 : pills ? 8 : 0, padding: seg ? 4 : 0,
      background: seg ? 'var(--surface-sunken)' : 'transparent', borderRadius: seg ? 'var(--radius-pill)' : 0, borderBottom: variant === 'underline' ? '1px solid var(--border-default)' : 'none', ...style }} {...rest}>
      {seg && <span aria-hidden="true" style={{ position: 'absolute', top: 4, bottom: 4, left: ind.left, width: ind.width, background: 'var(--surface-card)', borderRadius: 'var(--radius-pill)', boxShadow: 'var(--shadow-sm)', transition: 'left var(--duration-slow) var(--ease-out), width var(--duration-slow) var(--ease-out)' }} />}
      {variant === 'underline' && <span aria-hidden="true" style={{ position: 'absolute', bottom: 0, height: 2, left: ind.left, width: ind.width, background: 'var(--gradient-brand)', borderRadius: 2, transition: 'left var(--duration-slow) var(--ease-out), width var(--duration-slow) var(--ease-out)' }} />}
      {items.map((it) => {
        const on = it.value === active;
        const off = !!it.disabled;
        return (
          <button key={it.value} type="button" role="tab" aria-selected={on} aria-disabled={off || undefined} disabled={off} tabIndex={on ? 0 : -1} ref={(el) => { refs.current[it.value] = el; }} onClick={() => !off && select(it.value)}
            style={{ position: 'relative', zIndex: 1, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, height: seg ? h - 8 : h, padding: pills ? '0 16px' : '0 14px', fontSize: fs,
              fontFamily: 'var(--font-sans)', fontWeight: 'var(--weight-semibold)', letterSpacing: 'var(--tracking-ui)', whiteSpace: 'nowrap', cursor: off ? 'not-allowed' : 'pointer', border: pills ? `1px solid ${on ? 'var(--action-ink)' : 'var(--border-interactive)'}` : 'none',
              borderRadius: seg || pills ? 'var(--radius-pill)' : 0, background: pills && on ? 'var(--action-ink)' : 'transparent', opacity: off ? 'var(--opacity-disabled)' : 1,
              color: pills && on ? 'var(--surface-card)' : on ? 'var(--text-strong)' : 'var(--text-muted)', transition: 'color var(--duration-base) var(--ease-out), background var(--duration-base) var(--ease-out)' }}>
            {it.icon}{it.label}
            {it.count !== undefined && <span style={{ fontSize: 'var(--text-micro)', padding: '2px 7px', borderRadius: 'var(--radius-pill)', background: on && pills ? 'var(--on-ink-fill-hover)' : 'var(--surface-sunken)', color: 'inherit', direction: 'ltr', unicodeBidi: 'isolate' }}>{it.count}</span>}
          </button>
        );
      })}
    </div>
  );
}
