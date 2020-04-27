import * as React from 'react';

import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/NotificationDrawer/notification-drawer';

import { Text, TextVariants } from '../Text';

export interface NotificationDrawerHeaderProps extends React.HTMLProps<HTMLDivElement> {
  /**  Content rendered inside the Drawer */
  children?: React.ReactNode;
  /**  Additional classes for Notification Drawer Header. */
  className?: string;
  /**  Notification Drawer heading count */
  count?: number;
  /**  Notification Drawer Heading Title */
  title?: string;
}

export const NotificationDrawerHeader: React.FunctionComponent<NotificationDrawerHeaderProps> = ({
  children,
  className = '',
  count,
  title = 'Notifications',
  ...props
}: NotificationDrawerHeaderProps) => (
  <div {...props} className={css(styles.notificationDrawerHeader, className)}>
    <Text component={TextVariants.h1} className={css(styles.notificationDrawerHeaderTitle)}>
      {title}
    </Text>
    {count && <span className={css(styles.notificationDrawerHeaderStatus)}>{`${count} unread`}</span>}
    {children && <div className={css(styles.notificationDrawerHeaderAction)}>{children}</div>}
  </div>
);
