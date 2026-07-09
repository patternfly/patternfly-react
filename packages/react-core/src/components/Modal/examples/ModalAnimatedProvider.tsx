import { Fragment, useState } from 'react';
import {
  AnimationsProvider,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalVariant
} from '@patternfly/react-core';

export const ModalAnimatedProvider: React.FunctionComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = (_event: KeyboardEvent | React.MouseEvent) => {
    setIsModalOpen((prevIsModalOpen) => !prevIsModalOpen);
  };

  return (
    <AnimationsProvider config={{ hasAnimations: true }}>
      <Fragment>
        <Button variant="primary" onClick={handleModalToggle}>
          Show animated modal (via AnimationsProvider)
        </Button>
        <Modal
          variant={ModalVariant.large}
          isOpen={isModalOpen}
          aria-labelledby="modal-animated-provider-label"
          aria-describedby="modal-animated-provider-description"
          elementToFocus="#modal-animated-provider-confirm-button"
        >
          <ModalHeader title="Animated Modal Header" labelId="modal-animated-provider-label" />
          <ModalBody id="modal-animated-provider-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button
              id="modal-animated-provider-confirm-button"
              key="confirm"
              variant="primary"
              onClick={handleModalToggle}
            >
              Confirm
            </Button>
            <Button key="cancel" variant="link" onClick={handleModalToggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </Fragment>
    </AnimationsProvider>
  );
};
