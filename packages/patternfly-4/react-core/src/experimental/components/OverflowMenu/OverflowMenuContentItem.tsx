import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/OverflowMenu/overflow-menu';

export interface OverflowMenuContentItemProps extends React.HTMLProps<HTMLDivElement> {
  /** Any elements that can be rendered in the menu */
  children?: any;
  /** Additional classes added to the OverflowMenuItem */
  className?: string;
  /** Modifies the overflow menu item visibility */
  persistent?: boolean;
  /** Indicates that item is not visible */
  isHidden?: boolean;
}

export const OverflowMenuContentItem: React.SFC<OverflowMenuContentItemProps> = ({
  className,
  children,
  persistent = false,
  isHidden,
  ...props
}) => (
  <div hidden={!persistent && isHidden} className={css(
    styles.overflowMenuItem,
    persistent && styles.modifiers.persistent,
    className
  )} >
    {children}
  </div>
);