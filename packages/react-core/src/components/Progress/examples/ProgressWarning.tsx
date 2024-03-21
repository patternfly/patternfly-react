import { FunctionComponent } from 'react';
import { Progress, ProgressVariant } from '@patternfly/react-core';

export const ProgressWarning: FunctionComponent = () => (
  <Progress value={90} title="Title" variant={ProgressVariant.warning} />
);
