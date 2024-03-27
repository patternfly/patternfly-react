import { FunctionComponent } from 'react';
import { Timestamp } from '@patternfly/react-core';

export const TimestampCustomFormat: FunctionComponent = () => (
  <Timestamp customFormat={{ year: '2-digit', month: 'short', weekday: 'short', day: 'numeric', hour: 'numeric' }} />
);
