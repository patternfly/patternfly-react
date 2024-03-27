import { FunctionComponent } from 'react';
import { Progress, ProgressMeasureLocation } from '@patternfly/react-core';

export const ProgressSingleLine: FunctionComponent = () => (
  <Progress value={33} measureLocation={ProgressMeasureLocation.outside} aria-label="Title" />
);
