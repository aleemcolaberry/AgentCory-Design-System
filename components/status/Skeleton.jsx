import React from 'react';

/**
 * Loading placeholder that mirrors the shape of the content it stands in for.
 * aria-hidden; put aria-busy="true" on the region while skeletons show.
 */
export function Skeleton({ variant = 'text', width, height, lines = 1, radius, style, ...rest }) {
  const base = {
    display: 'block', background: 'linear-gradient(90deg, var(--surface-skeleton) 0%, var(--surface-skeleton-shine) 50%, var(--surface-skeleton) 100%)',
    backgroundSize: '200% 100%', animation: 'cory-shimmer 1.6s linear infinite',
    borderRadius: radius ?? (variant === 'circle' ? '50%' : variant === 'text' ? 'var(--radius-xs)' : 'var(--radius-md)'),
  };
  if (variant === 'text') {
    return (
      <span aria-hidden="true" style={{ display: 'flex', flexDirection: 'column', gap: '0.55em', width: width ?? '100%', ...style }} {...rest}>
        {Array.from({ length: Math.max(1, lines) }).map((_, i) => (
          <span key={i} style={{ ...base, height: height ?? '0.9em', width: lines > 1 && i === lines - 1 ? '62%' : '100%' }} />
        ))}
      </span>
    );
  }
  const d = variant === 'circle' ? (width ?? height ?? 40) : null;
  return <span aria-hidden="true" style={{ ...base, width: d ?? width ?? '100%', height: d ?? height ?? 120, flexShrink: 0, ...style }} {...rest} />;
}
