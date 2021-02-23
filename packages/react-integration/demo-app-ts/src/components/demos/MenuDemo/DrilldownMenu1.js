import React from 'react';
import { Menu, MenuContent, MenuList } from '@patternfly/react-core';

/* eslint-disable no-console */
export default class DrilldownMenu1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: null
    };
    this.onSelect = (event, itemId) => {
      if (itemId.startsWith('group:')) {
        console.log(`selected sub-menu: ${itemId.split('group:')[1]}`);
      } else {
        console.log(`selected: ${itemId}`);
        this.setState({
          activeItem: itemId
        });
      }
    };
  }
  render() {
    const { id, activeMenu, drilledIn, getHeight, children } = this.props;

    return (
      <Menu id={id} activeMenu={activeMenu} isMenuDrilledIn={drilledIn} onSelect={this.onSelect}>
        <MenuContent getHeight={getHeight}>
          <MenuList>{children}</MenuList>
        </MenuContent>
      </Menu>
    );
  }
}
