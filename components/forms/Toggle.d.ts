import * as React from 'react';

export interface ToggleProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  /** Error message (replaces hint, red track border). E.g. "Couldn't save. Try again." */
  error?: React.ReactNode;
  /** Controlled value. */
  checked?: boolean;
  /** @default false */
  defaultChecked?: boolean;
  disabled?: boolean;
  /** Pending: knob shows a spinner, clicks ignored, aria-busy. Use while the setting saves. @default false */
  loading?: boolean;
  /** Screen-reader text while loading. @default "Saving" */
  loadingLabel?: string;
  onChange?: (checked: boolean, e: React.MouseEvent) => void;
  /** 36×20 / 44×24. @default "md" */
  size?: 'sm' | 'md';
  /** Label after the switch (end) or before it (start, for settings rows). Follows reading direction. "left"/"right" are aliases. @default "end" */
  labelPosition?: 'start' | 'end' | 'left' | 'right';
}

/** Switch (role="switch") for settings that apply immediately. Gradient when on. */
export function Toggle(props: ToggleProps): JSX.Element;
