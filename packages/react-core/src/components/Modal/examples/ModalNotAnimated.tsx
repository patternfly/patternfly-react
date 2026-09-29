import { Fragment, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, ModalVariant } from '@patternfly/react-core';

export const ModalNotAnimated: React.FunctionComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = (_event: KeyboardEvent | React.MouseEvent) => {
    setIsModalOpen((prevIsModalOpen) => !prevIsModalOpen);
  };

  return (
    <Fragment>
      <Button variant="primary" onClick={handleModalToggle}>
        Show no animations modal
      </Button>
      <Modal
        hasAnimations={false}
        variant={ModalVariant.large}
        isOpen={isModalOpen}
        onClose={handleModalToggle}
        aria-labelledby="modal-not-animated-label"
        aria-describedby="modal-not-animated-description"
        elementToFocus="#modal-not-animated-confirm-button"
      >
        <ModalHeader title="Not Animated Modal Header" labelId="modal-not-animated-label" />
        <ModalBody id="modal-not-animated-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </ModalBody>
        <ModalFooter>
          <Button id="modal-not-animated-confirm-button" key="confirm" variant="primary" onClick={handleModalToggle}>
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
