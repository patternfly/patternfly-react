import { FunctionComponent } from 'react';
import { Progress } from '@patternfly/react-core';

export const ProgressTruncateTitle: FunctionComponent = () => (
  <Progress
    value={33}
    title="Very very very very very very very very very very very long title which should be truncated if it does not fit onto one line above the progress bar"
    isTitleTruncated
  />
);
