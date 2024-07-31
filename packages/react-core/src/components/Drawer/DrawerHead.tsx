import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Drawer/drawer';
import { css } from '@patternfly/react-styles';

export interface DrawerHeadProps extends React.HTMLProps<HTMLDivElement> {
  /** Additional classes added to the drawer head. */
  className?: string;
  /** Content to be rendered in the drawer head */
  children?: React.ReactNode;
}

export const DrawerHead: React.FunctionComponent<DrawerHeadProps> = ({
  className = '',
  children,
  ...props
}: DrawerHeadProps) => (
  <div className={css(styles.drawerHead, className)} {...props}>
    {children}
  </div>
);
DrawerHead.displayName = 'DrawerHead';
