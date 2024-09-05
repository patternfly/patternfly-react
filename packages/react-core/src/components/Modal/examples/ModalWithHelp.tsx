import React from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, Popover } from '@patternfly/react-core';
import HelpIcon from '@patternfly/react-icons/dist/esm/icons/help-icon';

export const ModalWithHelp: React.FunctionComponent = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleModalToggle = (_event: KeyboardEvent | React.MouseEvent) => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <React.Fragment>
      <Button variant="primary" onClick={handleModalToggle}>
        Show with help modal
      </Button>
      <Modal
        variant="small"
        isOpen={isModalOpen}
        onClose={handleModalToggle}
        aria-labelledby="with-help-modal-title"
        aria-describedby="modal-box-body-with-help"
      >
        <ModalHeader
          title="With help modal"
          labelId="with-help-modal-title"
          help={
            <Popover
              headerContent={<div>Help Popover</div>}
              bodyContent={
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla
                  turpis.
                </div>
              }
              footerContent="Popover Footer"
            >
              <Button variant="plain" aria-label="Help" icon={<HelpIcon />} />
            </Popover>
          }
        />
        <ModalBody id="modal-box-body-with-help">
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
