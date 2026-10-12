import * as React from 'react';

export interface ChipProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Selected / active state (solid navy). @default false */
  selected?: boolean;
  /** Called with the next selected value when clicked. */
  onToggle?: (next: boolean, e: React.MouseEvent) => void;
  /** Leading icon. */
  icon?: React.ReactNode;
  /** Show a trailing × remove button (its own focusable control). @default false */
  removable?: boolean;
  onRemove?: (e: React.MouseEvent) => void;
  /** aria-label of the remove button. @default "Remove {label}" */
  removeLabel?: string;
  /** Dim and block interaction. @default false */
  disabled?: boolean;
  /** @default "md" */
  size?: 'sm' | 'md';
  children?: React.ReactNode;
}

/**
 * Selectable pill for filters and tags. Use Badge for read-only labels.
 */
export function Chip(props: ChipProps): JSX.Element;
