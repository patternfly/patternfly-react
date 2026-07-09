import { Fragment, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, ModalVariant } from '@patternfly/react-core';

export const ModalAnimated: React.FunctionComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = (_event: KeyboardEvent | React.MouseEvent) => {
    setIsModalOpen((prevIsModalOpen) => !prevIsModalOpen);
  };

  return (
    <Fragment>
      <Button variant="primary" onClick={handleModalToggle}>
        Show animated modal
      </Button>
      <Modal
        animated
        variant={ModalVariant.large}
        isOpen={isModalOpen}
        aria-labelledby="modal-animated-label"
        aria-describedby="modal-animated-description"
        elementToFocus="#modal-custom-focus-confirm-button"
      >
        <ModalHeader title="Animated Modal Header" labelId="modal-animated-label" />
        <ModalBody id="modal-animated-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </ModalBody>
        <ModalFooter>
          <Button id="modal-custom-focus-confirm-button" key="confirm" variant="primary" onClick={handleModalToggle}>
            Confirm
          </Button>
          <Button key="cancel" variant="link" onClick={handleModalToggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </Fragment>
  );
};
