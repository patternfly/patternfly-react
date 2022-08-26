import React from 'react';
import { Progress, ProgressVariant } from '@patternfly/react-core';

export const ProgressWarning: React.FunctionComponent = () => (
  <Progress value={90} title="Title" variant={ProgressVariant.warning} />
);
