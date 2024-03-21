import { FunctionComponent, useState, Fragment } from 'react';
import { Button, DatePicker, Flex, FlexItem } from '@patternfly/react-core';

export const DatePickerControlled: FunctionComponent = () => {
  const initialValue = '2020-03-17';
  const [value, setValue] = useState(initialValue);
  return (
    <Fragment>
      <DatePicker value={value} onChange={(_event, value) => setValue(value)} />
      <br />
      <br />
      <Flex>
        <FlexItem>
          <Button onClick={() => setValue(initialValue)}>Reset date</Button>
        </FlexItem>
        <FlexItem>
          <Button onClick={() => setValue('')}>Clear date</Button>
        </FlexItem>
      </Flex>
    </Fragment>
  );
};
