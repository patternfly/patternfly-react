import React from 'react';
import { MenuToggle, Divider, Dropdown, DropdownList, DropdownItem, DropdownGroup } from '@patternfly/react-core';

export const OptionsMenuDemo: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [selected, setSelected] = React.useState<string>('');
  const menuRef = React.useRef<HTMLDivElement>();

  const onToggleClick = (ev: React.MouseEvent) => {
    ev.stopPropagation(); // Stop handleClickOutside from handling
    setTimeout(() => {
      if (menuRef.current) {
        const firstElement = menuRef.current.querySelector(
          'li > button:not(:disabled), li > a:not(:disabled), input:not(:disabled)'
        );
        firstElement && (firstElement as HTMLElement).focus();
      }
    }, 0);
    setIsOpen(!isOpen);
  };

  return (
    <Dropdown
      isOpen={isOpen}
      onOpenChange={(isOpen) => setIsOpen(isOpen)}
      toggle={(toggleRef) => (
        <MenuToggle ref={toggleRef} onClick={onToggleClick} isExpanded={isOpen}>
          Options menu
        </MenuToggle>
      )}
      ref={menuRef}
      id="options-menu"
      selected={selected}
      onSelect={(_ev, itemId) => itemId && setSelected(itemId.toString())}
    >
      <DropdownList>
        <DropdownItem itemId="0" isSelected={selected === '0'}>
          Option 1
        </DropdownItem>
        <DropdownItem itemId="1" isSelected={selected === '1'} isDisabled>
          Disabled Option
        </DropdownItem>
        <Divider key="group1-divider" />
        <DropdownGroup label="Group 1">
          <DropdownList>
            <DropdownItem itemId="2" isSelected={selected === '2'}>
              Option 1
            </DropdownItem>
            <DropdownItem itemId="3" isSelected={selected === '3'}>
              Option 2
            </DropdownItem>
          </DropdownList>
        </DropdownGroup>
        <Divider key="group2-divider" />
        <DropdownGroup label="Group 2">
          <DropdownList>
            <DropdownItem itemId="4" isSelected={selected === '4'}>
              Option 1
            </DropdownItem>
            <DropdownItem itemId="5" isSelected={selected === '5'}>
              Option 2
            </DropdownItem>
          </DropdownList>
        </DropdownGroup>
      </DropdownList>
    </Dropdown>
  );
};
