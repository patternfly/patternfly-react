import { FunctionComponent } from 'react';
import { TimePicker } from '@patternfly/react-core';

export const TimePickerWithSeconds: FunctionComponent = () => <TimePicker time="3:35:20 PM" includeSeconds />;
