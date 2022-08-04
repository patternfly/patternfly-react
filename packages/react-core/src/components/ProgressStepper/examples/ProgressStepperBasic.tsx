import React from 'react';
import { ProgressStepper, ProgressStep } from '@patternfly/react-core';

export const ProgressStepperBasic: React.FunctionComponent = () => (
  <ProgressStepper>
    <ProgressStep
      variant="success"
      id="basic-step1"
      titleId="basic-step1-title"
      aria-label="completed step, step with success"
    >
      First step
    </ProgressStep>
    <ProgressStep variant="info" isCurrent id="basic-step2" titleId="basic-step2-title" aria-label="step with info">
      Second step
    </ProgressStep>
    <ProgressStep variant="pending" id="basic-step3" titleId="basic-step3-title" aria-label="pending step">
      Third step
    </ProgressStep>
  </ProgressStepper>
);
