import React from 'react';
import { Form, FormGroup, Checkbox } from '@patternfly/react-core';

export const HorizontalForm: React.FunctionComponent = () => (
  <Form isHorizontal>
    <FormGroup role="group" label="Label" hasNoPaddingTop isStack>
      <Checkbox label="option 1" id="option-01" />
      <Checkbox label="option 2" id="option-02" />
    </FormGroup>
  </Form>
);
