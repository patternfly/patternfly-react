import React from 'react';
import { TimePicker } from '@patternfly/react-core';

export const TimePickerCustomDelimiter: React.FunctionComponent = () => (
  <TimePicker is24Hour delimiter="h" placeholder="" />
);
