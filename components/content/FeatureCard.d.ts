import * as React from 'react';

/**
 * Benefit card with icon tile, heading, copy and capability tags, lifts on hover.
 * Used in the "Why teams choose Cory" grid.
 * @startingPoint section="Content" subtitle="Benefit card with icon + tags" viewport="380x280"
 */
export interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Icon node shown in the tinted tile (e.g. <Icon name="zap" size={24} />). */
  icon?: React.ReactNode;
  /** Card heading. */
  title: React.ReactNode;
  /** Body copy. */
  children?: React.ReactNode;
  /** Short capability tags listed at the foot of the card. */
  tags?: string[];
}

/**
 * Benefit card with icon tile, heading, copy and capability tags.
 */
export function FeatureCard(props: FeatureCardProps): JSX.Element;
