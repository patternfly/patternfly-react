import React from 'react';
import {
  Wizard,
  WizardStep,
  WizardStepType,
  CustomWizardNavFunction,
  WizardNav,
  WizardNavItem
} from '@patternfly/react-core/next';

export const WizardWithCustomNav: React.FunctionComponent = () => {
  const nav: CustomWizardNavFunction = (
    isExpanded: boolean,
    steps: WizardStepType[],
    activeStep: WizardStepType,
    goToStepByIndex: (index: number) => void
  ) => (
    <WizardNav isExpanded={isExpanded}>
      {steps.map(step => (
        <WizardNavItem
          key={step.id}
          id={step.id}
          content={step.name}
          isCurrent={activeStep.id === step.id}
          isDisabled={step.isDisabled}
          stepIndex={step.index}
          onClick={() => goToStepByIndex(step.index)}
        />
      ))}
    </WizardNav>
  );

  return (
    <Wizard height={400} nav={nav}>
      <WizardStep name="Step 1" id="custom-nav-first-step">
        Did you say...custom nav?
      </WizardStep>
      <WizardStep name="Step 2" id="custom-nav-second-step">
        Oh, you didn't?
      </WizardStep>
      <WizardStep name="Review" id="custom-nav-review-step" footer={{ nextButtonText: 'Wrap it up' }}>
        Well, this is awkward.
      </WizardStep>
    </Wizard>
  );
};
