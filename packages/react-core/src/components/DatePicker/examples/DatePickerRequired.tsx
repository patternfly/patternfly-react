import { FunctionComponent } from 'react';
import { DatePicker } from '@patternfly/react-core';

export const DatePickerRequired: FunctionComponent = () => (
  <DatePicker requiredDateOptions={{ isRequired: true, emptyDateText: 'Date is required' }} />
);
