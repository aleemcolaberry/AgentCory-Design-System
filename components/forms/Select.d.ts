import * as React from 'react';

export interface SelectOption { value: string; label: React.ReactNode; disabled?: boolean; }

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  error?: React.ReactNode;
  /** Success message (green border). */
  success?: React.ReactNode;
  required?: boolean;
  disabled?: boolean;
  /** Options are being fetched: disabled, spinner, loadingMessage placeholder. @default false */
  loading?: boolean;
  /** @default "Loading…" */
  loadingMessage?: string;
  /** Shown (disabled) when options is empty. @default "No options yet" */
  emptyMessage?: string;
  /** Shown as a disabled first option when no value is set. */
  placeholder?: string;
  /** Strings or {value,label} objects. */
  options: Array<string | SelectOption>;
}

/** Native select dressed like Input, same label/hint/error/focus treatment. */
export function Select(props: SelectProps): JSX.Element;
