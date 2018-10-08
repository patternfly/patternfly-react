import React from 'react';
import { Progress, ProgressVariant } from '@patternfly/react-core';

class ProgressSuccess extends React.Component {
  static title = 'Progress Success';

  render() {
    return <Progress value={33} title="Success" variant={ProgressVariant.success} />;
  }
}

export default ProgressSuccess;
