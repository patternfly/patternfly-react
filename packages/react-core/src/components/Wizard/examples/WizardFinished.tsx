import React from 'react';
import { Wizard } from '@patternfly/react-core';
import FinishedStep from './FinishedStep';

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
