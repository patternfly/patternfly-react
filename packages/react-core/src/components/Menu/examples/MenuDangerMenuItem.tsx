import React from 'react';
import { Divider, Menu, MenuContent, MenuItem, MenuList } from '@patternfly/react-core';

export const MenuDangerMenuItem: React.FunctionComponent = () => {
  const [activeItem, setActiveItem] = React.useState(0);

  const onSelect = (_event: React.MouseEvent<Element, MouseEvent> | undefined, itemId: number | string | undefined) => {
    const item = itemId as number;
    // eslint-disable-next-line no-console
    console.log(`clicked ${itemId}`);
    setActiveItem(item);
  };

  return (
    <Menu activeItemId={activeItem} onSelect={onSelect}>
      <MenuContent>
        <MenuList>
          <MenuItem itemId={0}>Action 1</MenuItem>
          <MenuItem itemId={1}>Action 2</MenuItem>
          <Divider component="li" />
          <MenuItem itemId={2} isDanger>
            Delete
          </MenuItem>
        </MenuList>
      </MenuContent>
    </Menu>
  );
};
