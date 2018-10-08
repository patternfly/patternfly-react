import React from 'react';
import { Progress, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';

class ProgressOutsideFailure extends React.Component {
  static title = 'Progress Outside Failure';

  render() {
    return (
      <Progress
        value={33}
        title="Failure due to an error"
        measureLocation={ProgressMeasureLocation.outside}
        variant={ProgressVariant.danger}
      />
    );
  }
}

export default ProgressOutsideFailure;
