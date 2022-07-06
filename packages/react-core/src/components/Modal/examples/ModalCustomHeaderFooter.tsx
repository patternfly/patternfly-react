import React from 'react';
import { Modal, ModalVariant, Button, Title, TitleSizes } from '@patternfly/react-core';
import WarningTriangleIcon from '@patternfly/react-icons/dist/esm/icons/warning-triangle-icon';

export const ModalCustomHeaderFooter: React.FunctionComponent = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const header = (
    <React.Fragment>
      <Title id="modal-custom-header-label" headingLevel="h1" size={TitleSizes['2xl']}>
        Custom header/footer modal
      </Title>
      <p className="pf-u-pt-sm">Allows for custom content in the header and/or footer by passing components.</p>
    </React.Fragment>
  );

  const footer = (
    <Title headingLevel="h4" size={TitleSizes.md}>
      <WarningTriangleIcon />
      <span className="pf-u-pl-sm">Custom modal footer.</span>
    </Title>
  );

  return (
    <React.Fragment>
      <Button variant="primary" onClick={handleModalToggle}>
        Show custom header/footer modal
      </Button>
      <Modal
        variant={ModalVariant.large}
        isOpen={isModalOpen}
        onClose={handleModalToggle}
        header={header}
        aria-labelledby="modal-custom-header-label"
        aria-describedby="modal-custom-header-description"
        footer={footer}
      >
        <span id="modal-custom-header-description">
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
