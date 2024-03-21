import {
  useState,
  type FunctionComponent,
  type MouseEvent as ReactMouseEvent,
  type Ref,
  type CSSProperties
} from 'react';
import { Select, SelectOption, SelectList, MenuToggle, MenuToggleElement, Badge } from '@patternfly/react-core';

export const SelectCheckbox: FunctionComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const onToggleClick = () => {
    setIsOpen(!isOpen);
  };

  const onSelect = (_event: ReactMouseEvent<Element, MouseEvent> | undefined, value: string | number | undefined) => {
    // eslint-disable-next-line no-console
    console.log('selected', value);

    if (selectedItems.includes(value as number)) {
      setSelectedItems(selectedItems.filter((id) => id !== value));
    } else {
      setSelectedItems([...selectedItems, value as number]);
    }
  };

  const toggle = (toggleRef: Ref<MenuToggleElement>) => (
    <MenuToggle
      ref={toggleRef}
      onClick={onToggleClick}
      isExpanded={isOpen}
      style={
        {
          width: '200px'
        } as CSSProperties
      }
    >
      Filter by status
      {selectedItems.length > 0 && <Badge isRead>{selectedItems.length}</Badge>}
    </MenuToggle>
  );

  return (
    <Select
      role="menu"
      id="checkbox-select"
      isOpen={isOpen}
      selected={selectedItems}
      onSelect={onSelect}
      onOpenChange={(nextOpen: boolean) => setIsOpen(nextOpen)}
      toggle={toggle}
    >
      <SelectList>
        <SelectOption hasCheckbox value={0} isSelected={selectedItems.includes(0)}>
          Debug
        </SelectOption>
        <SelectOption hasCheckbox value={1} isSelected={selectedItems.includes(1)}>
          Info
        </SelectOption>
        <SelectOption hasCheckbox value={2} isSelected={selectedItems.includes(2)}>
          Warn
        </SelectOption>
        <SelectOption hasCheckbox isDisabled value={4} isSelected={selectedItems.includes(4)}>
          Error
        </SelectOption>
      </SelectList>
    </Select>
  );
};
