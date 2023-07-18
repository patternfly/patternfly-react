import React from 'react';
import { DatePicker } from '@patternfly/react-core';

export const DatePickerRequired: React.FunctionComponent = () => (
  <DatePicker isRequired emptyDateText="Date is required" />
);
