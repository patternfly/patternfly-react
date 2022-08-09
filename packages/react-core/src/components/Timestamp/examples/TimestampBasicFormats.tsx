import React from 'react';
import { Timestamp } from '@patternfly/react-core';

export const TimestampBasicFormats: React.FunctionComponent = () => {
  const isoDate = '2022-08-09';
  const isoTime = 'T14:57:00';
  const displayDate = new Date(2022, 7, 9, 14, 57, 0);

  return (
    <>
      <Timestamp datetime={isoDate + isoTime} date={displayDate} dateFormat="full" timeFormat="full" />
      <br />
      <br />
      <Timestamp datetime={isoDate} date={displayDate} dateFormat="full" />
      <br />
      <br />
      <Timestamp datetime={isoTime} date={displayDate} timeFormat="full" />
      <br />
      <br />
      <Timestamp
        datetime={isoTime}
        date={displayDate}
        dateFormat="medium"
        timeFormat="short"
        timeZoneSuffix="EST (-05:00)"
      />
    </>
  );
};
