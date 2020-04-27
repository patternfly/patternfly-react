import * as React from 'react';

import AngleDownIcon from '@patternfly/react-icons/dist/js/icons/angle-down-icon';
import AngleRightIcon from '@patternfly/react-icons/dist/js/icons/angle-right-icon';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/NotificationDrawer/notification-drawer';

import { Badge } from '../Badge';

export interface NotificationDrawerGroupProps extends React.HTMLProps<HTMLElement> {
  /**  Content rendered inside the Group */
  children?: React.ReactNode;
  /**  Additional classes added to the Group */
  className?: string;
  /**  Notification Drawer Group count */
  count: number;
  /**  Adds styling to the Group to indicate expanded state */
  isExpanded: boolean;
  /**  Adds styling to the Group to indicate whether it has been read */
  isRead?: boolean;
  /**  Callback for when Group button is clicked to expand */
  onExpand?: (event: any, value: boolean) => void;
  /**  Notification Drawer Group Title */
  title: string;
}

export const NotificationDrawerGroup: React.FunctionComponent<NotificationDrawerGroupProps> = ({
  children,
  className = '',
  count,
  isExpanded,
  isRead = false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onExpand = (event: any, expanded: boolean) => undefined as any,
  title,
  ...props
}: NotificationDrawerGroupProps) => {
  const ReadIcon = isExpanded ? AngleDownIcon : AngleRightIcon;
  return (
    <section {...props} className={css(styles.notificationDrawerGroup, className)}>
      <h1>
        <button
          className={css(styles.notificationDrawerGroupToggle)}
          aria-expanded={isExpanded}
          onClick={e => onExpand(e, !isExpanded)}
        >
          <div>{title}</div>
          <div className={css(styles.notificationDrawerGroupToggleCount)}>
            <Badge isRead={isRead}>{count}</Badge>
          </div>
          <span className="pf-c-notification-drawer__group-toggle-icon">
            <ReadIcon />
          </span>
        </button>
      </h1>
      {children}
    </section>
  );
};
