import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Drawer/drawer';
import { css } from '@patternfly/react-styles';

/** Provides a description within the drawer panel. This should typically follow the drawer head. */

export interface DrawerPanelDescriptionProps extends React.HTMLProps<HTMLDivElement> {
  /** Additional classes added to the drawer description. */
  className?: string;
  /** Content to be rendered in the drawer description */
  children: React.ReactNode;
}

export const DrawerPanelDescription: React.FunctionComponent<DrawerPanelDescriptionProps> = ({
  className,
  children,
  ...props
}: DrawerPanelDescriptionProps) => (
  <div className={css(styles.drawerDescription, className)} {...props}>
    {children}
  </div>
);
DrawerPanelDescription.displayName = 'DrawerPanelDescription';
