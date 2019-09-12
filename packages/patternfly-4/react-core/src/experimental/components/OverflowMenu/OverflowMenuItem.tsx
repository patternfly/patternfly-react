import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/OverflowMenu/overflow-menu';

export interface OverflowMenuItemProps extends React.HTMLProps<HTMLDivElement> {
  children: any;
  className?: string;
  persistent?: boolean;
}

export const OverflowMenuItem: React.SFC<OverflowMenuItemProps> = ({
  className,
  children,
  persistent = false,
  ...props
}) => (
  <div {...props} className={css(
    styles.overflowMenuItem,
    persistent && styles.modifiers.persistent,
    className
  )} >
    {children}
  </div>
);