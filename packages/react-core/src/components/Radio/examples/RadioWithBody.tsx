import React from 'react';
import { Radio } from '@patternfly/react-core';

export const RadioWithBody: React.FunctionComponent = () => (
  <Radio id="radio-with-body" label="Radio with body" name="radio-8" body="This is where custom content goes." />
);
