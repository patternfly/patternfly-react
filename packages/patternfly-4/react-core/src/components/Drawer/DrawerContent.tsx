import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Drawer/drawer';
import { css } from '@patternfly/react-styles';

export interface DrawerContentProps extends React.HTMLProps<HTMLDivElement> {
  /** Additional classes added to the Drawer. */
  className?: string;
  /** Content to rendered in the drawer */
  children?: React.ReactNode;
}

export const DrawerContent: React.SFC<DrawerContentProps> = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  className = '',
  children,
  ...props
}: DrawerContentProps) => (
  <div className={css(styles.drawerContent)} {...props}>
    {children}
  </div>
);
