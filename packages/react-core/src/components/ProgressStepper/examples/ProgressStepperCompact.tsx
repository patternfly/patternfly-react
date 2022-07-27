import React from 'react';
import { ProgressStepper, ProgressStep, Checkbox } from '@patternfly/react-core';

export const ProgressStepperCompact: React.FunctionComponent = () => {
  const [isVertical, setIsVertical] = React.useState(false);
  const [isCenterAligned, setIsCenterAligned] = React.useState(false);

  return (
    <React.Fragment>
      <Checkbox
        label="Vertical alignment"
        isChecked={isVertical}
        onChange={setIsVertical}
        aria-label="Toggle compact vertical alignment"
        id="toggle-compact-vertical"
        name="toggle-compact-vertical"
      />
      <Checkbox
        label="Center alignment"
        isChecked={isCenterAligned}
        onChange={setIsCenterAligned}
        aria-label="Toggle compact center alignment"
        id="toggle-compact-center"
        name="toggle-compact-center"
      />
      <br />
      <ProgressStepper isCompact isVertical={isVertical} isCenterAligned={isCenterAligned}>
        <ProgressStep
          variant="success"
          id="compact-step1"
          titleId="compact-step1-title"
          aria-label="completed step, step with success"
        >
          First step
        </ProgressStep>
        <ProgressStep
          variant="info"
          isCurrent
          id="compact-step2"
          titleId="compact-step2-title"
          aria-label="step with info"
        >
          Second step
        </ProgressStep>
        <ProgressStep variant="pending" id="compact-step3" titleId="compact-step3-title" aria-label="pending step">
          Third step
        </ProgressStep>
      </ProgressStepper>
    </React.Fragment>
  );
};
