import React from 'react';
import { Menu, MenuContent, MenuList, MenuItem } from '@patternfly/react-core';

export const MenuCheckboxList: React.FunctionComponent = () => {
  const [activeItem, setActiveItem] = React.useState(0);

  const onSelect = (event, itemId) => {
    // eslint-disable-next-line no-console
    console.log(`clicked ${itemId}`);
    setActiveItem(itemId);
  };

  return (
    <Menu activeItemId={activeItem} onSelect={onSelect}>
      <MenuContent>
        <MenuList>
          <MenuItem isCheck itemId={0}>
            Checkbox 1
          </MenuItem>
          <MenuItem isCheck itemId={1}>
            Checkbox 2
          </MenuItem>
          <MenuItem isCheck isDisabled>
            Checkbox 3
          </MenuItem>
        </MenuList>
      </MenuContent>
    </Menu>
  );
};
