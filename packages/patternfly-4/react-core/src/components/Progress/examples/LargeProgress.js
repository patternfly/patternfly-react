import React from 'react';
import { Progress, ProgressSize } from '@patternfly/react-core';

class LargeProgress extends React.Component {
  render() {
    return <Progress value={33} title="Descriptive text here" size={ProgressSize.lg} />;
  }
}

export default LargeProgress;
