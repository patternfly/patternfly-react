import React from 'react';
import { TimePicker } from '@patternfly/react-core';

export const TimePickerBasic24HourWithSeconds: React.FunctionComponent = () => (
  <TimePicker time="12:35:50" includeSeconds is24Hour />
);
