import React from 'react';
import { Modal, ModalVariant, Button, Wizard, WizardHeader, WizardStep } from '@patternfly/react-core';

export const ModalWithWizard: React.FunctionComponent = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleModalToggle = () => {
    setIsModalOpen((prevIsModalOpen) => !prevIsModalOpen);
  };

  const numberedSteps = [1, 2, 3, 4].map((stepNumber) => (
    <WizardStep name={`Step ${stepNumber}`} key={`Step ${stepNumber}`} id={`with-wizard-step-${stepNumber}`}>
      {`Step ${stepNumber}`}
    </WizardStep>
  ));

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
          height={400}
          header={
            <WizardHeader
              title="Wizard modal"
              titleId="modal-wizard-label"
              description="This is a wizard inside of a modal."
              onClose={handleModalToggle}
              closeButtonAriaLabel="Close wizard"
            />
          }
          onClose={handleModalToggle}
        >
          {numberedSteps}
          <WizardStep
            name="Review"
            id="with-wizard-review-step"
            footer={{ nextButtonText: 'Finish', onNext: handleModalToggle }}
          >
            Review step
          </WizardStep>
        </Wizard>
      </Modal>
    </React.Fragment>
  );
};
