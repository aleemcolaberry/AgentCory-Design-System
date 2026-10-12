import React, { useState } from 'react';

/** Checkbox with label + optional hint or error. Controlled or uncontrolled. Supports indeterminate. */
export function Checkbox({ label, hint, error, checked, defaultChecked = false, indeterminate = false, disabled = false, onChange, id, style, ...rest }) {
  const [inner, setInner] = useState(defaultChecked);
  const on = checked !== undefined ? checked : inner;
  const [focus, setFocus] = useState(false);
  const fieldId = id || (label ? `cb-${String(label).replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const msg = error || hint;
  const msgId = fieldId && msg ? `${fieldId}-msg` : undefined;
  const toggle = (e) => { if (checked === undefined) setInner(e.target.checked); onChange && onChange(e.target.checked, e); };
  const active = on || indeterminate;
  const border = active ? 'var(--action-primary)' : error ? 'var(--fill-danger)' : 'var(--border-interactive)';
  return (
    <label htmlFor={fieldId} style={{ display: 'inline-flex', alignItems: 'flex-start', gap: 10, cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 'var(--opacity-disabled)' : 1, minHeight: 24, ...style }}>
      <span style={{ position: 'relative', width: 20, height: 20, flexShrink: 0, marginTop: 1 }}>
        <input id={fieldId} type="checkbox" checked={on} disabled={disabled} onChange={toggle} aria-invalid={!!error || undefined} aria-describedby={msgId} ref={(el) => { if (el) el.indeterminate = indeterminate; }}
          onFocus={(e) => setFocus(e.currentTarget.matches(':focus-visible'))} onBlur={() => setFocus(false)}
          style={{ position: 'absolute', inset: 0, margin: 0, opacity: 0, width: '100%', height: '100%', cursor: 'inherit' }} {...rest} />
        <span aria-hidden="true" style={{ position: 'absolute', inset: 0, borderRadius: 'var(--radius-xs)', border: `1px solid ${border}`, background: active ? 'var(--action-primary)' : 'var(--surface-card)', boxShadow: focus ? 'var(--shadow-focus)' : 'none', display: 'grid', placeItems: 'center', transition: 'background var(--duration-fast) var(--ease-out), border-color var(--duration-fast) var(--ease-out), box-shadow var(--duration-base) var(--ease-out)' }}>
          {indeterminate ? <span style={{ width: 10, height: 2, background: '#fff', borderRadius: 1 }} /> : on && (
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 6.5l2.5 2.5 4.5-5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
          )}
        </span>
      </span>
      {(label || msg) && (
        <span style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {label && <span style={{ fontSize: 'var(--text-ui-sm)', fontWeight: 'var(--weight-medium)', color: 'var(--text-strong)', lineHeight: 1.4 }}>{label}</span>}
          {msg && <span id={msgId} role={error ? 'alert' : undefined} style={{ fontSize: 'var(--text-overline)', fontWeight: error ? 'var(--weight-medium)' : undefined, color: error ? 'var(--text-danger)' : 'var(--text-muted)' }}>{msg}</span>}
        </span>
      )}
    </label>
  );
}
