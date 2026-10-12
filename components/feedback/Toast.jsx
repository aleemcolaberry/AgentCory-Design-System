import React, { useEffect, useRef, useState } from 'react';
import { FeedbackIcon } from './Alert.jsx';

/**
 * Brief confirmation after an action. Ink surface in both themes, auto-dismisses,
 * pauses while hovered or focused. Mount inside <ToastRegion>.
 */
export function Toast({ tone = 'info', title, children, action, onDismiss, duration = 6000, dismissLabel = 'Dismiss', style, ...rest }) {
  const t = ['info', 'success', 'warning', 'danger'].includes(tone) ? tone : 'info';
  const [paused, setPaused] = useState(false);
  const timer = useRef(null);
  useEffect(() => {
    if (!onDismiss || !duration || paused) return undefined;
    timer.current = setTimeout(onDismiss, duration);
    return () => clearTimeout(timer.current);
  }, [onDismiss, duration, paused]);
  return (
    <div
      role={t === 'danger' ? 'alert' : 'status'}
      onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}
      style={{
        pointerEvents: 'auto', display: 'flex', alignItems: 'flex-start', gap: 12, width: 380, maxWidth: '100%', padding: '14px 16px',
        borderRadius: 'var(--radius-lg)', background: 'var(--gradient-ink)', color: 'var(--on-ink-body)', border: '1px solid var(--on-ink-border)',
        boxShadow: 'var(--shadow-xl)', fontFamily: 'var(--font-sans)', fontSize: 'var(--text-ui-sm)', lineHeight: 1.5,
        animation: 'cory-toast-in var(--duration-slow) var(--ease-out) both', ...style,
      }}
      {...rest}
    >
      <span style={{ color: `var(--on-ink-${t})`, display: 'inline-flex', marginTop: 1 }}><FeedbackIcon tone={t} /></span>
      <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 2 }}>
        {title && <strong style={{ color: 'var(--on-ink-strong)', fontWeight: 'var(--weight-semibold)', fontSize: 'var(--text-ui)', lineHeight: 1.4 }}>{title}</strong>}
        {children && <div>{children}</div>}
      </div>
      {action && <div style={{ flexShrink: 0, alignSelf: 'center' }}>{action}</div>}
      {onDismiss && (
        <button type="button" aria-label={dismissLabel} onClick={onDismiss}
          style={{ flexShrink: 0, width: 28, height: 28, marginBlock: -4, marginInlineEnd: -6, display: 'grid', placeItems: 'center', borderRadius: 'var(--radius-pill)', border: '1px solid transparent', background: 'transparent', color: 'var(--on-ink-muted)', cursor: 'pointer', fontSize: 18, lineHeight: 1 }}>×</button>
      )}
    </div>
  );
}

/** Fixed live region that stacks Toasts at the inline-end bottom corner (z: --z-toast). */
export function ToastRegion({ children, position = 'end', label = 'Notifications', style, ...rest }) {
  return (
    <div role="region" aria-label={label} aria-live="polite" aria-relevant="additions"
      style={{
        position: 'fixed', insetBlockEnd: 24, zIndex: 'var(--z-toast)', display: 'flex', flexDirection: 'column', alignItems: position === 'start' ? 'flex-start' : position === 'center' ? 'center' : 'flex-end', gap: 10,
        insetInline: position === 'center' ? 16 : undefined, insetInlineEnd: position === 'end' ? 24 : undefined, insetInlineStart: position === 'start' ? 24 : undefined,
        maxWidth: 'calc(100vw - 32px)', pointerEvents: 'none', ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
