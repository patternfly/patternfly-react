import React from 'react';
import { Button } from '@patternfly/react-core';
import { Wizard as WizardDeprecated } from '@patternfly/react-core/deprecated';

export const WizardInModal: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleModalToggle = (_event: KeyboardEvent | React.MouseEvent) => {
    setIsOpen(!isOpen);
  };

  const handleWizardToggle = () => {
    setIsOpen(!isOpen);
  };

  const steps = [
    { name: 'First step', component: <p>Step 1 content</p> },
    { name: 'Second step', component: <p>Step 2 content</p> },
    { name: 'Third step', component: <p>Step 3 content</p> },
    { name: 'Fourth step', component: <p>Step 4 content</p> },
    { name: 'Review', component: <p>Review step content</p>, nextButtonText: 'Finish' }
  ];

  const title = 'Wizard in modal example';

  return (
    <React.Fragment>
      <Button variant="primary" onClick={handleModalToggle}>
        Show Modal
      </Button>
      <WizardDeprecated
        title={title}
        description="Simple Wizard Description"
        descriptionComponent="div"
        steps={steps}
        onClose={handleWizardToggle}
        isOpen={isOpen}
      />
    </React.Fragment>
  );
};
