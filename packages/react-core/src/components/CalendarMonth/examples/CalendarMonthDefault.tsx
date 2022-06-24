import React from 'react';
import { CalendarMonth } from '@patternfly/react-core';

export const CalendarMonthDefault: React.FunctionComponent = () => {
  const [date, setDate] = React.useState(null);
  const onMonthChange = (newDate: Date) => {
    // eslint-disable-next-line no-console
    console.log(newDate);
  };

  return <CalendarMonth date={date} onChange={setDate} onMonthChange={onMonthChange} />;
};
