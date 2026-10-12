import React from 'react';

/*
 * Cory icon set. 24-unit grid, 2-unit safe area, 1.75 stroke, round caps and joins.
 * Duotone: `t` shapes are a 20% currentColor tint under the `s` stroke shapes; `d` shapes are solid dots.
 * Everything follows currentColor, so an icon recolours with the text it sits in.
 */
const P = (d, k = 'a') => <path key={k} d={d} />;
const C = (cx, cy, r, k = 'a') => <circle key={k} cx={cx} cy={cy} r={r} />;
const R = (x, y, w, h, rx, k = 'a') => <rect key={k} x={x} y={y} width={w} height={h} rx={rx} />;

const PHONE = 'M5 4h3.5l1.8 4.5-2.3 1.8a11 11 0 0 0 5.7 5.7l1.8-2.3L20 15.5V19a2 2 0 0 1-2.2 2A16 16 0 0 1 3 6.2 2 2 0 0 1 5 4z';
const BUBBLE = 'M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9.5L5 20.5V17a2 2 0 0 1-1-1.7z';
const FILE = 'M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z';
const CAL = R(3, 5, 18, 16, 3, 'r');
const CAL_S = [CAL, P('M3 10h18M8 3v4M16 3v4', 'l')];
const SHIELD = 'M12 3l8 3v6c0 4.5-3.4 8-8 9.5C7.4 20 4 16.5 4 12V6z';
const SPEAKER = 'M4 9.5v5h3.5L13 19V5L7.5 9.5z';
const LOBE = 'M12 5.5a3 3 0 0 0-5.6 1.2A3.2 3.2 0 0 0 4.6 12a3.2 3.2 0 0 0 .8 5.3A3.2 3.2 0 0 0 9 21a3 3 0 0 0 3-2.5z';
const TRAY = 'M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2';

