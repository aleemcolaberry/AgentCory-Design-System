import React, { useEffect, useRef } from 'react';
import { FeedbackIcon } from './Alert.jsx';

const FOCUSABLE = 'a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])';

/**
 * Modal dialog: scrim at --z-modal, focus trap, Escape and scrim click to close,
 * focus returned to the opener, body scroll locked. tone="danger" marks a destructive confirm.
 */
export function Dialog({ open, onClose, title, description, children, actions, size = 'md', tone = 'default', dismissible = true, closeLabel = 'Close', initialFocusRef, style, ...rest }) {
  const panel = useRef(null);
  const opener = useRef(null);
  const uid = useRef(`dlg-${Math.random().toString(36).slice(2, 8)}`);
  useEffect(() => {
    if (!open) return undefined;
    opener.current = document.activeElement;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const focusables = () => (panel.current ? Array.from(panel.current.querySelectorAll(FOCUSABLE)) : []);
    const t = setTimeout(() => {
      const first = (initialFocusRef && initialFocusRef.current) || focusables().find((el) => !el.hasAttribute('data-dialog-close')) || panel.current;
      first && first.focus();
    }, 10);
    const onKey = (e) => {
      if (e.key === 'Escape' && dismissible) { e.stopPropagation(); onClose && onClose(); return; }
      if (e.key !== 'Tab') return;
      const f = focusables();
      if (!f.length) { e.preventDefault(); return; }
      const i = f.indexOf(document.activeElement);
      if (e.shiftKey && i <= 0) { e.preventDefault(); f[f.length - 1].focus(); }
      else if (!e.shiftKey && i === f.length - 1) { e.preventDefault(); f[0].focus(); }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      clearTimeout(t);
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
      if (opener.current && opener.current.focus) opener.current.focus();
    };
  }, [open]);
  if (!open) return null;
  const w = { sm: 420, md: 560, lg: 720 }[size] || 560;
  const titleId = `${uid.current}-t`, descId = `${uid.current}-d`;
  return (
    <div
      onMouseDown={(e) => { if (dismissible && e.target === e.currentTarget) onClose && onClose(); }}
      style={{ position: 'fixed', inset: 0, zIndex: 'var(--z-modal)', display: 'grid', placeItems: 'center', padding: 20, background: 'var(--surface-overlay)', WebkitBackdropFilter: 'blur(var(--blur-scrim))', backdropFilter: 'blur(var(--blur-scrim))', animation: 'cory-fade-in var(--duration-base) var(--ease-out) both' }}
    >
      <div ref={panel} role="dialog" aria-modal="true" aria-labelledby={title ? titleId : undefined} aria-describedby={description ? descId : undefined} tabIndex={-1}
        style={{
          position: 'relative', width: w, maxWidth: '100%', maxHeight: 'calc(100dvh - 40px)', overflow: 'auto', padding: 'var(--space-8)', outline: 'none',
          background: 'var(--surface-card)', color: 'var(--text-body)', borderRadius: 'var(--radius-2xl)', boxShadow: 'var(--shadow-xl)', border: '1px solid var(--border-subtle)',
          fontFamily: 'var(--font-sans)', animation: 'cory-scale-in var(--duration-slow) var(--ease-out) both', ...style,
        }}
        {...rest}
      >
        {dismissible && (
          <button type="button" data-dialog-close="1" aria-label={closeLabel} onClick={onClose}
            style={{ position: 'absolute', top: 16, insetInlineEnd: 16, width: 36, height: 36, display: 'grid', placeItems: 'center', borderRadius: 'var(--radius-pill)', border: '1px solid transparent', background: 'var(--surface-sunken)', color: 'var(--text-muted)', cursor: 'pointer', fontSize: 18, lineHeight: 1 }}>×</button>
        )}
        {tone === 'danger' && <span style={{ display: 'inline-grid', placeItems: 'center', width: 44, height: 44, marginBottom: 14, borderRadius: 'var(--radius-md)', background: 'var(--surface-danger)', color: 'var(--text-danger)' }}><FeedbackIcon tone="danger" size={22} /></span>}
        {title && <h2 id={titleId} style={{ margin: 0, paddingInlineEnd: dismissible ? 40 : 0, fontFamily: 'var(--font-display)', fontSize: 'var(--text-h3)', fontWeight: 'var(--weight-bold)', letterSpacing: 'var(--tracking-tight)', lineHeight: 1.25, color: 'var(--text-strong)' }}>{title}</h2>}
        {description && <p id={descId} style={{ margin: '8px 0 0', fontSize: 'var(--text-ui)', lineHeight: 1.55, color: 'var(--text-muted)' }}>{description}</p>}
        {children && <div style={{ marginTop: 20 }}>{children}</div>}
        {actions && <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'flex-end', marginTop: 24 }}>{actions}</div>}
      </div>
    </div>
  );
}
