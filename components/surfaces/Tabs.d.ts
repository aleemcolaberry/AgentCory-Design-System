import * as React from 'react';

export interface TabItem { value: string; label: React.ReactNode; icon?: React.ReactNode; count?: number | string; /** Not selectable; skipped by arrow keys. */ disabled?: boolean; }

export interface TabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  items: TabItem[];
  /** Controlled value. */
  value?: string;
  /** Uncontrolled initial value. */
  defaultValue?: string;
  onChange?: (value: string) => void;
  /** underline (nav), segmented (sliding pill in a trough), pills (filter bar). @default "underline" */
  variant?: 'underline' | 'segmented' | 'pills';
  /** @default "md" */
  size?: 'sm' | 'md';
  /** Equal-width tabs across the container. @default false */
  fullWidth?: boolean;
  /** aria-label for the tablist. */
  label?: string;
}

/**
 * Tabs / segmented control / filter bar with an animated active indicator.
 * Roving tabindex, arrow keys (mirrored in RTL), Home/End, per-item disabled.
 */
export function Tabs(props: TabsProps): JSX.Element;
