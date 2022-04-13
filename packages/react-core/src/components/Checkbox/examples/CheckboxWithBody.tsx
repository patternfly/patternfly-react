import React from 'react';
import { Checkbox } from '@patternfly/react-core';

export const CheckboxWithBody: React.FunctionComponent<React.PropsWithChildren<unknown>> = () => (
  <Checkbox id="body-check-1" label="Checkbox with body" body="This is where custom content goes." />
);
