import React from 'react';
import {
  EmptyState,
  EmptyStateIcon,
  EmptyStateBody,
  EmptyStateSecondaryActions,
  Title,
  Form,
  FormGroup,
  TextInput,
  Progress,
  Button,
  Wizard,
  WizardFooter,
  WizardContextConsumer,
  Alert
} from '@patternfly/react-core';
// eslint-disable-next-line patternfly-react/import-tokens-icons
import { CogsIcon } from '@patternfly/react-icons';

interface finishedProps {
  onClose: () => void;
}

const FinishedStep: React.FunctionComponent<finishedProps> = (props: finishedProps) => {
  const [percent, setPercent] = React.useState(0);

  const tick = () => {
    if (percent < 100) {
      setPercent(percent + 20);
    }
  };

  React.useEffect(() => {
    const interval = setInterval(() => tick(), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pf-l-bullseye">
      <EmptyState variant="large">
        <EmptyStateIcon icon={CogsIcon} />
        <Title headingLevel="h4" size="lg">
          {percent === 100 ? 'Validation complete' : 'Validating credentials'}
        </Title>
        <EmptyStateBody>
          <Progress value={percent} measureLocation="outside" aria-label="validation-progress" />
        </EmptyStateBody>
        <EmptyStateBody>
          Description can be used to further elaborate on the validation step, or give the user a better idea of how
          long the process will take.
        </EmptyStateBody>
        <EmptyStateSecondaryActions>
          <Button isDisabled={percent !== 100} onClick={props.onClose}>
            Log to console
          </Button>
        </EmptyStateSecondaryActions>
      </EmptyState>
    </div>
  );
};

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
    props.onChange && props.onChange(isValid, value);
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
          id="age"
          aria-describedby="age-helper"
          onChange={handleTextInputChange}
        />
      </FormGroup>
    </Form>
  );
};

export const WizardValidateButtonPress: React.FunctionComponent = () => {
  const [stepsValid, setStepsValid] = React.useState(0);

  const closeWizard = () => {
    // eslint-disable-next-line no-console
    console.log('close wizard');
  };

  const validateLastStep: (onNext: () => void) => void = onNext => {
    if (stepsValid !== 1) {
      setStepsValid(1);
    } else {
      onNext();
    }
  };

  const steps = [
    { name: 'First step', component: <p>Step 1 content</p> },
    { name: 'Second step', component: <p>Step 2 content</p> },
    {
      name: 'Final Step',
      component: (
        <>
          {stepsValid === 1 && (
            <div style={{ padding: '15px 0' }}>
              <Alert variant="warning" title="Validation failed, please try again" />
            </div>
          )}
          <SampleForm formValue="Validating on button press" isFormValid={stepsValid !== 1} />
        </>
      )
    },
    { name: 'Finish', component: <FinishedStep onClose={closeWizard} />, isFinishedStep: true }
  ];

  const CustomFooter = (
    <WizardFooter>
      <WizardContextConsumer>
        {({ activeStep, goToStepByName, onNext, onBack, onClose }) => {
          if (activeStep.name !== 'Final Step') {
            return (
              <>
                <Button variant="primary" type="submit" onClick={onNext}>
                  Forward
                </Button>
                <Button
                  variant="secondary"
                  onClick={onBack}
                  className={activeStep.name === 'Step 1' ? 'pf-m-disabled' : ''}
                >
                  Backward
                </Button>
                <Button variant="link" onClick={onClose}>
                  Cancel
                </Button>
              </>
            );
          }
          // Final step buttons
          return (
            <>
              <Button onClick={() => validateLastStep(onNext)}>Validate</Button>
              <Button onClick={() => goToStepByName('Step 1')}>Go to Beginning</Button>
            </>
          );
        }}
      </WizardContextConsumer>
    </WizardFooter>
  );

  const title = 'Validate on button press wizard example';
  return (
    <Wizard
      navAriaLabel={`${title} steps`}
      mainAriaLabel={`${title} content`}
      onClose={closeWizard}
      footer={CustomFooter}
      steps={steps}
      height={400}
    />
  );
};
