import React from 'react';
import { Wizard } from '@patternfly/react-core';

export const WizardBasicWithDisabledSteps: React.FunctionComponent = () => {
  const steps = [
    { name: 'First step', component: <p>Step 1 content</p> },
    { name: 'Second step', component: <p>Step 2 content</p>, isDisabled: true },
    { name: 'Third step', component: <p>Step 3 content</p> },
    { name: 'Fourth step', component: <p>Step 4 content</p>, isDisabled: true },
    { name: 'Review', component: <p>Review step content</p>, nextButtonText: 'Finish' }
  ];
  const title = 'Basic wizard with disabled steps example';
  return <Wizard navAriaLabel={`${title} steps`} mainAriaLabel={`${title} content`} steps={steps} height={400} />;
};
