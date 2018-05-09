import { HTMLAttributes, SFC } from 'react';

export interface AggregateStatusNotificationProps
  extends HTMLAttributes<HTMLSpanElement> {}

declare const AggregateStatusNotification: SFC<
  AggregateStatusNotificationProps
>;

export default AggregateStatusNotificationProps;
