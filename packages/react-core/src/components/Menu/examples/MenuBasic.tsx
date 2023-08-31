import React from 'react';
import { Menu, MenuContent, MenuList, MenuItem, Checkbox } from '@patternfly/react-core';

export const MenuBasic: React.FunctionComponent = () => {
  const [activeItem, setActiveItem] = React.useState(0);
  const [isPlain, setIsPlain] = React.useState(false);

  const onSelect = (_event: React.MouseEvent<Element, MouseEvent> | undefined, itemId: number | string | undefined) => {
    const item = itemId as number; // eslint-disable-next-line no-console
    console.log(`clicked ${itemId}`);
    setActiveItem(item);
  };

  const togglePlain = (checked: boolean) => {
    setIsPlain(checked);
  };

  return (
    <React.Fragment>
      <Menu activeItemId={activeItem} onSelect={onSelect} isPlain={isPlain}>
        <MenuContent>
          <MenuList>
            <MenuItem itemId={0}>Action</MenuItem>
            <MenuItem
              itemId={1}
              to="#default-link2"
              // just for demo so that navigation is not triggered
              onClick={(event) => event.preventDefault()}
            >
              Link
            </MenuItem>
            <MenuItem isDisabled>Disabled action</MenuItem>
            <MenuItem isDisabled to="#default-link4">
              Disabled link
            </MenuItem>
            <MenuItem isAriaDisabled tooltipProps={{ content: 'aria-disabled action', position: 'top' }}>
              Aria-disabled action
            </MenuItem>
            <MenuItem
              isAriaDisabled
              to="#default-link5"
              tooltipProps={{ content: 'aria-disabled link', position: 'top' }}
            >
              Aria-disabled link
            </MenuItem>
          </MenuList>
        </MenuContent>
      </Menu>
      <div style={{ marginTop: 20 }}>
        <Checkbox
          label="Plain menu"
          isChecked={isPlain}
          onChange={(_event, checked) => togglePlain(checked)}
          aria-label="plain menu checkbox"
          id="toggle-plain"
          name="toggle-plain"
        />
      </div>
    </React.Fragment>
  );
};
