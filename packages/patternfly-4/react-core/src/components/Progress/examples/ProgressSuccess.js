import React from 'react';
import { Progress, ProgressVariant } from '../index';

class ProgressSuccess extends React.Component {
  render() {
    return <Progress value={33} title="Success" variant={ProgressVariant.success} />;
  }
}

export default ProgressSuccess;
