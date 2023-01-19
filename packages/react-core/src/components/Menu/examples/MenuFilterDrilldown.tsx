import React from 'react';
import {
  Menu,
  MenuContent,
  MenuList,
  MenuItem,
  Divider,
  DrilldownMenu,
  MenuInput,
  SearchInput
} from '@patternfly/react-core';

export const MenuWithDrilldown: React.FunctionComponent = () => {
  const [menuDrilledIn, setMenuDrilledIn] = React.useState<string[]>([]);
  const [drilldownPath, setDrilldownPath] = React.useState<string[]>([]);
  const [menuHeights, setMenuHeights] = React.useState<any>({});
  const [activeMenu, setActiveMenu] = React.useState<string>('filter_drilldown-rootMenu');

  const drillIn = (
    _event: React.KeyboardEvent | React.MouseEvent,
    fromMenuId: string,
    toMenuId: string,
    pathId: string
  ) => {
    setMenuDrilledIn([...menuDrilledIn, fromMenuId]);
    setDrilldownPath([...drilldownPath, pathId]);
    setActiveMenu(toMenuId);
  };

  const drillOut = (_event: React.KeyboardEvent | React.MouseEvent, toMenuId: string) => {
    const menuDrilledInSansLast = menuDrilledIn.slice(0, menuDrilledIn.length - 1);
    const pathSansLast = drilldownPath.slice(0, drilldownPath.length - 1);
    setMenuDrilledIn(menuDrilledInSansLast);
    setDrilldownPath(pathSansLast);
    setActiveMenu(toMenuId);
  };

  const setHeight = (menuId: string, height: number) => {
    if (
      menuHeights[menuId] === undefined ||
      (menuId !== 'filter_drilldown-rootMenu' && menuHeights[menuId] !== height)
    ) {
      setMenuHeights({ ...menuHeights, [menuId]: height });
    }
  };

  const searchRef = React.createRef<HTMLInputElement>();
  const [startInput, setStartInput] = React.useState('');

  const handleStartTextInputChange = (value: string) => {
    setStartInput(value);
    searchRef?.current?.focus();
  };

  const startDrillItems = [
    {
      item: 'Application grouping',
      rest: { description: 'Description text' }
    },
    { item: 'Labels' },
    { item: 'Annotations' },
    { item: 'Count' },
    { item: 'Count 2' },
    { item: 'Count 3' },
    { item: 'Other' }
  ];

  const mapped = startDrillItems
    .filter(opt => !startInput || opt.item.toLowerCase().includes(startInput.toString().toLowerCase()))
    .map((opt, index) => (
      <MenuItem key={opt.item} itemId={index} {...opt.rest}>
        {opt.item}
      </MenuItem>
    ));
  if (startInput && mapped.length === 0) {
    mapped.push(
      <MenuItem isDisabled key="no result">
        No results found
      </MenuItem>
    );
  }

  return (
    <Menu
      id="filter_drilldown-rootMenu"
      containsDrilldown
      drilldownItemPath={drilldownPath}
      drilledInMenus={menuDrilledIn}
      activeMenu={activeMenu}
      onDrillIn={drillIn}
      onDrillOut={drillOut}
      onGetMenuHeight={setHeight}
    >
      <MenuContent menuHeight={`${menuHeights[activeMenu]}px`}>
        <MenuList>
          <MenuItem
            itemId="filter_group:start_rollout"
            direction="down"
            drilldownMenu={
              <DrilldownMenu id="filter_drilldown-drilldownMenuStart">
                <MenuItem itemId="filter_group:start_rollout_breadcrumb" direction="up">
                  Start rollout
                </MenuItem>
                <Divider component="li" />
                <MenuInput>
                  <SearchInput
                    ref={searchRef}
                    value={startInput}
                    aria-label="Filter menu items"
                    type="search"
                    onChange={(_event, value) => handleStartTextInputChange(value)}
                  />
                </MenuInput>
                <Divider component="li" />
                {mapped}
              </DrilldownMenu>
            }
          >
            Start rollout
          </MenuItem>
          <MenuItem itemId="item-a">Item B</MenuItem>
          <MenuItem itemId="item-b">Item C</MenuItem>
          <MenuItem itemId="item-c">Item D</MenuItem>
        </MenuList>
      </MenuContent>
    </Menu>
  );
};
