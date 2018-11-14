import React from 'react';
import { Nav, NavList, NavItem, NavVariants } from '@patternfly/react-core';

class NavHorizontalList extends React.Component {
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
      <div style={{ backgroundColor: '#292e34', padding: '1rem' }}>
        <Nav onSelect={this.onSelect} aria-label="Primary Nav Horizontal Example">
          <NavList variant={NavVariants.horizontal}>
            <NavItem to="#horizontal-link1" itemId={0} isActive={activeItem === 0}>
              Item 1
            </NavItem>
            <NavItem to="#horizontal-link2" itemId={1} isActive={activeItem === 1}>
              Item 2
            </NavItem>
            <NavItem to="#horizontal-link3" itemId={2} isActive={activeItem === 2}>
              Item 3
            </NavItem>
          </NavList>
        </Nav>
      </div>
    );
  }
}

export default NavHorizontalList;
