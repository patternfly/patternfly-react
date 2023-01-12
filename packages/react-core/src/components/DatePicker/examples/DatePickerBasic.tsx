import React from 'react';
import { DatePicker } from '@patternfly/react-core';

export const DatePickerBasic: React.FunctionComponent = () => (
  <DatePicker
    // eslint-disable-next-line no-console
    onBlur={(_event, str, date) => console.log('onBlur', str, date)}
    // eslint-disable-next-line no-console
    onChange={(_event, str, date) => console.log('onChange', str, date)}
  />
);