export const ICONS = {
  // Navigation and actions
  'check': { s: [P('M5 12.5l4.5 4.5L19 7')] },
  'close': { s: [P('M6 6l12 12M18 6L6 18')] },
  'plus': { s: [P('M12 5v14M5 12h14')] },
  'minus': { s: [P('M5 12h14')] },
  'menu': { s: [P('M4 7h16M4 12h16M4 17h16')] },
  'more': { d: [C(5, 12, 1.6), C(12, 12, 1.6, 'b'), C(19, 12, 1.6, 'c')] },
  'more-vertical': { d: [C(12, 5, 1.6), C(12, 12, 1.6, 'b'), C(12, 19, 1.6, 'c')] },
  'arrow-right': { dir: 1, s: [P('M4 12h16M13 5l7 7-7 7')] },
  'arrow-left': { dir: 1, s: [P('M20 12H4M11 5l-7 7 7 7')] },
  'arrow-up': { s: [P('M12 20V4M5 11l7-7 7 7')] },
  'arrow-down': { s: [P('M12 4v16M5 13l7 7 7-7')] },
  'arrow-up-right': { dir: 1, s: [P('M7 17L17 7M8 7h9v9')] },
  'arrow-right-left': { s: [P('M16 3l4 4-4 4M20 7H4M8 13l-4 4 4 4M4 17h16')] },
  'chevron-down': { s: [P('M6 9l6 6 6-6')] },
  'chevron-up': { s: [P('M6 15l6-6 6 6')] },
  'chevron-right': { dir: 1, s: [P('M9 6l6 6-6 6')] },
  'chevron-left': { dir: 1, s: [P('M15 6l-6 6 6 6')] },
  'external-link': { dir: 1, s: [P('M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5')] },
  'log-in': { dir: 1, s: [P('M15 4h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-3M10 8l4 4-4 4M14 12H4')] },
  'log-out': { dir: 1, s: [P('M9 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h3M15 8l4 4-4 4M19 12H9')] },
  'download': { t: [P(TRAY + 'z')], s: [P('M12 4v11M7.5 10.5L12 15l4.5-4.5'), P(TRAY, 'b')] },
  'upload': { t: [P(TRAY + 'z')], s: [P('M12 15V4M7.5 8.5L12 4l4.5 4.5'), P(TRAY, 'b')] },
  'refresh': { s: [P('M20 11a8 8 0 0 0-14.5-3.5M4 4v4.5h4.5M4 13a8 8 0 0 0 14.5 3.5M20 20v-4.5h-4.5')] },
  'repeat': { s: [P('M17 3l3 3-3 3M20 6H8a4 4 0 0 0-4 4v1M7 21l-3-3 3-3M4 18h12a4 4 0 0 0 4-4v-1')] },
  'search': { t: [C(10.5, 10.5, 6.5)], s: [C(10.5, 10.5, 6.5), P('M15.5 15.5L21 21', 'b')] },
  'filter': { t: [P('M3 5h18l-7 8.5V20l-4-2v-4.5z')], s: [P('M3 5h18l-7 8.5V20l-4-2v-4.5z')] },
  'settings': { t: [C(15, 7, 2), C(9, 12, 2, 'b'), C(17, 17, 2, 'c')], s: [P('M4 7h9M17 7h3M4 12h3M11 12h9M4 17h11M19 17h1'), C(15, 7, 2, 'b'), C(9, 12, 2, 'c'), C(17, 17, 2, 'd')] },
  'copy': { t: [R(9, 9, 11, 11, 2)], s: [R(9, 9, 11, 11, 2), P('M5 15H4.5A1.5 1.5 0 0 1 3 13.5v-9A1.5 1.5 0 0 1 4.5 3h9A1.5 1.5 0 0 1 15 4.5V5', 'b')] },
  'pencil': { t: [P('M4 20l4.5-1 10.3-10.3a2.1 2.1 0 0 0-3-3L5.5 16z')], s: [P('M4 20l4.5-1 10.3-10.3a2.1 2.1 0 0 0-3-3L5.5 16z'), P('M13.5 7.5l3 3', 'b')] },
  'trash': { t: [P('M6 7h12l-1 13H7z')], s: [P('M4 7h16M9 7V4.5A1.5 1.5 0 0 1 10.5 3h3A1.5 1.5 0 0 1 15 4.5V7M6 7l1 13h10l1-13M10 11v6M14 11v6')] },
  'link': { s: [P('M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1.2 1.2M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1.2-1.2')] },
  'paperclip': { s: [P('M20 11.5l-8.5 8.5a5 5 0 0 1-7-7l9-9a3.3 3.3 0 0 1 4.7 4.7l-9 9a1.7 1.7 0 0 1-2.4-2.4l8.4-8.4')] },
  'list': { d: [C(4, 6, 1.3), C(4, 12, 1.3, 'b'), C(4, 18, 1.3, 'c')], s: [P('M9 6h12M9 12h12M9 18h12')] },
  'grid': { t: [R(3, 3, 8, 8, 2), R(13, 13, 8, 8, 2, 'b')], s: [R(3, 3, 8, 8, 2), R(13, 3, 8, 8, 2, 'b'), R(3, 13, 8, 8, 2, 'c'), R(13, 13, 8, 8, 2, 'd')] },
  'loader': { s: [P('M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1')] },
  // Communication (Cory's channels)
  'message': { t: [P(BUBBLE)], s: [P(BUBBLE)] },
  'messages': { t: [P('M3 5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H8l-4 3z')], s: [P('M3 5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H8l-4 3z'), P('M16 9h2a2 2 0 0 1 2 2v9l-3-3h-6a2 2 0 0 1-2-2v-2', 'b')] },
  'message-dots': { t: [P(BUBBLE)], s: [P(BUBBLE)], d: [C(8.5, 10.5, 1.1), C(12, 10.5, 1.1, 'b'), C(15.5, 10.5, 1.1, 'c')] },
  'send': { dir: 1, t: [P('M21 3L3 10.5l8 2.5 2.5 8z')], s: [P('M21 3L3 10.5l8 2.5 2.5 8zM21 3L11 13')] },
  'mail': { t: [R(3, 5, 18, 14, 3)], s: [R(3, 5, 18, 14, 3), P('M3.5 7.5l8.5 6 8.5-6', 'b')] },
  'phone': { t: [P(PHONE)], s: [P(PHONE)] },
  'phone-incoming': { t: [P(PHONE)], s: [P(PHONE), P('M21 3l-4.5 4.5M16.5 4V7.5H20', 'b')] },
  'phone-call': { t: [P(PHONE)], s: [P(PHONE), P('M15 5.5a4 4 0 0 1 3.5 3.5M15 2a7.5 7.5 0 0 1 7 7', 'b')] },
  'mic': { t: [R(9, 3, 6, 11, 3)], s: [R(9, 3, 6, 11, 3), P('M5 11a7 7 0 0 0 14 0M12 18v3M9 21h6', 'b')] },
  'headset': { t: [R(3, 13, 4.5, 6.5, 1.75), R(16.5, 13, 4.5, 6.5, 1.75, 'b')], s: [P('M4 13v-1a8 8 0 0 1 16 0v1'), R(3, 13, 4.5, 6.5, 1.75, 'b'), R(16.5, 13, 4.5, 6.5, 1.75, 'c'), P('M18.5 19.5v.5a3 3 0 0 1-3 3H13', 'd')] },
  'video': { t: [R(3, 7, 13, 10, 2.5)], s: [R(3, 7, 13, 10, 2.5), P('M16 10.5l5-2.5v8l-5-2.5', 'b')] },
  'bell': { t: [P('M6 16v-5a6 6 0 0 1 12 0v5l1.5 2h-15z')], s: [P('M6 16v-5a6 6 0 0 1 12 0v5l1.5 2h-15z'), P('M10 21a2 2 0 0 0 4 0', 'b')] },
  'bell-off': { t: [P('M6 16v-5c0-.7.1-1.3.3-1.9L16.7 18H4.5z')], s: [P('M6.3 9.1A6 6 0 0 0 6 11v5l-1.5 2H17M18 13v-2a6 6 0 0 0-9-5.2M10 21a2 2 0 0 0 4 0M3 3l18 18')] },
  'inbox': { t: [P('M3 13h5l1.5 3h5l1.5-3h5v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z')], s: [P('M3 13h5l1.5 3h5l1.5-3h5v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z'), P('M3 13l3.2-7.4A1 1 0 0 1 7.1 5h9.8a1 1 0 0 1 .9.6L21 13', 'b')] },
  'volume': { t: [P(SPEAKER)], s: [P(SPEAKER), P('M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12', 'b')] },
  'mute': { t: [P(SPEAKER)], s: [P(SPEAKER), P('M17 9l5 5M22 9l-5 5', 'b')] },
  'wifi-off': { d: [C(12, 19, 1.3)], s: [P('M2 8.5a16 16 0 0 1 5.5-3M10 5.2a16 16 0 0 1 12 3.3M5.5 12a11 11 0 0 1 4-2.3M14 10.2a11 11 0 0 1 4.5 1.8M8.5 15.5a6 6 0 0 1 7 0M3 3l18 18')] },
  // Time and planning
  'clock': { t: [C(12, 12, 9)], s: [C(12, 12, 9), P('M12 7v5l3.5 2', 'b')] },
  'timer': { t: [C(12, 14, 7.5)], s: [C(12, 14, 7.5), P('M12 10.5V14l2.5 1.5M10 2h4M12 2v4.5', 'b')] },
  'calendar': { t: [CAL], s: CAL_S },
  'calendar-check': { t: [CAL], s: [...CAL_S, P('M9 15.5l2 2 4-4.5', 'c')] },
  'zap': { t: [P('M13 2L4.5 13.5H11L10 22l8.5-11.5H12z')], s: [P('M13 2L4.5 13.5H11L10 22l8.5-11.5H12z')] },
  'sparkles': { t: [P('M12 3l1.9 5.6 5.6 1.9-5.6 1.9L12 18l-1.9-5.6-5.6-1.9 5.6-1.9z')], s: [P('M12 3l1.9 5.6 5.6 1.9-5.6 1.9L12 18l-1.9-5.6-5.6-1.9 5.6-1.9z'), P('M19 17v4M17 19h4M5 3v3M3.5 4.5h3', 'b')] },
  'target': { t: [C(12, 12, 5.5)], s: [C(12, 12, 9), C(12, 12, 5.5, 'b')], d: [C(12, 12, 1.75)] },
  'lightbulb': { t: [P('M8 14.5a6 6 0 1 1 8 0 3 3 0 0 0-1 2.5H9a3 3 0 0 0-1-2.5z')], s: [P('M8 14.5a6 6 0 1 1 8 0 3 3 0 0 0-1 2.5H9a3 3 0 0 0-1-2.5z'), P('M10 21h4', 'b')] },
  'brain': { t: [P(LOBE), <path key="m" d={LOBE} transform="matrix(-1 0 0 1 24 0)" />], s: [P(LOBE), <path key="m" d={LOBE} transform="matrix(-1 0 0 1 24 0)" />, P('M9 9.5a2.5 2.5 0 0 0 3 2M8 15a2.5 2.5 0 0 1 4-1M15 9.5a2.5 2.5 0 0 1-3 2M16 15a2.5 2.5 0 0 0-4-1', 'c')] },
  'plug': { t: [P('M6 7h12v4a6 6 0 0 1-12 0z')], s: [P('M12 22v-5M9 3v4M15 3v4M6 7h12v4a6 6 0 0 1-12 0z')] },
  'rocket': { t: [P('M12 2.5c3.6 2.4 5.5 6.6 5.5 11.5l-2.5 3.5H9L6.5 14c0-4.9 1.9-9.1 5.5-11.5z')], s: [P('M12 2.5c3.6 2.4 5.5 6.6 5.5 11.5l-2.5 3.5H9L6.5 14c0-4.9 1.9-9.1 5.5-11.5zM6.5 14l-3 3 3.5.5M17.5 14l3 3-3.5.5M10 17.5l2 4 2-4')], d: [C(12, 10, 1.75)] },
  // People and places
  'user': { t: [C(12, 8, 4)], s: [C(12, 8, 4), P('M4.5 21a7.5 7.5 0 0 1 15 0', 'b')] },
  'users': { t: [C(9, 8, 3.5)], s: [C(9, 8, 3.5), P('M2.5 20a6.5 6.5 0 0 1 13 0M16 4.5a3.5 3.5 0 0 1 0 7M18.5 14.5a6 6 0 0 1 3 5.5', 'b')] },
  'graduation-cap': { t: [P('M2 9.5L12 5l10 4.5L12 14z')], s: [P('M2 9.5L12 5l10 4.5L12 14zM6 11.5v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5M22 9.5v6')] },
  'building': { t: [R(4, 3, 16, 18, 2)], s: [R(4, 3, 16, 18, 2), P('M9 7.5h1.5M13.5 7.5H15M9 11.5h1.5M13.5 11.5H15M10 21v-3.5h4V21', 'b')] },
  'home': { t: [P('M4 10.5L12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6h-4v6H5a1 1 0 0 1-1-1z')], s: [P('M4 10.5L12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6h-4v6H5a1 1 0 0 1-1-1z')] },
  'pin': { t: [P('M12 21.5s-7-6.5-7-12a7 7 0 0 1 14 0c0 5.5-7 12-7 12z')], s: [P('M12 21.5s-7-6.5-7-12a7 7 0 0 1 14 0c0 5.5-7 12-7 12z'), C(12, 9.5, 2.5, 'b')] },
  'globe': { t: [C(12, 12, 9)], s: [C(12, 12, 9), P('M3 12h18M12 3c2.8 2.4 4 5.5 4 9s-1.2 6.6-4 9c-2.8-2.4-4-5.5-4-9s1.2-6.6 4-9z', 'b')] },
  'heart': { t: [P('M12 20.5S3.5 15.3 3.5 9.3A4.5 4.5 0 0 1 12 6.8a4.5 4.5 0 0 1 8.5 2.5c0 6-8.5 11.2-8.5 11.2z')], s: [P('M12 20.5S3.5 15.3 3.5 9.3A4.5 4.5 0 0 1 12 6.8a4.5 4.5 0 0 1 8.5 2.5c0 6-8.5 11.2-8.5 11.2z')] },
  'star': { t: [P('M12 3.5l2.6 5.4 5.9.8-4.3 4.1 1 5.9-5.2-2.8-5.2 2.8 1-5.9L3.5 9.7l5.9-.8z')], s: [P('M12 3.5l2.6 5.4 5.9.8-4.3 4.1 1 5.9-5.2-2.8-5.2 2.8 1-5.9L3.5 9.7l5.9-.8z')] },
  'thumbs-up': { t: [R(3, 11, 4, 10, 1)], s: [R(3, 11, 4, 10, 1), P('M7 11l4-7.5a2 2 0 0 1 3.5 1.5L14 9h5a2 2 0 0 1 2 2.3l-1.3 7A2 2 0 0 1 17.7 20H7', 'b')] },
  'eye': { t: [P('M2.5 12s3.5-6.5 9.5-6.5 9.5 6.5 9.5 6.5-3.5 6.5-9.5 6.5S2.5 12 2.5 12z')], s: [P('M2.5 12s3.5-6.5 9.5-6.5 9.5 6.5 9.5 6.5-3.5 6.5-9.5 6.5S2.5 12 2.5 12z'), C(12, 12, 3, 'b')] },
  'pointer': { t: [P('M5.5 4.5L18.5 10l-5.5 2.2L10.8 18z')], s: [P('M5.5 4.5L18.5 10l-5.5 2.2L10.8 18z')] },
  // Documents and data
  'file': { t: [P(FILE)], s: [P(FILE), P('M14 3v5h5', 'b')] },
  'file-plus': { t: [P(FILE)], s: [P(FILE), P('M14 3v5h5M12 12v6M9 15h6', 'b')] },
  'file-text': { t: [P(FILE)], s: [P(FILE), P('M14 3v5h5M9 13h6M9 17h4', 'b')] },
  'clipboard-list': { t: [R(9, 2, 6, 4, 1)], s: [R(5, 4, 14, 17, 2.5), R(9, 2, 6, 4, 1, 'b'), P('M9 12h6M9 16h4', 'c')] },
  'clipboard-check': { t: [R(9, 2, 6, 4, 1)], s: [R(5, 4, 14, 17, 2.5), R(9, 2, 6, 4, 1, 'b'), P('M9 14l2 2 4-4.5', 'c')] },
  'chart': { t: [R(5, 12, 4, 8, 1.25), R(10, 5, 4, 15, 1.25, 'b'), R(15, 15, 4, 5, 1.25, 'c')], s: [R(5, 12, 4, 8, 1.25), R(10, 5, 4, 15, 1.25, 'b'), R(15, 15, 4, 5, 1.25, 'c')] },
  'trending-up': { dir: 1, s: [P('M3 17l6-6 4 4 8-8M15 7h6v6')] },
  'dollar': { s: [P('M12 3v18M16.5 7.5A3.5 3.5 0 0 0 13 5h-2.5a3 3 0 0 0 0 6h3a3 3 0 0 1 0 6H10.5a3.5 3.5 0 0 1-3.5-2.5')] },
  'percent': { t: [C(6.5, 6.5, 2.5), C(17.5, 17.5, 2.5, 'b')], s: [P('M19 5L5 19'), C(6.5, 6.5, 2.5, 'b'), C(17.5, 17.5, 2.5, 'c')] },
  'tag': { t: [P('M3 3h8.5l9.5 9.5-8.5 8.5L3 11.5z')], s: [P('M3 3h8.5l9.5 9.5-8.5 8.5L3 11.5z')], d: [C(7.5, 7.5, 1.25)] },
  'image': { t: [R(3, 4, 18, 16, 2.5)], s: [R(3, 4, 18, 16, 2.5), P('M3 16l5-5 4 4 3-3 6 6', 'b')], d: [C(16, 9, 1.5)] },
  'bookmark': { t: [P('M6 4.5A1.5 1.5 0 0 1 7.5 3h9A1.5 1.5 0 0 1 18 4.5V21l-6-4-6 4z')], s: [P('M6 4.5A1.5 1.5 0 0 1 7.5 3h9A1.5 1.5 0 0 1 18 4.5V21l-6-4-6 4z')] },
  'lock': { t: [R(5, 11, 14, 10, 2.5)], s: [R(5, 11, 14, 10, 2.5), P('M8 11V8a4 4 0 0 1 8 0v3', 'b')], d: [C(12, 16, 1.25)] },
  'shield': { t: [P(SHIELD)], s: [P(SHIELD), P('M9 12l2 2 4-4.5', 'b')] },
  // Feedback
  'info': { t: [C(12, 12, 9)], s: [C(12, 12, 9), P('M12 11v5M12 8h.01', 'b')] },
  'help': { t: [C(12, 12, 9)], s: [C(12, 12, 9), P('M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.3-1 .9-1 1.7M12 17h.01', 'b')] },
  'warning': { t: [P('M10.3 4.5a2 2 0 0 1 3.4 0l7.6 13a2 2 0 0 1-1.7 3H4.4a2 2 0 0 1-1.7-3z')], s: [P('M10.3 4.5a2 2 0 0 1 3.4 0l7.6 13a2 2 0 0 1-1.7 3H4.4a2 2 0 0 1-1.7-3z'), P('M12 10v4M12 17.5h.01', 'b')] },
  'alert': { t: [C(12, 12, 9)], s: [C(12, 12, 9), P('M12 8v5M12 16.5h.01', 'b')] },
  'check-circle': { t: [C(12, 12, 9)], s: [C(12, 12, 9), P('M8.5 12.5l2.5 2.5 4.5-5', 'b')] },
  'x-circle': { t: [C(12, 12, 9)], s: [C(12, 12, 9), P('M9 9l6 6M15 9l-6 6', 'b')] },
  // Theme and media
  'sun': { t: [C(12, 12, 4)], s: [C(12, 12, 4), P('M12 2.5v2M12 19.5v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2.5 12h2M19.5 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4', 'b')] },
  'moon': { t: [P('M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5z')], s: [P('M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5z')] },
  'play': { t: [P('M7 4.5v15l12-7.5z')], s: [P('M7 4.5v15l12-7.5z')] },
  'pause': { t: [R(6, 4, 4.5, 16, 1.5), R(13.5, 4, 4.5, 16, 1.5, 'b')], s: [R(6, 4, 4.5, 16, 1.5), R(13.5, 4, 4.5, 16, 1.5, 'b')] },
};

