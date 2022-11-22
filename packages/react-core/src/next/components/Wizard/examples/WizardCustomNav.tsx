import React from 'react';
import {
  Wizard,
  WizardStep,
  WizardControlStep,
  CustomWizardNavFunction,
  WizardNav,
  WizardNavItem
} from '@patternfly/react-core/next';

export const WizardCustomNav: React.FunctionComponent = () => {
  const nav: CustomWizardNavFunction = (
    isExpanded: boolean,
    steps: WizardControlStep[],
    activeStep: WizardControlStep,
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
      <WizardStep name="Review" id="cnav-review-step" footer={{ nextButtonText: 'Wrap it up' }}>
        <p>Review step content</p>
      </WizardStep>
    </Wizard>
  );
};
