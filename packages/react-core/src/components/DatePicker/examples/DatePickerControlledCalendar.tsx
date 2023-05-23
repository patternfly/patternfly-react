import React from 'react';
import { Button, DatePicker } from '@patternfly/react-core';

export const DatePickerControlledCalendar: React.FunctionComponent = () => {
  const dateRef = React.useRef(null);
  const onClick = () => {
    if (dateRef.current) {
      dateRef.current.toggleCalendar();
    }
  };
  return (
    <React.Fragment>
      <DatePicker ref={dateRef} />
      <br />
      <br />
      <Button onClick={onClick}>Toggle calendar</Button>
    </React.Fragment>
  );
};
