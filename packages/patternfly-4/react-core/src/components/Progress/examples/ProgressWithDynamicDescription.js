import React from 'react';
import { Progress } from '../index';

class ProgressWithDynamicDescription extends React.Component {
  render() {
    return <Progress value={33} title="Descriptive text here" valueText="Descriptive text here" />;
  }
}

export default ProgressWithDynamicDescription;
