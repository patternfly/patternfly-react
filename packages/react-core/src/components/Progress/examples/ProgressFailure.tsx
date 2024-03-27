import { FunctionComponent } from 'react';
import { Progress, ProgressVariant } from '@patternfly/react-core';

export const ProgressFailure: FunctionComponent = () => (
  <Progress value={33} title="Title" variant={ProgressVariant.danger} />
);
