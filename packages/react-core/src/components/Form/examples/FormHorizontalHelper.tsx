import React from 'react';
import { Form, FormGroup, Checkbox, HelperText, HelperTextItem, FormHelperText } from '@patternfly/react-core';

export const FormHorizontalFormHelperText: React.FunctionComponent = () => (
  <Form isHorizontal>
    <FormGroup label="Label" hasNoPaddingTop isStack fieldId="horizontal-form-helper-options" role="group">
      <FormHelperText>
        <HelperText>
          <HelperTextItem>Select all that apply:</HelperTextItem>
        </HelperText>
      </FormHelperText>
      <Checkbox label="Option 1" id="option-03" />
      <Checkbox label="Option 2" id="option-04" />
    </FormGroup>
  </Form>
);
