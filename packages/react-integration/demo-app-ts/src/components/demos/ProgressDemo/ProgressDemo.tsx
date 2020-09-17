import React from 'react';
import { Progress } from '@patternfly/react-core';

export class ProgressDemo extends React.Component {
  static displayName = 'ProgressDemo';
  render() {
    return (
      <>
        <Progress id="simple-progress" value={33} title="Simple progress" />
        <Progress
          id="truncate-progress"
          value={33}
          title="Really really really really really really really really really really really really really really long description that should be truncated before it ends."
          isTruncated
        />
      </>
    );
  }
}
