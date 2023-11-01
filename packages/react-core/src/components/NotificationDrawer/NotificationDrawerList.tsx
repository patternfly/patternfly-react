import * as React from 'react';

import { css } from '@patternfly/react-styles';

export interface NotificationDrawerListProps extends React.HTMLProps<HTMLUListElement> {
  /**  Content rendered inside the notification drawer list body */
  children?: React.ReactNode;
  /**  Additional classes added to the notification drawer list body */
  className?: string;
  /**  Adds styling to the notification drawer list to indicate expand/hide state */
  isHidden?: boolean;
  /** Adds an accessible label to the notification drawer list. */
  'aria-label'?: string;
}

export const NotificationDrawerList: React.FunctionComponent<NotificationDrawerListProps> = ({
  children,
  className = '',
  isHidden = false,
  'aria-label': ariaLabel,
  ...props
}: NotificationDrawerListProps) => (
  <ul
    {...props}
    className={css('pf-v5-c-notification-drawer__list', className)}
    hidden={isHidden}
    role="list"
    aria-label={ariaLabel}
  >
    {children}
  </ul>
);
NotificationDrawerList.displayName = 'NotificationDrawerList';
