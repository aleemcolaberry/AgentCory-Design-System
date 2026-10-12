import React from 'react';

const VH = { position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)', whiteSpace: 'nowrap' };
const reducedMotion = () => typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Indeterminate activity indicator for a single action or small region.
 * Under prefers-reduced-motion it renders static dots and shows the label.
 */
export function Spinner({ size = 20, label = 'Loading', showLabel = false, tone = 'brand', style, ...rest }) {
  const reduced = reducedMotion();
  const color = tone === 'onInk' ? 'var(--on-ink-strong)' : tone === 'current' ? 'currentColor' : 'var(--action-primary)';
  const labelColor = tone === 'onInk' ? 'var(--on-ink-body)' : tone === 'current' ? 'currentColor' : 'var(--text-muted)';
  const visible = showLabel || reduced;
  return (
    <span role="status" aria-live="polite" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color, fontFamily: 'var(--font-sans)', fontSize: 'var(--text-ui-sm)', ...style }} {...rest}>
      {reduced ? (
        <span aria-hidden="true" style={{ display: 'inline-flex', gap: Math.max(2, size * 0.14) }}>
          {[0.45, 1, 0.45].map((o, i) => <span key={i} style={{ width: size * 0.24, height: size * 0.24, borderRadius: '50%', background: 'currentColor', opacity: o }} />)}
        </span>
      ) : (
        <span aria-hidden="true" style={{ width: size, height: size, flexShrink: 0, borderRadius: '50%', border: `${Math.max(2, Math.round(size / 10))}px solid currentColor`, borderInlineEndColor: 'transparent', animation: 'cory-spin 0.8s linear infinite' }} />
      )}
      <span style={visible ? { color: labelColor } : VH}>{label}</span>
    </span>
  );
}
