import React from 'react';
import { Timestamp } from '@patternfly/react-core';

export const TimestampCustomFormat: React.FunctionComponent = () => {
  const currentDate = new Date();
  const dateAsISO = currentDate.toISOString();
  const customFormat = { year: '2-digit', month: 'short', weekday: 'short', day: 'numeric', hour: 'numeric' };

  return <Timestamp datetime={dateAsISO} date={currentDate} customFormat={customFormat} />;
};
