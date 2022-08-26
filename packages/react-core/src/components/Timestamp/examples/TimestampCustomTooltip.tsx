import React from 'react';
import { Timestamp, TimestampTooltipVariant } from '@patternfly/react-core';

export const TimestampCustomTooltip: React.FunctionComponent = () => (
  <>
    <Timestamp
      date={new Date(2022, 7, 9, 14, 57, 0)}
      tooltip={{ variant: TimestampTooltipVariant.custom, content: 'Last updated on August 9th, 2022 - 2:57 PM UTC' }}
    />
    <br />
    <br />
    <Timestamp
      date={new Date(2022, 9, 31)}
      tooltip={{ variant: TimestampTooltipVariant.custom, content: '31st of October, 2022' }}
    >
      Halloween
    </Timestamp>
  </>
);
