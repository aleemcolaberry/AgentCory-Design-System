import * as React from 'react';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Accessible name, required. */
  label: string;
  /** @default "secondary" */
  variant?: 'primary' | 'ink' | 'secondary' | 'ghost' | 'onInk';
  /** 36 / 44 / 52px. @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Ghost only: pressed/active tint. @default false */
  active?: boolean;
  /** Dim and block interaction. @default false */
  disabled?: boolean;
  /** Spinner replaces the icon; interaction blocked. @default false */
  loading?: boolean;
  /** Screen-reader text while loading. @default "Loading" */
  loadingLabel?: string;
  /** The icon. */
  children?: React.ReactNode;
}

/**
 * Round icon-only button (close, play, menu, theme toggle). 44px default hit target.
 */
export function IconButton(props: IconButtonProps): JSX.Element;
