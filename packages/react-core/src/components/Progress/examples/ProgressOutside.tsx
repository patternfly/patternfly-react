import React from 'react';
import { Progress, ProgressMeasureLocation } from '@patternfly/react-core';

export const ProgressOutside: React.FunctionComponent = () => (
  <Progress value={33} title="Title" measureLocation={ProgressMeasureLocation.outside} />
);
