import { FunctionComponent } from 'react';
import { Progress, ProgressMeasureLocation } from '@patternfly/react-core';

export const ProgressWithoutMeasure: FunctionComponent = () => (
  <Progress value={33} title="Title" measureLocation={ProgressMeasureLocation.none} />
);
