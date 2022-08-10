import React from 'react';
import { Timestamp } from '@patternfly/react-core';

export const TimestampUTCTooltip: React.FunctionComponent = () => {
  const currentDate = new Date();
  const dateAsISO = currentDate.toISOString();

  return (
    <>
      <Timestamp datetime={dateAsISO} date={currentDate} hasUTCTooltip />
      <br />
      <br />
      <Timestamp datetime={dateAsISO} date={currentDate} hasUTCTooltip utcSuffix="Coordinated Universal Time" />
    </>
  );
};
