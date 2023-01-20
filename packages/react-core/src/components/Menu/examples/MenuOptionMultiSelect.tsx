import React from 'react';
import { Menu, MenuContent, MenuList, MenuItem } from '@patternfly/react-core';
import TableIcon from '@patternfly/react-icons/dist/esm/icons/table-icon';

export const MenuOptionMultiSelect: React.FunctionComponent = () => {
  const [selectedItems, setSelectedItems] = React.useState<number[]>([]);

  const onSelect = (_event: React.MouseEvent<Element, MouseEvent> | undefined, itemId: number | string | undefined) => {
    const item = itemId as number;
    if (selectedItems.indexOf(item) !== -1) {
      setSelectedItems(selectedItems.filter(id => id !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  return (
    <Menu role="listbox" onSelect={onSelect} activeItemId={0} selected={selectedItems}>
      <MenuContent>
        <MenuList isAriaMultiselectable aria-label="Menu multi select example">
          <MenuItem itemId={0}>Option 1</MenuItem>
          <MenuItem itemId={1}>Option 2</MenuItem>
          <MenuItem icon={<TableIcon aria-hidden />} itemId={2}>
            Option 3
          </MenuItem>
        </MenuList>
      </MenuContent>
    </Menu>
  );
};
