import { HTMLProps, ReactNode, FunctionComponent, Fragment } from 'react';

import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/NotificationDrawer/notification-drawer';

export interface NotificationDrawerListItemBodyProps extends HTMLProps<HTMLDivElement> {
  /**  Content rendered inside the list item body */
  children?: ReactNode;
  /**  Additional classes added to the list item body */
  className?: string;
  /**  List item timestamp */
  timestamp?: ReactNode;
}

export const NotificationDrawerListItemBody: FunctionComponent<NotificationDrawerListItemBodyProps> = ({
  children,
  className = '',
  timestamp,
  ...props
}: NotificationDrawerListItemBodyProps) => (
  <Fragment>
    <div {...props} className={css(styles.notificationDrawerListItemDescription, className)}>
      {children}
    </div>
    {timestamp && <div className={css(styles.notificationDrawerListItemTimestamp, className)}>{timestamp}</div>}
  </Fragment>
);
NotificationDrawerListItemBody.displayName = 'NotificationDrawerListItemBody';
