import React from 'react';
import { Form, FormGroup, Checkbox } from '@patternfly/react-core';

export const HorizontalFormHelperTextOnTop: React.FunctionComponent = () => {
  const [helperText] = React.useState('Select all that apply:');

  return (
    <Form isHorizontal>
      <FormGroup label="Label" helperText={helperText} isHelperTextBeforeField hasNoPaddingTop isStack role="group">
        <Checkbox label="Option 1" id="option-03" />
        <Checkbox label="Option 2" id="option-04" />
      </FormGroup>
    </Form>
  );
};
