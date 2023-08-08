import React from 'react';
import { DatePicker } from '@patternfly/react-core';

export const DatePickerRequired: React.FunctionComponent = () => (
  <DatePicker requiredDateOptions={{ isRequired: true, emptyDateText: 'Date is required' }} />
);
