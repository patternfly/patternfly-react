import React from 'react';
import { Button, DatePicker } from '@patternfly/react-core';

export const DatePickerControlled: React.FunctionComponent = () => {
  const initialValue = '2020-03-17';
  const [value, setValue] = React.useState(initialValue);
  return (
    <React.Fragment>
      <DatePicker value={value} onChange={(_event, value) => setValue(value)} />
      <br />
      <br />
      <Button onClick={() => setValue(initialValue)}>Reset date</Button>
    </React.Fragment>
  );
};
