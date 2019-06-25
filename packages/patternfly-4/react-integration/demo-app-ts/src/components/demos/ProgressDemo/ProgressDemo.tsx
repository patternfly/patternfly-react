import React from 'react';
import { Progress } from '@patternfly/react-core';

export class ProgressDemo extends React.Component {
  render() {
    return <Progress id="simple-progress" value={33} title="Simple progress" />;
  }
}
