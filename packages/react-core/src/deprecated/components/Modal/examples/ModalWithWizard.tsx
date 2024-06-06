import React from 'react';
import { Button, Wizard, WizardHeader, WizardStep } from '@patternfly/react-core';
import { Modal as ModalDeprecated, ModalVariant as ModalVariantDeprecated } from '@patternfly/react-core/deprecated';

export const ModalWithWizard: React.FunctionComponent = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleModalToggle = (_event: KeyboardEvent | React.MouseEvent) => {
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
    <React.Fragment>
      <Button variant="primary" onClick={handleModalToggle}>
        Show wizard modal
      </Button>
      <ModalDeprecated
        variant={ModalVariantDeprecated.large}
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
      </ModalDeprecated>
    </React.Fragment>
  );
};
