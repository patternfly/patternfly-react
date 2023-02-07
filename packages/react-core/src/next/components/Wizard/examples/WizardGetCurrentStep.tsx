import React from 'react';
import {
  DescriptionList,
  DescriptionListGroup,
  DescriptionListTerm,
  DescriptionListDescription
} from '@patternfly/react-core';
import { Wizard, WizardStep, WizardStepType } from '@patternfly/react-core/next';

const CurrentStepDescriptionList = ({ currentStep }: { currentStep: WizardStepType | undefined }) => (
  <DescriptionList isHorizontal isCompact>
    <DescriptionListGroup>
      <DescriptionListTerm>Index</DescriptionListTerm>
      <DescriptionListDescription>{currentStep?.index}</DescriptionListDescription>
    </DescriptionListGroup>

    <DescriptionListGroup>
      <DescriptionListTerm>ID</DescriptionListTerm>
      <DescriptionListDescription>{currentStep?.id}</DescriptionListDescription>
    </DescriptionListGroup>

    <DescriptionListGroup>
      <DescriptionListTerm>Name</DescriptionListTerm>
      <DescriptionListDescription>{currentStep?.name}</DescriptionListDescription>
    </DescriptionListGroup>

    <DescriptionListGroup>
      <DescriptionListTerm>Visited</DescriptionListTerm>
      <DescriptionListDescription>{currentStep?.isVisited ? 'true' : 'false'}</DescriptionListDescription>
    </DescriptionListGroup>
  </DescriptionList>
);

export const GetCurrentStepWizard: React.FunctionComponent = () => {
  const [currentStep, setCurrentStep] = React.useState<WizardStepType>();

  const onStepChange = (event: React.MouseEvent<HTMLButtonElement>, currentStep: WizardStepType) =>
    setCurrentStep(currentStep);

  return (
    <Wizard height={400} title="Get current step wizard" onStepChange={onStepChange}>
      <WizardStep name="Step 1" id="get-current-step-1">
        {currentStep ? <CurrentStepDescriptionList currentStep={currentStep} /> : 'Step 1 content'}
      </WizardStep>
      <WizardStep name="Step 2" id="get-current-step-2">
        <CurrentStepDescriptionList currentStep={currentStep} />
      </WizardStep>
      <WizardStep name="Review" id="get-current-review-step" footer={{ nextButtonText: 'Finish' }}>
        <CurrentStepDescriptionList currentStep={currentStep} />
      </WizardStep>
    </Wizard>
  );
};
