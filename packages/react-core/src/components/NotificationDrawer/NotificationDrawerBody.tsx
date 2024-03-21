import { HTMLProps, ReactNode, FunctionComponent } from 'react';

import styles from '@patternfly/react-styles/css/components/NotificationDrawer/notification-drawer';
import { css } from '@patternfly/react-styles';

export interface NotificationDrawerBodyProps extends HTMLProps<HTMLDivElement> {
  /**  Content rendered inside the body of the notification drawer */
  children?: ReactNode;
  /**  Additional classes added to the notification drawer body */
  className?: string;
}

export const NotificationDrawerBody: FunctionComponent<NotificationDrawerBodyProps> = ({
  children,
  className = '',
  ...props
}: NotificationDrawerBodyProps) => (
  <div {...props} className={css(styles.notificationDrawerBody, className)}>
    {children}
  </div>
);
NotificationDrawerBody.displayName = 'NotificationDrawerBody';
