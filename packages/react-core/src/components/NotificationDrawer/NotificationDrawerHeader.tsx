import * as React from 'react';

import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/NotificationDrawer/notification-drawer';

import { Text, TextVariants } from '../Text';

interface NotificationDrawerCloseButtonProps extends React.HTMLProps<HTMLDivElement> {
  /** Optional icon other than x */
  icon?: React.ReactNode;
  /**  Callback for when close button is clicked */
  onClose: () => void;
}

export interface NotificationDrawerHeaderProps extends React.HTMLProps<HTMLDivElement> {
  /**  Content rendered inside the drawer */
  children?: React.ReactNode;
  /**  Additional classes for notification drawer header. */
  className?: string;
  /** Optional icon other than x */
  closeIcon?: React.ReactNode;
  /**  Notification drawer heading count */
  count?: number;
  /**  Notification drawer heading custom text which can be used instead of providing count/unreadText */
  customText?: string;
  /**  Callback for when close button is clicked */
  onClose?: () => void;
  /**  Notification drawer heading title */
  title?: string;
  /**  Notification drawer heading unread text used in combination with a count */
  unreadText?: string;
}

const NotificationDrawerCloseButton: React.FunctionComponent<NotificationDrawerCloseButtonProps> = ({
  icon,
  onClose
}: NotificationDrawerCloseButtonProps) => (
  <div>
    <button className="pf-c-button pf-m-plain" type="button" aria-label="Close" onClick={onClose}>
      {icon ? icon : <i className="fas fa-times" aria-hidden="true"></i>}
    </button>
  </div>
);
NotificationDrawerCloseButton.displayName = 'NotificationDrawerCloseButton';

export const NotificationDrawerHeader: React.FunctionComponent<NotificationDrawerHeaderProps> = ({
  children,
  className = '',
  count,
  closeIcon,
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
      <span className={css(styles.notificationDrawerHeaderStatus)}>{customText || `${count} ${unreadText}`}</span>
    )}
    {children && (
      <div className={css(styles.notificationDrawerHeaderAction)}>
        {children}
        {onClose && <NotificationDrawerCloseButton onClose={onClose} icon={closeIcon} />}
      </div>
    )}
  </div>
);
NotificationDrawerHeader.displayName = 'NotificationDrawerHeader';
