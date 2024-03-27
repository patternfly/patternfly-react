import { FunctionComponent } from 'react';
import { Progress, ProgressVariant } from '@patternfly/react-core';

export const ProgressSuccess: FunctionComponent = () => (
  <Progress value={100} title="Title" variant={ProgressVariant.success} />
);
