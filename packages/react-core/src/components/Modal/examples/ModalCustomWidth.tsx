import React from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from '@patternfly/react-core';

export const ModalCustomWidth: React.FunctionComponent = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleModalToggle = (_event: KeyboardEvent | React.MouseEvent) => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <React.Fragment>
      <Button variant="primary" onClick={handleModalToggle}>
        Show custom width modal
      </Button>
      <Modal
        width="50%"
        isOpen={isModalOpen}
        onClose={handleModalToggle}
        aria-labelledby="custom-width-modal-title"
        aria-describedby="modal-box-body-custom-width"
      >
        <ModalHeader title="Custom width modal" labelId="custom-width-modal-title" />
        <ModalBody id="modal-box-body-custom-width">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </ModalBody>
        <ModalFooter>
          <Button key="confirm" variant="primary" onClick={handleModalToggle}>
            Confirm
          </Button>
          <Button key="cancel" variant="link" onClick={handleModalToggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
};
