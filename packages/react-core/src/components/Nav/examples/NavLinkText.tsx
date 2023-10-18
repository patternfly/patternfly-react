import React from 'react';
import { Nav, NavExpandable, NavItem, NavList } from '@patternfly/react-core';
import ArrowRightIcon from '@patternfly/react-icons/dist/esm/icons/arrow-right-icon';
import UserIcon from '@patternfly/react-icons/dist/esm/icons/user-icon';

export const NavLinkText: React.FunctionComponent = () => {
  const [activeGroup, setActiveGroup] = React.useState('nav-expand3rd-group-1');
  const [activeItem, setActiveItem] = React.useState('nav-expand3rd-group-1_item-1');

  const onSelect = (
    _event: React.FormEvent<HTMLInputElement>,
    result: { itemId: number | string; groupId: number | string }
  ) => {
    setActiveGroup(result.groupId as string);
    setActiveItem(result.itemId as string);
  };

  const onToggle = (
    _event: React.MouseEvent<HTMLButtonElement>,
    result: { groupId: number | string; isExpanded: boolean }
  ) => {
    // eslint-disable-next-line no-console
    console.log(`Group ${result.groupId} expanded? ${result.isExpanded}`);
  };

  return (
    <Nav onSelect={onSelect} onToggle={onToggle} aria-label="Nav link text">
      <NavList>
        <NavItem
          preventDefault
          id="link-text-link-1"
          to="#link-text-link-1"
          itemId="link-text-1-item-1"
          isActive={activeItem === 'link-text-1-item-1'}
          hasNavLinkWrapper
        >
          Link 1
          <ArrowRightIcon />
        </NavItem>
        <NavExpandable
          title={
            <>
              Link 2 <small>(small text)</small>
            </>
          }
          groupId="link-text-group-1"
          isActive={activeGroup === 'link-text-group-1'}
          isExpanded
        >
          <NavItem
            preventDefault
            id="link-text-link-2"
            to="#link-text-link-2"
            groupId="link-text-group-1"
            itemId="link-text-group-1_item-1"
            isActive={activeItem === 'link-text-group-1_item-1'}
            hasNavLinkWrapper
          >
            <UserIcon />
            Subnav link 1
          </NavItem>
          <NavItem
            preventDefault
            id="link-text-link-3"
            to="#link-text-link-3"
            groupId="link-text-group-1"
            itemId="link-text-group-1_item-2"
            isActive={activeItem === 'link-text-group-1_item-2'}
            hasNavLinkWrapper
          >
            <UserIcon />
            Subnav link 2
          </NavItem>
        </NavExpandable>
        <NavExpandable
          title={
            <>
              Link 3 <strong>(strong text)</strong>
            </>
          }
          groupId="link-text-group-2"
          isActive={activeGroup === 'nav-expand3rd-group-2'}
          isExpanded
        >
          <NavItem
            preventDefault
            id="link-text-link-4"
            to="link-text-link-4"
            groupId="link-text-group-2"
            itemId="link-text-group-2_item-1"
            isActive={activeItem === 'link-text-group-2_item-1'}
          >
            Subnav link 1
          </NavItem>
          <NavItem
            preventDefault
            id="link-text-link-5"
            to="link-text-link-5"
            groupId="link-text-group-2"
            itemId="link-text-group-2_item-2"
            isActive={activeItem === 'link-text-group-2_item-2'}
          >
            Subnav link 2
          </NavItem>
        </NavExpandable>
      </NavList>
    </Nav>
  );
};
