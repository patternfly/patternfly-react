import React from 'react';
import { Modal, ModalVariant, Button, Wizard } from '@patternfly/react-core';

export const ModalWithWizard: React.FunctionComponent = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const steps = [
    { name: 'Step 1', component: <p>Step 1</p> },
    { name: 'Step 2', component: <p>Step 2</p> },
    { name: 'Step 3', component: <p>Step 3</p> },
    { name: 'Step 4', component: <p>Step 4</p> },
    { name: 'Review', component: <p>Review Step</p>, nextButtonText: 'Finish' }
  ];

  return (
    <React.Fragment>
      <Button variant="primary" onClick={handleModalToggle}>
        Show wizard modal
      </Button>
      <Modal
        variant={ModalVariant.large}
        showClose={false}
        isOpen={isModalOpen}
        aria-labelledby="modal-wizard-label"
        aria-describedby="modal-wizard-description"
        onClose={handleModalToggle}
        hasNoBodyWrapper
      >
        <Wizard
          titleId="modal-wizard-label"
          descriptionId="modal-wizard-description"
          title="Wizard modal"
          description="This is a wizard inside of a modal."
          steps={steps}
          onClose={handleModalToggle}
          height={400}
        />
      </Modal>
    </React.Fragment>
  );
};
