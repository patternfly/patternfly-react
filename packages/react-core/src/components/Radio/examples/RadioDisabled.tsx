import React from 'react';
import { Radio } from '@patternfly/react-core';

export const RadioDisabled: React.FunctionComponent = () => (
  <React.Fragment>
    <Radio id="radio-disabled" label="Disabled radio example" isDisabled name="radio-5" />
    <Radio
      id="radio-disabled-checked"
      defaultChecked
      label="Disabled and checked radio example"
      isDisabled
      name="radio-6"
    />
  </React.Fragment>
);
