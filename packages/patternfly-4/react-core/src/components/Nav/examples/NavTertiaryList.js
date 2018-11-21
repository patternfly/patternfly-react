import React from 'react';
import { Nav, NavList, NavItem, NavVariants } from '@patternfly/react-core';

class NavTertiaryList extends React.Component {
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
      <Nav onSelect={this.onSelect} aria-label="Tertiary Example">
        <NavList variant={NavVariants.tertiary}>
          <NavItem to="#tertiary-link1" itemId={0} isActive={activeItem === 0}>
            Link 1
          </NavItem>
          <NavItem to="#tertiary-link2" itemId={1} isActive={activeItem === 1}>
            Link 2
          </NavItem>
          <NavItem to="#tertiary-link3" itemId={2} isActive={activeItem === 2}>
            Link 3
          </NavItem>
          <NavItem to="#tertiary-link4" itemId={3} isActive={activeItem === 3}>
            Link 4
          </NavItem>
        </NavList>
      </Nav>
    );
  }
}

export default NavTertiaryList;
