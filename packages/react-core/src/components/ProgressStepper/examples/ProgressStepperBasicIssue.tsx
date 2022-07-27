import React from 'react';
import { ProgressStepper, ProgressStep } from '@patternfly/react-core';

export const ProgressStepperBasicIssue: React.FunctionComponent = () => (
  <ProgressStepper>
    <ProgressStep
      variant="success"
      id="basic-with-issue-step1"
      titleId="basic-with-issue-step1-title"
      aria-label="completed step, step with success"
    >
      First step
    </ProgressStep>
    <ProgressStep
      variant="success"
      id="basic-with-issue-step2"
      titleId="basic-with-issue-step2-title"
      aria-label="completed step, step with success"
    >
      Second step
    </ProgressStep>
    <ProgressStep
      variant="warning"
      id="basic-with-issue-step3"
      titleId="basic-with-issue-step3-title"
      aria-label="completed step, step with warning"
    >
      Third step
    </ProgressStep>
    <ProgressStep
      variant="info"
      isCurrent
      id="basic-with-issue-step4"
      titleId="basic-with-issue-step4-title"
      aria-label="step with info"
    >
      Fourth step
    </ProgressStep>
    <ProgressStep
      variant="pending"
      id="basic-with-issue-step5"
      titleId="basic-with-issue-step5-title"
      aria-label="pending step"
    >
      Fifth step
    </ProgressStep>
  </ProgressStepper>
);
