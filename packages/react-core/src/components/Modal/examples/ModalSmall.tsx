import { FunctionComponent, MouseEvent, useState, Fragment } from 'react';
import { Modal, ModalVariant, Button } from '@patternfly/react-core';

export const ModalSmall: FunctionComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = (_event: KeyboardEvent | MouseEvent) => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <Fragment>
      <Button variant="primary" onClick={handleModalToggle}>
        Show small modal
      </Button>
      <Modal
        variant={ModalVariant.small}
        title="Small modal"
        isOpen={isModalOpen}
        onClose={handleModalToggle}
        actions={[
          <Button key="confirm" variant="primary" onClick={handleModalToggle}>
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
      </Modal>
    </Fragment>
  );
};