/** Lucide and legacy names resolve to the Cory set, so existing kits keep working. */
export const ICON_ALIASES = {
  'x': 'close', 'ellipsis': 'more', 'more-horizontal': 'more', 'refresh-cw': 'refresh', 'rotate-cw': 'refresh', 'repeat-2': 'repeat',
  'message-square': 'message', 'message-circle': 'message-dots', 'messages-square': 'messages', 'message-square-more': 'message-dots',
  'alert-triangle': 'warning', 'triangle-alert': 'warning', 'alert-circle': 'alert', 'circle-alert': 'alert', 'circle-check': 'check-circle', 'circle-x': 'x-circle',
  'help-circle': 'help', 'circle-help': 'help', 'map-pin': 'pin', 'edit': 'pencil', 'edit-2': 'pencil', 'trash-2': 'trash', 'volume-2': 'volume', 'volume-x': 'mute',
  'bar-chart': 'chart', 'bar-chart-3': 'chart', 'chart-bar': 'chart', 'layout-grid': 'grid', 'sliders-horizontal': 'settings', 'cog': 'settings', 'workflow': 'arrow-right-left',
  'shield-check': 'shield', 'school': 'graduation-cap', 'building-2': 'building', 'mouse-pointer': 'pointer', 'mouse-pointer-2': 'pointer', 'dollar-sign': 'dollar',
  'bolt': 'zap', 'loader-2': 'loader', 'phone-outgoing': 'phone-call', 'badge-check': 'check-circle', 'circle-dot': 'target', 'file-check': 'clipboard-check',
};

