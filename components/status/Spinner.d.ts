import * as React from 'react';

export interface SpinnerProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Diameter in px. @default 20 */
  size?: number;
  /** Announced text; shown visually with showLabel or when reduced motion is on. @default "Loading" */
  label?: React.ReactNode;
  /** @default false */
  showLabel?: boolean;
  /** brand: action blue. current: inherits text colour. onInk: white. @default "brand" */
  tone?: 'brand' | 'current' | 'onInk';
}

/** Spinning ring (role=status). Falls back to static dots + visible label under prefers-reduced-motion. */
export function Spinner(props: SpinnerProps): JSX.Element;
