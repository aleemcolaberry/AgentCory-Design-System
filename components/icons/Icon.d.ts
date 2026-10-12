import * as React from 'react';

export type IconName =
  | 'check' | 'close' | 'plus' | 'minus' | 'menu' | 'more' | 'more-vertical'
  | 'arrow-right' | 'arrow-left' | 'arrow-up' | 'arrow-down' | 'arrow-up-right' | 'arrow-right-left'
  | 'chevron-down' | 'chevron-up' | 'chevron-right' | 'chevron-left' | 'external-link' | 'log-in' | 'log-out'
  | 'download' | 'upload' | 'refresh' | 'repeat' | 'search' | 'filter' | 'settings' | 'copy' | 'pencil' | 'trash' | 'link' | 'paperclip' | 'list' | 'grid' | 'loader'
  | 'message' | 'messages' | 'message-dots' | 'send' | 'mail' | 'phone' | 'phone-incoming' | 'phone-call' | 'mic' | 'headset' | 'video' | 'bell' | 'bell-off' | 'inbox' | 'volume' | 'mute' | 'wifi-off'
  | 'clock' | 'timer' | 'calendar' | 'calendar-check' | 'zap' | 'sparkles' | 'target' | 'lightbulb' | 'brain' | 'plug' | 'rocket'
  | 'user' | 'users' | 'graduation-cap' | 'building' | 'home' | 'pin' | 'globe' | 'heart' | 'star' | 'thumbs-up' | 'eye' | 'pointer'
  | 'file' | 'file-plus' | 'file-text' | 'clipboard-list' | 'clipboard-check' | 'chart' | 'trending-up' | 'dollar' | 'percent' | 'tag' | 'image' | 'bookmark' | 'lock' | 'shield'
  | 'info' | 'help' | 'warning' | 'alert' | 'check-circle' | 'x-circle'
  | 'sun' | 'moon' | 'play' | 'pause';

export interface IconProps extends Omit<React.SVGAttributes<SVGSVGElement>, 'name'> {
  /** Icon name from the Cory set. Common Lucide names (x, refresh-cw, messages-square, alert-triangle...) resolve via aliases. */
  name: IconName | string;
  /** Pixel size (square). 16 inline with text, 20 in controls, 24 in feature tiles, 32 in hero tiles. @default 20 */
  size?: number;
  /** Draw the 20% currentColor tint under the stroke. Turn off at 16px or on busy backgrounds. @default true */
  duotone?: boolean;
  /** Stroke width in grid units. 1.75 at 20 to 24px; 2 at 16px. @default 1.75 */
  strokeWidth?: number;
  /** Accessible name when the icon stands alone (no visible label). Omit when a label sits next to it. */
  label?: string;
}

/** Cory icon: owned duotone set on a 24px grid, currentColor, RTL-aware for directional glyphs. */
export function Icon(props: IconProps): JSX.Element;
/** Every icon name, in display order. */
export const ICON_NAMES: IconName[];
/** Lucide / legacy name → Cory name. */
export const ICON_ALIASES: Record<string, IconName>;
