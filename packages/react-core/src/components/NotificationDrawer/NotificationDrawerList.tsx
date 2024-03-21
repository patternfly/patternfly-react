import { HTMLProps, ReactNode, FunctionComponent } from 'react';

import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/NotificationDrawer/notification-drawer';

export interface NotificationDrawerListProps extends HTMLProps<HTMLUListElement> {
  /**  Content rendered inside the notification drawer list body */
  children?: ReactNode;
  /**  Additional classes added to the notification drawer list body */
  className?: string;
  /**  Adds styling to the notification drawer list to indicate expand/hide state */
  isHidden?: boolean;
  /** Adds an accessible label to the notification drawer list. */
  'aria-label'?: string;
}

export const NotificationDrawerList: FunctionComponent<NotificationDrawerListProps> = ({
  children,
  className = '',
  isHidden = false,
  'aria-label': ariaLabel,
  ...props
}: NotificationDrawerListProps) => (
  <ul
    {...props}
    className={css(`${styles.notificationDrawer}__list`, className)}
    hidden={isHidden}
    role="list"
    aria-label={ariaLabel}
  >
    {children}
  </ul>
);
NotificationDrawerList.displayName = 'NotificationDrawerList';
