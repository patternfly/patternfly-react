import React from 'react';
import { Progress } from '@patternfly/react-core';

class SimpleProgress extends React.Component {
  render() {
    return <Progress value={33} title="Descriptive text here" />;
  }
}

export default SimpleProgress;
