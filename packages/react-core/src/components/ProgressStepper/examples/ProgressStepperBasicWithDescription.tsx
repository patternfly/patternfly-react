import React from 'react';
import { ProgressStepper, ProgressStep } from '@patternfly/react-core';

export const ProgressStepperBasicWithDescription: React.FunctionComponent = () => (
  <ProgressStepper>
    <ProgressStep
      variant="success"
      description="This is the first thing to happen"
      id="basic-desc-step1"
      titleId="basic-desc-step1-title"
      aria-label="completed step, step with success"
    >
      First step
    </ProgressStep>
    <ProgressStep
      variant="info"
      isCurrent
      description="This is the second thing to happen"
      id="basic-desc-step2"
      titleId="basic-desc-step2-title"
      aria-label="step with info"
    >
      Second step
    </ProgressStep>
    <ProgressStep
      variant="pending"
      description="This is the last thing to happen"
      id="basic-desc-step3"
      titleId="basic-desc-step3-title"
      aria-label="pending step"
    >
      Third step
    </ProgressStep>
  </ProgressStepper>
);
