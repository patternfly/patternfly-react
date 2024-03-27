import { FunctionComponent } from 'react';
import { TimePicker } from '@patternfly/react-core';

export const TimePickerMinMaxTimes: FunctionComponent = () => (
  <TimePicker is24Hour minTime="9:30" maxTime="17:15" placeholder="14:00" />
);
