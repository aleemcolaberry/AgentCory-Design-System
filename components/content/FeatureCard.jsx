import React from 'react';

/**
 * Feature / benefit card: icon tile, heading, copy, and trailing tag chips.
 * Mirrors the "Why Admissions Teams Choose Cory" grid.
 */
export function FeatureCard({ icon, title, children, tags = [], style, ...rest }) {
  return (
    <div
      style={{
        background: 'var(--surface-card)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-xl)',
        padding: 'var(--space-6)',
        boxShadow: 'var(--shadow-sm)',
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
        transition: 'box-shadow var(--duration-slow) var(--ease-out), transform var(--duration-slow) var(--ease-out)',
        ...style,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
        e.currentTarget.style.transform = 'translateY(var(--lift-hover))';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
      {...rest}
    >
      {icon && (
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: 'var(--radius-md)',
            background: 'var(--blue-100)',
            color: 'var(--blue-600)',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          {icon}
        </div>
      )}
      <h3 style={{ fontSize: 'var(--text-h4)', fontWeight: 'var(--weight-bold)', color: 'var(--text-strong)', margin: 0 }}>
        {title}
      </h3>
      <p style={{ fontSize: 'var(--text-ui)', lineHeight: 1.55, color: 'var(--text-body)', margin: 0 }}>{children}</p>
      {tags.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 2 }}>
          {tags.map((t, i) => (
            <span
              key={i}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                fontSize: 'var(--text-overline)',
                fontWeight: 'var(--weight-medium)',
                color: 'var(--text-subtle)',
              }}
            >
              <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--cyan-500)' }} />
              {t}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
