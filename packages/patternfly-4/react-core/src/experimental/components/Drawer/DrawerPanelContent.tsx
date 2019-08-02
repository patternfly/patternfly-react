import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Drawer/drawer';
import { css } from '@patternfly/react-styles';

export interface DrawerPanelContentProps extends React.HTMLProps<HTMLDivElement> {
  /** Additional classes added to the Drawer. */
  className?: string;
  /** Content to rendered in the left hand panel */
  children?: React.ReactNode;
}

export const DrawerPanelContent: React.SFC<DrawerPanelContentProps> = ({
  className = '',
  children,
  ...props
}: DrawerPanelContentProps) => (
      <aside className={css(styles.drawerPanel, className)} {...props}>
        <div className={css(styles.drawerPanelBody)}>
          { children }
        </div>
      </aside>
);
