import React from 'react';
import { Avatar } from '../core/Avatar.jsx';

/**
 * Testimonial card: a hero metric, the quote, and an attributed person.
 * Mirrors the "Trusted by Leading Institutions" cards.
 */
export function Testimonial({ metric, metricLabel, quote, name, role, photo, style, ...rest }) {
  return (
    <figure
      style={{
        margin: 0,
        background: 'var(--surface-card)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-xl)',
        padding: 'var(--space-6)',
        boxShadow: 'var(--shadow-sm)',
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        ...style,
      }}
      {...rest}
    >
      {metric && (
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 'var(--weight-extrabold)',
              fontSize: 'var(--text-metric-md)', direction: 'ltr', unicodeBidi: 'isolate',
              lineHeight: 1,
              letterSpacing: 'var(--tracking-tighter)',
              background: 'var(--gradient-brand-text)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            {metric}
          </span>
          <span style={{ fontSize: 'var(--text-caption)', fontWeight: 'var(--weight-semibold)', color: 'var(--text-muted)' }}>
            {metricLabel}
          </span>
        </div>
      )}
      <blockquote
        style={{
          margin: 0,
          fontSize: 'var(--text-md)',
          lineHeight: 1.55,
          color: 'var(--text-body)',
          fontWeight: 'var(--weight-medium)',
        }}
      >
        “{quote}”
      </blockquote>
      <figcaption style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 'auto' }}>
        <Avatar kind={photo ? 'image' : 'initials'} src={photo} name={name} size={40} />
        <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.3 }}>
          <span style={{ fontSize: 'var(--text-ui-sm)', fontWeight: 'var(--weight-bold)', color: 'var(--text-strong)' }}>{name}</span>
          <span style={{ fontSize: 'var(--text-caption)', color: 'var(--text-muted)' }}>{role}</span>
        </span>
      </figcaption>
    </figure>
  );
}
