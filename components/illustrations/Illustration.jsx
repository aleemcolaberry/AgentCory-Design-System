import React from 'react';
import { CoryMark } from '../core/Avatar.jsx';
import { ICONS } from '../icons/Icon.jsx';

/*
 * Cory spot illustrations. One language: the solid Cory tile is the subject; props around it are
 * duotone (tinted fill + 2-unit stroke) drawn from the icon set; the brand glow sits behind.
 * 240 x 180 art box. Colours are tokens, so light, dark and on-ink all resolve by themselves.
 */
const LIGHT = {
  tile: 'var(--text-strong)', glyph: 'var(--surface-card)',
  tint: 'var(--surface-info)', line: 'var(--text-info)',
  mutedTint: 'var(--surface-sunken)', muted: 'var(--border-strong)', dash: 'var(--border-interactive)',
  success: ['var(--surface-success)', 'var(--text-success)'], warning: ['var(--surface-warning)', 'var(--text-warning)'], danger: ['var(--surface-danger)', 'var(--text-danger)'],
};
const INK = {
  tile: '#F4F5FA', glyph: '#0B1F36',
  tint: 'rgba(255,255,255,0.12)', line: 'var(--on-ink-link)',
  mutedTint: 'rgba(255,255,255,0.06)', muted: 'var(--on-ink-border-strong)', dash: 'var(--on-ink-border-strong)',
  success: ['rgba(95,217,165,0.16)', 'var(--on-ink-success)'], warning: ['rgba(255,199,102,0.16)', 'var(--on-ink-warning)'], danger: ['rgba(255,138,142,0.16)', 'var(--on-ink-danger)'],
};

const bubble = (x, y, w, h, tail) => {
  const r = 10;
  const t = tail === 'br' ? `H${x + w - 13}L${x + w - 12} ${y + h + 11}L${x + w - 24} ${y + h}` : `H${x + 24}L${x + 12} ${y + h + 11}L${x + 13} ${y + h}`;
  return `M${x + r} ${y}H${x + w - r}A${r} ${r} 0 0 1 ${x + w} ${y + r}V${y + h - r}A${r} ${r} 0 0 1 ${x + w - r} ${y + h}${t}H${x + r}A${r} ${r} 0 0 1 ${x} ${y + h - r}V${y + r}A${r} ${r} 0 0 1 ${x + r} ${y}Z`;
};

/** An icon from the set, placed and scaled inside the art box. */
function Glyph({ name, cx, cy, size = 24, stroke, tint }) {
  const def = ICONS[name];
  if (!def) return null;
  const k = size / 24;
  return (
    <g transform={`translate(${cx - 12 * k} ${cy - 12 * k}) scale(${k})`}>
      {tint && def.t && <g fill={tint} stroke="none">{def.t}</g>}
      {def.s && <g fill="none" stroke={stroke} strokeWidth={2 / k} strokeLinecap="round" strokeLinejoin="round">{def.s}</g>}
      {def.d && <g fill={stroke} stroke="none">{def.d}</g>}
    </g>
  );
}
function Bubble({ x, y, w, h, tail, p, dots = true }) {
  return (
    <g>
      <path d={bubble(x, y, w, h, tail)} fill={p.tint} stroke={p.line} strokeWidth="2" strokeLinejoin="round" />
      {dots && [0, 1, 2].map((i) => <circle key={i} cx={x + w / 2 + (i - 1) * 11} cy={y + h / 2} r="3" fill={p.line} />)}
    </g>
  );
}
function Badge({ cx, cy, r = 20, tone, p, name }) {
  const [tint, line] = tone ? p[tone] : [p.tint, p.line];
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} fill={tint} stroke={line} strokeWidth="2" />
      <Glyph name={name} cx={cx} cy={cy} size={r * 1.15} stroke={line} />
    </g>
  );
}
function Spark({ cx, cy, s = 10, fill }) {
  return <path d={`M${cx} ${cy - s}Q${cx} ${cy} ${cx + s} ${cy}Q${cx} ${cy} ${cx} ${cy + s}Q${cx} ${cy} ${cx - s} ${cy}Q${cx} ${cy} ${cx} ${cy - s}Z`} fill={fill} />;
}
function Ring({ cx, cy, r, p }) {
  return <circle cx={cx} cy={cy} r={r} fill="none" stroke={p.dash} strokeWidth="1.5" strokeDasharray="4 7" strokeLinecap="round" />;
}
function MiniCard({ x, y, w, h, p, name }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="10" fill={p.mutedTint} stroke={p.muted} strokeWidth="2" />
      <Glyph name={name} cx={x + w / 2} cy={y + h / 2 - 6} size={20} stroke={p.line} />
      <rect x={x + 10} y={y + h - 14} width={w - 20} height="4" rx="2" fill={p.muted} />
    </g>
  );
}

