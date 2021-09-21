import React from 'react';
import { ProgressStepper, ProgressStep } from '@patternfly/react-core';
import InProgressIcon from '@patternfly/react-icons/dist/esm/icons/in-progress-icon';

export class ProgressStepperDemo extends React.Component {
  static displayName = 'ProgressStepperDemo';

  renderBasicStepper() {
    return (
      <ProgressStepper>
        <ProgressStep
          variant="success"
          description="This is a description"
          aria-label="completed step"
          id="success-step"
        >
          First step
        </ProgressStep>
        <ProgressStep icon={<InProgressIcon />} aria-label="custom icon step" id="icon-step">
          Custom icon step
        </ProgressStep>
        <ProgressStep variant="warning" aria-label="warning step" id="warning-step">
          Warning step
        </ProgressStep>
        <ProgressStep variant="danger" aria-label="danger step" id="danger-step">
          Danger step
        </ProgressStep>
        <ProgressStep
          variant="info"
          isCurrent
          description="This is a description"
          aria-label="current step"
          id="current-step"
        >
          Second step
        </ProgressStep>
        <ProgressStep variant="pending" description="This is a description" aria-label="pending step" id="pending-step">
          Third step
        </ProgressStep>
      </ProgressStepper>
    );
  }

  renderCompactStepper() {
    return (
      <ProgressStepper isCompact id="compact-stepper">
        <ProgressStep variant="success" description="This is the first thing to happen" aria-label="completed step">
          First step
        </ProgressStep>
        <ProgressStep
          variant="info"
          isCurrent
          description="This is the second thing to happen"
          aria-label="current step"
        >
          Second step
        </ProgressStep>
        <ProgressStep variant="pending" description="This is the last thing to happen" aria-label="pending step">
          Third step
        </ProgressStep>
      </ProgressStepper>
    );
  }

  render() {
    return (
      <React.Fragment>
        {this.renderBasicStepper()}
        <br />
        <br />
        {this.renderCompactStepper()}
      </React.Fragment>
    );
  }
}
