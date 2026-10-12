import * as React from 'react';

/**
 * Blank surface tile for bento grids, covers, and panels.
 * @startingPoint section="Surfaces" subtitle="Generic card, default, sunken, outline, ink, brand" viewport="520x240"
 */
export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  /** @default "default" */
  variant?: 'default' | 'sunken' | 'outline' | 'ink' | 'brand';
  /** Inner padding step, or any CSS length. @default "md" */
  padding?: 'none' | 'sm' | 'md' | 'lg' | string;
  /** Lift + deepen shadow on hover. @default false */
  interactive?: boolean;
  /** Focus-ring border for selected tiles. @default false */
  selected?: boolean;
  /** Render as a link. */
  href?: string;
  /** Override the element tag (e.g. "article", "li"). */
  as?: string;
  children?: React.ReactNode;
}

/**
 * Card: the one primitive behind bento tiles, case-study covers, and panels.
 * `ink` carries the brand's off-edge cyan glow and theme-stable on-ink text.
 */
export function Card(props: CardProps): JSX.Element;
