import React from 'react';
import { Form, FormGroup, Checkbox, HelperText, HelperTextItem } from '@patternfly/react-core';

export const FormHorizontalFormHelperText: React.FunctionComponent = () => {
  const [helperText] = React.useState('Select all that apply:');

  return (
    <Form isHorizontal>
      <FormGroup label="Label" hasNoPaddingTop isStack fieldId="horizontal-form-helper-options" role="group">
        <HelperText>
          <HelperTextItem>{helperText}</HelperTextItem>
        </HelperText>
        <Checkbox label="Option 1" id="option-03" />
        <Checkbox label="Option 2" id="option-04" />
      </FormGroup>
    </Form>
  );
};
