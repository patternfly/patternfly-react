import React from 'react';
import { Nav, NavItem, NavList, Menu, MenuContent, MenuList, MenuItem } from '@patternfly/react-core';

export const NavFlyout: React.FunctionComponent = () => {
  const [activeItem, setActiveItem] = React.useState('nav-flyout-default-link-1');

  const onSelect = (result: { itemId: number | string }) => {
    setActiveItem(result.itemId as string);
  };

  const onMenuSelect = (_event: any, itemId: string | number | undefined) => setActiveItem(itemId as string);

  const onMenuItemClick = (event: any) => {
    event.preventDefault();
  };

  const numFlyouts = 5;
  const FlyoutMenu = ({ depth, children }) => (
    <Menu key={depth} containsFlyout isNavFlyout id={`nav-flyout-menu-${depth}`} onSelect={onMenuSelect}>
      <MenuContent>
        <MenuList>
          <MenuItem onClick={onMenuItemClick} flyoutMenu={children} itemId={`nav-flyout-next-menu-${depth}`}>
            Next menu
          </MenuItem>
          {Array.apply(0, Array(numFlyouts - depth)).map((_item, index: number) => (
            <MenuItem
              onClick={onMenuItemClick}
              key={`${depth}-${index}`}
              itemId={`nav-flyout-${depth}-${index}`}
              to={`#menu-link-${depth}-${index}`}
              isActive={activeItem === `nav-flyout-${depth}-${index}`}
            >
              Menu {depth} item {index}
            </MenuItem>
          ))}
          <MenuItem onClick={onMenuItemClick} flyoutMenu={children} itemId={`nav-flyout-next-menu-2-${depth}`}>
            Next menu
          </MenuItem>
        </MenuList>
      </MenuContent>
    </Menu>
  );

  let curFlyout = <FlyoutMenu depth={1}>{null}</FlyoutMenu>;
  for (let i = 2; i < numFlyouts - 1; i++) {
    curFlyout = <FlyoutMenu depth={i}>{curFlyout}</FlyoutMenu>;
  }

  return (
    <Nav onSelect={onSelect} aria-label="Flyout global nav">
      <NavList>
        <NavItem
          preventDefault
          id="nav-flyout-default-link-1"
          to="#nav-flyout-default-link-1"
          itemId="nav-flyout-default-link-1"
          isActive={activeItem === 'nav-flyout-default-link-1'}
        >
          Flyout Link 1
        </NavItem>
        <NavItem
          preventDefault
          id="nav-flyout-default-link-2"
          to="#nav-flyout-default-link-2"
          itemId="nav-flyout-default-link-2"
          isActive={activeItem === 'nav-flyout-default-link-2'}
        >
          Flyout Link 2
        </NavItem>
        <NavItem
          preventDefault
          flyout={curFlyout}
          id="nav-flyout-default-link-3"
          itemId="nav-flyout-default-link-3"
          isActive={activeItem === 'nav-flyout-default-link-3'}
        >
          Flyout Link 3
        </NavItem>
        <NavItem
          preventDefault
          id="nav-flyout-default-link4"
          to="#nav-flyout-default-link4"
          itemId="nav-flyout-default-link-4"
          isActive={activeItem === 'nav-flyout-default-link-4'}
        >
          Flyout Link 4
        </NavItem>
      </NavList>
    </Nav>
  );
};
