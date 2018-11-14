import React from 'react';
import { Nav, NavList, NavItem, NavVariants } from '@patternfly/react-core';

class NavSimpleList extends React.Component {
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
      <Nav onSelect={this.onSelect} id="nav-primary-simple" aria-label="Primary Nav, Simple List Example">
        <NavList variant={NavVariants.simple}>
          <NavItem to="#simple-link1" itemId={0} isActive={activeItem === 0}>
            Link 1
          </NavItem>
          <NavItem to="#simple-link2" itemId={1} isActive={activeItem === 1}>
            Link 2
          </NavItem>
          <NavItem to="#simple-link3" itemId={2} isActive={activeItem === 2}>
            Link 3
          </NavItem>
          <NavItem to="#simple-link4" itemId={3} isActive={activeItem === 3}>
            Link 4
          </NavItem>
        </NavList>
      </Nav>
    );
  }
}

export default NavSimpleList;
