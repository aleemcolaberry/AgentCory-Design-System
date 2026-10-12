import * as React from 'react';

export interface MediaFrameProps extends React.HTMLAttributes<HTMLElement> {
  /** Image or video URL. Omit for a striped placeholder. */
  src?: string;
  /** Video poster image. */
  poster?: string;
  /** Alt text (image) / placeholder label. */
  alt?: string;
  /** CSS aspect-ratio. @default "16 / 9" */
  ratio?: string;
  /** Treat `src` as a video with play / mute controls. @default false */
  video?: boolean;
  /** Autoplay muted (video only). @default false */
  autoplay?: boolean;
  /** @default true */
  loop?: boolean;
  /** Caption under the frame. */
  caption?: React.ReactNode;
  /** Corner radius. @default "var(--radius-xl)" */
  radius?: string;
  /** object-fit. @default "cover" */
  fit?: 'cover' | 'contain';
  /** Content pinned to the bottom inline-start corner over a navy gradient scrim (titles on covers). */
  overlay?: React.ReactNode;
}

/**
 * Rounded media tile with fixed aspect ratio, images, video with play/mute,
 * case-study covers with overlay titles.
 */
export function MediaFrame(props: MediaFrameProps): JSX.Element;
