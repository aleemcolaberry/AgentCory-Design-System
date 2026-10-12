import * as React from 'react';

export interface ThemeToggleProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** 36 / 44 / 52px. @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** @default "secondary" */
  variant?: 'secondary' | 'ghost' | 'onInk';
  /** localStorage key. @default "cory-theme" */
  storageKey?: string;
}

/**
 * Light/dark switch: sets `data-theme` on <html>, persists the choice,
 * defaults to the OS preference.
 */
export function ThemeToggle(props: ThemeToggleProps): JSX.Element;
