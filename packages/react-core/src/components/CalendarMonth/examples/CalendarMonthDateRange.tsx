import React from 'react';
import { CalendarMonth, Title, CalendarMonthInlineProps } from '@patternfly/react-core';

export const CalendarMonthDateRange: React.FunctionComponent = () => {
  const startDate = new Date(2020, 10, 11);
  const endDate = new Date(2020, 10, 24);
  const disablePreStartDates = (date: Date) => date >= startDate;

  const inlineProps: CalendarMonthInlineProps = {
    component: 'article',
    title: (
      <Title id="display-range" headingLevel="h4">
        Calendar month displaying a range
      </Title>
    ),
    ariaLabelledby: 'display-range'
  };

  return (
    <CalendarMonth
      validators={[disablePreStartDates]}
      date={endDate}
      rangeStart={startDate}
      inlineProps={inlineProps}
    />
  );
};
