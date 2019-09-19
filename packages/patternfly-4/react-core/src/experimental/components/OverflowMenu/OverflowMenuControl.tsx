import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/OverflowMenu/overflow-menu';

export interface OverflowMenuControlProps extends React.HTMLProps<HTMLDivElement> {
  /** Any elements that can be rendered in the menu */
  children?: any;
  /** Additional classes added to the OverflowMenuControl */
  className?: string;
  /** Triggers the overflow dropdown to persist at all viewport sizes */
  alwaysPersist?: boolean;
}

export const OverflowMenuControl: React.SFC<OverflowMenuControlProps> = ({
  className,
  children,
  alwaysPersist,
  ...props
}) => (
  <div className={css(
    styles.overflowMenuControl,
    alwaysPersist && styles.modifiers.additionalOptions,
    className)
  }>
    {children}
  </div>
);