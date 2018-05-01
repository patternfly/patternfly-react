import { SFC, HTMLAttributes } from 'react';

export interface NotificationMessageProps
  extends HTMLAttributes<HTMLSpanElement> {}

declare const NotificationMessage: SFC<NotificationMessageProps>;

export default NotificationMessage;
