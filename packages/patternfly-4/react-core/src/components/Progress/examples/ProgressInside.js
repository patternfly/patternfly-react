import React from 'react';
import { Progress, ProgressMeasureLocation } from '@patternfly/react-core';

class ProgressInside extends React.Component {
  static title = 'Progress Inside';

  render() {
    return <Progress value={33} title="Descriptive text here" measureLocation={ProgressMeasureLocation.inside} />;
  }
}

export default ProgressInside;