const SCENES = {
  empty: (p, g) => (<>
    <Bubble x={140} y={28} w={66} h={40} tail="bl" p={p} />
    <rect x="40" y="118" width="62" height="28" rx="9" fill="none" stroke={p.dash} strokeWidth="2" strokeDasharray="5 6" strokeLinecap="round" />
    <Spark cx={62} cy={44} s={8} fill={g} />
    <CoryMark x={84} y={54} size={72} tile={p.tile} glyph={p.glyph} />
  </>),
  search: (p, g) => (<>
    <CoryMark x={74} y={46} size={72} tile={p.tile} glyph={p.glyph} />
    <circle cx="156" cy="112" r="24" fill={p.tint} stroke={p.line} strokeWidth="2.5" />
    <path d="M173 129l18 18" stroke={p.line} strokeWidth="5" strokeLinecap="round" />
    <path d="M146 104a12 12 0 0 1 9-5" stroke={p.line} strokeWidth="2" strokeLinecap="round" fill="none" />
    <Spark cx={50} cy={38} s={8} fill={g} />
  </>),
  error: (p, g) => (<>
    <CoryMark x={76} y={56} size={72} tile={p.tile} glyph={p.glyph} />
    <Badge cx={162} cy={52} r={24} tone="warning" p={p} name="warning" />
    <Badge cx={56} cy={128} r={13} tone="danger" p={p} name="close" />
  </>),
  offline: (p, g) => (<>
    <CoryMark x={66} y={54} size={72} tile={p.tile} glyph={p.glyph} />
    <g fill="none" stroke={p.muted} strokeWidth="3" strokeLinecap="round">
      <path d="M156 76a30 30 0 0 1 42 0" /><path d="M165 88a17 17 0 0 1 24 0" /><path d="M174 100a5 5 0 0 1 6 0" />
    </g>
    <path d="M152 58l48 48" stroke={p.danger[1]} strokeWidth="3" strokeLinecap="round" />
    <rect x="46" y="138" width="112" height="6" rx="3" fill={p.mutedTint} stroke={p.muted} strokeWidth="1.5" />
  </>),
  success: (p, g) => (<>
    <CoryMark x={76} y={48} size={72} tile={p.tile} glyph={p.glyph} />
    <Badge cx={160} cy={120} r={24} tone="success" p={p} name="check" />
    <circle cx="52" cy="48" r="4" fill={g} /><circle cx="186" cy="48" r="3" fill={p.success[1]} /><circle cx="44" cy="124" r="3" fill={p.line} /><circle cx="196" cy="84" r="2.5" fill={g} />
    <Spark cx={66} cy={132} s={7} fill={g} />
  </>),
  connect: (p, g) => (<>
    <MiniCard x={12} y={62} w={52} h={56} p={p} name="file-text" />
    <MiniCard x={176} y={62} w={52} h={56} p={p} name="calendar" />
    <path d="M64 90h20M156 90h20" stroke={p.dash} strokeWidth="2" strokeDasharray="4 5" strokeLinecap="round" />
    <CoryMark x={84} y={54} size={72} tile={p.tile} glyph={p.glyph} />
    <Badge cx={156} cy={58} r={13} p={p} name="plug" />
  </>),
  invite: (p, g) => (<>
    <CoryMark x={84} y={42} size={72} tile={p.tile} glyph={p.glyph} />
    <circle cx="50" cy="128" r="22" fill={p.tint} stroke={p.line} strokeWidth="2" /><Glyph name="user" cx={50} cy={128} size={26} stroke={p.line} />
    <circle cx="190" cy="128" r="22" fill={p.tint} stroke={p.line} strokeWidth="2" /><Glyph name="user" cx={190} cy={128} size={26} stroke={p.line} />
    <Badge cx={162} cy={52} r={13} p={p} name="plus" />
    <path d="M72 120h20M148 120h20" stroke={p.dash} strokeWidth="2" strokeDasharray="4 5" strokeLinecap="round" />
  </>),
  launch: (p, g) => (<>
    <Ring cx={120} cy={90} r={62} p={p} /><Ring cx={120} cy={90} r={82} p={p} />
    <path d="M28 72h22M18 90h32M28 108h22" stroke={p.muted} strokeWidth="3" strokeLinecap="round" />
    <CoryMark x={84} y={54} size={72} tile={p.tile} glyph={p.glyph} />
    <Glyph name="zap" cx={170} cy={44} size={34} stroke={p.line} tint={p.tint} />
    <Spark cx={196} cy={120} s={7} fill={g} />
  </>),
  'not-found': (p, g) => (<>
    <CoryMark x={66} y={60} size={72} tile={p.tile} glyph={p.glyph} />
    <path d="M140 96c10-10 14-28 28-36" stroke={p.dash} strokeWidth="2" strokeDasharray="4 5" strokeLinecap="round" fill="none" />
    <Glyph name="pin" cx={176} cy={56} size={56} stroke={p.line} tint={p.tint} />
    <Badge cx={56} cy={48} r={13} p={p} name="help" />
  </>),
  hero: (p, g) => (<>
    <Ring cx={120} cy={90} r={78} p={p} />
    <Bubble x={6} y={34} w={64} h={40} tail="br" p={p} />
    <CoryMark x={78} y={48} size={84} tile={p.tile} glyph={p.glyph} />
    <Badge cx={184} cy={126} r={22} tone="success" p={p} name="calendar-check" />
    <Glyph name="phone-call" cx={190} cy={50} size={32} stroke={p.line} tint={p.tint} />
    <Spark cx={50} cy={130} s={9} fill={g} />
  </>),
  cover: (p, g) => (<>
    <Ring cx={120} cy={90} r={70} p={p} /><Ring cx={120} cy={90} r={96} p={p} />
    <CoryMark x={76} y={46} size={88} tile={p.tile} glyph={p.glyph} />
    <Spark cx={192} cy={36} s={11} fill={g} /><Spark cx={40} cy={140} s={7} fill={g} />
    <circle cx="48" cy="48" r="3" fill={p.line} /><circle cx="200" cy="130" r="3" fill={p.line} />
  </>),
  email: (p, g) => (<>
    <rect x="68" y="108" width="104" height="58" rx="10" fill={p.tint} stroke={p.line} strokeWidth="2" />
    <path d="M70 114l50 32 50-32" fill="none" stroke={p.line} strokeWidth="2" strokeLinejoin="round" />
    <CoryMark x={88} y={34} size={64} tile={p.tile} glyph={p.glyph} />
    <Spark cx={184} cy={60} s={8} fill={g} /><circle cx="52" cy="76" r="3" fill={p.line} />
  </>),
};

