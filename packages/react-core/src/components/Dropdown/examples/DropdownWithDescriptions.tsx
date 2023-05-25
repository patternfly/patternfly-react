import React from 'react';
import { Dropdown, DropdownItem, DropdownList, MenuToggle, MenuToggleElement } from '@patternfly/react-core';

export const DropdownWithDescriptions: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const onToggleClick = () => {
    setIsOpen(!isOpen);
  };

  const onSelect = (_event: React.MouseEvent<Element, MouseEvent> | undefined, value: string | number | undefined) => {
    // eslint-disable-next-line no-console
    console.log('selected', value);
    setIsOpen(false);
  };

  return (
    <Dropdown
      isOpen={isOpen}
      onSelect={onSelect}
      onOpenChange={(isOpen: boolean) => setIsOpen(isOpen)}
      toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
        <MenuToggle ref={toggleRef} isFullWidth onClick={onToggleClick} isExpanded={isOpen}>
          Dropdown
        </MenuToggle>
      )}
      shouldFocusToggleOnSelect
    >
      <DropdownList>
        <DropdownItem value={0} key="action" description="This is a description">
          Action
        </DropdownItem>
        <DropdownItem
          value={1}
          key="link"
          description="This is a very long description that describes the menu item"
          to="#default-link2"
          // Prevent the default onClick functionality for example purposes
          onClick={(ev: any) => ev.preventDefault()}
        >
          Link
        </DropdownItem>
        <DropdownItem value={2} isDisabled description="Disabled link description" key="disabled action">
          Disabled action
        </DropdownItem>
        <DropdownItem value={3} isDisabled description="This is a description" key="disabled link" to="#default-link4">
          Disabled link
        </DropdownItem>
      </DropdownList>
    </Dropdown>
  );
};
