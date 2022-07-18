import React from 'react';
import { Nav, NavExpandable, NavItem, NavList } from '@patternfly/react-core';

export const NavExpandableThirdLevel: React.FunctionComponent = () => {
  const [activeGroup, setActiveGroup] = React.useState('nav-expand3rd-group-1');
  const [activeItem, setActiveItem] = React.useState('nav-expand3rd-group-1_item-1');

  const onSelect = (result: { itemId: number | string; groupId: number | string }) => {
    setActiveGroup(result.groupId as string);
    setActiveItem(result.itemId as string);
  };

  const onToggle = (result: { groupId: number | string; isExpanded: boolean }) => {
    // eslint-disable-next-line no-console
    console.log(`Group ${result.groupId} expanded? ${result.isExpanded}`);
  };

  return (
    <Nav onSelect={onSelect} onToggle={onToggle} aria-label="Expandable third level global nav">
      <NavList>
        <NavExpandable
          title="Expandable section title 1"
          groupId="nav-expand3rd-group-1"
          isActive={activeGroup === 'nav-expand3rd-group-1'}
          isExpanded
        >
          <NavItem
            preventDefault
            id="expandable3rd-1"
            to="#expandable3rd-1"
            groupId="nav-expand3rd-group-1"
            itemId="nav-expand3rd-group-1_item-1"
            isActive={activeItem === 'nav-expand3rd-group-1_item-1'}
          >
            With 3rd 1 Link 1
          </NavItem>
          <NavItem
            preventDefault
            id="expandable3rd-2"
            to="#expandable3rd-2"
            groupId="nav-expand3rd-group-1"
            itemId="nav-expand3rd-group-1_item-2"
            isActive={activeItem === 'nav-expand3rd-group-1_item-2'}
          >
            With 3rd 1 Link 2
          </NavItem>
          <NavItem
            preventDefault
            id="expandable3rd-3"
            to="#expandable3rd-3"
            groupId="nav-expand3rd-group-1"
            itemId="nav-expand3rd-group-1_item-3"
            isActive={activeItem === 'nav-expand3rd-group-1_item-3'}
          >
            With 3rd 1 Link 3
          </NavItem>
        </NavExpandable>
        <NavExpandable
          title="Expandable section title 2"
          groupId="nav-expand3rd-group-2"
          isActive={activeGroup === 'nav-expand3rd-group-2'}
          isExpanded
        >
          <NavItem
            preventDefault
            id="expandable3rd-4"
            to="#expandable3rd-4"
            groupId="nav-expand3rd-group-2"
            itemId="nav-expand3rd-group-2_item-1"
            isActive={activeItem === 'nav-expand3rd-group-2_item-1'}
          >
            With 3rd 2 Link 1
          </NavItem>
          <NavExpandable
            title="Expandable third level"
            groupId="nav-expand3rd-group-3"
            isActive={activeGroup === 'nav-expand3rd-group-3'}
            isExpanded
          >
            <NavItem
              preventDefault
              id="expandable3rd-5"
              to="#expandable3rd-5"
              groupId="nav-expand3rd-group-3"
              itemId="nav-expand3rd-group-3_item-1"
              isActive={activeItem === 'nav-expand3rd-group-3_item-1'}
            >
              Third Level Link 1
            </NavItem>
            <NavItem
              preventDefault
              id="expandable3rd-6"
              to="#expandable3rd-6"
              groupId="nav-expand3rd-group-3"
              itemId="nav-expand3rd-group-3_item-3"
              isActive={activeItem === 'nav-expand3rd-group-3_item-2'}
            >
              Third Level Link 2
            </NavItem>
          </NavExpandable>
          <NavItem
            preventDefault
            id="expandable3rd-7"
            to="#expandable3rd-7"
            groupId="nav-expand3rd-group-2"
            itemId="nav-expand3rd-group-2_item-2"
            isActive={activeItem === 'nav-expand3rd-group-2_item-2'}
          >
            With 3rd 2 Link 2
          </NavItem>
        </NavExpandable>
      </NavList>
    </Nav>
  );
};
