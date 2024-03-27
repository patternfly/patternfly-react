import { FunctionComponent } from 'react';
import { DatePicker, HelperText, HelperTextItem } from '@patternfly/react-core';

export const DatePickerHelperText: FunctionComponent = () => (
  <DatePicker
    value="2020-03-05"
    helperText={
      <HelperText>
        <HelperTextItem>Select a date.</HelperTextItem>
      </HelperText>
    }
  />
);
