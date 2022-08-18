import React from 'react';
import { Nav, NavItem, NavGroup } from '@patternfly/react-core';

export const NavGrouped: React.FunctionComponent = () => {
  const [activeItem, setActiveItem] = React.useState('group-1_item-1');

  const onSelect = (result: { itemId: number | string }) => {
    setActiveItem(result.itemId as string);
  };

  return (
    <Nav onSelect={onSelect} aria-label="Grouped global nav">
      <NavGroup title="Section title 1">
        <NavItem
          preventDefault
          to="#nav-group1-item1"
          itemId="group-1_item-1"
          isActive={activeItem === 'group-1_item-1'}
        >
          Group 1 Link 1
        </NavItem>
        <NavItem
          preventDefault
          to="#nav-group1-item2"
          itemId="group-1_item-2"
          isActive={activeItem === 'group-1_item-2'}
        >
          Group 1 Link 2
        </NavItem>
        <NavItem
          preventDefault
          to="#nav-group1-item3"
          itemId="group-1_item-3"
          isActive={activeItem === 'group-1_item-3'}
        >
          Group 1 Link 3
        </NavItem>
      </NavGroup>
      <NavGroup title="Section title 2">
        <NavItem
          preventDefault
          to="#nav-group2-item1"
          itemId="group-2_item-1"
          isActive={activeItem === 'group-2_item-1'}
        >
          Group 2 Link 1
        </NavItem>
        <NavItem
          preventDefault
          to="#nav-group2-item2"
          itemId="group-2_item-2"
          isActive={activeItem === 'group-2_item-2'}
        >
          Group 2 Link 2
        </NavItem>
        <NavItem
          preventDefault
          to="#nav-group2-item3"
          itemId="group-2_item-3"
          isActive={activeItem === 'group-2_item-3'}
        >
          Group 2 Link 3
        </NavItem>
      </NavGroup>
    </Nav>
  );
};
