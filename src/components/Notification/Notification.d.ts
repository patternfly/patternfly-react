import { HTMLAttributes, SFC } from 'react';

export interface NotificationProps extends HTMLAttributes<HTMLDivElement> {
  /** seen Notification */
  seen?: boolean;
  /** show Loading Notification */
  type?: 'notification' | 'loading';
}

declare const Notification: SFC<NotificationProps>;

export default Notification;
