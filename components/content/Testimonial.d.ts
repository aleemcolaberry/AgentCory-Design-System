import * as React from 'react';

export interface TestimonialProps extends React.HTMLAttributes<HTMLElement> {
  /** Headline result, e.g. "847%". */
  metric?: React.ReactNode;
  /** Label beside the metric, e.g. "ROI in Year 1". */
  metricLabel?: React.ReactNode;
  /** The quotation (no surrounding quote marks needed). */
  quote: React.ReactNode;
  /** Person's name. */
  name: React.ReactNode;
  /** Title / institution. */
  role?: React.ReactNode;
  /** Optional headshot URL; falls back to initials. */
  photo?: string;
}

/**
 * Customer testimonial with a leading gradient metric and attribution.
 */
export function Testimonial(props: TestimonialProps): JSX.Element;
