import React, { useState } from 'react';

/**
 * Generic surface primitive. FeatureCard/StatCard are opinionated; Card is the blank tile
 * used for bento grids, case-study covers, and metadata panels.
 */
export function Card({ children, variant = 'default', padding = 'md', interactive = false, selected = false, href, as, style, className, ...rest }) {
  const [hover, setHover] = useState(false);
  const pads = { none: 0, sm: 'var(--space-4)', md: 'var(--space-6)', lg: 'var(--space-8)' };
  const variants = {
    default: { background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', color: 'var(--text-body)', boxShadow: 'var(--shadow-sm)' },
    sunken: { background: 'var(--surface-sunken)', border: '1px solid transparent', color: 'var(--text-body)', boxShadow: 'none' },
    outline: { background: 'transparent', border: '1px solid var(--border-default)', color: 'var(--text-body)', boxShadow: 'none' },
    ink: { background: 'var(--gradient-ink)', border: '1px solid var(--on-ink-border)', color: 'var(--on-ink-body)', boxShadow: 'var(--shadow-md)' },
    brand: { background: 'var(--gradient-brand-deep-135)', border: '1px solid transparent', color: 'var(--text-on-brand)', boxShadow: 'var(--shadow-brand)' },
  };
  const v = variants[variant] || variants.default;
  const lift = interactive && hover;
  const Tag = as || (href ? 'a' : 'div');
  return (
    <Tag
      href={href}
      className={[variant === 'ink' || variant === 'brand' ? 'cory-on-ink' : '', className].filter(Boolean).join(' ') || undefined}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: 'block', position: 'relative', overflow: 'hidden', isolation: 'isolate', padding: pads[padding] ?? padding,
        borderRadius: 'var(--radius-xl)', textDecoration: 'none', cursor: interactive || href ? 'pointer' : undefined,
        transition: 'transform var(--duration-slow) var(--ease-out), box-shadow var(--duration-slow) var(--ease-out), border-color var(--duration-base) var(--ease-out)',
        transform: lift ? 'translateY(var(--lift-hover))' : 'none',
        ...v,
        ...(lift ? { boxShadow: variant === 'ink' ? 'var(--shadow-glow), var(--shadow-lg)' : 'var(--shadow-lg)' } : null),
        ...(selected ? { borderColor: 'var(--border-focus)', boxShadow: 'var(--shadow-focus)' } : null),
        ...style,
      }}
      {...rest}
    >
      {variant === 'ink' && <span aria-hidden="true" style={{ position: 'absolute', width: '60%', aspectRatio: '1', insetInlineEnd: '-20%', top: '-30%', background: 'var(--glow-cyan)', filter: 'blur(var(--blur-glow))', zIndex: -1, pointerEvents: 'none' }} />}
      {children}
    </Tag>
  );
}
