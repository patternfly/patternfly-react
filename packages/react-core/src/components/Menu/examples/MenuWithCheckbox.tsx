import React from 'react';
import { Menu, MenuContent, MenuList, MenuItem } from '@patternfly/react-core';

export const MenuWithCheckbox: React.FunctionComponent = () => {
  const [selectedItems, setSelectedItems] = React.useState<number[]>([]);

  /* eslint no-unused-vars: ["error", {"args": "after-used"}] */
  const onSelect = (_event: React.MouseEvent<Element, MouseEvent> | undefined, itemId: number | string | undefined) => {
    const item = itemId as number;
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((id) => id !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  return (
    <Menu onSelect={onSelect} selected={selectedItems}>
      <MenuContent>
        <MenuList>
          <MenuItem hasCheckbox itemId={0} isSelected={selectedItems.includes(0)}>
            Checkbox 1
          </MenuItem>
          <MenuItem hasCheckbox itemId={1} isSelected={selectedItems.includes(1)}>
            Checkbox 2
          </MenuItem>
          <MenuItem hasCheckbox itemId={2} isDisabled>
            Checkbox 3
          </MenuItem>
        </MenuList>
      </MenuContent>
    </Menu>
  );
};
