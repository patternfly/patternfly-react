import { Fragment, useState } from 'react';
import {
  Button,
  Dropdown,
  DropdownList,
  DropdownItem,
  MenuToggle,
  MenuToggleElement,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  ModalVariant
} from '@patternfly/react-core';

export const ModalWithDropdown: React.FunctionComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
    if (typeof document !== 'undefined') {
      const element = document.getElementById('modal-dropdown-toggle');
      (element as HTMLElement)?.focus();
    }
  };

  const onEscapePress = (event: KeyboardEvent) => {
    if (isDropdownOpen) {
      setIsDropdownOpen(!isDropdownOpen);
      onFocus();
    } else {
      handleModalToggle(event);
    }
  };

  const getAppendLocation = () => {
    // document doesn't exist when PatternFly website docs framework gets pre-rendered
    // this is just to avoid that issue - works fine at runtime without it
    if (typeof document !== 'undefined' && document.getElementById) {
      return document.getElementById('modal-with-dropdown-focus-trap');
    } else {
      return 'inline';
    }
  };

  return (
    <Fragment>
      <Button variant="primary" onClick={handleModalToggle}>
        Show dropdown modal
      </Button>
      <Modal
        variant={ModalVariant.small}
        isOpen={isModalOpen}
        onClose={handleModalToggle}
        onEscapePress={onEscapePress}
        aria-labelledby="modal-with-dropdown"
        aria-describedby="modal-box-body-with-dropdown"
        focusTrapId="modal-with-dropdown-focus-trap"
      >
        <ModalHeader title="Dropdown modal" labelId="modal-with-dropdown" />
        <ModalBody id="modal-box-body-with-dropdown">
          <div>
            Using the Dropdown's default append location will interfere with keyboard accessibility due to the modal's
            built-in focus trap. To allow the dropdown to visually break out of the modal container, set the Dropdown's
            popperProps appendTo property to id of the focus trap for the modal. This can be done by adding prop
            focusTrapId to the modal, and then setting the append location to that as per this example. Otherwise you
            can use "inline" to allow it to scroll within the modal itself. Appending to the focus trap should allow the
            menu to expand visually outside the Modal (no scrollbar created in the Modal itself), and still allow
            focusing the content within that menu via keyboard. You should also handle the modal's closing behavior by
            listening to the
            <em>onEscapePress</em> callback on the Modal component. This allows the "escape" key to collapse the
            dropdown without closing the entire modal.
          </div>
          <br />
          <div>
            <Dropdown
              isOpen={isDropdownOpen}
              onSelect={onSelect}
              onOpenChange={(isOpen: boolean) => setIsDropdownOpen(isOpen)}
              toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
                <MenuToggle
                  id="modal-dropdown-toggle"
                  ref={toggleRef}
                  onClick={handleDropdownToggle}
                  isExpanded={isDropdownOpen}
                >
                  Dropdown
                </MenuToggle>
              )}
              popperProps={{
                appendTo: getAppendLocation()
              }}
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
    </Fragment>
  );
};
