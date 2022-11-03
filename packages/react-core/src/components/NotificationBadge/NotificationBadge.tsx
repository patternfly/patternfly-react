import * as React from 'react';
import { Button, ButtonVariant, ButtonProps } from '../Button';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/NotificationBadge/notification-badge';
import AttentionBellIcon from '@patternfly/react-icons/dist/esm/icons/attention-bell-icon';
import BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';

export enum NotificationBadgeVariant {
  read = 'read',
  unread = 'unread',
  attention = 'attention'
}

export interface NotificationBadgeProps extends Omit<ButtonProps, 'variant'> {
  /** Adds an accessible label to the notification badge. */
  'aria-label'?: string;
  /** Icon to display for attention variant. */
  attentionIcon?: React.ReactNode;
  /** Content rendered inside the notification badge. */
  children?: React.ReactNode;
  /** Additional classes added to the notification badge. */
  className?: string;
  /** A number displayed in the badge alongside the icon. */
  count?: number;
  /** Icon to display in the notification badge. */
  icon?: React.ReactNode;
  /** Flag for applying expanded styling and setting the aria-expanded attribute on the
   * notification badge.
   */
  isExpanded?: boolean;
  /** @deprecated Use the variant prop instead - Adds styling to the notification badge to indicate it has been read. */
  isRead?: boolean;
  /** Determines the variant of the notification badge. */
  variant?: NotificationBadgeVariant | 'read' | 'unread' | 'attention';
}

export const NotificationBadge: React.FunctionComponent<NotificationBadgeProps> = ({
  isRead,
  children,
  variant = isRead ? 'read' : 'unread',
  count = 0,
  attentionIcon = <AttentionBellIcon />,
  icon = <BellIcon />,
  className,
  isExpanded = false,
  ...props
}: NotificationBadgeProps) => {
  let notificationChild = icon;
  if (children !== undefined) {
    notificationChild = children;
  } else if (variant === NotificationBadgeVariant.attention) {
    notificationChild = attentionIcon;
  }
  return (
    <Button variant={ButtonVariant.plain} className={className} aria-expanded={isExpanded} {...props}>
      <span
        className={css(styles.notificationBadge, styles.modifiers[variant], isExpanded && styles.modifiers.expanded)}
      >
        {notificationChild}
        {count > 0 && <span className={css(styles.notificationBadgeCount)}>{count}</span>}
      </span>
    </Button>
  );
};
NotificationBadge.displayName = 'NotificationBadge';
