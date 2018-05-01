import { HTMLAttributes, SFC } from 'react';

export interface AggregateStatusCountProps
  extends HTMLAttributes<HTMLSpanElement> {}

declare const AggregateStatusCount: SFC<AggregateStatusCountProps>;

export default AggregateStatusCount;
