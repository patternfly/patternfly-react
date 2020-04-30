import * as React from 'react';

import styles from '@patternfly/react-styles/css/components/NotificationDrawer/notification-drawer';
import { css } from '@patternfly/react-styles';

export interface NotificationDrawerProps extends React.HTMLProps<HTMLDivElement> {
  /**  Content rendered inside the notification drawer */
  children?: React.ReactNode;
  /**  Additional classes added to the notification drawer */
  className?: string;
}

export const NotificationDrawer: React.FunctionComponent<NotificationDrawerProps> = ({
  children,
  className = '',
  ...props
}: NotificationDrawerProps) => (
  <div {...props} className={css(styles.notificationDrawer, className)}>
    {children}
  </div>
);
