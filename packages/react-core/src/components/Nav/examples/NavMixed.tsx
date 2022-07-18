import React from 'react';
import { Nav, NavExpandable, NavItem, NavItemSeparator, NavList } from '@patternfly/react-core';

export const NavMixed: React.FunctionComponent = () => {
  const [activeGroup, setActiveGroup] = React.useState('');
  const [activeItem, setActiveItem] = React.useState('ungrouped_item-1');

  const onSelect = (result: { itemId: number | string; groupId: number | string | null }) => {
    setActiveGroup(result.groupId as string);
    setActiveItem(result.itemId as string);
  };

  return (
    <Nav onSelect={onSelect} aria-label="Mixed global nav">
      <NavList>
        <NavItem
          preventDefault
          id="mixed-1"
          to="#mixed-1"
          itemId="ungrouped_item-1"
          isActive={activeItem === 'ungrouped_item-1'}
        >
          Link 1 (not expandable)
        </NavItem>
        <NavExpandable
          title="Expandable section title 1"
          groupId="nav-mixed-group-1"
          isActive={activeGroup === 'nav-mixed-group-1'}
        >
          <NavItem
            preventDefault
            id="mixed-2"
            to="#mixed-2"
            groupId="nav-mixed-group-1"
            itemId="nav-mixed-group-1_item-1"
            isActive={activeItem === 'nav-mixed-group-1_item-1'}
          >
            Mixed Link 1
          </NavItem>
          <NavItemSeparator />
          <NavItem
            preventDefault
            id="mixed-3"
            to="#mixed-3"
            groupId="nav-mixed-group-1"
            itemId="nav-mixed-group-1_item-2"
            isActive={activeItem === 'nav-mixed-group-1_item-2'}
          >
            Mixed Link 2
          </NavItem>
          <NavItem
            preventDefault
            id="mixed-4"
            to="#mixed-4"
            groupId="nav-mixed-group-1"
            itemId="nav-mixed-group-1_item-3"
            isActive={activeItem === 'nav-mixed-group-1_item-3'}
          >
            Mixed Link 3
          </NavItem>
        </NavExpandable>
        <NavExpandable
          title="Expandable section title 2"
          groupId="nav-mixed-group-2"
          isActive={activeGroup === 'nav-mixed-group-2'}
        >
          <NavItem
            preventDefault
            id="mixed-5"
            to="#mixed-5"
            groupId="nav-mixed-group-2"
            itemId="nav-mixed-group-2_item-1"
            isActive={activeItem === 'nav-mixed-group-2_item-1'}
          >
            Mixed 2 Link 1
          </NavItem>
          <NavItem
            preventDefault
            id="mixed-6"
            to="#mixed-6"
            groupId="nav-mixed-group-2"
            itemId="nav-mixed-group-2_item-2"
            isActive={activeItem === 'nav-mixed-group-2_item-2'}
          >
            Mixed 2 Link 2
          </NavItem>
          <NavItem
            preventDefault
            id="mixed-7"
            to="#mixed-7"
            groupId="nav-mixed-group-2"
            itemId="nav-mixed-group-2_item-3"
            isActive={activeItem === 'nav-mixed-group-2_item-3'}
          >
            Mixed 2 Link 3
          </NavItem>
        </NavExpandable>
      </NavList>
    </Nav>
  );
};
