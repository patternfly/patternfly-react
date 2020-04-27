import * as React from 'react';

import { css, getModifier } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/NotificationDrawer/notification-drawer';

export interface NotificationDrawerListItemProps extends React.HTMLProps<HTMLLIElement> {
  /**  Content rendered inside the List Item */
  children?: React.ReactNode;
  /**  Additional classes added to the List Item */
  className?: string;
  /**  Modifies the List Item to include hover styles on :hover */
  isHoverable?: boolean;
  /**  Adds styling to the List Item to indicate it has been read */
  isRead?: boolean;
  /**  Callback for when a List Item is clicked */
  onClick?: (event: any) => void;
  /**  Tab Index for the List Item */
  tabIndex?: number;
  /**  variant indicates the severity level */
  variant?: 'success' | 'danger' | 'warning' | 'info' | 'default';
}

export const NotificationDrawerListItem: React.FunctionComponent<NotificationDrawerListItemProps> = ({
  children,
  className = '',
  isHoverable = true,
  isRead = false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onClick = (event: React.MouseEvent) => undefined as any,
  tabIndex = 0,
  variant = 'default',
  ...props
}: NotificationDrawerListItemProps) => (
  <li
    {...props}
    className={css(
      styles.notificationDrawerListItem,
      isHoverable && styles.modifiers.hoverable,
      getModifier(styles.modifiers, variant),
      isRead && styles.modifiers.read,
      className
    )}
    tabIndex={tabIndex}
    onClick={e => onClick(e)}
  >
    {children}
  </li>
);
