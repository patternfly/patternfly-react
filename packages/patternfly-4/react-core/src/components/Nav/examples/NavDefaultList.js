import React from 'react';
import { Nav, NavList, NavItem } from '@patternfly/react-core';

class NavDefaultList extends React.Component {
  state = {
    activeItem: 0
  };

  onSelect = result => {
    this.setState({
      activeItem: result.itemId
    });
  };

  render() {
    const { activeItem } = this.state;
    return (
      <Nav onSelect={this.onSelect}>
        <NavList>
          <NavItem id="default-link1" to="#default-link1" itemId={0} isActive={activeItem === 0}>
            Link 1
          </NavItem>
          <NavItem id="default-link2" to="#default-link2" itemId={1} isActive={activeItem === 1}>
            Link 2
          </NavItem>
          <NavItem id="default-link3" to="#default-link3" itemId={2} isActive={activeItem === 2}>
            Link 3
          </NavItem>
          <NavItem id="default-link4" to="#default-link4" itemId={3} isActive={activeItem === 3}>
            Link 4
          </NavItem>
        </NavList>
      </Nav>
    );
  }
}

export default NavDefaultList;
