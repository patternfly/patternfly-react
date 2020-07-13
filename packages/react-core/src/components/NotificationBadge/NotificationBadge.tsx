import * as React from 'react';
import { Button, ButtonVariant, ButtonProps } from '../Button';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/NotificationBadge/notification-badge';

export enum NotificationBadgeVariant {
  read = 'read',
  unread = 'unread',
  attention = 'attention'
}

export interface NotificationBadgeProps extends Omit<ButtonProps, 'variant'> {
  /**  Adds styling to the notification badge to indicate it has been read */
  isRead?: boolean;
  /** Determines the variant of the notification badge */
  variant?: NotificationBadgeVariant | 'read' | 'unread' | 'attention';
  /** A number displayed in the badge alongside the icon */
  count?: number;
  /** content rendered inside the Notification Badge */
  children?: React.ReactNode;
  /** additional classes added to the Notification Badge */
  className?: string;
  /** Adds accessible text to the Notification Badge. */
  'aria-label'?: string;
}

export const NotificationBadge: React.FunctionComponent<NotificationBadgeProps> = ({
  isRead = false,
  variant = isRead ? 'read' : 'unread',
  count = 0,
  className,
  children,
  ...props
}: NotificationBadgeProps) => (
  <Button variant={ButtonVariant.plain} className={className} {...props}>
    <span className={css(styles.notificationBadge, styles.modifiers[variant])}>
      {children}
      {count > 0 && <span className={css(styles.notificationBadgeCount)}>{count}</span>}
    </span>
  </Button>
);
NotificationBadge.displayName = 'NotificationBadge';
