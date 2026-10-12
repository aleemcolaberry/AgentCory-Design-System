import * as React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement & HTMLTextAreaElement> {
  /** Field label. */
  label?: React.ReactNode;
  /** Helper text under the field. */
  hint?: React.ReactNode;
  /** Error message (overrides hint, turns the field red). */
  error?: React.ReactNode;
  /** Warning message (amber border): valid but worth a second look, e.g. a non-.edu email. */
  warning?: React.ReactNode;
  /** Success message (green border). */
  success?: React.ReactNode;
  /** Validating / looking up: spinner at inline-end, aria-busy. @default false */
  loading?: boolean;
  /** Disable the field. @default false */
  disabled?: boolean;
  /** Icon inside the field at inline-start (follows reading direction). */
  iconStart?: React.ReactNode;
  /** Icon inside the field at inline-end. */
  iconEnd?: React.ReactNode;
  /** Alias of iconStart. */
  iconLeft?: React.ReactNode;
  /** Alias of iconEnd. */
  iconRight?: React.ReactNode;
  /** Show a required asterisk. @default false */
  required?: boolean;
  /** Render a multi-line textarea. @default false */
  multiline?: boolean;
}

/**
 * Labelled text field with blue focus ring, matches the demo-request forms.
 */
export function Input(props: InputProps): JSX.Element;
