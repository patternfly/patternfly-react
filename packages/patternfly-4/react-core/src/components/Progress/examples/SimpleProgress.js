import React from 'react';
import { Progress } from '../index';

class SimpleProgress extends React.Component {
  render() {
    return <Progress value={33} title="Descriptive text here" />;
  }
}

export default SimpleProgress;
