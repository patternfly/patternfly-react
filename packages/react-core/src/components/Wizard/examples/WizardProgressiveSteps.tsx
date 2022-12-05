import React from 'react';
import { Button, Radio, Wizard, WizardFooter, WizardContextConsumer, WizardStep } from '@patternfly/react-core';

interface PrevStepInfo {
  prevId?: string | number;
  prevName: React.ReactNode;
}

export const WizardProgressiveSteps: React.FunctionComponent = () => {
  const [showCreateStep, setShowCreateStep] = React.useState(false);
  const [showUpdateStep, setShowUpdateStep] = React.useState(false);
  const [showOptionsStep, setShowOptionsStep] = React.useState(false);
  const [showReviewStep, setShowReviewStep] = React.useState(false);
  const [getStartedStepRadio, setGetStartedStepRadio] = React.useState('Create');
  const [createStepRadio, setCreateStepRadio] = React.useState('Quick');
  const [updateStepRadio, setUpdateStepRadio] = React.useState('Quick');
  const closeWizard = () => {
    // eslint-disable-next-line no-console
    console.log('close wizard');
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onGoToStep = ({ id, name }: WizardStep, { prevId, prevName }: PrevStepInfo) => {
    // Remove steps after the currently clicked step
    if (name === 'Get started') {
      setShowCreateStep(false);
      setShowUpdateStep(false);
      setShowOptionsStep(false);
      setShowReviewStep(false);
    } else if (name === 'Create options' || name === 'Update options') {
      setShowOptionsStep(false);
      setShowReviewStep(false);
    } else if (String(name).indexOf('Substep') > -1) {
      setShowReviewStep(false);
    }
  };
  const getNextStep = (activeStep: WizardStep, callback: () => void) => {
    if (activeStep.name === 'Get started') {
      if (getStartedStepRadio === 'Create') {
        setShowCreateStep(true);
        setShowUpdateStep(false);
        setShowOptionsStep(false);
        setShowReviewStep(false);
        callback();
      } else {
        setShowCreateStep(false);
        setShowUpdateStep(true);
        setShowOptionsStep(false);
        setShowReviewStep(false);
        callback();
      }
    } else if (activeStep.name === 'Create options' || activeStep.name === 'Update options') {
      setShowReviewStep(false);
      setShowOptionsStep(true);
      callback();
    } else if (activeStep.name === 'Substep 3') {
      setShowReviewStep(true);
      callback();
    } else {
      callback();
    }
  };

  const getPreviousStep = (activeStep: WizardStep, callback: () => void) => {
    if (activeStep.name === 'Review') {
      setShowReviewStep(false);
      callback();
    } else if (activeStep.name === 'Substep 1') {
      setShowOptionsStep(false);
      callback();
    } else if (activeStep.name === 'Create options') {
      setShowCreateStep(false);
      callback();
    } else if (activeStep.name === 'Update options') {
      setShowUpdateStep(false);
      callback();
    } else {
      callback();
    }
  };

  const getStartedStep = {
    name: 'Get started',
    component: (
      <div>
        <Radio
          value="Create"
          isChecked={getStartedStepRadio === 'Create'}
          onChange={(_, event) => setGetStartedStepRadio(event.currentTarget.value)}
          label="Create a new thing"
          name="radio-step-start"
          id="radio-step-start-1"
        />{' '}
        <Radio
          value="Update"
          isChecked={getStartedStepRadio === 'Update'}
          onChange={(_, event) => setGetStartedStepRadio(event.currentTarget.value)}
          label="Update an existing thing"
          name="radio-step-start"
          id="radio-step-start-2"
        />
      </div>
    )
  };

  const createStep = {
    name: 'Create options',
    component: (
      <div>
        <Radio
          value="Quick"
          isChecked={createStepRadio === 'Quick'}
          onChange={(_, event) => setCreateStepRadio(event.currentTarget.value)}
          label="Quick create"
          name="radio-step-create"
          id="radio-step-create-1"
        />{' '}
        <Radio
          value="Custom"
          isChecked={createStepRadio === 'Custom'}
          onChange={(_, event) => setCreateStepRadio(event.currentTarget.value)}
          label="Custom create"
          name="radio-step-create"
          id="radio-step-create-2"
        />
      </div>
    )
  };

  const updateStep = {
    name: 'Update options',
    component: (
      <div>
        <Radio
          value="Quick"
          isChecked={updateStepRadio === 'Quick'}
          onChange={(_, event) => setUpdateStepRadio(event.currentTarget.value)}
          label="Quick update"
          name="radio-step-update"
          id="radio-step-update-1"
        />{' '}
        <Radio
          value="Custom"
          isChecked={updateStepRadio === 'Custom'}
          onChange={(_, event) => setUpdateStepRadio(event.currentTarget.value)}
          label="Custom update"
          name="radio-step-update"
          id="radio-step-update-2"
        />
      </div>
    )
  };

  const optionsStep = {
    name: showCreateStep ? `${createStepRadio} Options` : `${updateStepRadio} Options`,
    steps: [
      {
        name: 'Substep 1',
        component: 'Substep 1'
      },
      {
        name: 'Substep 2',
        component: 'Substep 2'
      },
      {
        name: 'Substep 3',
        component: 'Substep 3'
      }
    ]
  };

  const reviewStep = {
    name: 'Review',
    component: (
      <div>
        <div>First choice: {getStartedStepRadio}</div>
        <div>Second choice: {showCreateStep ? createStepRadio : updateStepRadio}</div>
      </div>
    )
  };

  const steps = [
    getStartedStep,
    ...(showCreateStep ? [createStep] : []),
    ...(showUpdateStep ? [updateStep] : []),
    ...(showOptionsStep ? [optionsStep] : []),
    ...(showReviewStep ? [reviewStep] : [])
  ];

  const CustomFooter = (
    <WizardFooter>
      <WizardContextConsumer>
        {({ activeStep, onNext, onBack, onClose }) => (
          <>
            <Button variant="primary" type="submit" onClick={() => getNextStep(activeStep, onNext)}>
              {activeStep.name === 'Review' ? 'Finish' : 'Next'}
            </Button>
            <Button
              variant="secondary"
              onClick={() => getPreviousStep(activeStep, onBack)}
              isDisabled={activeStep.name === 'Get started'}
            >
              Back
            </Button>
            <Button variant="link" onClick={onClose}>
              Cancel
            </Button>
          </>
        )}
      </WizardContextConsumer>
    </WizardFooter>
  );

  const title = 'Progressive wizard example';
  return (
    <Wizard
      navAriaLabel={`${title} steps`}
      mainAriaLabel={`${title} content`}
      onClose={closeWizard}
      footer={CustomFooter}
      onGoToStep={onGoToStep}
      steps={steps}
      height={400}
    />
  );
};
