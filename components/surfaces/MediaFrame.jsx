import React, { useState, useRef } from 'react';

/**
 * Media frame: poster/image/video in a rounded tile with a fixed aspect ratio.
 * Video: play affordance, mute toggle, optional autoplay loop (muted).
 */
export function MediaFrame({ src, poster, alt = '', ratio = '16 / 9', video = false, autoplay = false, loop = true, caption, radius = 'var(--radius-xl)', fit = 'cover', overlay, style, ...rest }) {
  const [playing, setPlaying] = useState(autoplay);
  const [muted, setMuted] = useState(true);
  const [hover, setHover] = useState(false);
  const ref = useRef(null);
  const toggle = () => { const v = ref.current; if (!v) return; if (v.paused) { v.play(); setPlaying(true); } else { v.pause(); setPlaying(false); } };
  const ctl = { display: 'inline-grid', placeItems: 'center', width: 44, height: 44, borderRadius: 'var(--radius-pill)', background: 'rgba(11,31,54,0.62)', color: '#fff', border: '1px solid rgba(255,255,255,0.28)', backdropFilter: 'blur(8px)', cursor: 'pointer', fontSize: 16, lineHeight: 1 };
  return (
    <figure style={{ margin: 0, ...style }} {...rest}>
      <div
        onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
        style={{ position: 'relative', aspectRatio: ratio === 'auto' ? undefined : ratio, ...(ratio === 'auto' ? { height: '100%', minHeight: 160 } : null), borderRadius: radius, overflow: 'hidden', background: 'var(--surface-sunken)', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-sm)', isolation: 'isolate' }}
      >
        {video ? (
          <video ref={ref} src={src} poster={poster} muted={muted} loop={loop} autoPlay={autoplay} playsInline onClick={toggle}
            style={{ width: '100%', height: '100%', objectFit: fit, display: 'block', cursor: 'pointer', transition: 'transform var(--duration-slow) var(--ease-out)', transform: hover ? 'scale(1.02)' : 'scale(1)' }} />
        ) : src ? (
          <img src={src} alt={alt} style={{ width: '100%', height: '100%', objectFit: fit, display: 'block', transition: 'transform var(--duration-slow) var(--ease-out)', transform: hover ? 'scale(1.03)' : 'scale(1)' }} />
        ) : (
          <div role="img" aria-label={alt || 'media placeholder'} style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', background: 'repeating-linear-gradient(135deg, var(--surface-sunken) 0 10px, var(--surface-card) 10px 20px)', color: 'var(--text-subtle)', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-mono)' }}>{alt || 'drop media'}</div>
        )}
        {overlay && <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(11,31,54,0) 30%, rgba(11,31,54,0.84) 100%)', pointerEvents: 'none' }} />}
        {overlay && <div style={{ position: 'absolute', insetInline: 20, bottom: 18, color: '#fff' }}>{overlay}</div>}
        {video && (
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', padding: 14, pointerEvents: 'none', opacity: hover || !playing ? 1 : 0, transition: 'opacity var(--duration-base) var(--ease-out)' }}>
            <button type="button" aria-label={playing ? 'Pause' : 'Play'} onClick={toggle} style={{ ...ctl, pointerEvents: 'auto', width: playing ? 44 : 64, height: playing ? 44 : 64, fontSize: playing ? 16 : 22, background: playing ? ctl.background : 'var(--gradient-brand-deep)', border: playing ? ctl.border : '1px solid transparent', boxShadow: playing ? 'none' : 'var(--shadow-brand)', position: playing ? 'static' : 'absolute', left: '50%', top: '50%', transform: playing ? 'none' : 'translate(-50%,-50%)' }}>{playing ? '❚❚' : '▶'}</button>
            <button type="button" aria-label={muted ? 'Unmute' : 'Mute'} aria-pressed={!muted} onClick={() => { setMuted(!muted); if (ref.current) ref.current.muted = !muted; }} style={{ ...ctl, pointerEvents: 'auto', marginInlineStart: 'auto', width: 'auto', padding: '0 14px', fontSize: 12, fontFamily: 'var(--font-sans)', fontWeight: 600, letterSpacing: '0.02em' }}>{muted ? 'Unmute' : 'Mute'}</button>
          </div>
        )}
      </div>
      {caption && <figcaption style={{ marginTop: 10, fontSize: 'var(--text-caption)', color: 'var(--text-muted)' }}>{caption}</figcaption>}
    </figure>
  );
}
