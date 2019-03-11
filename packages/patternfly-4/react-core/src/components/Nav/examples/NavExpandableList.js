import React from 'react';
import { Nav, NavList, NavExpandable, NavItem } from '@patternfly/react-core';

class NavExpandableList extends React.Component {
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

  onToggle = result => {
    // eslint-disable-next-line no-console
    console.log(`Group ${result.groupId} expanded? ${result.isExpanded}`);
  };

  handleItemOnclick = (event, itemId, groupId) => {
    // eslint-disable-next-line no-console
    console.log(`my own click handler on ${itemId}`);
  };

  render() {
    const { activeGroup, activeItem } = this.state;
    return (
      <Nav onSelect={this.onSelect} onToggle={this.onToggle}>
        <NavList>
          <NavExpandable title="Link 1" groupId="grp-1" isActive={activeGroup === 'grp-1'} isExpanded>
            <NavItem
              preventDefault
              to="#expandable-1"
              groupId="grp-1"
              itemId="grp-1_itm-1"
              isActive={activeItem === 'grp-1_itm-1'}
            >
              Subnav Link 1
            </NavItem>
            <NavItem
              preventDefault
              groupId="grp-1"
              itemId="grp-1_itm-2"
              isActive={activeItem === 'grp-1_itm-2'}
              isSeparated
            >
              Subnav Link 2 with separator
            </NavItem>
            <NavItem to="#expandable-3" groupId="grp-1" itemId="grp-1_itm-3" isActive={activeItem === 'grp-1_itm-3'}>
              Subnav Link 3
            </NavItem>
          </NavExpandable>
          <NavExpandable title="Link 2" groupId="grp-2" isActive={activeGroup === 'grp-2'} isExpanded>
            <NavItem
              preventDefault
              onClick={this.handleItemOnclick}
              groupId="grp-2"
              itemId="own-item-handler"
              isActive={activeItem === 'own-item-handler'}
            >
              Custom onClick
            </NavItem>
            <NavItem
              preventDefault
              to="#expandable-4"
              groupId="grp-2"
              itemId="grp-2_itm-1"
              isActive={activeItem === 'grp-2_itm-1'}
            >
              Subnav Link 1
            </NavItem>
            <NavItem
              preventDefault
              to="#expandable-5"
              groupId="grp-2"
              itemId="grp-2_itm-2"
              isActive={activeItem === 'grp-2_itm-2'}
            >
              Subnav Link 2
            </NavItem>
            <NavItem
              preventDefault
              to="#expandable-6"
              groupId="grp-2"
              itemId="grp-2_itm-3"
              isActive={activeItem === 'grp-2_itm-3'}
            >
              Subnav Link 3
            </NavItem>
          </NavExpandable>
        </NavList>
      </Nav>
    );
  }
}

export default NavExpandableList;
