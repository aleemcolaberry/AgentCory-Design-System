import * as React from 'react';

export interface TooltipProps {
  /** The short text shown. 1 to 4 words; never essential instructions. */
  label: React.ReactNode;
  /** Exactly one focusable element. Receives aria-describedby. */
  children: React.ReactElement;
  /** @default "top" */
  placement?: 'top' | 'bottom';
  /** Show delay in ms. @default 250 */
  delay?: number;
  id?: string;
  style?: React.CSSProperties;
}

/** Ink tooltip on hover and keyboard focus, centred over the trigger, Escape to hide. */
export function Tooltip(props: TooltipProps): JSX.Element;
