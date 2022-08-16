import React from 'react';
import { Progress, ProgressSize } from '@patternfly/react-core';

export const ProgressSmall: React.FunctionComponent = () => (
  <Progress value={33} title="Title" size={ProgressSize.sm} />
);
