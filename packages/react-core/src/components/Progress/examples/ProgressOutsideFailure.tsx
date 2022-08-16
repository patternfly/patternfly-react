import React from 'react';
import { Progress, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';

export const ProgressOutsideFailure: React.FunctionComponent = () => (
  <Progress
    value={33}
    title="Title"
    measureLocation={ProgressMeasureLocation.outside}
    variant={ProgressVariant.danger}
  />
);
