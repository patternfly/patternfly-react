import React from 'react';
import { Progress, ProgressMeasureLocation } from '../index';

class ProgressInside extends React.Component {
  render() {
    return <Progress value={33} title="Descriptive text here" measureLocation={ProgressMeasureLocation.inside} />;
  }
}

export default ProgressInside;
