import React from 'react';
import { Progress, Truncate } from '@patternfly/react-core';

export const ProgressHelperText: React.FunctionComponent = () => (
  <Progress
    value={33}
    title="Title"
    helperText={
      <Truncate content="Helper text made using a custom component. This example uses our Truncate component to demonstrate a possible approach if a very long string may be passed and you have limited space to show that content." />
    }
    variant={'danger'}
  />
);
