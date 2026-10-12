import * as React from 'react';

export interface AvatarProps extends React.HTMLAttributes<HTMLElement> {
  /** Image URL (used when kind is "image"). */
  src?: string;
  /** Name, drives initials fallback and alt text. */
  name?: string;
  /** What to render. @default "cory" */
  kind?: 'cory' | 'cory-light' | 'image' | 'initials';
  /** Pixel size (square). @default 40 */
  size?: number | string;
  /** Add a subtle separating ring. @default false */
  ring?: boolean;
  /** Presence dot at the corner. */
  status?: 'online' | 'away' | 'busy' | 'offline';
  /** Accessible text for the dot. @default status */
  statusLabel?: string;
}

/**
 * Rounded-tile avatar. Defaults to the dark Cory mascot so the assistant
 * reads consistently; also supports photos (`kind="image"`) and initials.
 * A photo that fails to load falls back to initials automatically.
 */
export function Avatar(props: AvatarProps): JSX.Element;
