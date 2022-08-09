import React from 'react';
import { Timestamp } from '@patternfly/react-core';

export const TimestampDefault: React.FunctionComponent = () => {
  const currentDate = new Date();
  const buildISOString = (date: Date) => {
    const pad = (unit: number) => unit.toString().padStart(2, '0');
    const dateString = `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
    const timeString = `T${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;

    return dateString + timeString;
  };

  return <Timestamp datetime={buildISOString(currentDate)} />;
};
