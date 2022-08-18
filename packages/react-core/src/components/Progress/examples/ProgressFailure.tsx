import React from 'react';
import { Progress, ProgressVariant } from '@patternfly/react-core';

export const ProgressFailure: React.FunctionComponent = () => (
  <Progress value={33} title="Title" variant={ProgressVariant.danger} />
);
