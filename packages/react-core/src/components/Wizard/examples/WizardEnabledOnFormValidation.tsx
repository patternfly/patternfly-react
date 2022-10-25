import React from 'react';
import { Wizard, WizardStep } from '@patternfly/react-core';
import SampleForm from './SampleForm';

interface PrevStepInfo {
  prevId?: string | number;
  prevName: React.ReactNode;
}

export const ValidationWizard: React.FunctionComponent = () => {
  const [isFormValid, setIsFormValid] = React.useState(false);
  const [formValue, setFormValue] = React.useState('Thirty');
  const [allStepsValid, setAllStepsValid] = React.useState(false);
  const [stepIdReached, setStepIdReached] = React.useState(1);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isOpen, setIsOpen] = React.useState(true);

  const closeWizard = () => {
    // eslint-disable-next-line no-console
    console.log('close wizard');
  };

  const onFormChange = (isValid: boolean, value: string) => {
    setIsFormValid(isValid);
    setFormValue(value);
    areAllStepsValid();
  };

  const areAllStepsValid = () => {
    setAllStepsValid(isFormValid);
  };

  const onNext = ({ id, name }: WizardStep, { prevId, prevName }: PrevStepInfo) => {
    // eslint-disable-next-line no-console
    console.log(`current id: ${id}, current name: ${name}, previous id: ${prevId}, previous name: ${prevName}`);
    if (id) {
      if (typeof id === 'string') {
        id = parseInt(id);
      }
      setStepIdReached(stepIdReached < id ? id : stepIdReached);
    }
    areAllStepsValid();
  };

  const onBack = ({ id, name }: WizardStep, { prevId, prevName }: PrevStepInfo) => {
    // eslint-disable-next-line no-console
    console.log(`current id: ${id}, current name: ${name}, previous id: ${prevId}, previous name: ${prevName}`);
    areAllStepsValid();
  };

  const onGoToStep = ({ id, name }: WizardStep, { prevId, prevName }: PrevStepInfo) => {
    // eslint-disable-next-line no-console
    console.log(`current id: ${id}, current name: ${name}, previous id: ${prevId}, previous name: ${prevName}`);
  };

  const onSave = () => {
    // eslint-disable-next-line no-console
    console.log('Saved and closed the wizard');
    setIsOpen(false);
  };

  const steps = [
    { id: 'validated-1', name: 'Information', component: <p>Step 1 content</p> },
    {
      name: 'Configuration',
      steps: [
        {
          id: 'validated-2',
          name: 'Substep A with validation',
          component: <SampleForm formValue={formValue} isFormValid={isFormValid} onChange={onFormChange} />,
          enableNext: isFormValid,
          canJumpTo: stepIdReached >= 2
        },
        { id: 'validated-3', name: 'Substep B', component: <p>Substep B</p>, canJumpTo: stepIdReached >= 3 }
      ]
    },
    {
      id: 'validated-4',
      name: 'Additional',
      component: <p>Step 3 content</p>,
      enableNext: allStepsValid,
      canJumpTo: stepIdReached >= 4
    },
    {
      id: 'validated-5',
      name: 'Review',
      component: <p>Step 4 content</p>,
      nextButtonText: 'Close',
      canJumpTo: stepIdReached >= 5
    }
  ];
  const title = 'Enabled on form validation wizard';
  return (
    <Wizard
      navAriaLabel={`${title} steps`}
      mainAriaLabel={`${title} content`}
      onClose={closeWizard}
      onSave={onSave}
      steps={steps}
      onNext={onNext}
      onBack={onBack}
      onGoToStep={onGoToStep}
      height={400}
    />
  );
};
