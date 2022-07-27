import React from 'react';
import { Menu, MenuContent, MenuList, MenuItem } from '@patternfly/react-core';

export const MenuWithLinks: React.FunctionComponent = () => {
  const [activeItem, setActiveItem] = React.useState(0);

  const onSelect = (_event: React.MouseEvent<Element, MouseEvent> | undefined, itemId: number | string | undefined) => {
    const item = itemId as number; // eslint-disable-next-line no-console
    console.log(`clicked ${item}`);
    setActiveItem(item);
  };

  return (
    <Menu onSelect={onSelect} activeItemId={activeItem}>
      <MenuContent>
        <MenuList>
          <MenuItem isExternalLink to="#default-link1" itemId={0}>
            Link 1
          </MenuItem>
          <MenuItem isExternalLink to="#default-link2" itemId={1}>
            Link 2
          </MenuItem>
          <MenuItem to="#default-link3" itemId={2}>
            Link 3
          </MenuItem>
        </MenuList>
      </MenuContent>
    </Menu>
  );
};
