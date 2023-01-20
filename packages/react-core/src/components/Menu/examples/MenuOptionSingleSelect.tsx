import React from 'react';
import { Menu, MenuContent, MenuList, MenuItem } from '@patternfly/react-core';
import TableIcon from '@patternfly/react-icons/dist/esm/icons/table-icon';

export const MenuOptionSingleSelect: React.FunctionComponent = () => {
  const [activeItem, setActiveItem] = React.useState(0);
  const [selectedItem, setSelectedItem] = React.useState(0);

  const onSelect = (_event, itemId) => {
    setActiveItem(itemId);
    setSelectedItem(itemId);
  };

  return (
    <Menu role="listbox" onSelect={onSelect} activeItemId={activeItem} selected={selectedItem}>
      <MenuContent>
        <MenuList aria-label="Menu single select example">
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
