import React from 'react';
import { Checkbox } from '@patternfly/react-core';

export const CheckboxRequired: React.FunctionComponent = () => (
  <Checkbox label="Required checkbox" isRequired id="required-check" name="required-check" />
);
