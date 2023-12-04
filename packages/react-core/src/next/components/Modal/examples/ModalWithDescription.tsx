import React from 'react';
import { Button } from '@patternfly/react-core';
import { Modal, ModalBoxBody, ModalBoxHeader, ModalBoxFooter } from '@patternfly/react-core/next';

export const ModalWithDescription: React.FunctionComponent = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleModalToggle = (_event: KeyboardEvent | React.MouseEvent) => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <React.Fragment>
      <Button variant="primary" onClick={handleModalToggle}>
        Show modal with description
      </Button>
      <Modal
        isOpen={isModalOpen}
        onClose={handleModalToggle}
        aria-labelledby="modal-with-description-title"
        aria-describedby="modal-box-body-with-description"
      >
        <ModalBoxHeader
          title="Modal with description"
          labelId="modal-with-description-title"
          description="A description is used when you want to provide more info about the modal than the title is able to describe. The content in the description is static and will not scroll with the rest of the modal body."
        />

        <ModalBoxBody id="modal-box-body-with-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </ModalBoxBody>
        <ModalBoxFooter>
          <Button key="confirm" variant="primary" onClick={handleModalToggle}>
            Confirm
          </Button>
          <Button key="cancel" variant="link" onClick={handleModalToggle}>
            Cancel
          </Button>
        </ModalBoxFooter>
      </Modal>
    </React.Fragment>
  );
};
