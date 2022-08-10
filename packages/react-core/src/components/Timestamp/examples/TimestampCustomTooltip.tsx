import React from 'react';
import { Timestamp } from '@patternfly/react-core';

export const TimestampCustomTooltip: React.FunctionComponent = () => (
  <>
    <Timestamp
      datetime="2022-08-09T14:57:00"
      date={new Date(2022, 7, 9, 14, 57, 0)}
      tooltipContent="Last updated on August 9th, 2022 - 2:57 PM UTC"
    />
    <br />
    <br />
    <Timestamp datetime="2022-10-31" tooltipContent="31st of October, 2022">
      Halloween
    </Timestamp>
  </>
);
