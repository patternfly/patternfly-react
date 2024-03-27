import { FunctionComponent } from 'react';
import { Checkbox } from '@patternfly/react-core';

export const CheckboxRequired: FunctionComponent = () => (
  <Checkbox label="Required checkbox" isRequired id="required-check" name="required-check" />
);
