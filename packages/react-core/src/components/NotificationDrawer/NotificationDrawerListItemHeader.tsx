import * as React from 'react';

import BellIcon from '@patternfly/react-icons/dist/js/icons/bell-icon';
import CheckCircleIcon from '@patternfly/react-icons/dist/js/icons/check-circle-icon';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/js/icons/exclamation-circle-icon';
import ExclamationTriangleIcon from '@patternfly/react-icons/dist/js/icons/exclamation-triangle-icon';
import InfoCircleIcon from '@patternfly/react-icons/dist/js/icons/info-circle-icon';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/NotificationDrawer/notification-drawer';
import a11yStyles from '@patternfly/react-styles/css/utilities/Accessibility/accessibility';

import maxLines from '@patternfly/react-tokens/dist/js/c_notification_drawer__list_item_header_title_max_lines';

export const variantIcons = {
  success: CheckCircleIcon,
  danger: ExclamationCircleIcon,
  warning: ExclamationTriangleIcon,
  info: InfoCircleIcon,
  default: BellIcon
};

export interface NotificationDrawerListItemHeaderProps extends React.HTMLProps<HTMLDivElement> {
  /**  Actions rendered inside the notification drawer list item header */
  children?: React.ReactNode;
  /**  Additional classes for notification drawer list item header. */
  className?: string;
  /**  Add custom icon for notification drawer list item header */
  icon?: React.ReactNode;
  /**  Notification drawer list item header screen reader title */
  srTitle?: string;
  /**  Notification drawer list item title */
  title: string;
  /**  Variant indicates the severity level */
  variant?: 'success' | 'danger' | 'warning' | 'info' | 'default';
  /** Truncate title to number of lines */
  truncateTitle?: number;
}

export const NotificationDrawerListItemHeader: React.FunctionComponent<NotificationDrawerListItemHeaderProps> = ({
  children,
  className = '',
  icon = null,
  srTitle,
  title,
  variant = 'default',
  truncateTitle = 0,
  ...props
}: NotificationDrawerListItemHeaderProps) => {
  const titleRef = React.useRef(null);
  React.useEffect(() => {
    if (!titleRef.current || !truncateTitle) {
      return;
    }
    titleRef.current.style.setProperty(maxLines.name, truncateTitle.toString());
  }, [titleRef, truncateTitle]);
  const Icon = variantIcons[variant];

  return (
    <React.Fragment>
      <div {...props} className={css(styles.notificationDrawerListItemHeader, className)}>
        <span className={css(styles.notificationDrawerListItemHeaderIcon)}>{icon ? icon : <Icon />}</span>
        <h2
          ref={titleRef}
          className={css(styles.notificationDrawerListItemHeaderTitle, truncateTitle && styles.modifiers.truncate)}
        >
          {srTitle && <span className={css(a11yStyles.screenReader)}>{srTitle}</span>}
          {title}
        </h2>
      </div>
      {children && <div className={css(styles.notificationDrawerListItemAction)}>{children}</div>}
    </React.Fragment>
  );
};
NotificationDrawerListItemHeader.displayName = 'NotificationDrawerListItemHeader';
