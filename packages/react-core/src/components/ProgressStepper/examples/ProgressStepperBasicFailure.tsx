import React from 'react';
import { ProgressStepper, ProgressStep } from '@patternfly/react-core';

export const ProgressStepperBasicFailure: React.FunctionComponent = () => (
  <ProgressStepper>
    <ProgressStep
      variant="success"
      id="basic-with-failure-step1"
      titleId="basic-with-failure-step1-title"
      aria-label="completed step, step with success"
    >
      First step
    </ProgressStep>
    <ProgressStep
      variant="success"
      id="basic-with-failure-step2"
      titleId="basic-with-failure-step2-title"
      aria-label="completed step, step with success"
    >
      Second step
    </ProgressStep>
    <ProgressStep
      variant="success"
      id="basic-with-failure-step3"
      titleId="basic-with-failure-step3-title"
      aria-label="completed step, step with success"
    >
      Third step
    </ProgressStep>
    <ProgressStep
      variant="danger"
      isCurrent
      id="basic-with-failure-step4"
      titleId="basic-with-failure-step4-title"
      aria-label="step with danger"
    >
      Fourth step
    </ProgressStep>
    <ProgressStep
      variant="pending"
      id="basic-with-failure-step5"
      titleId="basic-with-failure-step5-title"
      aria-label="pending step"
    >
      Fifth step
    </ProgressStep>
  </ProgressStepper>
);
