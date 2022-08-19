import React from 'react';
import { Timestamp } from '@patternfly/react-core';

export const TimestampCustomFormat: React.FunctionComponent = () => (
  <Timestamp customFormat={{ year: '2-digit', month: 'short', weekday: 'short', day: 'numeric', hour: 'numeric' }} />
);
