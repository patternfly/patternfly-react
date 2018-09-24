import React from 'react';
import { Progress, ProgressMeasureLocation } from '@patternfly/react-core';

class ProgressWithoutMeasure extends React.Component {
  static title = 'Progress Without Measure';

  render() {
    return <Progress value={33} title="Descriptive text here" measureLocation={ProgressMeasureLocation.none} />;
  }
}

export default ProgressWithoutMeasure;
