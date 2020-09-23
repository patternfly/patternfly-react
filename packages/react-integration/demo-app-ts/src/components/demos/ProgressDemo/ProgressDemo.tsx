import React from 'react';
import { Progress } from '@patternfly/react-core';

export class ProgressDemo extends React.Component {
  static displayName = 'ProgressDemo';
  render() {
    return (
      <>
        <Progress id="simple-progress" value={33} title="Simple progress" />
        <Progress id="warning-progress" value={66} title="Warning progress" variant="warning" />
        <Progress id="danger-progress" value={99} title="Danger progress" variant="danger" />
        <Progress id="success-progress" value={100} title="Success progress" variant="success" />
      </>
    );
  }
}
