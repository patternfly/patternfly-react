import React from 'react';
import { ProgressStepper, ProgressStep, Checkbox } from '@patternfly/react-core';

export const ProgressStepperBasicWithAlignment: React.FunctionComponent = () => {
  const [isVertical, setIsVertical] = React.useState(false);
  const [isCenterAligned, setIsCenterAligned] = React.useState(false);

  return (
    <React.Fragment>
      <Checkbox
        label="Vertical alignment"
        isChecked={isVertical}
        onChange={setIsVertical}
        aria-label="Toggle vertical alignment"
        id="toggle-vertical"
        name="toggle-vertical"
      />
      <Checkbox
        label="Center alignment"
        isChecked={isCenterAligned}
        onChange={setIsCenterAligned}
        aria-label="Toggle center alignment"
        id="toggle-center"
        name="toggle-center"
      />
      <br />
      <ProgressStepper isVertical={isVertical} isCenterAligned={isCenterAligned}>
        <ProgressStep
          variant="success"
          description="This is the first thing to happen"
          id="basic-alignment-step1"
          titleId="basic-alignment-step1-title"
          aria-label="completed step, step with success"
        >
          First step
        </ProgressStep>
        <ProgressStep
          variant="info"
          isCurrent
          description="This is the second thing to happen"
          id="basic-alignment-step2"
          titleId="basic-alignment-step2-title"
          aria-label="step with info"
        >
          Second step
        </ProgressStep>
        <ProgressStep
          variant="pending"
          description="This is the last thing to happen"
          id="basic-alignment-step3"
          titleId="basic-alignment-step3-title"
          aria-label="pending step"
        >
          Third step
        </ProgressStep>
      </ProgressStepper>
    </React.Fragment>
  );
};