export const ILLUSTRATION_SCENES = Object.keys(SCENES);

/**
 * Illustration: a Cory spot scene for empty, error, onboarding, hero, cover and email surfaces.
 * Sized by width (height follows 4:3). onInk swaps to the on-ink palette for navy panels.
 */
export function Illustration({ scene = 'empty', width = 200, glow = true, onInk = false, label, style, ...rest }) {
  const uid = React.useId ? React.useId().replace(/:/g, '') : 'i';
  const gid = `cory_ill_${uid}`;
  const p = onInk ? INK : LIGHT;
  const draw = SCENES[scene] || SCENES.empty;
  const w = typeof width === 'number' ? `${width}px` : width;
  return (
    <svg viewBox="0 0 240 180" width={w} role={label ? 'img' : undefined} aria-label={label} aria-hidden={label ? undefined : 'true'} focusable="false"
      style={{ display: 'block', height: 'auto', maxWidth: '100%', overflow: 'visible', ...style }} {...rest}>
      <defs>
        <radialGradient id={`${gid}_glow`}><stop offset="0" stopColor="#29BEDD" stopOpacity={onInk ? 0.3 : 0.22} /><stop offset="1" stopColor="#29BEDD" stopOpacity="0" /></radialGradient>
        <linearGradient id={`${gid}_brand`} x1="0" y1="0" x2="1" y2="1"><stop stopColor="#258AFD" /><stop offset="1" stopColor="#29BEDD" /></linearGradient>
      </defs>
      {glow && <ellipse cx="120" cy="96" rx="110" ry="74" fill={`url(#${gid}_glow)`} />}
      {draw(p, `url(#${gid}_brand)`)}
    </svg>
  );
}
