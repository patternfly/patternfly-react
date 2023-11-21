import React from 'react';
import {
  DescriptionList,
  DescriptionListGroup,
  DescriptionListTerm,
  DescriptionListDescription,
  Wizard,
  WizardStep,
  WizardStepType
} from '@patternfly/react-core';

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

  const onStepChange = (_event: React.MouseEvent<HTMLButtonElement>, currentStep: WizardStepType) =>
    setCurrentStep(currentStep);

  return (
    <Wizard height={400} title="Get current step wizard" onStepChange={onStepChange}>
      <WizardStep name="Step 1" id="get-current-step-1">
        {currentStep ? <CurrentStepDescriptionList currentStep={currentStep} /> : 'Step 1 content'}
      </WizardStep>
      <WizardStep
        name="Step 2"
        id="get-current-step-2"
        isDisabled
        steps={[
          <WizardStep name="Substep 1" id="get-current-substep-1" key="get-current-substep-1">
            <CurrentStepDescriptionList currentStep={currentStep} />
          </WizardStep>,
          <WizardStep name="Substep 2" id="get-current-substep-2" key="get-current-substep-2">
            <CurrentStepDescriptionList currentStep={currentStep} />
          </WizardStep>
        ]}
      />
      <WizardStep
        name="Step 3"
        id="get-current-step-3"
        steps={[
          <WizardStep name="Substep 3" id="get-current-substep-3" key="get-current-substep-3">
            <CurrentStepDescriptionList currentStep={currentStep} />
          </WizardStep>,
          <WizardStep name="Substep 4" id="get-current-substep-4" key="get-current-substep-4">
            <CurrentStepDescriptionList currentStep={currentStep} />
          </WizardStep>
        ]}
      />
      <WizardStep
        name="Step 4"
        id="get-current-step-4"
        steps={[
          <WizardStep name="Substep 5" id="get-current-substep-5" key="get-current-substep-5" isHidden>
            <CurrentStepDescriptionList currentStep={currentStep} />
          </WizardStep>,
          <WizardStep name="Substep 6" id="get-current-substep-6" key="get-current-substep-6">
            <CurrentStepDescriptionList currentStep={currentStep} />
          </WizardStep>
        ]}
      />
      <WizardStep name="Review" id="get-current-review-step" footer={{ nextButtonText: 'Finish' }}>
        <CurrentStepDescriptionList currentStep={currentStep} />
      </WizardStep>
    </Wizard>
  );
};
