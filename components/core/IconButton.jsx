import React, { useState } from 'react';

/**
 * Square-ish icon-only action. Always needs `label` (aria-label + tooltip title).
 * States: hover, active (ghost), disabled, loading (spinner replaces the icon).
 */
const VH = { position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)', whiteSpace: 'nowrap' };
export function IconButton({ children, label, variant = 'secondary', size = 'md', active = false, disabled = false, loading = false, loadingLabel = 'Loading', style, ...rest }) {
  const [hover, setHover] = useState(false);
  const inert = disabled || loading;
  const px = { sm: 36, md: 44, lg: 52 }[size] || 44;
  const variants = {
    primary: { rest: { background: 'var(--gradient-brand-deep)', color: 'var(--text-on-brand)', border: '1px solid transparent', boxShadow: 'var(--shadow-brand)' }, hover: { filter: 'brightness(1.08)' } },
    ink: { rest: { background: 'var(--action-ink)', color: 'var(--surface-card)', border: '1px solid transparent' }, hover: { background: 'var(--action-ink-hover)' } },
    secondary: { rest: { background: 'var(--surface-card)', color: 'var(--text-strong)', border: '1px solid var(--border-interactive)', boxShadow: 'var(--shadow-xs)' }, hover: { background: 'var(--action-secondary-hover)' } },
    ghost: { rest: { background: active ? 'var(--action-ghost-hover)' : 'transparent', color: active ? 'var(--text-link)' : 'var(--text-body)', border: '1px solid transparent' }, hover: { background: 'var(--action-ghost-hover)', color: 'var(--text-link)' } },
    onInk: { rest: { background: 'var(--on-ink-fill)', color: 'var(--on-ink-strong)', border: '1px solid var(--on-ink-border)' }, hover: { background: 'var(--on-ink-fill-hover)' } },
  };
  const v = variants[variant] || variants.secondary;
  return (
    <button
      type="button" aria-label={label} title={label} aria-pressed={variant === 'ghost' && active ? true : undefined} disabled={inert} aria-disabled={inert || undefined} aria-busy={loading || undefined}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-grid', placeItems: 'center', width: px, height: px, borderRadius: 'var(--radius-pill)', cursor: inert ? 'not-allowed' : 'pointer', position: 'relative',
        fontSize: Math.round(px * 0.45), lineHeight: 1, padding: 0, opacity: disabled ? 'var(--opacity-disabled)' : 1,
        transition: 'background var(--duration-base) var(--ease-out), color var(--duration-base) var(--ease-out), transform var(--duration-base) var(--ease-spring), filter var(--duration-base) var(--ease-out)',
        transform: hover && !inert ? 'translateY(-2px) scale(1.04)' : 'none', ...v.rest, ...(hover && !inert ? v.hover : null), ...style,
      }}
      {...rest}
    >
      {loading ? (
        <>
          <span aria-hidden="true" style={{ width: Math.round(px * 0.4), height: Math.round(px * 0.4), borderRadius: '50%', border: '2px solid currentColor', borderInlineEndColor: 'transparent', animation: 'cory-spin 0.8s linear infinite' }} />
          <span role="status" style={VH}>{loadingLabel}</span>
        </>
      ) : children}
    </button>
  );
}
