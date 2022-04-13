import React from 'react';
import { Button, DatePicker } from '@patternfly/react-core';

export const DatePickerControlled: React.FunctionComponent<React.PropsWithChildren<unknown>> = () => {
  const initialValue = '2020-03-17';
  const [value, setValue] = React.useState(initialValue);
  return (
    <React.Fragment>
      <Button onClick={() => setValue(initialValue)}>Reset date</Button>
      <DatePicker value={value} onChange={value => setValue(value)} />
    </React.Fragment>
  );
};
