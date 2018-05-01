import { SFC, HTMLAttributes } from 'react';

export interface NotificationContentProps
  extends HTMLAttributes<HTMLDivElement> {}

declare const NotificationContent: SFC<NotificationContentProps>;

export default NotificationContent;
