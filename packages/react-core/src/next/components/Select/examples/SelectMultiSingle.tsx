import React from 'react';
import { Select, SelectOption, SelectList } from '@patternfly/react-core/next';
import { MenuToggle, MenuToggleElement } from '@patternfly/react-core';

export const SelectMultiSingle: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedItems, setSelectedItems] = React.useState<string[]>([]);
  const menuRef = React.useRef<HTMLDivElement>(null);

  const onToggleClick = () => {
    setIsOpen(!isOpen);
  };

  const onSelect = (_event: React.MouseEvent<Element, MouseEvent> | undefined, itemId: string | number | undefined) => {
    // eslint-disable-next-line no-console
    console.log('selected', itemId);

    if (selectedItems.includes(itemId as string)) {
      setSelectedItems(selectedItems.filter(id => id !== itemId));
    } else {
      setSelectedItems([...selectedItems, itemId as string]);
    }
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
      Select a value
    </MenuToggle>
  );

  return (
    <Select
      id="single-select"
      ref={menuRef}
      isOpen={isOpen}
      selected={selectedItems}
      onSelect={onSelect}
      onOpenChange={isOpen => setIsOpen(isOpen)}
      toggle={toggle}
    >
      <SelectList>
        <SelectOption itemId="Option 1">Option 1</SelectOption>
        <SelectOption itemId="Option 2">Option 2</SelectOption>
        <SelectOption itemId="Option 3">Option 3</SelectOption>
      </SelectList>
    </Select>
  );
};
