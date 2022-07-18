import React from 'react';
import {
  Step,
  SubStep,
  WizardComposable,
  WizardComposableStep,
  WizardNav,
  WizardNavItem
} from '@patternfly/react-core';

export const WizardCustomNav: React.FunctionComponent = () => {
  const nav = (
    isOpen: boolean,
    steps: (Step | SubStep)[],
    activeStep: Step | SubStep,
    goToStepByIndex: (index: number) => void
  ) => (
    <WizardNav isOpen={isOpen}>
      {steps.map((step, index) => (
        <WizardNavItem
          key={step.id}
          id={step.id}
          content={step.name}
          isCurrent={activeStep.id === step.id}
          isDisabled={step.isDisabled}
          step={index + 1}
          onNavItemClick={goToStepByIndex}
        />
      ))}
    </WizardNav>
  );

  return (
    <WizardComposable height={400} nav={nav}>
      <WizardComposableStep name="First step" id="first-step">
        <p>Did you say...custom nav?</p>
      </WizardComposableStep>
      <WizardComposableStep name="Second step" id="second-step">
        <p>Step 2 content</p>
      </WizardComposableStep>
      <WizardComposableStep name="Review" id="fifth-step" nextButtonText="Wrap it up">
        <p>Review step content</p>
      </WizardComposableStep>
    </WizardComposable>
  );
};
