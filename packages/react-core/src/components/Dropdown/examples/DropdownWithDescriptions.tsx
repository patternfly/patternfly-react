import React from 'react';
import { Dropdown, DropdownItem, DropdownList, MenuToggle, MenuToggleElement } from '@patternfly/react-core';

export const DropdownWithDescriptions: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const onToggleClick = () => {
    setIsOpen(!isOpen);
  };

  const onSelect = (
    _event: React.MouseEvent<Element, MouseEvent> | undefined,
    itemId: string | number | undefined,
    toggleRef: React.RefObject<any>
  ) => {
    // eslint-disable-next-line no-console
    console.log('selected', itemId);
    setIsOpen(false);
    toggleRef?.current.focus();
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
    >
      <DropdownList>
        <DropdownItem itemId={0} key="action" description="This is a description">
          Action
        </DropdownItem>
        <DropdownItem
          itemId={1}
          key="link"
          description="This is a very long description that describes the menu item"
          to="#default-link2"
          // Prevent the default onClick functionality for example purposes
          onClick={(ev: any) => ev.preventDefault()}
        >
          Link
        </DropdownItem>
        <DropdownItem itemId={2} isDisabled description="Disabled link description" key="disabled action">
          Disabled action
        </DropdownItem>
        <DropdownItem itemId={3} isDisabled description="This is a description" key="disabled link" to="#default-link4">
          Disabled link
        </DropdownItem>
      </DropdownList>
    </Dropdown>
  );
};
