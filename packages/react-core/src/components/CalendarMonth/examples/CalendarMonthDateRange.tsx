import React from 'react';
import { CalendarMonth, isValidDate } from '@patternfly/react-core';

export const CalendarMonthDateRange: React.FunctionComponent = () => {
  const [endDate, setEndDate] = React.useState(new Date(2020, 10, 24));
  const startDate = new Date(2020, 10, 11);

  return (
    <React.Fragment>
      <pre>
        Range Selection:{' '}
        {isValidDate(startDate) && isValidDate(endDate)
          ? `${startDate.toLocaleDateString()} to ${endDate.toLocaleDateString()}`
          : 'No range selected'}
      </pre>
      <CalendarMonth date={endDate} rangeStart={startDate} onChange={setEndDate} />
    </React.Fragment>
  );
};
