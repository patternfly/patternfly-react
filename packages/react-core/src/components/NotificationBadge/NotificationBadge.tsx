import * as React from 'react';
import { Button, ButtonVariant, ButtonProps } from '../Button';
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
  /** Determines the variant of the notification badge. */
  variant?: NotificationBadgeVariant | 'read' | 'unread' | 'attention';
}

export const NotificationBadge: React.FunctionComponent<NotificationBadgeProps> = ({
  children,
  variant = NotificationBadgeVariant.read,
  count = 0,
  attentionIcon = <AttentionBellIcon />,
  icon = <BellIcon />,
  className,
  isExpanded = false,
  ...props
}: NotificationBadgeProps) => {
  const hasCount = count > 0;
  const hasChildren = children !== undefined;
  const isAttention = variant === NotificationBadgeVariant.attention;

  const notificationIcon = isAttention ? attentionIcon : icon;
  const notificationContent = hasChildren ? children : notificationIcon;

  const [iconProp, notificationChild] = hasCount ? [notificationContent, count] : [undefined, notificationContent];

  return (
    <Button
      variant={ButtonVariant.stateful}
      className={className}
      aria-expanded={isExpanded}
      state={variant}
      isClicked={isExpanded}
      icon={iconProp}
      {...props}
    >
      {notificationChild}
    </Button>
  );
};
NotificationBadge.displayName = 'NotificationBadge';
