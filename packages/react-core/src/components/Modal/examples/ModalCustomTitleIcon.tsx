import React from 'react';
import { Modal, Button } from '@patternfly/react-core';
import BullhornIcon from '@patternfly/react-icons/dist/esm/icons/bullhorn-icon';

export const ModalCustomTitleIcon: React.FunctionComponent = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <React.Fragment>
      <Button variant="primary" onClick={handleModalToggle}>
        Show custom title icon modal
      </Button>
      <Modal
        title="Custom title icon modal"
        titleIconVariant={BullhornIcon}
        isOpen={isModalOpen}
        onClose={handleModalToggle}
        aria-describedby="modal-custom-icon-description"
        actions={[
          <Button key="confirm" variant="primary" onClick={handleModalToggle}>
            Confirm
          </Button>,
          <Button key="cancel" variant="link" onClick={handleModalToggle}>
            Cancel
          </Button>
        ]}
      >
        <span id="modal-custom-icon-description">
          When static text describing the modal is available outside of the modal header, it can be given an ID that is
          then passed in as the modal's aria-describedby value.
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
