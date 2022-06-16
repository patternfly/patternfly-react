import React from 'react';
import { Modal, ModalVariant, Button } from '@patternfly/react-core';

export const ModalNoHeader: React.FunctionComponent = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const footer = <React.Fragment>Modal Footer</React.Fragment>;

  return (
    <React.Fragment>
      <Button variant="primary" onClick={handleModalToggle}>
        Show no header modal
      </Button>
      <Modal
        description="test"
        variant={ModalVariant.large}
        footer={footer}
        isOpen={isModalOpen}
        aria-describedby="modal-no-header-description"
        onClose={handleModalToggle}
      >
        <span id="modal-no-header-description">
          When static text describing the modal is available outside of the modal header, it can be wrapped with an ID
          referring to the modal's aria-describedby value.
        </span>
        <br />
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </Modal>
    </React.Fragment>
  );
};
