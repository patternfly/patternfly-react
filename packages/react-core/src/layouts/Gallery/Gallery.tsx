import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/layouts/Gallery/gallery';

export interface GalleryProps extends React.HTMLProps<HTMLDivElement> {
  /** content rendered inside the Gallery layout */
  children?: React.ReactNode;
  /** additional classes added to the Gallery layout */
  className?: string;
  /** Adds space between children. */
  hasGutter?: boolean;
}
export const Gallery: React.FunctionComponent<GalleryProps> = ({
  children = null,
  className = '',
  hasGutter = false,
  ...props
}: GalleryProps) => (
  <div className={css(styles.gallery, hasGutter && styles.modifiers.gutter, className)} {...props}>
    {children}
  </div>
);
