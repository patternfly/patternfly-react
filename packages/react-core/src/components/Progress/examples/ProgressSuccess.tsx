import React from 'react';
import { Progress, ProgressVariant } from '@patternfly/react-core';

export const ProgressSuccess: React.FunctionComponent = () => (
  <Progress value={100} title="Title" variant={ProgressVariant.success} />
);
