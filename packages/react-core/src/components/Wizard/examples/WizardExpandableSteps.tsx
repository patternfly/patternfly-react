import React from 'react';
import { Wizard } from '@patternfly/react-core';

export const WizardExpandableSteps: React.FunctionComponent = () => {
  const steps = [
    {
      name: 'First step',
      steps: [
        { name: 'Substep A', component: <p>Substep A content</p> },
        { name: 'Substep B', component: <p>Substep B content</p> }
      ]
    },
    { name: 'Second step', component: <p>Step 2 content</p> },
    {
      name: 'Third step',
      steps: [
        { name: 'Substep C', component: <p>Substep C content</p> },
        { name: 'Substep D', component: <p>Substep D content</p> }
      ]
    },
    { name: 'Fourth step', component: <p>Step 4 content</p> },
    { name: 'Review', component: <p>Review step content</p>, nextButtonText: 'Finish' }
  ];
  const title = 'Expandable wizard example';
  return (
    <Wizard
      navAriaLabel={`${title} steps`}
      mainAriaLabel={`${title} content`}
      steps={steps}
      height={400}
      isNavExpandable
    />
  );
};
