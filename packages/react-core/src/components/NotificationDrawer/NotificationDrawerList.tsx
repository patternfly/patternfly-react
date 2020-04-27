import * as React from 'react';

import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/NotificationDrawer/notification-drawer';

export interface NotificationDrawerListProps extends React.HTMLProps<HTMLUListElement> {
  /**  Content rendered inside the Notification Drawer List Body */
  children?: React.ReactNode;
  /**  Additional classes added to the Notification Drawer List Body */
  className?: string;
  /**  Adds styling to the Notification Drawer List to indicate expand/hide state */
  hidden?: boolean;
}

export const NotificationDrawerList: React.FunctionComponent<NotificationDrawerListProps> = ({
  children,
  className = '',
  hidden = false,
  ...props
}: NotificationDrawerListProps) => (
  <ul {...props} className={css(styles.notificationDrawerList, className)} hidden={hidden}>
    {children}
  </ul>
);
