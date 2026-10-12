import React from 'react';

/**
 * Big-number metric block, AgentCory's signature stat treatment.
 * Use `gradient` for the headline number on hero/ROI sections.
 */
export function StatCard({ value, label, sub, gradient = false, align = 'start', style, ...rest }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: align === 'center' ? 'center' : 'flex-start',
        textAlign: align === 'center' ? 'center' : 'start',
        gap: 4,
        ...style,
      }}
      {...rest}
    >
      <span
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 'var(--weight-extrabold)',
          fontSize: 'var(--text-metric-lg)', direction: 'ltr', unicodeBidi: 'isolate',
          lineHeight: 1,
          letterSpacing: 'var(--tracking-tighter)',
          ...(gradient
            ? {
                background: 'var(--gradient-brand-text)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }
            : { color: 'var(--text-strong)' }),
        }}
      >
        {value}
      </span>
      <span style={{ fontSize: 'var(--text-body-sm)', fontWeight: 'var(--weight-semibold)', color: 'var(--text-body)' }}>
        {label}
      </span>
      {sub && <span style={{ fontSize: 'var(--text-caption)', color: 'var(--text-muted)' }}>{sub}</span>}
    </div>
  );
}
