import React from 'react';
import { MenuToggle, Divider, Select, SelectList, SelectOption, SelectGroup } from '@patternfly/react-core';

export const OptionsMenuDemo: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [selected, setSelected] = React.useState<string>('');
  const menuRef = React.useRef<HTMLDivElement>();

  const onToggleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Select
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
      <SelectList>
        <SelectOption itemId="0" isSelected={selected === '0'}>
          Option 1
        </SelectOption>
        <SelectOption itemId="1" isSelected={selected === '1'} isDisabled>
          Disabled Option
        </SelectOption>
        <Divider key="group1-divider" />
        <SelectGroup label="Group 1">
          <SelectList>
            <SelectOption itemId="2" isSelected={selected === '2'}>
              Option 1
            </SelectOption>
            <SelectOption itemId="3" isSelected={selected === '3'}>
              Option 2
            </SelectOption>
          </SelectList>
        </SelectGroup>
        <Divider key="group2-divider" />
        <SelectGroup label="Group 2">
          <SelectList>
            <SelectOption itemId="4" isSelected={selected === '4'}>
              Option 1
            </SelectOption>
            <SelectOption itemId="5" isSelected={selected === '5'}>
              Option 2
            </SelectOption>
          </SelectList>
        </SelectGroup>
      </SelectList>
    </Select>
  );
};
