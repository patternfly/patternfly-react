import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Drawer/drawer';
import { css } from '@patternfly/react-styles';

export interface DrawerActionsProps extends React.HTMLProps<HTMLDivElement> {
  /** Additional classes added to the drawer actions button. */
  className?: string;
  /** Actions to be rendered in the panel head. */
  children?: React.ReactNode;
}

/**
 *
 */
export function DrawerActions({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  className = '',
  children,
  ...props
}: DrawerActionsProps) {
  return (
    <div className={css(styles.drawerActions, className)} {...props}>
      {children}
    </div>
  );
}
