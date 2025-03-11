import { Fragment, useRef } from 'react';
import { Button, DatePicker } from '@patternfly/react-core';

export const DatePickerControlledCalendar: React.FunctionComponent = () => {
  const dateRef = useRef(null);
  const onClick = () => {
    if (dateRef.current) {
      dateRef.current.toggleCalendar();
    }
  };
  return (
    <Fragment>
      <DatePicker ref={dateRef} />
      <br />
      <br />
      <Button onClick={onClick}>Toggle calendar</Button>
    </Fragment>
  );
};
