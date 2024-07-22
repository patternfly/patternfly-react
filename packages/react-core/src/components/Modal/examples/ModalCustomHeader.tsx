import React from 'react';
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalVariant,
  Title,
  TitleSizes,
  Content,
  Flex
} from '@patternfly/react-core';

import WarningTriangleIcon from '@patternfly/react-icons/dist/esm/icons/warning-triangle-icon';

export const ModalCustomHeaderFooter: React.FunctionComponent = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleModalToggle = (_event: KeyboardEvent | React.MouseEvent) => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <React.Fragment>
      <Button variant="primary" onClick={handleModalToggle}>
        Show custom header/footer modal
      </Button>
      <Modal
        variant={ModalVariant.large}
        isOpen={isModalOpen}
        onClose={handleModalToggle}
        aria-labelledby="modal-custom-header-label"
        aria-describedby="modal-custom-header-description"
      >
        <ModalHeader>
          <Content>
            <h1 id="modal-custom-header-label">Custom header modal</h1>
            <p>Add custom content to the header by not passing the titles prop the modal box header component.</p>
          </Content>
        </ModalHeader>
        <ModalBody>
          <span id="modal-custom-header-description">
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
          <Title headingLevel="h4" size={TitleSizes.md}>
            <Flex spaceItems={{ default: 'spaceItemsSm' }}>
              <WarningTriangleIcon />
              <span>Custom modal footer.</span>
            </Flex>
          </Title>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
};
