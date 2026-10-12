import React from 'react';

/** Shared 20px tone glyphs for Alert, Toast and Dialog. Stroke follows currentColor. */
export function FeedbackIcon({ tone = 'info', size = 20 }) {
  const paths = {
    info: <><circle cx="12" cy="12" r="9" /><path d="M12 11v5M12 8h.01" /></>,
    success: <><circle cx="12" cy="12" r="9" /><path d="M8.5 12.5l2.5 2.5 4.5-5" /></>,
    warning: <><path d="M12 4l9 16H3z" /><path d="M12 10v4M12 17h.01" /></>,
    danger: <><circle cx="12" cy="12" r="9" /><path d="M9 9l6 6M15 9l-6 6" /></>,
  };
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block', flexShrink: 0 }}>
      {paths[tone] || paths.info}
    </svg>
  );
}

/**
 * Inline feedback banner. Four tones, optional title, action row and dismiss.
 * danger announces assertively (role=alert); the others politely (role=status).
 */
export function Alert({ tone = 'info', title, children, action, onDismiss, dismissLabel = 'Dismiss', icon, compact = false, style, ...rest }) {
  const t = ['info', 'success', 'warning', 'danger'].includes(tone) ? tone : 'info';
  return (
    <div
      role={t === 'danger' ? 'alert' : 'status'}
      style={{
        display: 'flex', alignItems: 'flex-start', gap: 12, padding: compact ? '10px 14px' : '14px 16px', maxWidth: '100%',
        borderRadius: 'var(--radius-md)', background: `var(--surface-${t})`, border: `1px solid var(--border-${t})`,
        color: 'var(--text-body)', fontFamily: 'var(--font-sans)', fontSize: 'var(--text-ui-sm)', lineHeight: 1.5, ...style,
      }}
      {...rest}
    >
      <span style={{ color: `var(--text-${t})`, display: 'inline-flex', marginTop: 1 }}>{icon ?? <FeedbackIcon tone={t} />}</span>
      <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 2 }}>
        {title && <strong style={{ color: `var(--text-${t})`, fontWeight: 'var(--weight-semibold)', fontSize: 'var(--text-ui)', lineHeight: 1.4 }}>{title}</strong>}
        {children && <div>{children}</div>}
        {action && <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 8 }}>{action}</div>}
      </div>
      {onDismiss && (
        <button type="button" aria-label={dismissLabel} onClick={onDismiss}
          style={{ flexShrink: 0, width: 28, height: 28, marginBlock: -4, marginInlineEnd: -6, display: 'grid', placeItems: 'center', borderRadius: 'var(--radius-pill)', border: '1px solid transparent', background: 'transparent', color: `var(--text-${t})`, cursor: 'pointer', fontSize: 18, lineHeight: 1 }}>×</button>
      )}
    </div>
  );
}
