import React from 'react';
import { Button, DatePicker, Flex, FlexItem } from '@patternfly/react-core';

export const DatePickerControlled: React.FunctionComponent = () => {
  const initialValue = '2020-03-17';
  const [value, setValue] = React.useState(initialValue);
  return (
    <React.Fragment>
      <DatePicker
        requiredDateOptions={{ isRequired: true, emptyDateText: 'Date is required' }}
        value={value}
        onChange={(_event, value) => setValue(value)}
      />
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
    </React.Fragment>
  );
};
