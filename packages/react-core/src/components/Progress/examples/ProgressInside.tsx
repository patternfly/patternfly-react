import React from 'react';
import { Progress, ProgressMeasureLocation } from '@patternfly/react-core';

export const ProgressInside: React.FunctionComponent = () => (
  <Progress value={33} title="Title" measureLocation={ProgressMeasureLocation.inside} />
);
