import React from 'react';
import { Timestamp } from '@patternfly/react-core';

export const TimestampUTCTooltip: React.FunctionComponent = () => (
  <>
    <Timestamp datetime="2022-08-09T14:57:00" date={new Date(2022, 7, 9, 14, 57, 0)} hasUTCTooltip />
    <br />
    <br />
    <Timestamp
      datetime="2022-08-09T14:57:00"
      date={new Date(2022, 7, 9, 14, 57, 0)}
      hasUTCTooltip
      utcSuffix="Coordinated Universal Time"
    />
  </>
);
