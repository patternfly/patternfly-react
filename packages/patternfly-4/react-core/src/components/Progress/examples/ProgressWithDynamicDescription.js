import React from 'react';
import { Progress } from '@patternfly/react-core';

class ProgressWithDynamicDescription extends React.Component {
  render() {
    return <Progress value={33} title="Descriptive text here" valueText="Descriptive text here" />;
  }
}

export default ProgressWithDynamicDescription;
