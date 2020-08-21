import * as React from 'react';

import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/NotificationDrawer/notification-drawer';

import { Text, TextVariants } from '../Text';

export interface NotificationDrawerHeaderProps extends React.HTMLProps<HTMLDivElement> {
  /**  Content rendered inside the drawer */
  children?: React.ReactNode;
  /**  Additional classes for notification drawer header. */
  className?: string;
  /**  Notification drawer heading count */
  count?: number;
  /**  Notification drawer heading title */
  title?: string;
  /**  Notification drawer heading unread text used in combination with a count */
  unreadText?: string;
  /**  Notification drawer heading custom text which can be used instead of providing count/unreadText */
  customText?: string;
}

export const NotificationDrawerHeader: React.FunctionComponent<NotificationDrawerHeaderProps> = ({
  children,
  className = '',
  count,
  title = 'Notifications',
  unreadText = 'unread',
  customText,
  ...props
}: NotificationDrawerHeaderProps) => (
  <div {...props} className={css(styles.notificationDrawerHeader, className)}>
    <Text component={TextVariants.h1} className={css(styles.notificationDrawerHeaderTitle)}>
      {title}
    </Text>
    {(customText !== undefined || count !== undefined) && (
      <span className={css(styles.notificationDrawerHeaderStatus)}>{customText || `${count} ${unreadText}`}</span>
    )}
    {children && <div className={css(styles.notificationDrawerHeaderAction)}>{children}</div>}
  </div>
);
NotificationDrawerHeader.displayName = 'NotificationDrawerHeader';
