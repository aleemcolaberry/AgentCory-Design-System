import * as React from 'react';

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  /** @default "info" */
  tone?: 'info' | 'success' | 'warning' | 'danger';
  title?: React.ReactNode;
  children?: React.ReactNode;
  /** One inline action, e.g. <Button size="sm" variant="onInk">Undo</Button>. */
  action?: React.ReactNode;
  /** Called when the timer ends or the user dismisses. Required for auto-dismiss. */
  onDismiss?: () => void;
  /** Milliseconds before auto-dismiss; 0 keeps it until dismissed. Pauses on hover/focus. @default 6000 */
  duration?: number;
  /** @default "Dismiss" */
  dismissLabel?: string;
}

/** Brief post-action confirmation on an ink surface (theme-stable). Place inside <ToastRegion>. */
export function Toast(props: ToastProps): JSX.Element;

export interface ToastRegionProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Which bottom corner. @default "end" */
  position?: 'start' | 'center' | 'end';
  /** aria-label of the region. @default "Notifications" */
  label?: string;
  children?: React.ReactNode;
}

/** Fixed aria-live stack for Toasts at --z-toast. One per page. */
export function ToastRegion(props: ToastRegionProps): JSX.Element;
