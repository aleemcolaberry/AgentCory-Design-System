import React, { useState } from 'react';

/**
 * Interactive, selectable pill, filters, tags, toggles. Badge is static; Chip is a control.
 * removable renders a separate, keyboard-reachable remove button inside the pill.
 */
export function Chip({ children, selected = false, onToggle, icon, removable = false, onRemove, removeLabel, size = 'md', disabled = false, style, ...rest }) {
  const [hover, setHover] = useState(false);
  const s = size === 'sm' ? { padding: '5px 12px', fontSize: 'var(--text-ui-sm)', minHeight: 32 } : { padding: '8px 16px', fontSize: 'var(--text-ui)', minHeight: 40 };
  const h = hover && !disabled;
  const bg = selected ? 'var(--action-ink)' : h ? 'var(--action-secondary-hover)' : 'var(--surface-card)';
  const color = selected ? 'var(--surface-card)' : 'var(--text-strong)';
  const border = selected ? 'var(--action-ink)' : 'var(--border-interactive)';
  const pill = {
    display: 'inline-flex', alignItems: 'center', gap: 8, padding: s.padding, minHeight: s.minHeight, fontSize: s.fontSize,
    fontFamily: 'var(--font-sans)', fontWeight: 'var(--weight-semibold)', lineHeight: 1, letterSpacing: 'var(--tracking-ui)',
    color, background: bg, border: `1px solid ${border}`, borderRadius: 'var(--radius-pill)', cursor: disabled ? 'not-allowed' : 'pointer', maxWidth: '100%', textAlign: 'start', whiteSpace: 'nowrap',
    opacity: disabled ? 'var(--opacity-disabled)' : 1,
    transition: 'background var(--duration-base) var(--ease-out), color var(--duration-base) var(--ease-out), border-color var(--duration-base) var(--ease-out), transform var(--duration-fast) var(--ease-spring)',
    transform: h && !selected ? 'translateY(-2px)' : selected && !disabled ? 'scale(1.02)' : 'none',
  };
  const body = <>{icon && <span style={{ display: 'inline-flex' }}>{icon}</span>}{children}</>;
  const hoverProps = { onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false) };
  if (!removable) {
    return (
      <button type="button" disabled={disabled} role={onToggle ? 'switch' : undefined} aria-checked={onToggle ? selected : undefined}
        onClick={(e) => { onToggle && onToggle(!selected, e); }} {...hoverProps} style={{ ...pill, ...style }} {...rest}>
        {body}
      </button>
    );
  }
  const text = typeof children === 'string' ? children : '';
  const inner = { background: 'transparent', border: 0, padding: 0, margin: 0, color: 'inherit', font: 'inherit', letterSpacing: 'inherit', cursor: 'inherit', display: 'inline-flex', alignItems: 'center', gap: 8, minHeight: s.minHeight - 2 };
  return (
    <span {...hoverProps} style={{ ...pill, paddingInlineEnd: Number(s.padding.split(' ')[1].replace('px', '')) - 6, ...style }} {...rest}>
      <button type="button" disabled={disabled} role={onToggle ? 'switch' : undefined} aria-checked={onToggle ? selected : undefined} onClick={(e) => { onToggle && onToggle(!selected, e); }} style={inner}>{body}</button>
      <button type="button" disabled={disabled} aria-label={removeLabel || (text ? `Remove ${text}` : 'Remove')} onClick={(e) => { onRemove && onRemove(e); }}
        style={{ ...inner, display: 'inline-grid', placeItems: 'center', width: 24, height: 24, minHeight: 24, borderRadius: '50%', background: selected ? 'var(--on-ink-fill-hover)' : 'var(--surface-sunken)', fontSize: 15, lineHeight: 1 }}>×</button>
    </span>
  );
}
