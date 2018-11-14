import React from 'react';
import { Nav, NavGroup, NavItem } from '@patternfly/react-core';

class NavGroupedList extends React.Component {
  state = {
    activeItem: 'grp-1_itm-1'
  };

  onSelect = result => {
    this.setState({
      activeItem: result.itemId
    });
  };

  render() {
    const { activeItem } = this.state;
    return (
      <Nav onSelect={this.onSelect} aria-label="Primary Nav Grouped Example">
        <NavGroup title="Section title 1">
          <NavItem to="#grouped-1" itemId="grp-1_itm-1" isActive={activeItem === 'grp-1_itm-1'}>
            Link 1
          </NavItem>
          <NavItem to="#grouped-2" itemId="grp-1_itm-2" isActive={activeItem === 'grp-1_itm-2'}>
            Link 2
          </NavItem>
          <NavItem to="#grouped-3" itemId="grp-1_itm-3" isActive={activeItem === 'grp-1_itm-3'}>
            Link 3
          </NavItem>
        </NavGroup>
        <NavGroup title="Section title 2">
          <NavItem to="#grouped-4" itemId="grp-2_itm-1" isActive={activeItem === 'grp-2_itm-1'}>
            Link 1
          </NavItem>
          <NavItem to="#grouped-5" itemId="grp-2_itm-2" isActive={activeItem === 'grp-2_itm-2'}>
            Link 2
          </NavItem>
          <NavItem to="#grouped-6" itemId="grp-2_itm-3" isActive={activeItem === 'grp-2_itm-3'}>
            Link 3
          </NavItem>
        </NavGroup>
      </Nav>
    );
  }
}

export default NavGroupedList;
