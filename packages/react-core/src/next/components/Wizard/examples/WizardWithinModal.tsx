import React from 'react';
import { Button, Modal, ModalVariant } from '@patternfly/react-core';
import { Wizard, WizardStep, WizardHeader } from '@patternfly/react-core/next';

export const WizardWithinModal = () => {
  const [isModelOpen, setIsModalOpen] = React.useState(false);

  return (
    <>
      <Button onClick={() => setIsModalOpen(true)}>Show Modal</Button>

      <Modal
        isOpen={isModelOpen}
        showClose={false}
        aria-label="Wizard modal"
        hasNoBodyWrapper
        variant={ModalVariant.medium}
      >
        <Wizard
          height={400}
          title="In modal wizard"
          header={<WizardHeader title="Wizard in modal" description="Simple wizard description" />}
        >
          <WizardStep name="Step 1" id="in-modal-step-1">
            Step 1 content
          </WizardStep>
          <WizardStep name="Step 2" id="in-modal-step-2">
            Step 2 content
          </WizardStep>
          <WizardStep
            name="Review"
            id="in-modal-review-step"
            footer={{ nextButtonText: 'Finish', onNext: () => setIsModalOpen(false) }}
          >
            Review step content
          </WizardStep>
        </Wizard>
      </Modal>
    </>
  );
};
