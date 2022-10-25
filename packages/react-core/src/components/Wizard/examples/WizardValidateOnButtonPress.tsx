import React from 'react';
import { Button, Wizard, WizardFooter, WizardContextConsumer, Alert } from '@patternfly/react-core';
import SampleForm from './SampleForm';
import FinishedStep from './FinishedStep';

export const ValidateButtonPressWizard: React.FunctionComponent = () => {
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

  /* eslint-disable @typescript-eslint/no-unused-vars */
  const CustomFooter = (
    <WizardFooter>
      <WizardContextConsumer>
        {({ activeStep, goToStepByName, goToStepById, onNext, onBack, onClose }) => {
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
  /* eslint-enable @typescript-eslint/no-unused-vars */

  const title = 'Validate on button press wizard';
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
