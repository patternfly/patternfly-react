import React from 'react';
import { Button } from '@patternfly/react-core';
import { Modal, ModalBody, ModalFooter, ModalHeader } from '@patternfly/react-core/next';

import BullhornIcon from '@patternfly/react-icons/dist/esm/icons/bullhorn-icon';

export const ModalCustomTitleIcon: React.FunctionComponent = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleModalToggle = (_event: KeyboardEvent | React.MouseEvent) => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <React.Fragment>
      <Button variant="primary" onClick={handleModalToggle}>
        Show custom title icon modal
      </Button>
      <Modal
        isOpen={isModalOpen}
        onClose={handleModalToggle}
        aria-describedby="modal-custom-icon-description"
        aria-labelledby="custom-title-icon-modal-title"
      >
        <ModalHeader
          title="Custom title icon modal"
          titleIconVariant={BullhornIcon}
          labelId="custom-title-icon-modal-title"
        />
        <ModalBody>
          <span id="modal-custom-icon-description">
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
