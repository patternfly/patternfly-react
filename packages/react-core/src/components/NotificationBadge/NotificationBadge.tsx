import { useEffect, useState } from 'react';
import { Button, ButtonVariant, ButtonProps } from '../Button';
import AttentionBellIcon from '@patternfly/react-icons/dist/esm/icons/attention-bell-icon';
import BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';
import styles from '@patternfly/react-styles/css/components/Button/button';
import { css } from '@patternfly/react-styles';

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
  /** Flag indicating whether the notification badge animation should be triggered. Each
   * time this prop is true, the animation will be triggered a single time.
   */
  shouldNotify?: boolean;
  /** Callback for when the animation of the notification badge icon ends.
   */
  onAnimationEnd?: (event: React.AnimationEvent<HTMLButtonElement>) => void;
}

export const NotificationBadge: React.FunctionComponent<NotificationBadgeProps> = ({
  children,
  variant = NotificationBadgeVariant.read,
  count = 0,
  attentionIcon = <AttentionBellIcon />,
  icon = <BellIcon />,
  className,
  isExpanded = false,
  shouldNotify = false,
  onAnimationEnd,
  ...props
}: NotificationBadgeProps) => {
  const [isAnimating, setIsAnimating] = useState(shouldNotify);
  const hasCount = count > 0;
  const hasChildren = children !== undefined;
  const isAttention = variant === NotificationBadgeVariant.attention;
  const notificationIcon = isAttention ? attentionIcon : icon;
  let notificationContent: React.ReactNode = null;

  if (hasCount) {
    notificationContent = count;
  } else if (hasChildren) {
    notificationContent = children;
  }

  const buttonClassName = isAnimating ? css(className, styles.modifiers.notify) : className;

  useEffect(() => {
    setIsAnimating(shouldNotify);
  }, [shouldNotify]);

  const handleAnimationEnd = (event: React.AnimationEvent<HTMLButtonElement>) => {
    onAnimationEnd?.(event);
    setIsAnimating(false);
  };

  return (
    <Button
      variant={ButtonVariant.stateful}
      className={buttonClassName}
      aria-expanded={isExpanded}
      state={variant}
      isClicked={isExpanded}
      icon={notificationIcon}
      onAnimationEnd={handleAnimationEnd}
      {...props}
    >
      {notificationContent}
    </Button>
  );
};
NotificationBadge.displayName = 'NotificationBadge';
