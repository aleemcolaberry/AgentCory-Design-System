import * as React from 'react';

export interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Current value; omit for an indeterminate sweep. */
  value?: number;
  /** @default 100 */
  max?: number;
  /** Text above the bar; also the accessible name. */
  label?: React.ReactNode;
  /** Show the rounded percentage at inline-end. @default false */
  showValue?: boolean;
  /** 4px or 8px tall. @default "md" */
  size?: 'sm' | 'md';
  /** @default "brand" */
  tone?: 'brand' | 'success' | 'warning' | 'danger';
}

/** role=progressbar with aria-valuenow; brand gradient fill, pill track on `--surface-skeleton`. */
export function ProgressBar(props: ProgressBarProps): JSX.Element;
