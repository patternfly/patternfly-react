import React from 'react';
import { Progress, ProgressMeasureLocation } from '@patternfly/react-core';

class ProgressOutside extends React.Component {
  static title = 'Progress Outside';

  render() {
    return <Progress value={33} title="Descriptive text here" measureLocation={ProgressMeasureLocation.outside} />;
  }
}

export default ProgressOutside;
