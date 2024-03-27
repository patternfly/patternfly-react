import { FunctionComponent } from 'react';
import { TimePicker } from '@patternfly/react-core';

export const TimePickerCustomDelimiter: FunctionComponent = () => <TimePicker is24Hour delimiter="h" placeholder="" />;
