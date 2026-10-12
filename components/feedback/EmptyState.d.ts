import * as React from 'react';

export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  /** cory: mascot tile + first-person copy. neutral: icon tile + product copy. @default "cory" */
  voice?: 'cory' | 'neutral';
  /** Icon for voice="neutral" (e.g. <Icon name="search" />). Ignored for cory. */
  icon?: React.ReactNode;
  /** Spot illustration instead of the mascot tile: empty, search, error, offline, success, not-found. Overrides voice art. */
  scene?: 'empty' | 'search' | 'error' | 'offline' | 'success' | 'connect' | 'invite' | 'launch' | 'not-found';
  /** What is empty, as a short statement. */
  title?: React.ReactNode;
  /** Why, and what fills it. One or two sentences. */
  children?: React.ReactNode;
  /** The one primary action that fills the space. */
  action?: React.ReactNode;
  /** Optional quieter alternative (ghost / secondary). */
  secondaryAction?: React.ReactNode;
  /** sm for list and panel insets. @default "md" */
  size?: 'sm' | 'md';
  /** card draws a dashed frame; plain is bare. @default "card" */
  variant?: 'card' | 'plain';
  /** On-ink colours for navy panels. @default false */
  onInk?: boolean;
}

/** Empty / first-run / no-results block: mascot or icon, title, one line, one action. */
export function EmptyState(props: EmptyStateProps): JSX.Element;
