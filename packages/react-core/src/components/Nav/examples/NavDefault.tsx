import React from 'react';
import { Nav, NavItem, NavList } from '@patternfly/react-core';

export const NavDefault: React.FunctionComponent = () => {
  const [activeItem, setActiveItem] = React.useState(0);

  const onSelect = (result: { itemId: number | string }) => {
    setActiveItem(result.itemId as number);
  };

  return (
    <Nav onSelect={onSelect} aria-label="Default global nav">
      <NavList>
        <NavItem preventDefault id="nav-default-link1" to="#nav-default-link1" itemId={0} isActive={activeItem === 0}>
          Default Link 1
        </NavItem>
        <NavItem preventDefault id="nav-default-link2" to="#nav-default-link2" itemId={1} isActive={activeItem === 1}>
          Default Link 2
        </NavItem>
        <NavItem preventDefault id="nav-default-link3" to="#nav-default-link3" itemId={2} isActive={activeItem === 2}>
          Default Link 3
        </NavItem>
        <NavItem preventDefault id="nav-default-link4" to="#nav-default-link4" itemId={3} isActive={activeItem === 3}>
          Default Link 4
        </NavItem>
      </NavList>
    </Nav>
  );
};
