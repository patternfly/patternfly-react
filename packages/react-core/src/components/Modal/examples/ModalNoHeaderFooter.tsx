import React from 'react';
import { Button, Modal, ModalBody, ModalVariant } from '@patternfly/react-core';

export const ModalNoHeaderFooter: React.FunctionComponent = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleModalToggle = (_event: KeyboardEvent | React.MouseEvent) => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <React.Fragment>
      <Button variant="primary" onClick={handleModalToggle}>
        Show no header/footer modal
      </Button>
      <Modal
        variant={ModalVariant.large}
        isOpen={isModalOpen}
        aria-label="No header/footer modal"
        aria-describedby="modal-no-header-description"
        onClose={handleModalToggle}
      >
        <ModalBody>
          <span id="modal-no-header-description">
            When static text describing the modal is available outside of the modal header, it can be given an ID that
            is then passed in as the modal's aria-describedby value.
          </span>
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </ModalBody>
      </Modal>
    </React.Fragment>
  );
};
