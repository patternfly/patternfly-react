import React from 'react';
import {
  EmptyState,
  EmptyStateIcon,
  EmptyStateBody,
  EmptyStateSecondaryActions,
  Title,
  Progress,
  Button,
  Wizard
} from '@patternfly/react-core';
// eslint-disable-next-line patternfly-react/import-tokens-icons
import { CogsIcon } from '@patternfly/react-icons';

interface finishedProps {
  onClose: () => void;
}

const FinishedStep: React.FunctionComponent<finishedProps> = (props: finishedProps) => {
  const [percent, setPercent] = React.useState(0);

  const tick = () => {
    setPercent(prevPercent => {
      if (prevPercent < 100) {
        return prevPercent + 20;
      } else {
        return prevPercent;
      }
    });
  };

  React.useEffect(() => {
    const interval = setInterval(() => tick(), 1000);

    if (percent >= 100) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [percent]);

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

export const WizardFinished: React.FunctionComponent = () => {
  const closeWizard = () => {
    // eslint-disable-next-line no-console
    console.log('close wizard');
  };

  const steps = [
    { name: 'First step', component: <p>Step 1 content</p> },
    { name: 'Second step', component: <p>Step 2 content</p> },
    { name: 'Third step', component: <p>Step 3 content</p> },
    { name: 'Fourth step', component: <p>Step 4 content</p> },
    { name: 'Review', component: <p>Review step content</p>, nextButtonText: 'Finish' },
    { name: 'Finish', component: <FinishedStep onClose={closeWizard} />, isFinishedStep: true }
  ];
  const title = 'Finished wizard example';
  return (
    <Wizard
      navAriaLabel={`${title} steps`}
      mainAriaLabel={`${title} content`}
      onClose={closeWizard}
      steps={steps}
      height={400}
    />
  );
};
