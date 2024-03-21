import { FunctionComponent } from 'react';
import { Progress } from '@patternfly/react-core';

export const ProgressStepInstruction: FunctionComponent = () => (
  <Progress value={2} title="Title" min={0} max={5} label="Step 2: Copying files" valueText="Step 2: Copying files" />
);
