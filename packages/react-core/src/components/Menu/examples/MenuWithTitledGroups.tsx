import React from 'react';
import { Menu, MenuContent, MenuGroup, MenuList, MenuItem, Divider } from '@patternfly/react-core';

export const MenuWithTitledGroups: React.FunctionComponent = () => {
  const [activeItem, setActiveItem] = React.useState(0);

  const onSelect = (_event, itemId) => {
    // eslint-disable-next-line no-console
    console.log(`clicked ${itemId}`);
    setActiveItem(itemId);
  };

  return (
    <Menu onSelect={onSelect} activeItemId={activeItem}>
      <MenuContent>
        <MenuGroup>
          <MenuList>
            <MenuItem to="#" itemId={0}>
              Link not in group
            </MenuItem>
          </MenuList>
        </MenuGroup>
        <Divider />
        <MenuGroup label="Group 1">
          <MenuList>
            <MenuItem to="#" itemId={1}>
              Link 1
            </MenuItem>
            <MenuItem itemId={2}>Link 2</MenuItem>
          </MenuList>
        </MenuGroup>
        <Divider />
        <MenuGroup label="Group 2">
          <MenuList>
            <MenuItem to="#" itemId={3}>
              Link 1
            </MenuItem>
            <MenuItem to="#" itemId={4}>
              Link 2
            </MenuItem>
          </MenuList>
        </MenuGroup>
      </MenuContent>
    </Menu>
  );
};
