import { FunctionComponent, MouseEvent, useState, Fragment } from 'react';
import { Modal, ModalVariant, Button, Wizard, WizardHeader, WizardStep } from '@patternfly/react-core';

export const ModalWithWizard: FunctionComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = (_event: KeyboardEvent | MouseEvent) => {
    setIsModalOpen((prevIsModalOpen) => !prevIsModalOpen);
  };

  const handleWizardToggle = () => {
    setIsModalOpen((prevIsModalOpen) => !prevIsModalOpen);
  };

  const numberedSteps = [1, 2, 3, 4].map((stepNumber) => (
    <WizardStep name={`Step ${stepNumber}`} key={`Step ${stepNumber}`} id={`with-wizard-step-${stepNumber}`}>
      {`Step ${stepNumber}`}
    </WizardStep>
  ));

  return (
    <Fragment>
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
              onClose={handleWizardToggle}
              closeButtonAriaLabel="Close wizard"
            />
          }
          onClose={handleWizardToggle}
        >
          {numberedSteps}
          <WizardStep
            name="Review"
            id="with-wizard-review-step"
            footer={{ nextButtonText: 'Finish', onNext: handleWizardToggle }}
          >
            Review step
          </WizardStep>
        </Wizard>
      </Modal>
    </Fragment>
  );
};
