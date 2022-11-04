import React from 'react';
import { Select, SelectOption, SelectList, SelectGroup } from '@patternfly/react-core/next';
import { MenuToggle, MenuToggleElement } from '@patternfly/react-core';

export const SelectBasic: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<string>('Select a value');
  const menuRef = React.useRef<HTMLDivElement>(null);

  const onToggleClick = () => {
    setIsOpen(!isOpen);
  };

  const onSelect = (_event: React.MouseEvent<Element, MouseEvent> | undefined, itemId: string | number | undefined) => {
    // eslint-disable-next-line no-console
    console.log('selected', itemId);

    setSelected(itemId as string);
    setIsOpen(false);
  };

  const toggle = (toggleRef: React.Ref<MenuToggleElement>) => (
    <MenuToggle
      ref={toggleRef}
      onClick={onToggleClick}
      isExpanded={isOpen}
      style={
        {
          width: '200px'
        } as React.CSSProperties
      }
    >
      {selected}
    </MenuToggle>
  );

  return (
    <Select
      id="single-select"
      ref={menuRef}
      isOpen={isOpen}
      selected={selected}
      onSelect={onSelect}
      onOpenChange={isOpen => setIsOpen(isOpen)}
      toggle={toggle}
    >
      <SelectGroup label="Group 1">
        <SelectList>
          <SelectOption itemId="Option 1">Option 1</SelectOption>
          <SelectOption itemId="Option 2">Option 2</SelectOption>
          <SelectOption itemId="Option 3">Option 3</SelectOption>
        </SelectList>
      </SelectGroup>
      <SelectGroup label="Group 2">
        <SelectList>
          <SelectOption itemId="Option 4">Option 4</SelectOption>
          <SelectOption itemId="Option 5">Option 5</SelectOption>
          <SelectOption itemId="Option 6">Option 6</SelectOption>
        </SelectList>
      </SelectGroup>
    </Select>
  );
};
