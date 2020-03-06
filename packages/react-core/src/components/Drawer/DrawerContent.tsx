import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Drawer/drawer';
import { css } from '@patternfly/react-styles';
import { DrawerMain } from './DrawerMain';

export interface DrawerContentProps extends React.HTMLProps<HTMLDivElement> {
  /** Additional classes added to the Drawer. */
  className?: string;
  /** Content to rendered in the drawer */
  children?: React.ReactNode;
  /** Content rendered in drawer the panel */
  panelContent: React.ReactNode;
}

export const DrawerContent: React.SFC<DrawerContentProps> = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  className = '',
  children,
  panelContent,
  ...props
}: DrawerContentProps) => (
  <DrawerMain>
    <div className={css(styles.drawerContent)} {...props}>
      {children}
    </div>
    {panelContent}
  </DrawerMain>
);
