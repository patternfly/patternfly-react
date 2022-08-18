import React from 'react';
import { Progress, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';

export const ProgressInsideSuccess: React.FunctionComponent = () => (
  <Progress
    value={100}
    title="Title"
    measureLocation={ProgressMeasureLocation.inside}
    variant={ProgressVariant.success}
  />
);
