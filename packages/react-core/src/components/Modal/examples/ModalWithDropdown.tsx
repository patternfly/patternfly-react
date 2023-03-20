import React from 'react';
import { Modal, ModalVariant, Button } from '@patternfly/react-core';
import {
  Dropdown as DropdownDeprecated,
  DropdownToggle,
  DropdownItem as DropdownItemDeprecated
} from '@patternfly/react-core/deprecated';
import CaretDownIcon from '@patternfly/react-icons/dist/esm/icons/caret-down-icon';

export const ModalWithDropdown: React.FunctionComponent = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
    setIsDropdownOpen(false);
  };

  const handleDropdownToggle = (_event: any, isDropdownOpen: boolean) => {
    setIsDropdownOpen(isDropdownOpen);
  };

  const onSelect = () => {
    setIsDropdownOpen(!isDropdownOpen);
    onFocus();
  };

  const onFocus = () => {
    const element = document.getElementById('modal-dropdown-toggle');
    (element as HTMLElement).focus();
  };

  const onEscapePress = () => {
    if (isDropdownOpen) {
      setIsDropdownOpen(!isDropdownOpen);
      onFocus();
    } else {
      handleModalToggle();
    }
  };

  const dropdownItems = [
    <DropdownItemDeprecated key="link">Link</DropdownItemDeprecated>,
    <DropdownItemDeprecated key="action" component="button">
      Action
    </DropdownItemDeprecated>,
    <DropdownItemDeprecated key="disabled link" isDisabled>
      Disabled Link
    </DropdownItemDeprecated>,
    <DropdownItemDeprecated key="disabled action" isDisabled component="button">
      Disabled Action
    </DropdownItemDeprecated>
  ];

  return (
    <React.Fragment>
      <Button variant="primary" onClick={handleModalToggle}>
        Show dropdown modal
      </Button>
      <Modal
        title="Dropdown modal"
        variant={ModalVariant.small}
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
        onEscapePress={onEscapePress}
      >
        <div>
          Set the dropdown <strong>menuAppendTo</strong> prop to <em>parent</em> in order to allow the dropdown menu
          break out of the modal container. You'll also want to handle closing of the modal yourself, by listening to
          the <strong>onEscapePress</strong> callback on the Modal component, so you can close the Dropdown first if
          it's open without closing the entire modal.
        </div>
        <br />
        <div>
          <DropdownDeprecated
            onSelect={onSelect}
            toggle={
              <DropdownToggle
                id="modal-dropdown-toggle"
                onToggle={handleDropdownToggle}
                toggleIndicator={CaretDownIcon}
              >
                Dropdown with a menu that can break out
              </DropdownToggle>
            }
            isOpen={isDropdownOpen}
            dropdownItems={dropdownItems}
            menuAppendTo="parent"
          />
        </div>
      </Modal>
    </React.Fragment>
  );
};
