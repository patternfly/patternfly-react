import React from 'react';
import { Form, FormGroup, TextInput, Wizard, WizardStep } from '@patternfly/react-core';
interface PrevStepInfo {
  prevId?: string | number;
  prevName: React.ReactNode;
}

interface sampleFormProps {
  formValue: string;
  isFormValid: boolean;
  onChange?: (isValid: boolean, value: string) => void;
}

const SampleForm: React.FunctionComponent<sampleFormProps> = (props: sampleFormProps) => {
  const [value, setValue] = React.useState(props.formValue);
  const [isValid, setIsValid] = React.useState(props.isFormValid);

  const handleTextInputChange = (value: string) => {
    const valid = /^\d+$/.test(value);
    setValue(value);
    setIsValid(valid);
    props.onChange && props.onChange(valid, value);
  };

  const validated = isValid ? 'default' : 'error';

  return (
    <Form>
      <FormGroup
        label="Age:"
        type="number"
        helperText="Write your age in numbers."
        helperTextInvalid="Age has to be a number"
        fieldId="age"
        validated={validated}
      >
        <TextInput
          validated={validated}
          value={value}
          id="age-input"
          aria-describedby="age-helper"
          onChange={handleTextInputChange}
        />
      </FormGroup>
    </Form>
  );
};

export const WizardFormValidation: React.FunctionComponent = () => {
  const [isFormValid, setIsFormValid] = React.useState(false);
  const [formValue, setFormValue] = React.useState('Thirty');
  const [allStepsValid, setAllStepsValid] = React.useState(false);
  const [stepIdReached, setStepIdReached] = React.useState(1);

  React.useEffect(() => {
    setAllStepsValid(isFormValid);
  }, [isFormValid, stepIdReached]);

  const closeWizard = () => {
    // eslint-disable-next-line no-console
    console.log('close wizard');
  };

  const onFormChange = (isValid: boolean, value: string) => {
    setIsFormValid(isValid);
    setFormValue(value);
  };

  const areAllStepsValid = () => {
    setAllStepsValid(isFormValid);
  };

  const onNext = ({ id, name }: WizardStep, { prevId, prevName }: PrevStepInfo) => {
    // eslint-disable-next-line no-console
    console.log(`current id: ${id}, current name: ${name}, previous id: ${prevId}, previous name: ${prevName}`);
    if (id) {
      if (typeof id === 'string') {
        const [, orderIndex] = id.split('-');
        id = parseInt(orderIndex);
      }
      setStepIdReached(stepIdReached < id ? id : stepIdReached);
    }
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
      nextButtonText: 'Finish',
      canJumpTo: stepIdReached >= 5
    }
  ];
  const title = 'Wizard enabled on form validation example';
  return (
    <Wizard
      navAriaLabel={`${title} steps`}
      mainAriaLabel={`${title} content`}
      onClose={closeWizard}
      steps={steps}
      onNext={onNext}
      onBack={onBack}
      onGoToStep={onGoToStep}
      height={400}
    />
  );
};
