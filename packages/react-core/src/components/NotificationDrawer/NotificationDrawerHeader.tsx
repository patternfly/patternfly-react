import { HTMLProps, ReactNode, MouseEvent, FunctionComponent } from 'react';

import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/NotificationDrawer/notification-drawer';
import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';

import { Text, TextVariants } from '../Text';
import { Button, ButtonVariant } from '../Button';

export interface NotificationDrawerHeaderProps extends HTMLProps<HTMLDivElement> {
  /**  Content rendered inside the drawer */
  children?: ReactNode;
  /**  Additional classes for notification drawer header. */
  className?: string;
  /** Adds custom accessible text to the notification drawer close button. */
  closeButtonAriaLabel?: string;
  /**  Notification drawer heading count */
  count?: number;
  /**  Notification drawer heading custom text which can be used instead of providing count/unreadText */
  customText?: string;
  /**  Callback for when close button is clicked */
  onClose?: (event: KeyboardEvent | MouseEvent) => void;
  /**  Notification drawer heading title */
  title?: string;
  /**  Notification drawer heading unread text used in combination with a count */
  unreadText?: string;
}

export const NotificationDrawerHeader: FunctionComponent<NotificationDrawerHeaderProps> = ({
  children,
  className = '',
  count,
  closeButtonAriaLabel = 'Close',
  customText,
  onClose,
  title = 'Notifications',
  unreadText = 'unread',
  ...props
}: NotificationDrawerHeaderProps) => (
  <div {...props} className={css(styles.notificationDrawerHeader, className)}>
    <Text component={TextVariants.h1} className={css(styles.notificationDrawerHeaderTitle)}>
      {title}
    </Text>
    {(customText !== undefined || count !== undefined) && (
      <span className={css(styles.notificationDrawerHeaderStatus)} aria-live="polite">
        {customText || `${count} ${unreadText}`}
      </span>
    )}
    {(children || onClose) && (
      <div className={css(styles.notificationDrawerHeaderAction)}>
        {children}
        {onClose && (
          <div>
            <Button variant={ButtonVariant.plain} aria-label={closeButtonAriaLabel} onClick={(event) => onClose(event)}>
              <TimesIcon aria-hidden="true" />
            </Button>
          </div>
        )}
      </div>
    )}
  </div>
);
NotificationDrawerHeader.displayName = 'NotificationDrawerHeader';
