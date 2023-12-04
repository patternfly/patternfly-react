import React from 'react';
import { Button } from '@patternfly/react-core';
import { Modal, ModalBoxBody, ModalBoxFooter, ModalBoxHeader, ModalVariant } from '@patternfly/react-core/next';

export const ModalSmall: React.FunctionComponent = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleModalToggle = (_event: KeyboardEvent | React.MouseEvent) => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <React.Fragment>
      <Button variant="primary" onClick={handleModalToggle}>
        Show small modal
      </Button>
      <Modal
        variant={ModalVariant.small}
        title="Small modal"
        isOpen={isModalOpen}
        onClose={handleModalToggle}
        aria-labelledby="small-modal-title"
        aria-describedby="modal-box-body-small"
      >
        <ModalBoxHeader title="Small modal" labelId="small-modal-title" />
        <ModalBoxBody id="modal-box-body-small">
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
