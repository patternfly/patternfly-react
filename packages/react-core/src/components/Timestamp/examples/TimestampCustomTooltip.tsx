import React from 'react';
import { Timestamp, TimestampTooltipVariant } from '@patternfly/react-core';

export const TimestampCustomTooltip: React.FunctionComponent = () => (
  <>
    <Timestamp
      datetime="2022-08-09T14:57:00"
      date={new Date(2022, 7, 9, 14, 57, 0)}
      tooltip={{ variant: TimestampTooltipVariant.custom, content: 'Last updated on August 9th, 2022 - 2:57 PM UTC' }}
    />
    <br />
    <br />
    <Timestamp
      datetime="2022-10-31"
      tooltip={{ variant: TimestampTooltipVariant.custom, content: '31st of October, 2022' }}
    >
      Halloween
    </Timestamp>
  </>
);
