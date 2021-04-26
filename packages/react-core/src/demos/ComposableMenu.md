---
id: Composable menu
section: demos
beta: true
---

import CogIcon from '@patternfly/react-icons/dist/js/icons/cog-icon';
import EllipsisVIcon from '@patternfly/react-icons/dist/js/icons/ellipsis-v-icon';

## Demos

### Basic menu with toggle

```js
import React from 'react';
import { MenuToggle, Menu, MenuContent, MenuList, MenuItem, Popper } from '@patternfly/react-core';

class MenuToggleCollapsed extends React.Component {
  constructor(props) {
    super(props);
    this.containerRef = React.createRef();
    this.toggleRef = React.createRef();
    this.state = {
      activeItem: 0,
      isExpanded: false
    };
    this.onToggle = () => {
      this.setState({
        isExpanded: !this.state.isExpanded
      });
    };
    this.onSelect = (event, itemId) => {
      console.log(`clicked ${itemId}`);
      this.setState({
        activeItem: itemId
      });
    };
    this.handleMenuKeys = event => {
      console.log('keyed: ', event.key, event.target);
      if ([...event.target.classList].some(c => /pf-c-menu.*/.test(c))) {
        if (event.key === 'Escape') {
          this.onToggle();
          this.toggleRef.focus();
        }
      }
    };
    this.handleMenuClick = event => {
      if (![...event.target.classList].some(c => /pf-c-menu.*/.test(c)) && this.state.isExpanded) {
        this.onToggle();
      }
    };
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleMenuKeys);
    window.addEventListener('click', this.handleMenuClick);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleMenuKeys);
    window.removeEventListener('click', this.handleMenuClick);
  }

  render() {
    const { activeItem, isExpanded } = this.state;

    const toggle = (
      <MenuToggle ref={this.toggleRef} onClick={this.onToggle} isExpanded={isExpanded}>
        {isExpanded ? 'Expanded' : 'Collapsed'}
      </MenuToggle>
    );

    const menu = (
      <Menu activeItemId={activeItem} onSelect={this.onSelect}>
        <MenuContent>
          <MenuList>
            <MenuItem itemId={0}>Action</MenuItem>
            <MenuItem itemId={1} to="#default-link2" onClick={event => event.preventDefault()}>
              Link
            </MenuItem>
            <MenuItem isDisabled>Disabled Action</MenuItem>
            <MenuItem isDisabled to="#default-link4">
              Disabled Link
            </MenuItem>
          </MenuList>
        </MenuContent>
      </Menu>
    );

    return (
      <div ref={this.containerRef}>
        <Popper
          trigger={toggle}
          popper={menu}
          direction="down"
          position="right"
          appendTo={this.containerRef.current}
          isVisible={isExpanded}
        />
      </div>
    );
  }
}
```
