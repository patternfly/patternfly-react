---
id: Menu
section: components
cssPrefix: pf-c-menu
propComponents: ['Menu', 'MenuItem', 'MenuList']
ouia: true
---

## Examples

### Default
```js
import React from 'react';
import { Menu, MenuItem, MenuList } from '@patternfly/react-core';

class MenuDefaultList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 0
    };
    this.onSelect = result => {
      this.setState({
        activeItem: result.itemId
      });
    };
  }

  render() {
    const { activeItem } = this.state;
    return (
      <Menu onSelect={this.onSelect}>
        <MenuList>
          <MenuItem id="default-link1" to="#default-link1" itemId={0} isActive={activeItem === 0}>
            Link 1
          </MenuItem>
          <MenuItem id="default-link2" to="#default-link2" itemId={1} isActive={activeItem === 1}>
            Link 2
          </MenuItem>
          <MenuItem id="default-link3" to="#default-link3" itemId={2} isActive={activeItem === 2}>
            Link 3
          </MenuItem>
          <MenuItem id="default-link4" to="#default-link4" itemId={3} isActive={activeItem === 3}>
            Link 4
          </MenuItem>
        </MenuList>
      </Menu>
    );
  }
}
```