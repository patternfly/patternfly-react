import React from 'react';
import { Dropdown, DropdownList, DropdownItem, Divider, MenuToggle } from '@patternfly/react-core';

const dropDownItems = (
  <DropdownList>
    <DropdownItem itemId={0} key="link">
      Link
    </DropdownItem>
    <DropdownItem
      data-cy="dropdown-item"
      itemId={1}
      key="action"
      to="#default-link2"
      onClick={(ev) => ev.preventDefault()}
    >
      Action
    </DropdownItem>
    <DropdownItem itemId={2} isDisabled key="disabled link">
      Disabled link
    </DropdownItem>
    <DropdownItem itemId={3} isDisabled key="disabled action" to="#default-link4">
      Disabled action
    </DropdownItem>
    <Divider key="separator" />
    <DropdownItem itemId={4} key="separated link">
      Separated link
    </DropdownItem>
    <DropdownItem itemId={5} key="separated action">
      Separated action
    </DropdownItem>
  </DropdownList>
);

export const DropdownDemo: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const onToggleClick = () => {
    setIsOpen(!isOpen);
  };

  const onSelect = (_event: React.MouseEvent<Element, MouseEvent> | undefined) => {
    setIsOpen(false);
  };

  return (
    <Dropdown
      isOpen={isOpen}
      onOpenChange={(isOpen) => setIsOpen(isOpen)}
      onSelect={onSelect}
      toggle={(toggleRef) => (
        <MenuToggle data-cy="toggle" onClick={onToggleClick} isExpanded={isOpen} ref={toggleRef}>
          Dropdown
        </MenuToggle>
      )}
    >
      {dropDownItems}
    </Dropdown>
  );
};
DropdownDemo.displayName = 'DropdownDemo';
