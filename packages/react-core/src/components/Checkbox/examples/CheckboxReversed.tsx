import React from 'react';
import { Checkbox } from '@patternfly/react-core';

export const CheckboxReversed: React.FunctionComponent = () => (
  <Checkbox labelPosition="start" label="Reversed checkbox example" id="checkbox-reversed" name="checkbox-reversed" />
);
