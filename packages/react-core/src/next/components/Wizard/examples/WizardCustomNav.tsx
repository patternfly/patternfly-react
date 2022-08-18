import React from 'react';
import { WizardNav, WizardNavItem } from '@patternfly/react-core';
import { Step, SubStep, Wizard, WizardStep } from '@patternfly/react-core/next';

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
    <Wizard height={400} nav={nav}>
      <WizardStep name="First step" id="cnav-first-step">
        <p>Did you say...custom nav?</p>
      </WizardStep>
      <WizardStep name="Second step" id="cnav-second-step">
        <p>Step 2 content</p>
      </WizardStep>
      <WizardStep name="Review" id="cnav-review-step" nextButtonText="Wrap it up">
        <p>Review step content</p>
      </WizardStep>
    </Wizard>
  );
};
