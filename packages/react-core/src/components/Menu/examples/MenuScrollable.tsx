import React from 'react';
import { Menu, MenuContent, MenuList, MenuItem } from '@patternfly/react-core';

export const MenuScrollable: React.FunctionComponent = () => {
  const [activeItem, setActiveItem] = React.useState(0);

  const onSelect = (_event, itemId) => {
    // eslint-disable-next-line no-console
    console.log(`clicked ${itemId}`);
    setActiveItem(itemId);
  };

  return (
    <Menu activeItemId={activeItem} onSelect={onSelect} isScrollable>
      <MenuContent>
        <MenuList>
          <MenuItem itemId={0}>Action 1</MenuItem>
          <MenuItem itemId={1}>Action 2</MenuItem>
          <MenuItem itemId={2}>Action 3</MenuItem>
          <MenuItem itemId={3}>Action 4</MenuItem>
          <MenuItem itemId={4}>Action 5</MenuItem>
          <MenuItem itemId={5}>Action 6</MenuItem>
          <MenuItem itemId={6}>Action 7</MenuItem>
          <MenuItem itemId={7}>Action 8</MenuItem>
          <MenuItem itemId={8}>Action 9</MenuItem>
          <MenuItem itemId={9}>Action 10</MenuItem>
          <MenuItem itemId={10}>Action 11</MenuItem>
          <MenuItem itemId={11}>Action 12</MenuItem>
          <MenuItem itemId={12}>Action 13</MenuItem>
          <MenuItem itemId={13}>Action 14</MenuItem>
          <MenuItem itemId={14}>Action 15</MenuItem>
          <MenuItem
            itemId={15}
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
    </Menu>
  );
};
