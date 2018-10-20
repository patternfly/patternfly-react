import React from 'react';
import { Progress, ProgressMeasureLocation } from '@patternfly/react-core';

class LabeledProgress extends React.Component {
  static title = 'Progress with additional label';

  render() {
    return <Progress value={33} title="Descriptive text here" measureLocation={ProgressMeasureLocation.top} label="Some label" />;
  }
}

export default LabeledProgress;
