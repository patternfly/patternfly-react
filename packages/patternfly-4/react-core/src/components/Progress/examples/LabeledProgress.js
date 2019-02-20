import React from 'react';
import { Progress, ProgressMeasureLocation } from '../index';

class LabeledProgress extends React.Component {
  render() {
    return (
      <Progress
        value={33}
        title="Descriptive text here"
        measureLocation={ProgressMeasureLocation.top}
        label="Some label"
      />
    );
  }
}

export default LabeledProgress;
