import React from 'react';
import { Timestamp, TimestampTooltipVariant } from '@patternfly/react-core';

export const TimestampDefaultTooltip: React.FunctionComponent = () => {
  const currentDate = new Date();

  return (
    <>
      <Timestamp date={currentDate} tooltip={{ variant: TimestampTooltipVariant.default }} />
      <br />
      <br />
      <Timestamp
        date={currentDate}
        tooltip={{ variant: TimestampTooltipVariant.default, suffix: 'Coordinated Universal Time' }}
      />
    </>
  );
};
