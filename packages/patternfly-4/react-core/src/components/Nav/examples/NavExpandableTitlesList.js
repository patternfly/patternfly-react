import React from 'react';
import { Nav, NavList, NavExpandable, NavItem } from '@patternfly/react-core';

class NavExpandableTitlesList extends React.Component {
  state = {
    activeGroup: 'grp-1',
    activeItem: 'grp-1_itm-1'
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
      <Nav onSelect={this.onSelect} onToggle={this.onToggle} aria-label="Nav Expandable with screen reader headings">
        <NavList>
          <NavExpandable title="Link 1" srText="SR Link" groupId="grp-1" isActive={activeGroup === 'grp-1'} isExpanded>
            <NavItem to="#sr-expandable-1" groupId="grp-1" itemId="grp-1_itm-1" isActive={activeItem === 'grp-1_itm-1'}>
              Subnav Link 1
            </NavItem>
            <NavItem to="#sr-expandable-2" groupId="grp-1" itemId="grp-1_itm-2" isActive={activeItem === 'grp-1_itm-2'}>
              Subnav Link 2
            </NavItem>
            <NavItem to="#sr-expandable-3" groupId="grp-1" itemId="grp-1_itm-3" isActive={activeItem === 'grp-1_itm-3'}>
              Subnav Link 3
            </NavItem>
          </NavExpandable>
          <NavExpandable title="Link 2" srText="SR Link 2" groupId="grp-2" isActive={activeGroup === 'grp-2'}>
            <NavItem to="#sr-expandable-4" groupId="grp-2" itemId="grp-2_itm-1" isActive={activeItem === 'grp-2_itm-1'}>
              Subnav Link 1
            </NavItem>
            <NavItem to="#sr-expandable-5" groupId="grp-2" itemId="grp-2_itm-2" isActive={activeItem === 'grp-2_itm-2'}>
              Subnav Link 2
            </NavItem>
            <NavItem to="#sr-expandable-6" groupId="grp-2" itemId="grp-2_itm-3" isActive={activeItem === 'grp-2_itm-3'}>
              Subnav Link 3
            </NavItem>
          </NavExpandable>
        </NavList>
      </Nav>
    );
  }
}

export default NavExpandableTitlesList;
