import { HTMLProps, ReactNode, Ref, FunctionComponent, forwardRef } from 'react';

import styles from '@patternfly/react-styles/css/components/NotificationDrawer/notification-drawer';
import { css } from '@patternfly/react-styles';

export interface NotificationDrawerProps extends HTMLProps<HTMLDivElement> {
  /**  Content rendered inside the notification drawer */
  children?: ReactNode;
  /**  Additional classes added to the notification drawer */
  className?: string;
  /** @hide Forwarded ref */
  innerRef?: Ref<any>;
}

const NotificationDrawerBase: FunctionComponent<NotificationDrawerProps> = ({
  children,
  className = '',
  innerRef,
  ...props
}: NotificationDrawerProps) => (
  <div ref={innerRef} {...props} className={css(styles.notificationDrawer, className)}>
    {children}
  </div>
);
export const NotificationDrawer = forwardRef((props: NotificationDrawerProps, ref: Ref<any>) => (
  <NotificationDrawerBase innerRef={ref} {...props} />
));
NotificationDrawer.displayName = 'NotificationDrawer';
