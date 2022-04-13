import React from 'react';
import { Checkbox } from '@patternfly/react-core';

export const CheckboxStandaloneInput: React.FunctionComponent<React.PropsWithChildren<unknown>> = () => (
  <Checkbox id="standalone-check" name="standlone-check" aria-label="Standalone input" />
);
