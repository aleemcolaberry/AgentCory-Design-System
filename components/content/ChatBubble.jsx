import React from 'react';
import { Avatar } from '../core/Avatar.jsx';

/**
 * Chat message bubble for the Cory widget. `from="cory"` shows the mascot
 * avatar and a light bubble at inline-start; `from="user"` is a brand bubble at inline-end
 * (right in LTR, left in RTL); `from="system"` is a centred quiet note (handoff, timestamps).
 * `status` on user messages: sending (labelled, never dimmed), sent, failed (red edge + Retry).
 */
export function ChatBubble({ from = 'cory', children, time, showAvatar = true, status, onRetry, retryLabel = 'Retry', failedLabel = 'Not sent', style, ...rest }) {
  if (from === 'system') {
    return (
      <div role="status" style={{ display: 'flex', justifyContent: 'center', padding: '2px 0', ...style }} {...rest}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, maxWidth: '88%', padding: '6px 12px', borderRadius: 'var(--radius-pill)', background: 'var(--surface-sunken)', color: 'var(--text-muted)', fontSize: 'var(--text-caption)', fontWeight: 'var(--weight-medium)', lineHeight: 1.4, textAlign: 'center' }}>
          {children}{time && <span style={{ color: 'var(--text-subtle)', fontSize: 'var(--text-micro)' }}>{time}</span>}
        </span>
      </div>
    );
  }
  const isUser = from === 'user';
  const failed = status === 'failed';
  const sending = status === 'sending';
  return (
    <div style={{ display: 'flex', flexDirection: isUser ? 'row-reverse' : 'row', alignItems: 'flex-end', gap: 10, ...style }} {...rest}>
      {showAvatar && !isUser ? <Avatar kind="cory" size={30} /> : showAvatar && <span style={{ width: 30, flexShrink: 0 }} />}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: isUser ? 'flex-end' : 'flex-start', maxWidth: '78%' }}>
        <div
          aria-busy={sending || undefined}
          style={{
            padding: '10px 14px', fontSize: 'var(--text-ui-sm)', lineHeight: 1.45,
            borderRadius: 16, ...(isUser ? { borderEndEndRadius: 4 } : { borderEndStartRadius: 4 }),
            background: isUser ? 'var(--gradient-brand-deep)' : 'var(--surface-card)',
            color: isUser ? 'var(--text-on-brand)' : 'var(--text-body)',
            border: failed ? '1px solid var(--fill-danger)' : isUser ? '1px solid transparent' : '1px solid var(--border-subtle)',
            boxShadow: 'var(--shadow-xs)', opacity: 1, /* a sending bubble keeps full contrast: its state is the label under it, not a dim */
            transition: 'opacity var(--duration-base) var(--ease-out)',
          }}
        >
          {children}
        </div>
        {(time || status) && (
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 4, padding: '0 4px', fontSize: 'var(--text-micro)', color: failed ? 'var(--text-danger)' : 'var(--text-subtle)' }}>
            {failed ? (
              <>
                <span role="alert">{failedLabel}</span>
                {onRetry && <button type="button" onClick={onRetry} style={{ background: 'none', border: 0, padding: '6px 8px', margin: '-6px -8px', minHeight: 24, font: 'inherit', fontWeight: 'var(--weight-semibold)', color: 'var(--text-link)', cursor: 'pointer', textDecoration: 'underline', textUnderlineOffset: 2, borderRadius: 'var(--radius-xs)' }}>{retryLabel}</button>}
              </>
            ) : sending ? (
              <span role="status">Sending…</span>
            ) : (
              <>{time}{status === 'sent' && <span role="img" aria-label="Sent" style={{ color: 'var(--text-success)' }}>✓</span>}</>
            )}
          </span>
        )}
      </div>
    </div>
  );
}
