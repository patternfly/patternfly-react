import React from 'react';
import { Progress, ProgressMeasureLocation } from '../index';

class SingleLineProgress extends React.Component {
  render() {
    return <Progress value={33} measureLocation={ProgressMeasureLocation.outside} />;
  }
}

export default SingleLineProgress;
