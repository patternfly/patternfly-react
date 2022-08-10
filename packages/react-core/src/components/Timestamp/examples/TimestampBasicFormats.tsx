import React from 'react';
import { Timestamp, TimestampFormats } from '@patternfly/react-core';

export const TimestampBasicFormats: React.FunctionComponent = () => {
  const currentDate = new Date();
  const dateAsISO = currentDate.toISOString();

  return (
    <>
      <Timestamp
        datetime={dateAsISO}
        date={currentDate}
        dateFormat={TimestampFormats.full}
        timeFormat={TimestampFormats.full}
      />
      <br />
      <br />
      <Timestamp datetime={dateAsISO} date={currentDate} dateFormat={TimestampFormats.full} />
      <br />
      <br />
      <Timestamp datetime={dateAsISO} date={currentDate} timeFormat={TimestampFormats.full} />
      <br />
      <br />
      <Timestamp
        datetime={dateAsISO}
        date={currentDate}
        dateFormat={TimestampFormats.medium}
        timeFormat={TimestampFormats.short}
        timeZoneSuffix="US Eastern"
      />
    </>
  );
};
