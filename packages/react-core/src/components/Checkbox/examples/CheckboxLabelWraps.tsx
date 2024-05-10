import React from 'react';
import { Checkbox } from '@patternfly/react-core';

export const CheckboxLabelWraps: React.FunctionComponent = () => (
  <Checkbox
    isLabelWrapped
    label="Label wraps input example"
    id="checkbox-label-wraps-input"
    name="checkbox-label-wraps-input"
  />
);
