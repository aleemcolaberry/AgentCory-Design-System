import * as React from 'react';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  /** Error message (replaces hint, red border, aria-invalid). For required consents. */
  error?: React.ReactNode;
  /** Controlled value. */
  checked?: boolean;
  /** @default false */
  defaultChecked?: boolean;
  /** Mixed state (dash). @default false */
  indeterminate?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean, e: React.ChangeEvent<HTMLInputElement>) => void;
}

/** Labelled checkbox, 20px box, brand-blue fill, focus ring, indeterminate support. */
export function Checkbox(props: CheckboxProps): JSX.Element;
