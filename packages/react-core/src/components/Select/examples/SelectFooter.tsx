import React from 'react';
import { MenuToggle, MenuFooter, Select, SelectList, SelectOption, Button } from '@patternfly/react-core';

export const SelectFooter: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [selected, setSelected] = React.useState<string>('Select a value');

  const onToggleClick = () => {
    setIsOpen(!isOpen);
  };

  const toggle = (toggleRef) => (
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

  function onSelect(event: React.MouseEvent | undefined, value: string | number | undefined) {
    if (typeof value === 'undefined') {
      return;
    }

    setSelected(value.toString());
  }

  return (
    <Select
      isOpen={isOpen}
      onOpenChange={(isOpen) => setIsOpen(isOpen)}
      onOpenChangeKeys={['Escape']}
      toggle={toggle}
      id="menu-with-footer"
      onSelect={onSelect}
      selected={selected}
    >
      <SelectList>
        <SelectOption value="Option 1">Option 1</SelectOption>
        <SelectOption value="Option 2">Option 2</SelectOption>
        <SelectOption value="Option 3">Option 3</SelectOption>
      </SelectList>
      <MenuFooter>
        <Button variant="link" isInline>
          Footer action
        </Button>
      </MenuFooter>
    </Select>
  );
};
