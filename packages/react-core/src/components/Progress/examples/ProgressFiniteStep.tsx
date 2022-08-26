import React from 'react';
import { Progress, ProgressMeasureLocation } from '@patternfly/react-core';

export const ProgressFiniteStep: React.FunctionComponent = () => (
  <Progress
    value={2}
    min={0}
    max={5}
    title="Title"
    measureLocation={ProgressMeasureLocation.top}
    label="2 of 5"
    valueText="2 of 5"
  />
);
