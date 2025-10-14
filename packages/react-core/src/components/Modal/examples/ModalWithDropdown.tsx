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
      return document.getElementById('modal-box-body-with-dropdown');
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
      >
        <ModalHeader title="Dropdown modal" labelId="modal-with-dropdown" />
        <ModalBody id="modal-box-body-with-dropdown">
          <div>
            Set the Dropdown's popperProps appendTo prop to <em>inline</em> if you want the dropdown to scroll within
            the modal. Set the popperProps appendTo prop to the id of the <em>parent modal or modal body</em> in order
            to allow the dropdown menu to break out of the modal container. Using the default dropdown location will
            break keyboard control over the dropdown due to the modal's built-in focus trap. You'll also want to handle
            closing of the modal yourself, by listening to the
            <strong>onEscapePress</strong> callback on the Modal component, so you can close the Dropdown first if it's
            open without closing the entire modal.
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
