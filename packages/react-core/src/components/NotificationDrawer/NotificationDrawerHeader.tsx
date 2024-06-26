import * as React from 'react';

import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/NotificationDrawer/notification-drawer';
import TimesIcon from '@patternfly/react-icons/dist/esm/icons/times-icon';
import { Button, ButtonVariant } from '../Button';

export interface NotificationDrawerHeaderProps extends React.HTMLProps<HTMLDivElement> {
  /**  Content rendered inside the drawer */
  children?: React.ReactNode;
  /**  Additional classes for notification drawer header. */
  className?: string;
  /** Adds custom accessible text to the notification drawer close button. */
  closeButtonAriaLabel?: string;
  /**  Notification drawer heading count */
  count?: number;
  /**  Notification drawer heading custom text which can be used instead of providing count/unreadText */
  customText?: string;
  /**  Callback for when close button is clicked */
  onClose?: (event: KeyboardEvent | React.MouseEvent) => void;
  /**  Notification drawer heading title */
  title?: string;
  /**  Notification drawer heading unread text used in combination with a count */
  unreadText?: string;
}

export const NotificationDrawerHeader: React.FunctionComponent<NotificationDrawerHeaderProps> = ({
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
    <h1 className={css(styles.notificationDrawerHeaderTitle)}>{title}</h1>
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
            <Button
              variant={ButtonVariant.plain}
              aria-label={closeButtonAriaLabel}
              onClick={(event) => onClose(event)}
              icon={<TimesIcon aria-hidden="true" />}
            />
          </div>
        )}
      </div>
    )}
  </div>
);
NotificationDrawerHeader.displayName = 'NotificationDrawerHeader';
