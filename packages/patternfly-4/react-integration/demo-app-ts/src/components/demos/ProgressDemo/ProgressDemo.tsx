import React from 'react';
import { Progress, ProgressSize, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';

export class ProgressDemo extends React.Component {
  render() {
    return <React.Fragment>
      <Progress id="simple-progress" value={33} title="Simple progress" />
    </React.Fragment>
  }
}
