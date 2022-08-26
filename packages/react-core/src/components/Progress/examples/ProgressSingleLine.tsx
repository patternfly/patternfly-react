import React from 'react';
import { Progress, ProgressMeasureLocation } from '@patternfly/react-core';

export const ProgressSingleLine: React.FunctionComponent = () => (
  <Progress value={33} measureLocation={ProgressMeasureLocation.outside} aria-label="Title" />
);
