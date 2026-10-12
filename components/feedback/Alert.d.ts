import * as React from 'react';

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Meaning of the message. danger uses role=alert (assertive); others role=status. @default "info" */
  tone?: 'info' | 'success' | 'warning' | 'danger';
  /** Short bold lead line. */
  title?: React.ReactNode;
  /** Body copy. One or two sentences; say what happened and what to do next. */
  children?: React.ReactNode;
  /** Buttons rendered under the copy (Button size="sm" variant="secondary" or "ghost"). */
  action?: React.ReactNode;
  /** Show a dismiss button that calls this. */
  onDismiss?: () => void;
  /** @default "Dismiss" */
  dismissLabel?: string;
  /** Replace the tone glyph. */
  icon?: React.ReactNode;
  /** Tighter padding for use inside cards and forms. @default false */
  compact?: boolean;
}

/** Inline feedback banner on tinted feedback surfaces (`--surface-*` / `--border-*` / `--text-*` per tone). Works in both themes. */
export function Alert(props: AlertProps): JSX.Element;

export interface FeedbackIconProps { tone?: 'info' | 'success' | 'warning' | 'danger'; size?: number; }
/** The shared 20px tone glyph used by Alert, Toast and Dialog. */
export function FeedbackIcon(props: FeedbackIconProps): JSX.Element;
