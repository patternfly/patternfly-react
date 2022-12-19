import React from 'react';
import { Wizard, WizardStep } from '@patternfly/react-core';

export const WizardIncrementallyEnabledSteps: React.FunctionComponent = () => {
  const [stepIdReached, setStepIdReached] = React.useState(1);

  const onNext = ({ id }: WizardStep) => {
    if (id) {
      if (typeof id === 'string') {
        const [, orderIndex] = id.split('-');
        id = parseInt(orderIndex);
      }
      setStepIdReached(stepIdReached < id ? id : stepIdReached);
    }
  };

  const closeWizard = () => {
    // eslint-disable-next-line no-console
    console.log('close wizard');
  };

  const steps = [
    { id: 'incrementallyEnabled-1', name: 'First step', component: <p>Step 1 content</p> },
    {
      id: 'incrementallyEnabled-2',
      name: 'Second step',
      component: <p>Step 2 content</p>,
      canJumpTo: stepIdReached >= 2
    },
    {
      id: 'incrementallyEnabled-3',
      name: 'Third step',
      component: <p>Step 3 content</p>,
      canJumpTo: stepIdReached >= 3
    },
    {
      id: 'incrementallyEnabled-4',
      name: 'Fourth step',
      component: <p>Step 4 content</p>,
      canJumpTo: stepIdReached >= 4
    },
    {
      id: 'incrementallyEnabled-5',
      name: 'Review',
      component: <p>Review step content</p>,
      nextButtonText: 'Finish',
      canJumpTo: stepIdReached >= 5
    }
  ];
  const title = 'Incrementally enabled wizard example';
  return (
    <Wizard
      navAriaLabel={`${title} steps`}
      mainAriaLabel={`${title} content`}
      onClose={closeWizard}
      steps={steps}
      onNext={onNext}
      height={400}
    />
  );
};
