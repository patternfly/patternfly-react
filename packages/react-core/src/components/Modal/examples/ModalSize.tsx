import React from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, ModalVariant, Radio } from '@patternfly/react-core';

export const ModalSize: React.FunctionComponent = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedVariant, setSelectedVariant] = React.useState(ModalVariant.small);

  const capitalize = (input: string) => input[0].toUpperCase() + input.substring(1);
  const formatSizeVariantName = (variant: string) => capitalize(variant);

  const variantOptions = [ModalVariant.small, ModalVariant.medium, ModalVariant.large];

  const renderSizeOptions = variantOptions.map((variant) => (
    <Radio
      id={`modal-size-${variant}-selector`}
      label={`${formatSizeVariantName(variant)} variant`}
      isChecked={variant === selectedVariant}
      onChange={() => setSelectedVariant(variant)}
      key={formatSizeVariantName(variant)}
      name="Variant options"
    />
  ));

  const handleModalToggle = (_event: KeyboardEvent | React.MouseEvent) => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <React.Fragment>
      {renderSizeOptions}
      <br />
      <Button variant="primary" onClick={handleModalToggle}>
        Show modal
      </Button>
      <Modal
        variant={selectedVariant}
        title="Variant modal"
        isOpen={isModalOpen}
        onClose={handleModalToggle}
        aria-labelledby="variant-modal-title"
        aria-describedby="modal-box-body-variant"
      >
        <ModalHeader title="Small modal" labelId="variant-modal-title" />
        <ModalBody id="modal-box-body-variant">
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
