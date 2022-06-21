import React from 'react';
import { Menu, MenuList, MenuItem, MenuContent, MenuFooter, Button } from '@patternfly/react-core';

export const MenuWithFooter: React.FunctionComponent = () => {
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
          <MenuItem itemId={0}>Action</MenuItem>
          <MenuItem
            itemId={1}
            to="#default-link2"
            // just for demo so that navigation is not triggered
            onClick={event => event.preventDefault()}
          >
            Link
          </MenuItem>
          <MenuItem isDisabled>Disabled action</MenuItem>
          <MenuItem isDisabled to="#default-link4">
            Disabled link
          </MenuItem>
        </MenuList>
      </MenuContent>
      <MenuFooter>
        <Button variant="link" isInline>
          Action
        </Button>
      </MenuFooter>
    </Menu>
  );
};
