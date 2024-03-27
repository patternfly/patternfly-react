import { FunctionComponent } from 'react';
import { Checkbox } from '@patternfly/react-core';

export const CheckboxStandaloneInput: FunctionComponent = () => (
  <Checkbox id="standalone-check" name="standlone-check" aria-label="Standalone input" />
);
