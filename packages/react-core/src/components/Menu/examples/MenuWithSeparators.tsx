import React from 'react';
import { Divider, Menu, MenuContent, MenuList, MenuItem } from '@patternfly/react-core';

export const MenuWithSeparators: React.FunctionComponent = () => {
  const [activeItem, setActiveItem] = React.useState(0);

  const onSelect = (_event, itemId) => {
    // eslint-disable-next-line no-console
    console.log(`clicked ${itemId}`);
    setActiveItem(itemId);
  };

  return (
    <Menu onSelect={onSelect} activeItemId={activeItem}>
      <MenuContent>
        <MenuList>
          <MenuItem itemId={0}>Action 1</MenuItem>
          <MenuItem itemId={1}>Action 2</MenuItem>
          <Divider component="li" />
          <MenuItem itemId={2}>Action 3</MenuItem>
        </MenuList>
      </MenuContent>
    </Menu>
  );
};
