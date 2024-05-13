import React from 'react';
import { Button, Dropdown, DropdownList, DropdownItem, MenuToggle, MenuToggleElement } from '@patternfly/react-core';
import { Modal as ModalDeprecated, ModalVariant as ModalVariantDeprecated } from '@patternfly/react-core/deprecated';

export const ModalWithDropdown: React.FunctionComponent = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  const handleModalToggle = (_event: KeyboardEvent | React.MouseEvent) => {
    setIsModalOpen(!isModalOpen);
    setIsDropdownOpen(false);
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const onSelect = () => {
    setIsDropdownOpen(!isDropdownOpen);
    onFocus();
  };

  const onFocus = () => {
    const element = document.getElementById('modal-dropdown-toggle');
    (element as HTMLElement).focus();
  };

  const onEscapePress = (event: KeyboardEvent) => {
    if (isDropdownOpen) {
      setIsDropdownOpen(!isDropdownOpen);
      onFocus();
    } else {
      handleModalToggle(event);
    }
  };

  return (
    <React.Fragment>
      <Button variant="primary" onClick={handleModalToggle}>
        Show dropdown modal
      </Button>
      <ModalDeprecated
        title="Dropdown modal"
        variant={ModalVariantDeprecated.small}
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
          <Dropdown
            isOpen={isDropdownOpen}
            onSelect={onSelect}
            onOpenChange={(isOpen: boolean) => setIsDropdownOpen(isOpen)}
            toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
              <MenuToggle ref={toggleRef} onClick={handleDropdownToggle} isExpanded={isDropdownOpen}>
                Dropdown
              </MenuToggle>
            )}
          >
            <DropdownList>
              <DropdownItem value={0} key="action">
                Action
              </DropdownItem>
              <DropdownItem
                value={1}
                key="link"
                to="#default-link2"
                // Prevent the default onClick functionality for example purposes
                onClick={(ev: any) => ev.preventDefault()}
              >
                Link
              </DropdownItem>
              <DropdownItem value={2} isDisabled key="disabled action">
                Disabled Action
              </DropdownItem>
              <DropdownItem value={3} isDisabled key="disabled link" to="#default-link4">
                Disabled Link
              </DropdownItem>
            </DropdownList>
          </Dropdown>
        </div>
      </ModalDeprecated>
    </React.Fragment>
  );
};
