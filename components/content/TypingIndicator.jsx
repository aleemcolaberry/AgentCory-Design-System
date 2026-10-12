import React from 'react';
import { Avatar } from '../core/Avatar.jsx';

const VH = { position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)', whiteSpace: 'nowrap' };

/** Cory is composing a reply: three pulsing dots in a Cory bubble. role=status announces the label. */
export function TypingIndicator({ label = 'Cory is typing', showAvatar = true, style, ...rest }) {
  return (
    <div role="status" aria-live="polite" style={{ display: 'flex', alignItems: 'flex-end', gap: 10, ...style }} {...rest}>
      {showAvatar && <Avatar kind="cory" size={30} />}
      <span aria-hidden="true" style={{ display: 'inline-flex', alignItems: 'center', gap: 4, padding: '13px 14px', borderRadius: 16, borderEndStartRadius: 4, background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-xs)' }}>
        {[0, 1, 2].map((i) => <span key={i} style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--text-subtle)', animation: `cory-typing 1.2s var(--ease-in-out) ${i * 0.15}s infinite` }} />)}
      </span>
      <span style={VH}>{label}</span>
    </div>
  );
}
