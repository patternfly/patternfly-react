import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Drawer/drawer';
import { css } from '@patternfly/react-styles';

export interface DrawerPanelContentProps extends React.HTMLProps<HTMLDivElement> {
  /** Additional classes added to the Drawer. */
  className?: string;
  /** Content to rendered in the drawer */
  children?: React.ReactNode;
  /** Indicates if there should be padding around the drawer */
  hasPadding?: boolean;
}

export const DrawerPanelContent: React.SFC<DrawerPanelContentProps> = ({
  className = '',
  children,
  hasPadding = true,
  ...props
}: DrawerPanelContentProps) => (
      <aside className={css(styles.drawerPanel, className)} {...props}>
        <div className={css(styles.drawerPanelBody, hasPadding === false && styles.modifiers.noPadding)}>
          { children }
        </div>
      </aside>
);
