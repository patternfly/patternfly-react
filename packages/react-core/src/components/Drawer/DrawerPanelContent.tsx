import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Drawer/drawer';
import { css } from '@patternfly/react-styles';
import { DrawerContext } from './Drawer';

export interface DrawerPanelContentProps extends React.HTMLProps<HTMLDivElement> {
  /** Additional classes added to the drawer. */
  className?: string;
  /** Content to be rendered in the drawer panel. */
  children?: React.ReactNode;
  /* Flag indicating that the drawer panel should have a border. */
  hasBorder?: boolean;
}

export const DrawerPanelContent: React.SFC<DrawerPanelContentProps> = ({
  className = '',
  children,
  hasBorder = false,
  ...props
}: DrawerPanelContentProps) => (
  <DrawerContext.Consumer>
    {({ isExpanded }) => (
      <div
        className={css(styles.drawerPanel, hasBorder && styles.modifiers.border, className)}
        hidden={!isExpanded}
        aria-hidden={!isExpanded}
        aria-expanded={isExpanded}
        {...props}
      >
        {children}
      </div>
    )}
  </DrawerContext.Consumer>
);
