import React, { useState } from 'react';

/**
 * AgentCory primary action. Pill-shaped, soft elevation.
 * Variants: primary (AA-safe brand gradient), ink (navy), secondary (outline), ghost.
 * States: hover (darken/tint), focus-visible ring, press scale, loading, disabled.
 * Renders an <a> when `href` is given. Under prefers-reduced-motion the spinner becomes
 * static dots next to the still-visible label, so the state never depends on motion.
 */
const VH = { position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)', whiteSpace: 'nowrap' };
const reducedMotion = () => typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
export function Button({
  children, variant = 'primary', size = 'md', iconLeft, iconRight, iconStart, iconEnd,
  fullWidth = false, disabled = false, loading = false, loadingLabel = 'Loading', href, style, ...rest
}) {
  const reduced = loading && reducedMotion();
  const [hover, setHover] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [focus, setFocus] = useState(false);
  const sizes = {
    sm: { padding: '8px 16px', fontSize: 'var(--text-ui-sm)', gap: 6, minHeight: 36 },
    md: { padding: '11px 22px', fontSize: 'var(--text-ui)', gap: 8, minHeight: 44 },
    lg: { padding: '15px 30px', fontSize: 'var(--text-ui-lg)', gap: 10, minHeight: 52 },
  };
  const variants = {
    primary: {
      rest: { background: 'var(--gradient-brand-deep)', color: 'var(--text-on-brand)', boxShadow: 'var(--shadow-brand)', border: '1px solid transparent' },
      hover: { filter: 'brightness(1.08) saturate(1.05)', boxShadow: '0 16px 36px rgba(37,138,253,0.36)' },
    },
    ink: {
      rest: { background: 'var(--action-ink)', color: 'var(--surface-card)', boxShadow: 'var(--shadow-sm)', border: '1px solid transparent' },
      hover: { background: 'var(--action-ink-hover)', boxShadow: 'var(--shadow-md)' },
    },
    secondary: {
      rest: { background: 'var(--surface-card)', color: 'var(--text-strong)', boxShadow: 'var(--shadow-xs)', border: '1px solid var(--border-interactive)' },
      hover: { background: 'var(--action-secondary-hover)', boxShadow: 'var(--shadow-sm)' },
    },
    ghost: {
      rest: { background: 'transparent', color: 'var(--text-link)', boxShadow: 'none', border: '1px solid transparent' },
      hover: { background: 'var(--action-ghost-hover)', color: 'var(--text-link-hover)' },
    },
    onInk: {
      rest: { background: 'var(--on-ink-fill)', color: 'var(--on-ink-strong)', boxShadow: 'none', border: '1px solid var(--on-ink-border-strong)' },
      hover: { background: 'var(--on-ink-fill-hover)' },
    },
    onInkSolid: {
      rest: { background: 'var(--on-ink-strong)', color: 'var(--navy-800)', boxShadow: 'var(--shadow-md)', border: '1px solid transparent' },
      hover: { boxShadow: 'var(--shadow-lg), var(--shadow-glow)' },
    },
  };
  const s = sizes[size] || sizes.md;
  const v = variants[variant] || variants.primary;
  const inert = disabled || loading;
  const Tag = href && !inert ? 'a' : 'button';
  const transform = pressed && !inert ? `scale(var(--press-scale, 0.97))` : hover && !inert ? 'translateY(-2px)' : 'none';

  return (
    <Tag
      href={Tag === 'a' ? href : undefined}
      disabled={Tag === 'button' ? inert : undefined}
      aria-disabled={inert || undefined}
      aria-busy={loading || undefined}
      style={{
        position: 'relative', display: fullWidth ? 'flex' : 'inline-flex', width: fullWidth ? '100%' : 'auto',
        alignItems: 'center', justifyContent: 'center', gap: s.gap, padding: s.padding, minHeight: s.minHeight,
        fontSize: s.fontSize, fontFamily: 'var(--font-sans)', fontWeight: 'var(--weight-semibold)', lineHeight: 1.2, maxWidth: '100%', textAlign: 'center', whiteSpace: 'nowrap',
        letterSpacing: 'var(--tracking-ui)', borderRadius: 'var(--radius-pill)', textDecoration: 'none',
        cursor: inert ? 'not-allowed' : 'pointer', opacity: disabled ? 'var(--opacity-disabled)' : 1,
        transition: `transform var(--duration-base) ${pressed ? 'var(--ease-out)' : 'var(--ease-spring)'}, box-shadow var(--duration-base) var(--ease-out), background var(--duration-base) var(--ease-out), filter var(--duration-base) var(--ease-out), color var(--duration-base) var(--ease-out)`,
        outline: 'none', transform,
        ...v.rest, ...(hover && !inert ? v.hover : null),
        ...(focus ? { outline: 'var(--border-width-strong, 2px) solid var(--border-focus)', outlineOffset: 2, boxShadow: v.rest.boxShadow && v.rest.boxShadow !== 'none' ? `var(--shadow-focus), ${v.rest.boxShadow}` : 'var(--shadow-focus)' } : null),
        ...style,
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPressed(false); }}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onFocus={(e) => setFocus(e.currentTarget.matches(':focus-visible'))}
      onBlur={() => setFocus(false)}
      {...rest}
    >
      {loading && !reduced && (
        <span aria-hidden="true" style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center' }}>
          <span style={{ width: 16, height: 16, borderRadius: '50%', border: '2px solid currentColor', borderInlineEndColor: 'transparent', animation: 'cory-spin 0.8s linear infinite' }} />
        </span>
      )}
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: s.gap, visibility: loading && !reduced ? 'hidden' : 'visible' }}>
        {reduced && <span aria-hidden="true" style={{ display: 'inline-flex', gap: 3 }}>{[0.5, 1, 0.5].map((o, i) => <span key={i} style={{ width: 4, height: 4, borderRadius: '50%', background: 'currentColor', opacity: o }} />)}</span>}
        {iconStart ?? iconLeft}{children}{iconEnd ?? iconRight}
      </span>
      {loading && <span role="status" style={VH}>{loadingLabel}</span>}
    </Tag>
  );
}
