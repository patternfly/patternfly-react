import React from 'react';
import { Menu, MenuContent, MenuList, MenuItem, Divider } from '@patternfly/react-core';

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

  shouldComponentUpdate(nextProps) {
    console.log(this.props, nextProps);
    return true;
  }
  render() {
    const { id, activeMenu, drilledIn, getHeight, children } = this.props;

    return (
      <Menu id={id} activeMenu={activeMenu} drilledIn={drilledIn} onSelect={this.onSelect} getHeight={getHeight}>
        <MenuContent>
          <MenuList>{children}</MenuList>
        </MenuContent>
      </Menu>
    );
  }
}
