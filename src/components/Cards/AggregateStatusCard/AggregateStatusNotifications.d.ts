import { HTMLAttributes, SFC } from 'react';

export interface AggregateStatusNotificationsProps
  extends HTMLAttributes<HTMLParagraphElement> {}

declare const AggregateStatusNotifications: SFC<
  AggregateStatusNotificationsProps
>;

export default AggregateStatusNotifications;
