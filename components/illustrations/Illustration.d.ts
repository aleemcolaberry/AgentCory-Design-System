import * as React from 'react';

export type IllustrationScene =
  | 'empty' | 'search' | 'error' | 'offline' | 'success'
  | 'connect' | 'invite' | 'launch'
  | 'not-found' | 'hero' | 'cover' | 'email';

export interface IllustrationProps extends Omit<React.SVGAttributes<SVGSVGElement>, 'width'> {
  /** Which spot scene. empty / search for EmptyState; error / offline for Alert panels and 404-style pages;
   *  success after a flow; connect / invite / launch for onboarding steps; hero, cover, email for marketing surfaces. @default "empty" */
  scene?: IllustrationScene;
  /** Rendered width (px or CSS length). Height follows 4:3. 120 in small empty states, 200 default, 320+ in heroes and covers. @default 200 */
  width?: number | string;
  /** Cyan brand glow behind the scene. Turn off over a page that already has a glow. @default true */
  glow?: boolean;
  /** On-ink palette (light tile, cyan lines) for navy panels, dark slides, email headers. @default false */
  onInk?: boolean;
  /** Accessible description when the scene carries meaning on its own. Omit when the title next to it already says it. */
  label?: string;
}

/** Cory spot illustration: solid mascot tile plus duotone props from the icon set, tokens for every colour. */
export function Illustration(props: IllustrationProps): JSX.Element;
/** Every scene name. */
export const ILLUSTRATION_SCENES: IllustrationScene[];
