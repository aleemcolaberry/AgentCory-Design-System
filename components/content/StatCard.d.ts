import * as React from 'react';

/**
 * Headline metric block: the big-number treatment used across hero,
 * "How Cory Works", and ROI sections.
 * @startingPoint section="Content" subtitle="Big-number brand metric" viewport="280x150"
 */
export interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The metric, e.g. "<60s", "94%", "$2.4M". */
  value: React.ReactNode;
  /** Caption under the number. */
  label: React.ReactNode;
  /** Optional smaller line below the label. */
  sub?: React.ReactNode;
  /** Paint the number with the brand gradient. @default false */
  gradient?: boolean;
  /** "start" follows reading direction ("left" is an alias). @default "start" */
  align?: 'start' | 'left' | 'center';
}

/**
 * Headline metric block with optional gradient number.
 */
export function StatCard(props: StatCardProps): JSX.Element;
