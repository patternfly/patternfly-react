import React from 'react';

import { Nav, MenuContent, MenuItem, MenuList, DrilldownMenu, Menu } from '@patternfly/react-core';

interface MenuHeights {
  [menuId: string]: number;
}

const subMenuTwo: JSX.Element = (
  <DrilldownMenu id="nav-drilldown-subMenu-2">
    <MenuItem itemId="nav-drilldown-subMenu-2-breadcrumb" direction="up">
      SubMenu 1 - Item 1
    </MenuItem>
    <MenuItem itemId="nav-drilldown-subMenu-2_item-1" to="#subMenu-2_item-1">
      SubMenu 2 - Item 1
    </MenuItem>
    <MenuItem itemId="nav-drilldown-subMenu-2_item-2" to="#subMenu-2_item-2">
      SubMenu 2 - Item 2
    </MenuItem>
    <MenuItem itemId="nav-drilldown-subMenu-2_item-3" to="#subMenu-2_item-3">
      SubMenu 2 - Item 3
    </MenuItem>
  </DrilldownMenu>
);

const subMenuOne: JSX.Element = (
  <DrilldownMenu id="nav-drilldown-subMenu-1">
    <MenuItem itemId="nav-drilldown-subMenu-1-breadcrumb" direction="up">
      Item 1
    </MenuItem>
    <MenuItem
      itemId="nav-drilldown-subMenu-1_item-1"
      description="SubMenu 2"
      direction="down"
      drilldownMenu={subMenuTwo}
    >
      SubMenu 1 - Item 1
    </MenuItem>
    <MenuItem itemId="nav-drilldown-subMenu-1_item-2" to="#subMenu-1_item-2">
      SubMenu 1 - Item 2
    </MenuItem>
    <MenuItem itemId="nav-drilldown-subMenu-1_item-3" to="#subMenu-1_item-3">
      SubMenu 1 - Item 3
    </MenuItem>
  </DrilldownMenu>
);

export const NavigationDrilldown: React.FunctionComponent = () => {
  const [menuDrilledIn, setMenuDrilledIn] = React.useState<string[]>([]);
  const [drilldownPath, setDrilldownPath] = React.useState<string[]>([]);
  const [menuHeights, setMenuHeights] = React.useState<MenuHeights>({});
  const [activeMenu, setActiveMenu] = React.useState('rootMenu');

  const onDrillIn = (
    _event: React.KeyboardEvent | React.MouseEvent,
    fromItemId: string,
    toItemId: string,
    itemId: string
  ) => {
    setMenuDrilledIn(prevMenuDrilledIn => [...prevMenuDrilledIn, fromItemId]);
    setDrilldownPath(prevDrilldownPath => [...prevDrilldownPath, itemId]);
    setActiveMenu(toItemId);
  };

  const onDrillOut = (_event: React.KeyboardEvent | React.MouseEvent, toItemId: string, _itemId: string) => {
    setMenuDrilledIn(prevMenuDrilledIn => prevMenuDrilledIn.slice(0, prevMenuDrilledIn.length - 1));
    setDrilldownPath(prevDrilldownPath => prevDrilldownPath.slice(0, prevDrilldownPath.length - 1));
    setActiveMenu(toItemId);
  };

  const onGetMenuHeight = (menuId: string, height: number) => {
    if (!menuHeights[menuId] && menuId !== 'rootMenu') {
      setMenuHeights(prevMenuHeights => ({ ...prevMenuHeights, [menuId]: height }));
    }
  };

  return (
    <Nav aria-label="Drilldown global nav">
      <Menu
        id="nav-drilldown-rootMenu"
        containsDrilldown
        drilldownItemPath={drilldownPath}
        drilledInMenus={menuDrilledIn}
        activeMenu={activeMenu}
        onDrillIn={onDrillIn}
        onDrillOut={onDrillOut}
        onGetMenuHeight={onGetMenuHeight}
      >
        <MenuContent menuHeight={`${menuHeights[activeMenu]}px`}>
          <MenuList>
            <MenuItem itemId="nav-drilldown-item-1" direction="down" description="SubMenu 1" drilldownMenu={subMenuOne}>
              Item 1
            </MenuItem>
            <MenuItem itemId="nav-drilldown-item-2" to="#item-2">
              Item 2
            </MenuItem>
            <MenuItem itemId="nav-drilldown-item-3" to="#item-3">
              Item 3
            </MenuItem>
          </MenuList>
        </MenuContent>
      </Menu>
    </Nav>
  );
};
