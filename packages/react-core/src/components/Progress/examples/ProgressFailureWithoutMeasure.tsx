import { FunctionComponent } from 'react';
import { Progress, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';

export const ProgressFailureWithoutMeasure: FunctionComponent = () => (
  <Progress value={33} title="Title" measureLocation={ProgressMeasureLocation.none} variant={ProgressVariant.danger} />
);
