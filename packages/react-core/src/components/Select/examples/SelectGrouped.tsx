import React from 'react';
import {
  Select,
  SelectOption,
  SelectList,
  SelectGroup,
  MenuToggle,
  MenuToggleElement,
  Divider
} from '@patternfly/react-core';

export const SelectGrouped: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<string>('Select a value');

  const onToggleClick = () => {
    setIsOpen(!isOpen);
  };

  const onSelect = (_event: React.MouseEvent<Element, MouseEvent> | undefined, value: string | number | undefined) => {
    // eslint-disable-next-line no-console
    console.log('selected', value);

    setSelected(value as string);
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
      id="single-grouped-select"
      isOpen={isOpen}
      selected={selected}
      onSelect={onSelect}
      onOpenChange={(isOpen) => setIsOpen(isOpen)}
      toggle={toggle}
      shouldFocusToggleOnSelect
    >
      <SelectGroup label="Group 1">
        <SelectList>
          <SelectOption value="Option 1">Option 1</SelectOption>
          <SelectOption value="Option 2">Option 2</SelectOption>
          <SelectOption value="Option 3">Option 3</SelectOption>
        </SelectList>
      </SelectGroup>
      <Divider />
      <SelectGroup label="Group 2">
        <SelectList>
          <SelectOption value="Option 4">Option 4</SelectOption>
          <SelectOption value="Option 5">Option 5</SelectOption>
          <SelectOption value="Option 6">Option 6</SelectOption>
        </SelectList>
      </SelectGroup>
    </Select>
  );
};
