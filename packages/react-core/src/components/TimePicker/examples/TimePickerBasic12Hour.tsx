/* eslint-disable no-console */
import { FunctionComponent, FormEvent } from 'react';
import { TimePicker } from '@patternfly/react-core';

export const TimePickerBasic12Hour: FunctionComponent = () => {
  const onChange = (
    _event: FormEvent<HTMLInputElement>,
    time: string,
    hour: number,
    minute: number,
    seconds: number,
    isValid: boolean
  ) => {
    console.log('time', time);
    console.log('hour', hour);
    console.log('minute', minute);
    console.log('seconds', seconds);
    console.log('isValid', isValid);
  };

  return <TimePicker time="3:35 AM" onChange={onChange} />;
};
