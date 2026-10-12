import React, { useState } from 'react';

/**
 * Native select styled like Input: label, hint, error, success, disabled, placeholder option.
 * `loading` disables with a "Loading…" placeholder; an empty options list shows `emptyMessage`.
 */
export function Select({ label, hint, error, success, required = false, disabled = false, loading = false, loadingMessage = 'Loading…', emptyMessage = 'No options yet', placeholder, options = [], id, style, ...rest }) {
  const [focus, setFocus] = useState(false);
  const fieldId = id || (label ? `s-${String(label).replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const msgId = fieldId ? `${fieldId}-msg` : undefined;
  const empty = !loading && options.length === 0;
  const inert = disabled || loading || empty;
  const border = error ? 'var(--fill-danger)' : success ? 'var(--fill-success)' : focus ? 'var(--border-focus)' : 'var(--border-interactive)';
  const msg = error || success || hint;
  const msgColor = error ? 'var(--text-danger)' : success ? 'var(--text-success)' : 'var(--text-muted)';
  const ph = loading ? loadingMessage : empty ? emptyMessage : placeholder;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, opacity: disabled ? 'var(--opacity-disabled)' : 1, ...style }}>
      {label && (
        <label htmlFor={fieldId} style={{ fontSize: 'var(--text-label)', fontWeight: 'var(--weight-semibold)', color: 'var(--text-strong)' }}>
          {label}{required && <span aria-hidden="true" style={{ color: 'var(--text-danger)', marginInlineStart: 3 }}>*</span>}
        </label>
      )}
      <div style={{ position: 'relative' }}>
        <select id={fieldId} disabled={inert} required={required} aria-invalid={!!error || undefined} aria-describedby={msg ? msgId : undefined} aria-busy={loading || undefined}
          defaultValue={rest.value === undefined && rest.defaultValue === undefined && ph ? '' : undefined}
          onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
          style={{ width: '100%', minHeight: 44, paddingBlock: 11, paddingInlineStart: 14, paddingInlineEnd: 42, appearance: 'none', WebkitAppearance: 'none', fontSize: 'var(--text-ui)', fontFamily: 'var(--font-sans)', color: inert ? 'var(--text-muted)' : 'var(--text-strong)',
            background: 'var(--surface-card)', border: `1px solid ${border}`, borderRadius: 'var(--radius-md)', outline: focus ? undefined : 'none', cursor: inert ? (loading ? 'progress' : 'not-allowed') : 'pointer',
            boxShadow: focus ? 'var(--shadow-focus)' : 'none', transition: 'border-color var(--duration-base) var(--ease-out), box-shadow var(--duration-base) var(--ease-out)' }} {...rest}>
          {ph && <option value="" disabled>{ph}</option>}
          {options.map((o) => { const v = typeof o === 'string' ? o : o.value; const l = typeof o === 'string' ? o : o.label; return <option key={v} value={v} disabled={o.disabled}>{l}</option>; })}
        </select>
        {loading ? (
          <span aria-hidden="true" style={{ position: 'absolute', insetInlineEnd: 14, top: '50%', transform: 'translateY(-50%)', width: 16, height: 16, borderRadius: '50%', border: '2px solid var(--text-subtle)', borderInlineEndColor: 'transparent', animation: 'cory-spin 0.8s linear infinite', pointerEvents: 'none' }} />
        ) : (
          <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ position: 'absolute', insetInlineEnd: 14, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: 'var(--text-subtle)' }}><path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" /></svg>
        )}
      </div>
      {msg && <span id={msgId} role={error ? 'alert' : undefined} style={{ fontSize: 'var(--text-overline)', fontWeight: error ? 'var(--weight-medium)' : undefined, color: msgColor }}>{msg}</span>}
    </div>
  );
}
