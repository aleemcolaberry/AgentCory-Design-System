import React from 'react';
import { Avatar } from '../core/Avatar.jsx';
import { Illustration } from '../illustrations/Illustration.jsx';

/**
 * Nothing here yet. voice="cory" shows the mascot and expects first-person copy;
 * voice="neutral" shows an icon tile for admin surfaces. scene swaps the mascot for a spot illustration. onInk for navy panels.
 */
export function EmptyState({ voice = 'cory', icon, scene, title, children, action, secondaryAction, size = 'md', variant = 'card', onInk = false, style, ...rest }) {
  const sm = size === 'sm';
  const c = onInk
    ? { title: 'var(--on-ink-strong)', body: 'var(--on-ink-body)', tile: 'var(--on-ink-fill)', tileFg: 'var(--on-ink-link)', border: 'var(--on-ink-border-strong)' }
    : { title: 'var(--text-strong)', body: 'var(--text-muted)', tile: 'var(--surface-info)', tileFg: 'var(--text-info)', border: 'var(--border-default)' };
  const frame = variant === 'card' ? { border: `1px dashed ${c.border}`, borderRadius: 'var(--radius-xl)', background: onInk ? 'transparent' : 'var(--surface-card)' } : null;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: sm ? 10 : 14, padding: sm ? '24px 20px' : '40px 28px', fontFamily: 'var(--font-sans)', ...frame, ...style }} {...rest}>
      {scene ? (
        <Illustration scene={scene} width={sm ? 128 : 184} onInk={onInk} style={{ marginBlock: sm ? -8 : -12 }} />
      ) : voice === 'cory' ? (
        <Avatar kind={onInk ? 'cory-light' : 'cory'} size={sm ? 44 : 60} />
      ) : icon ? (
        <span style={{ display: 'inline-grid', placeItems: 'center', width: sm ? 44 : 56, height: sm ? 44 : 56, borderRadius: 'var(--radius-md)', background: c.tile, color: c.tileFg }}>{icon}</span>
      ) : null}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6, maxWidth: '44ch' }}>
        {title && <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: sm ? 'var(--text-ui-lg)' : 'var(--text-h4)', fontWeight: 'var(--weight-bold)', letterSpacing: 'var(--tracking-tight)', lineHeight: 1.3, color: c.title }}>{title}</h3>}
        {children && <p style={{ margin: 0, fontSize: 'var(--text-ui-sm)', lineHeight: 1.55, color: c.body }}>{children}</p>}
      </div>
      {(action || secondaryAction) && <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 10, marginTop: 2 }}>{action}{secondaryAction}</div>}
    </div>
  );
}
