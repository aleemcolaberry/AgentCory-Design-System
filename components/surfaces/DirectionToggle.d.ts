import * as React from 'react';

export interface DirectionToggleProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 36 / 44 / 52px. @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** @default "secondary" */
  variant?: 'secondary' | 'onInk';
  /** lang written to <html> in RTL. @default "ar" */
  rtlLang?: string;
  /** lang written to <html> in LTR. @default "en" */
  ltrLang?: string;
  /** localStorage key. @default "cory-dir" */
  storageKey?: string;
  /** Segment labels. @default { ltr: "LTR", rtl: "RTL" } */
  labels?: { ltr: React.ReactNode; rtl: React.ReactNode };
  onChange?: (dir: 'ltr' | 'rtl') => void;
}

/**
 * Two-segment LTR / RTL switch. Sets dir + lang on <html>, persists the choice,
 * and dispatches a `cory:direction` window event for scripts that cache layout.
 */
export function DirectionToggle(props: DirectionToggleProps): JSX.Element;
