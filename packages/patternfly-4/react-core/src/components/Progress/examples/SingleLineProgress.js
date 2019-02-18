import React from 'react';
import { Progress, ProgressMeasureLocation } from '@patternfly/react-core';

class SingleLineProgress extends React.Component {
  render() {
    return <Progress value={33} measureLocation={ProgressMeasureLocation.outside} />;
  }
}

export default SingleLineProgress;
