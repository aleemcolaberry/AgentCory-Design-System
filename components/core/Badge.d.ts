import * as React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Color tone. @default "brand" */
  tone?: 'brand' | 'cyan' | 'success' | 'warning' | 'danger' | 'neutral' | 'ink' | 'onInk';
  /** @default "md" */
  size?: 'sm' | 'md';
  /** Show a leading status dot. @default false */
  dot?: boolean;
  children?: React.ReactNode;
}

/**
 * Pill-shaped status / metric label.
 */
export function Badge(props: BadgeProps): JSX.Element;
