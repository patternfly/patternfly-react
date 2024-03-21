import { FunctionComponent } from 'react';
import { Progress, ProgressMeasureLocation } from '@patternfly/react-core';

export const ProgressOutside: FunctionComponent = () => (
  <Progress value={33} title="Title" measureLocation={ProgressMeasureLocation.outside} />
);
