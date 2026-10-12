import * as React from 'react';

export interface DialogProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Render when true; unmounts when false. */
  open: boolean;
  /** Escape, scrim click and the close button call this. */
  onClose?: () => void;
  /** Heading (h2, aria-labelledby). */
  title?: React.ReactNode;
  /** One-line context under the title (aria-describedby). */
  description?: React.ReactNode;
  /** Body: form fields, content. */
  children?: React.ReactNode;
  /** Buttons, end-aligned. Secondary first, then the one primary. */
  actions?: React.ReactNode;
  /** Panel width 420 / 560 / 720. @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** danger adds the red glyph tile for destructive confirms. @default "default" */
  tone?: 'default' | 'danger';
  /** Allow Escape / scrim / × to close. Set false while a submit is in flight. @default true */
  dismissible?: boolean;
  /** @default "Close" */
  closeLabel?: string;
  /** Element to focus on open (defaults to the first field or button). */
  initialFocusRef?: React.RefObject<HTMLElement>;
}

/** Accessible modal: --z-modal scrim, focus trap, Escape, focus return, scroll lock, enter animation. */
export function Dialog(props: DialogProps): JSX.Element | null;
