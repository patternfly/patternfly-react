import React from 'react';
import { Timestamp } from '@patternfly/react-core';

export const TimestampCustomFormat: React.FunctionComponent = () => {
  const isoDate = '2022-08-09';
  const isoTime = 'T14:57:00';
  const displayDate = new Date(2022, 7, 9, 14, 57, 0);
  const customFormat = { year: '2-digit', month: 'short', weekday: 'short', day: 'numeric', hour: 'numeric' };

  return <Timestamp datetime={isoDate + isoTime} date={displayDate} customFormat={customFormat} />;
};
