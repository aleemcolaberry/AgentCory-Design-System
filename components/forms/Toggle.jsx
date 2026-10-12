import React, { useState } from 'react';

const VH = { position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)', whiteSpace: 'nowrap' };

/** On/off switch for settings that apply immediately. `loading` shows a pending knob while the change saves. */
export function Toggle({ label, hint, error, checked, defaultChecked = false, disabled = false, loading = false, loadingLabel = 'Saving', onChange, size = 'md', labelPosition = 'end', id, style, ...rest }) {
  const labelFirst = labelPosition === 'start' || labelPosition === 'left';
  const [inner, setInner] = useState(defaultChecked);
  const on = checked !== undefined ? checked : inner;
  const [focus, setFocus] = useState(false);
  const fieldId = id || (label ? `tg-${String(label).replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const msg = error || hint;
  const msgId = fieldId && msg ? `${fieldId}-msg` : undefined;
  const inert = disabled || loading;
  const w = size === 'sm' ? 36 : 44, h = size === 'sm' ? 20 : 24, k = h - 6;
  const flip = (e) => { if (inert) return; const next = !on; if (checked === undefined) setInner(next); onChange && onChange(next, e); };
  const track = (
    <button id={fieldId} type="button" role="switch" aria-checked={on} aria-label={label ? undefined : 'Toggle'} aria-describedby={msgId} aria-invalid={!!error || undefined} aria-busy={loading || undefined} disabled={disabled} onClick={flip}
      onFocus={(e) => setFocus(e.currentTarget.matches(':focus-visible'))} onBlur={() => setFocus(false)}
      style={{ position: 'relative', width: w + 4, height: h + 4, flexShrink: 0, borderRadius: 'var(--radius-pill)', border: '2px solid transparent', backgroundClip: 'padding-box', padding: 0, cursor: inert ? (loading ? 'progress' : 'not-allowed') : 'pointer',
        background: on ? 'var(--gradient-brand-deep)' : 'var(--border-interactive)', boxShadow: error ? '0 0 0 1px var(--fill-danger)' : focus ? 'var(--shadow-focus)' : 'none',
        transition: 'background var(--duration-base) var(--ease-out), box-shadow var(--duration-base) var(--ease-out)' }} {...rest}>
      <span aria-hidden="true" style={{ position: 'absolute', top: 3, insetInlineStart: 3, width: k, height: k, borderRadius: '50%', background: '#fff', boxShadow: 'var(--shadow-xs)', display: 'grid', placeItems: 'center', transform: on ? `translateX(calc(${w - k - 6}px * var(--dir, 1)))` : 'translateX(0)', transition: 'transform var(--duration-base) var(--ease-spring)' }}>
        {loading && <span style={{ width: k - 6, height: k - 6, borderRadius: '50%', border: `2px solid ${on ? 'var(--blue-700)' : 'var(--slate-400)'}`, borderInlineEndColor: 'transparent', animation: 'cory-spin 0.8s linear infinite' }} />}
      </span>
      {loading && <span role="status" style={VH}>{loadingLabel}</span>}
    </button>
  );
  if (!label && !msg) return track;
  return (
    <label htmlFor={fieldId} style={{ display: 'inline-flex', alignItems: 'center', gap: 12, flexDirection: labelFirst ? 'row-reverse' : 'row', justifyContent: labelFirst ? 'space-between' : 'flex-start', cursor: inert ? 'not-allowed' : 'pointer', opacity: disabled ? 'var(--opacity-disabled)' : 1, ...style }}>
      {track}
      <span style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {label && <span style={{ fontSize: 'var(--text-ui-sm)', fontWeight: 'var(--weight-medium)', color: 'var(--text-strong)', lineHeight: 1.4 }}>{label}</span>}
        {msg && <span id={msgId} role={error ? 'alert' : undefined} style={{ fontSize: 'var(--text-overline)', fontWeight: error ? 'var(--weight-medium)' : undefined, color: error ? 'var(--text-danger)' : 'var(--text-muted)' }}>{msg}</span>}
      </span>
    </label>
  );
}
