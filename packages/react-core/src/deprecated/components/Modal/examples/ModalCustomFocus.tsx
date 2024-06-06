import React from 'react';
import { Button } from '@patternfly/react-core';
import { Modal as ModalDeprecated } from '@patternfly/react-core/deprecated';

export const ModalCustomFocus: React.FunctionComponent = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleModalToggle = (_event: KeyboardEvent | React.MouseEvent) => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <React.Fragment>
      <Button variant="primary" onClick={handleModalToggle} ouiaId="ShowBasicModal">
        Show modal with custom focus
      </Button>
      <ModalDeprecated
        elementToFocus="#modal-custom-focus-confirm-button"
        title="Modal with custom focus"
        isOpen={isModalOpen}
        onClose={handleModalToggle}
        actions={[
          <Button id="modal-custom-focus-confirm-button" key="confirm" variant="primary" onClick={handleModalToggle}>
            Confirm
          </Button>,
          <Button key="cancel" variant="link" onClick={handleModalToggle}>
            Cancel
          </Button>
        ]}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </ModalDeprecated>
    </React.Fragment>
  );
};
