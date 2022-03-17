import React from 'react';
import { CalendarMonth } from '@patternfly/react-core';

export const CalendarMonthDateRange: React.FunctionComponent = () => {
  const [date, setDate] = React.useState(new Date(2020, 10, 24));

  return <CalendarMonth date={date} rangeStart={date} onChange={setDate} />;
};
