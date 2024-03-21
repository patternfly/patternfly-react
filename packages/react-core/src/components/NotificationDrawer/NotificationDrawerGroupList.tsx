import { HTMLProps, ReactNode, FunctionComponent } from 'react';

import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/NotificationDrawer/notification-drawer';

export interface NotificationDrawerGroupListProps extends HTMLProps<HTMLDivElement> {
  /**  Content rendered inside the notification drawer list body */
  children?: ReactNode;
  /**  Additional classes added to the notification drawer list body */
  className?: string;
}

export const NotificationDrawerGroupList: FunctionComponent<NotificationDrawerGroupListProps> = ({
  children,
  className = '',
  ...props
}: NotificationDrawerGroupListProps) => (
  <div {...props} className={css(styles.notificationDrawerGroupList, className)}>
    {children}
  </div>
);
NotificationDrawerGroupList.displayName = 'NotificationDrawerGroupList';
