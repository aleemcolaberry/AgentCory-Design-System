import React from 'react';

/**
 * Determinate progress (value 0..max) or indeterminate (no value) bar with optional label and percentage.
 */
export function ProgressBar({ value, max = 100, label, showValue = false, size = 'md', tone = 'brand', style, ...rest }) {
  const indeterminate = value === undefined || value === null;
  const pct = indeterminate ? 0 : Math.min(100, Math.max(0, (value / max) * 100));
  const fills = { brand: 'var(--gradient-brand-deep)', success: 'var(--text-success)', warning: 'var(--text-warning)', danger: 'var(--text-danger)' }; // 700-step tones: every fill reads ≥3:1 against the track
  const fill = fills[tone] || fills.brand;
  const h = size === 'sm' ? 4 : 8;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontFamily: 'var(--font-sans)', ...style }} {...rest}>
      {(label || (showValue && !indeterminate)) && (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 12, fontSize: 'var(--text-label)', fontWeight: 'var(--weight-medium)', color: 'var(--text-body)' }}>
          <span>{label}</span>
          {showValue && !indeterminate && <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-mono-sm)', color: 'var(--text-muted)', direction: 'ltr', unicodeBidi: 'isolate' }}>{Math.round(pct)}%</span>}
        </div>
      )}
      <div role="progressbar" aria-label={typeof label === 'string' ? label : undefined} aria-valuemin={0} aria-valuemax={max} aria-valuenow={indeterminate ? undefined : Math.round(value)} aria-valuetext={indeterminate ? 'Loading' : undefined}
        style={{ position: 'relative', height: h, borderRadius: 'var(--radius-pill)', background: 'var(--surface-skeleton)', overflow: 'hidden' }}>
        {indeterminate ? (
          <span style={{ position: 'absolute', insetBlock: 0, insetInlineStart: 0, width: '40%', borderRadius: 'inherit', background: fill, animation: 'cory-progress-slide 1.4s var(--ease-in-out) infinite' }} />
        ) : (
          <span style={{ display: 'block', height: '100%', width: `${pct}%`, borderRadius: 'inherit', background: fill, transition: 'width var(--duration-slow) var(--ease-out)' }} />
        )}
      </div>
    </div>
  );
}
