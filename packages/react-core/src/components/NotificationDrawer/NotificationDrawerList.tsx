import * as React from 'react';

import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/NotificationDrawer/notification-drawer';

export interface NotificationDrawerListProps extends React.HTMLProps<HTMLUListElement> {
  /**  Content rendered inside the notification drawer list body */
  children?: React.ReactNode;
  /**  Additional classes added to the notification drawer list body */
  className?: string;
  /**  Adds styling to the notification drawer list to indicate expand/hide state */
  isHidden?: boolean;
}

export const NotificationDrawerList: React.FunctionComponent<NotificationDrawerListProps> = ({
  children,
  className = '',
  isHidden = false,
  ...props
}: NotificationDrawerListProps) => (
  <ul {...props} className={css(styles.notificationDrawerList, className)} hidden={isHidden}>
    {children}
  </ul>
);
