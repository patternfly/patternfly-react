import React from 'react';
import { CalendarMonth } from '@patternfly/react-core';

export const CalendarMonthDateRange: React.FunctionComponent = () => (
  <CalendarMonth date={new Date(2020, 10, 24)} rangeStart={new Date(2020, 10, 11)} />
);
