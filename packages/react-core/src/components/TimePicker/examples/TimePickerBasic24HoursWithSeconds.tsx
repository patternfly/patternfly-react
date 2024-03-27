import { FunctionComponent } from 'react';
import { TimePicker } from '@patternfly/react-core';

export const TimePickerBasic24HourWithSeconds: FunctionComponent = () => (
  <TimePicker time="12:35:50" includeSeconds is24Hour />
);
