import React, { useState } from 'react';

/**
 * Labelled text input matching AgentCory's demo-request forms.
 * Soft rounded field, blue focus ring. States: default, focus, error, warning, success, loading (validating), disabled.
 */
export function Input({
  label, hint, error, warning, success, loading = false, required = false, multiline = false, disabled = false,
  iconLeft, iconRight, iconStart, iconEnd, id, style, ...rest
}) {
  const spinner = loading ? <span aria-hidden="true" style={{ width: 16, height: 16, borderRadius: '50%', border: '2px solid var(--text-subtle)', borderInlineEndColor: 'transparent', animation: 'cory-spin 0.8s linear infinite' }} /> : null;
  const lead = iconStart ?? iconLeft, trail = spinner ?? iconEnd ?? iconRight;
  const [focus, setFocus] = useState(false);
  const fieldId = id || (label ? `f-${String(label).replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const msgId = fieldId ? `${fieldId}-msg` : undefined;
  const Tag = multiline ? 'textarea' : 'input';
  const border = error ? 'var(--fill-danger)' : warning ? 'var(--fill-warning)' : success ? 'var(--fill-success)' : focus ? 'var(--border-focus)' : 'var(--border-strong)';
  const msg = error || warning || success || hint;
  const msgColor = error ? 'var(--text-danger)' : warning ? 'var(--text-warning)' : success ? 'var(--text-success)' : 'var(--text-muted)';
  const pad = multiline ? '12px 14px' : '11px 14px';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, opacity: disabled ? 'var(--opacity-disabled)' : 1, ...style }}>
      {label && (
        <label htmlFor={fieldId} style={{ fontSize: 'var(--text-label)', fontWeight: 'var(--weight-semibold)', color: 'var(--text-strong)' }}>
          {label}{required && <span aria-hidden="true" style={{ color: 'var(--text-danger)', marginInlineStart: 3 }}>*</span>}
        </label>
      )}
      <div style={{ position: 'relative', display: 'flex', alignItems: multiline ? 'flex-start' : 'center' }}>
        {lead && <span style={{ position: 'absolute', insetInlineStart: 14, top: multiline ? 13 : '50%', transform: multiline ? 'none' : 'translateY(-50%)', color: 'var(--text-subtle)', display: 'inline-flex', pointerEvents: 'none' }}>{lead}</span>}
        <Tag
          id={fieldId}
          disabled={disabled}
          required={required}
          aria-invalid={!!error || undefined}
          aria-busy={loading || undefined}
          aria-describedby={msg ? msgId : undefined}
          rows={multiline ? 4 : undefined}
          style={{
            width: '100%', boxSizing: 'border-box', padding: pad, minHeight: multiline ? undefined : 44,
            ...(lead ? { paddingInlineStart: 42 } : null), ...(trail ? { paddingInlineEnd: 42 } : null),
            fontSize: 'var(--text-ui)', fontFamily: 'var(--font-sans)', color: 'var(--text-strong)',
            background: 'var(--surface-card)', border: `1px solid ${border}`, borderRadius: 'var(--radius-md)',
            outline: focus ? undefined : 'none', resize: multiline ? 'vertical' : undefined, cursor: disabled ? 'not-allowed' : undefined,
            boxShadow: focus ? 'var(--shadow-focus)' : 'none',
            transition: 'border-color var(--duration-base) var(--ease-out), box-shadow var(--duration-base) var(--ease-out)',
          }}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          {...rest}
        />
        {trail && <span style={{ position: 'absolute', insetInlineEnd: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-subtle)', display: 'inline-flex' }}>{trail}</span>}
      </div>
      {msg && <span id={msgId} role={error ? 'alert' : undefined} style={{ fontSize: 'var(--text-overline)', fontWeight: error || warning ? 'var(--weight-medium)' : undefined, color: msgColor }}>{msg}</span>}
    </div>
  );
}
