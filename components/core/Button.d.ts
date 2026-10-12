import * as React from 'react';

/**
 * AgentCory call-to-action button, pill-shaped with soft elevation.
 * @startingPoint section="Core" subtitle="Pill CTA with brand-gradient primary" viewport="460x130"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. @default "primary" */
  variant?: 'primary' | 'ink' | 'secondary' | 'ghost' | 'onInk' | 'onInkSolid';
  /** Control size. @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Node before the label (inline-start: left in LTR, right in RTL). Preferred over iconLeft. */
  iconStart?: React.ReactNode;
  /** Node after the label (inline-end). Preferred over iconRight. */
  iconEnd?: React.ReactNode;
  /** Alias of iconStart, kept for compatibility. */
  iconLeft?: React.ReactNode;
  /** Alias of iconEnd, kept for compatibility. */
  iconRight?: React.ReactNode;
  /** Stretch to fill the container width. @default false */
  fullWidth?: boolean;
  /** Show a spinner and block interaction. Under reduced motion: static dots + visible label. @default false */
  loading?: boolean;
  /** Screen-reader text while loading. @default "Loading" */
  loadingLabel?: string;
  /** Render as an anchor pointing here (keeps button styling). */
  href?: string;
  children?: React.ReactNode;
}

/**
 * AgentCory CTA button: `primary` carries the AA-safe blue→cyan gradient
 * (`--gradient-brand-deep`). Hover tints, keyboard focus shows a ring,
 * press scales to 0.97. Use one primary per view.
 */
export function Button(props: ButtonProps): JSX.Element;
