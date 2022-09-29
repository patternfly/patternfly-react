import { DatePicker } from '@patternfly/react-core';
import React from 'react';

export const DatePickerDemo = () => {
  const [value, setValue] = React.useState('2020-03-18');

  const rangeValidator = (date: Date) => {
    if (date < new Date('2020-03-17')) {
      return 'error';
    }
    return '';
  };

  return (
    <>
      <DatePicker value={value} onChange={value => setValue(value)} validators={[rangeValidator]} />
      <div>
        <button onClick={() => setValue('2020-03-18')}>Set date</button>
      </div>
    </>
  );
};
