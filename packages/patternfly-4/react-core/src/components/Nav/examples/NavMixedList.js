import React from 'react';
import { Nav, NavList, NavExpandable, NavItem } from '@patternfly/react-core';

class NavMixedList extends React.Component {
  state = {
    activeGroup: '',
    activeItem: 'itm-1'
  };

  onSelect = result => {
    this.setState({
      activeGroup: result.groupId,
      activeItem: result.itemId
    });
  };

  render() {
    const { activeGroup, activeItem } = this.state;
    return (
      <Nav onSelect={this.onSelect} aria-label="Primary Nav Mixed Example">
        <NavList>
          <NavItem to="#mixed-1" itemId="itm-1" isActive={activeItem === 'itm-1'}>
            Link 1 (not expandable)
          </NavItem>
          <NavExpandable title="Link 2 - expandable" groupId="grp-1" isActive={activeGroup === 'grp-1'}>
            <NavItem to="#mixed-2" groupId="grp-1" itemId="grp-1_itm-1" isActive={activeItem === 'grp-1_itm-1'}>
              Link 1
            </NavItem>
            <NavItem to="#mixed-3" groupId="grp-1" itemId="grp-1_itm-2" isActive={activeItem === 'grp-1_itm-2'}>
              Link 2
            </NavItem>
            <NavItem to="#mixed-4" groupId="grp-1" itemId="grp-1_itm-3" isActive={activeItem === 'grp-1_itm-3'}>
              Link 3
            </NavItem>
          </NavExpandable>
          <NavExpandable title="Link 3 - expandable" groupId="grp-2" isActive={activeGroup === 'grp-2'}>
            <NavItem to="#mixed-5" groupId="grp-2" itemId="grp-2_itm-1" isActive={activeItem === 'grp-2_itm-1'}>
              Link 1
            </NavItem>
            <NavItem to="#mixed-6" groupId="grp-2" itemId="grp-2_itm-2" isActive={activeItem === 'grp-2_itm-2'}>
              Link 2
            </NavItem>
            <NavItem to="#mixed-7" groupId="grp-2" itemId="grp-2_itm-3" isActive={activeItem === 'grp-2_itm-3'}>
              Link 3
            </NavItem>
          </NavExpandable>
        </NavList>
      </Nav>
    );
  }
}

export default NavMixedList;
