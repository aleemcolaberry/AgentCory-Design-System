import * as React from 'react';

export interface SkeletonProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** text: one or more 0.9em bars (last one shorter). rect: a block. circle: an avatar. @default "text" */
  variant?: 'text' | 'rect' | 'circle';
  width?: number | string;
  height?: number | string;
  /** Number of bars for text. @default 1 */
  lines?: number;
  /** Override corner radius. */
  radius?: number | string;
}

/** Shimmering content placeholder (`--surface-skeleton` tokens, `cory-shimmer`). aria-hidden. */
export function Skeleton(props: SkeletonProps): JSX.Element;