export const ICON_NAMES = Object.keys(ICONS);

/**
 * Icon: one of the Cory set by name. Inherits currentColor; duotone tint on by default.
 * Directional icons carry .cory-flip-rtl and mirror under dir="rtl" (check, search, close never do).
 */
export function Icon({ name, size = 20, duotone = true, strokeWidth = 1.75, label, className, style, ...rest }) {
  const key = ICONS[name] ? name : ICON_ALIASES[name];
  const def = ICONS[key];
  if (!def) {
    if (typeof console !== 'undefined') console.warn(`Icon: unknown name "${name}"`);
    return <span aria-hidden="true" style={{ display: 'inline-block', width: size, height: size, ...style }} />;
  }
  const cls = [className, def.dir ? 'cory-flip-rtl' : null].filter(Boolean).join(' ') || undefined;
  return (
    <svg
      viewBox="0 0 24 24" width={size} height={size} className={cls}
      role={label ? 'img' : undefined} aria-label={label} aria-hidden={label ? undefined : 'true'}
      focusable="false"
      style={{ display: 'inline-block', flexShrink: 0, verticalAlign: 'middle', ...style }}
      {...rest}
    >
      {duotone && def.t && <g fill="currentColor" opacity="0.2" stroke="none">{def.t}</g>}
      {def.s && <g fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">{def.s}</g>}
      {def.d && <g fill="currentColor" stroke="none">{def.d}</g>}
    </svg>
  );
}
