import React from 'react';
import { Dropdown, DropdownItem, DropdownList, Divider, MenuToggle, MenuToggleElement } from '@patternfly/react-core';

export const DropdownBasic: React.FunctionComponent = () => {
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
        <MenuToggle ref={toggleRef} onClick={onToggleClick} isExpanded={isOpen}>
          Dropdown
        </MenuToggle>
      )}
      ouiaId="BasicDropdown"
    >
      <DropdownList>
        <DropdownItem itemId={0} key="action">
          Action
        </DropdownItem>
        <DropdownItem
          itemId={1}
          key="link"
          to="#default-link2"
          // Prevent the default onClick functionality for example purposes
          onClick={(ev: any) => ev.preventDefault()}
        >
          Link
        </DropdownItem>
        <DropdownItem itemId={2} isDisabled key="disabled action">
          Disabled Action
        </DropdownItem>
        <DropdownItem itemId={3} isDisabled key="disabled link" to="#default-link4">
          Disabled Link
        </DropdownItem>
        <Divider component="li" key="separator" />
        <DropdownItem itemId={4} key="separated action">
          Separated Action
        </DropdownItem>
        <DropdownItem itemId={5} key="separated link" to="#default-link6" onClick={(ev) => ev.preventDefault()}>
          Separated Link
        </DropdownItem>
      </DropdownList>
    </Dropdown>
  );
};
