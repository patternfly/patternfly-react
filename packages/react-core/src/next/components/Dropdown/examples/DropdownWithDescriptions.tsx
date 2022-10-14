import React from 'react';
import { Dropdown, DropdownItem, DropdownList } from '@patternfly/react-core/next';
import { MenuToggle } from '@patternfly/react-core';

export const DropdownWithDescriptions: React.FunctionComponent = () => {
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
      minWidth="150px"
      onOpenChange={isOpen => setIsOpen(isOpen)}
      toggle={toggleRef => (
        <MenuToggle ref={toggleRef} isFullWidth onClick={onToggleClick} isExpanded={isOpen}>
          Dropdown
        </MenuToggle>
      )}
    >
      <DropdownList>
        <DropdownItem itemId={0} key="link" description="This is a description">
          Link
        </DropdownItem>
        <DropdownItem
          itemId={1}
          key="action"
          description="This is a very long description that describes the menu item"
          to="#default-link2"
          onClick={ev => ev.preventDefault()}
        >
          Action
        </DropdownItem>
        <DropdownItem itemId={2} isDisabled description="Disabled link description" key="disabled link">
          Disabled link
        </DropdownItem>
        <DropdownItem
          itemId={3}
          isDisabled
          description="This is a description"
          key="disabled action"
          to="#default-link4"
        >
          Disabled action
        </DropdownItem>
      </DropdownList>
    </Dropdown>
  );
};
