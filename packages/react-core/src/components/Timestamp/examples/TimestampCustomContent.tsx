import React from 'react';
import { Timestamp, TimestampFormat, TimestampTooltipVariant } from '@patternfly/react-core';

export const TimestampCustomContent: React.FunctionComponent = () => (
  <>
    <Timestamp date={new Date(2022, 7, 9, 14, 57, 0)} tooltip={{ variant: TimestampTooltipVariant.default }}>
      1 hour ago
    </Timestamp>
    <br />
    <br />
    <Timestamp
      date={new Date(2022, 7, 9, 14, 57, 0)}
      dateFormat={TimestampFormat.medium}
      timeFormat={TimestampFormat.short}
      tooltip={{ variant: TimestampTooltipVariant.default }}
    >
      Last updated August 9th, 2022 at 2:57 PM EDT
    </Timestamp>
  </>
);
