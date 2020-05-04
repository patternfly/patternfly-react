import * as React from 'react';

import AngleRightIcon from '@patternfly/react-icons/dist/js/icons/angle-right-icon';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/NotificationDrawer/notification-drawer';

import { Badge } from '../Badge';

export interface NotificationDrawerGroupProps extends React.HTMLProps<HTMLElement> {
  /**  Content rendered inside the group */
  children?: React.ReactNode;
  /**  Additional classes added to the group */
  className?: string;
  /**  Notification drawer group count */
  count: number;
  /**  Adds styling to the group to indicate expanded state */
  isExpanded: boolean;
  /**  Adds styling to the group to indicate whether it has been read */
  isRead?: boolean;
  /**  Callback for when group button is clicked to expand */
  onExpand?: (event: any, value: boolean) => void;
  /**  Notification drawer group title */
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
}: NotificationDrawerGroupProps) => (
  <section
    {...props}
    className={css(styles.notificationDrawerGroup, isExpanded && styles.modifiers.expanded, className)}
  >
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
          <AngleRightIcon />
        </span>
      </button>
    </h1>
    {children}
  </section>
);
