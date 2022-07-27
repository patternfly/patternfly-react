import React from 'react';
import { ProgressStepper, ProgressStep } from '@patternfly/react-core';
import InProgressIcon from '@patternfly/react-icons/dist/esm/icons/in-progress-icon';
import PendingIcon from '@patternfly/react-icons/dist/esm/icons/pending-icon';

export const ProgressStepperCustomIcons: React.FunctionComponent = () => (
  <ProgressStepper>
    <ProgressStep
      variant="success"
      id="custom-step1"
      titleId="custom-step1-title"
      aria-label="completed step, step with success"
    >
      Successful completion
    </ProgressStep>
    <ProgressStep
      isCurrent
      icon={<InProgressIcon />}
      id="custom-step2"
      titleId="custom-step2-title"
      aria-label="in progress"
    >
      In process
    </ProgressStep>
    <ProgressStep
      variant="pending"
      icon={<PendingIcon />}
      id="custom-step3"
      titleId="custom-step3-title"
      aria-label="pending step"
    >
      Pending
    </ProgressStep>
  </ProgressStepper>
);
