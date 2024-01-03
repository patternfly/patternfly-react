import React from 'react';
import {
  EmptyState,
  EmptyStateFooter,
  EmptyStateBody,
  EmptyStateActions,
  Progress,
  Button,
  Wizard,
  WizardStep
} from '@patternfly/react-core';
import CogsIcon from '@patternfly/react-icons/dist/esm/icons/cogs-icon';
import layout from '@patternfly/react-styles/css/layouts/Bullseye/bullseye';

interface ValidationProgressProps {
  onClose(): void;
}

const ValidationProgress: React.FunctionComponent<ValidationProgressProps> = ({ onClose }) => {
  const [percentValidated, setPercentValidated] = React.useState(0);

  const tick = React.useCallback(() => {
    if (percentValidated < 100) {
      setPercentValidated((prevValue) => prevValue + 20);
    }
  }, [percentValidated]);

  React.useEffect(() => {
    const interval = setInterval(() => tick(), 1000);

    return () => {
      clearInterval(interval);
    };
  }, [tick]);

  return (
    <div className={layout.bullseye}>
      <EmptyState
        headingLevel="h4"
        titleText={percentValidated === 100 ? 'Validation complete' : 'Validating credentials'}
        icon={CogsIcon}
        variant="lg"
      >
        <EmptyStateBody>
          <Progress value={percentValidated} measureLocation="outside" aria-label="Wizard validation progress" />
        </EmptyStateBody>
        <EmptyStateBody>
          Description can be used to further elaborate on the validation step, or give the user a better idea of how
          long the process will take.
        </EmptyStateBody>
        <EmptyStateFooter>
          <EmptyStateActions>
            <Button isDisabled={percentValidated !== 100} onClick={onClose}>
              Log to console
            </Button>
          </EmptyStateActions>
        </EmptyStateFooter>
      </EmptyState>
    </div>
  );
};

export const WizardWithSubmitProgress: React.FunctionComponent = () => {
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  // eslint-disable-next-line no-console
  const onClose = () => console.log('Some close action occurs here.');

  if (isSubmitted) {
    return <ValidationProgress onClose={onClose} />;
  }

  return (
    <Wizard height={400} title="Submit progress wizard" onClose={onClose}>
      <WizardStep name="Step 1" id="submit-progress-step-1">
        Step 1 content
      </WizardStep>
      <WizardStep name="Step 2" id="submit-progress-step-2">
        Step 2 content
      </WizardStep>
      <WizardStep
        name="Review"
        id="submit-progress-review"
        footer={{ nextButtonText: 'Finish', onNext: () => setIsSubmitted(true) }}
      >
        Review step content
      </WizardStep>
    </Wizard>
  );
};
