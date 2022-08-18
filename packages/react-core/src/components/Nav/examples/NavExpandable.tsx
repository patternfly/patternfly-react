import React from 'react';
import { Nav, NavExpandable, NavItem, NavItemSeparator, NavList } from '@patternfly/react-core';

export const NavExpandableExample: React.FunctionComponent = () => {
  const [activeGroup, setActiveGroup] = React.useState('nav-expandable-group-1');
  const [activeItem, setActiveItem] = React.useState('nav-expandable-group-1_item-1');

  const onSelect = (result: { itemId: number | string; groupId: number | string }) => {
    setActiveGroup(result.groupId as string);
    setActiveItem(result.itemId as string);
  };

  const onToggle = (result: { groupId: number | string; isExpanded: boolean }) => {
    // eslint-disable-next-line no-console
    console.log(`Group ${result.groupId} expanded? ${result.isExpanded}`);
  };

  const onItemClick = (
    _event: React.FormEvent<HTMLInputElement>,
    itemId: number | string,
    _groupId: number | string
  ) => {
    // eslint-disable-next-line no-console
    console.log(`Custom click handler on ${itemId}`);
  };

  return (
    <Nav onSelect={onSelect} onToggle={onToggle} aria-label="Expandable global nav">
      <NavList>
        <NavExpandable
          title="Expandable Group 1"
          groupId="nav-expandable-group-1"
          isActive={activeGroup === 'nav-expandable-group-1'}
          isExpanded
        >
          <NavItem
            preventDefault
            id="expandable-1"
            to="#expandable-1"
            groupId="nav-expandable-group-1"
            itemId="nav-expandable-group-1_item-1"
            isActive={activeItem === 'nav-expandable-group-1_item-1'}
          >
            Subnav 1 Link 1
          </NavItem>
          <NavItemSeparator />
          <NavItem
            preventDefault
            id="expandable-2"
            to="#expandable-2"
            groupId="nav-expandable-group-1"
            itemId="nav-expandable-group-1_item-2"
            isActive={activeItem === 'nav-expandable-group-1_item-2'}
          >
            Subnav 1 Link 2
          </NavItem>
          <NavItem
            preventDefault
            id="expandable-3"
            to="#expandable-3"
            groupId="nav-expandable-group-1"
            itemId="nav-expandable-group-1_item-3"
            isActive={activeItem === 'nav-expandable-group-1_item-3'}
          >
            Subnav 1 Link 3
          </NavItem>
        </NavExpandable>
        <NavExpandable
          title="Expandable Group 2"
          groupId="nav-expandable-group-2"
          isActive={activeGroup === 'nav-expandable-group-2'}
          isExpanded
        >
          <NavItem
            preventDefault
            onClick={onItemClick}
            id="expandable-custom-click"
            to="#expandable-custom-click"
            groupId="nav-expandable-group-2"
            itemId="nav-expandable-group-2_custom-click"
            isActive={activeItem === 'nav-expandable-group-2_custom-click'}
          >
            Custom onClick Link
          </NavItem>
          <NavItem
            preventDefault
            id="expandable-4"
            to="#expandable-4"
            groupId="nav-expandable-group-2"
            itemId="nav-expandable-group-2_item-1"
            isActive={activeItem === 'nav-expandable-group-2_item-1'}
          >
            Subnav 2 Link 1
          </NavItem>
          <NavItem
            preventDefault
            id="expandable-5"
            to="#expandable-5"
            groupId="nav-expandable-group-2"
            itemId="nav-expandable-group-2_item-2"
            isActive={activeItem === 'nav-expandable-group-2_item-2'}
          >
            Subnav 2 Link 2
          </NavItem>
          <NavItem
            preventDefault
            id="expandable-6"
            to="#expandable-6"
            groupId="nav-expandable-group-2"
            itemId="nav-expandable-group-2_item-3"
            isActive={activeItem === 'nav-expandable-group-2_item-3'}
          >
            Subnav 2 Link 3
          </NavItem>
        </NavExpandable>
      </NavList>
    </Nav>
  );
};
