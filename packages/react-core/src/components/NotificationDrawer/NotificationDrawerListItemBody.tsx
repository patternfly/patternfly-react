import * as React from 'react';

import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/NotificationDrawer/notification-drawer';

export interface NotificationDrawerListItemBodyProps extends React.HTMLProps<HTMLDivElement> {
  /**  Content rendered inside the list item body */
  children?: React.ReactNode;
  /**  Additional classes added to the list item body */
  className?: string;
  /**  List item timestamp */
  timestamp?: React.ReactNode;
}

/**
 *
 */
export function NotificationDrawerListItemBody({
  children,
  className = '',
  timestamp,
  ...props
}: NotificationDrawerListItemBodyProps) {
  return (
    <React.Fragment>
      <div {...props} className={css(styles.notificationDrawerListItemDescription, className)}>
        {children}
      </div>
      {timestamp && <div className={css(styles.notificationDrawerListItemTimestamp, className)}>{timestamp}</div>}
    </React.Fragment>
  );
}
