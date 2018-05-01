import { SFC } from 'react';

export interface NotificationInfoProps {
  /** Additional element css classes */
  className?: string;
  /** leftText Strings */
  leftText?: string;
  /** rightText Strings */
  rightText?: string;
}

declare const NotificationInfo: SFC<NotificationInfoProps>;

export default NotificationInfo;
