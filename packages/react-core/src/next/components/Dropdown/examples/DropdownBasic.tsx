import React from 'react';
import { Dropdown, DropdownItem, DropdownList } from '@patternfly/react-core/next';
import { Divider, MenuToggle } from '@patternfly/react-core';

export const DropdownBasic: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const onToggleClick = () => {
    setIsOpen(!isOpen);
  };

  const onSelect = (_event: React.MouseEvent<Element, MouseEvent> | undefined, itemId: string | number | undefined) => {
    // eslint-disable-next-line no-console
    console.log('selected', itemId);
    setIsOpen(false);
  };

  return (
    <Dropdown
      isOpen={isOpen}
      onSelect={onSelect}
      onOpenChange={isOpen => setIsOpen(isOpen)}
      toggle={toggleRef => (
        <MenuToggle ref={toggleRef} onClick={onToggleClick} isExpanded={isOpen}>
          Dropdown
        </MenuToggle>
      )}
    >
      <DropdownList>
        <DropdownItem itemId={0} key="link">
          Link
        </DropdownItem>
        <DropdownItem itemId={1} key="action" to="#default-link2" onClick={ev => ev.preventDefault()}>
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
    </Dropdown>
  );
};
