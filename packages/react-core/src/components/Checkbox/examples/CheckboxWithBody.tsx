import { FunctionComponent } from 'react';
import { Checkbox } from '@patternfly/react-core';

export const CheckboxWithBody: FunctionComponent = () => (
  <Checkbox id="body-check-1" label="Checkbox with body" body="This is where custom content goes." />
);
