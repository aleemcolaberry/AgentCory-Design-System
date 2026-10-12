import React from 'react';

/**
 * Compact status / metric label. Every tone passes WCAG AA for its text size.
 */
export function Badge({ children, tone = 'brand', size = 'md', dot = false, style, ...rest }) {
  const tones = {
    brand: { background: 'var(--blue-100)', color: 'var(--blue-700)', dot: 'var(--blue-500)' },
    cyan: { background: 'var(--cyan-100)', color: 'var(--cyan-800)', dot: 'var(--cyan-500)' },
    success: { background: 'var(--green-100)', color: 'var(--green-700)', dot: 'var(--green-500)' },
    warning: { background: 'var(--amber-100)', color: 'var(--amber-700)', dot: 'var(--amber-500)' },
    danger: { background: 'var(--red-100)', color: 'var(--red-700)', dot: 'var(--red-500)' },
    neutral: { background: 'var(--slate-100)', color: 'var(--slate-700)', dot: 'var(--slate-500)' },
    ink: { background: 'var(--navy-800)', color: 'var(--white)', dot: 'var(--cyan-400)' },
    onInk: { background: 'var(--on-ink-fill)', color: 'var(--on-ink-strong)', dot: 'var(--cyan-400)' },
  };
  const sizes = {
    sm: { padding: '3px 9px', fontSize: 'var(--text-micro)' },
    md: { padding: '5px 12px', fontSize: 'var(--text-caption)' },
  };
  const t = tones[tone] || tones.brand;
  const s = sizes[size] || sizes.md;
  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 6, padding: s.padding, fontSize: s.fontSize,
        fontFamily: 'var(--font-sans)', fontWeight: 'var(--weight-semibold)', lineHeight: 1.2,
        borderRadius: 'var(--radius-pill)', background: t.background, color: t.color, maxWidth: '100%', whiteSpace: 'nowrap', ...style,
      }}
      {...rest}
    >
      {dot && <span style={{ width: 6, height: 6, borderRadius: '50%', background: t.dot, flexShrink: 0 }} />}
      {children}
    </span>
  );
}
