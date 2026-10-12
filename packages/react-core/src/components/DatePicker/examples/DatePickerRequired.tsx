import { DatePicker } from '@rh-felt/react-core';

export const DatePickerRequired: React.FunctionComponent = () => (
  <DatePicker requiredDateOptions={{ isRequired: true, emptyDateText: 'Date is required' }} />
);
