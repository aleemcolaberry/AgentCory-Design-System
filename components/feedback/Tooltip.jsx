import React, { useEffect, useRef, useState } from 'react';

/**
 * Short label on hover or keyboard focus. Wrap exactly one focusable child
 * (IconButton, Button, link). Escape hides it. Rendered at --z-tooltip.
 */
export function Tooltip({ label, children, placement = 'top', delay = 250, id, style }) {
  const [open, setOpen] = useState(false);
  const timer = useRef(null);
  const uid = useRef(id || `tt-${Math.random().toString(36).slice(2, 8)}`);
  const show = () => { clearTimeout(timer.current); timer.current = setTimeout(() => setOpen(true), delay); };
  const hide = () => { clearTimeout(timer.current); setOpen(false); };
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => { if (e.key === 'Escape') hide(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);
  const child = React.Children.only(children);
  const trigger = React.cloneElement(child, { 'aria-describedby': [child.props['aria-describedby'], uid.current].filter(Boolean).join(' ') });
  const top = placement === 'top';
  return (
    <span onMouseEnter={show} onMouseLeave={hide} onFocus={show} onBlur={hide} style={{ position: 'relative', display: 'inline-flex', ...style }}>
      {trigger}
      <span role="tooltip" id={uid.current}
        style={{
          position: 'absolute', insetInlineStart: '50%', [top ? 'bottom' : 'top']: 'calc(100% + 8px)', zIndex: 'var(--z-tooltip)',
          transform: `translateX(calc(-50% * var(--dir, 1))) translateY(${open ? 0 : top ? 4 : -4}px)`,
          opacity: open ? 1 : 0, visibility: open ? 'visible' : 'hidden', pointerEvents: 'none',
          padding: '6px 10px', borderRadius: 'var(--radius-sm)', background: 'var(--surface-ink)', color: 'var(--on-ink-strong)', boxShadow: 'var(--shadow-md)',
          fontFamily: 'var(--font-sans)', fontSize: 'var(--text-caption)', fontWeight: 'var(--weight-medium)', lineHeight: 1.35, width: 'max-content', maxWidth: 240, textAlign: 'center', overflowWrap: 'break-word',
          transition: `opacity var(--duration-fast) var(--ease-out), transform var(--duration-fast) var(--ease-out), visibility 0s ${open ? '0s' : 'var(--duration-fast)'}`,
        }}>
        {label}
      </span>
    </span>
  );
}
