---
title: 'Dropdown'
section: components
cssPrefix: 'pf-c-dropdown'
propComponents:
  ['Dropdown', 'DropdownGroup', 'DropdownItem', 'DropdownToggle', 'DropdownToggleCheckbox', 'DropdownToggleAction']
typescript: true
---

import { Dropdown, DropdownToggle, DropdownToggleCheckbox, DropdownItem, DropdownItemIcon, DropdownSeparator, DropdownPosition, DropdownDirection, KebabToggle, DropdownGroup, DropdownToggleAction } from '@patternfly/react-core';
import { ThIcon, CaretDownIcon, CogIcon, BellIcon, CubesIcon } from '@patternfly/react-icons';
import { Link } from '@reach/router';

## Examples

```js title=React-Router-Link-Usage
import React from 'react';
import {
  Button,
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownSeparator,
  DropdownPosition,
  DropdownDirection,
  KebabToggle
} from '@patternfly/react-core';
import { Link } from '@reach/router';
import { ThIcon, CaretDownIcon } from '@patternfly/react-icons';

class RouterDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.onToggle = isOpen => {
      this.setState({
        isOpen
      });
    };
    this.onSelect = event => {
      this.setState({
        isOpen: !this.state.isOpen
      });
      this.onFocus();
    };
    this.onFocus = () => {
      const element = document.getElementById('toggle-id');
      element.focus();
    };
  }

  render() {
    const { isOpen } = this.state;
    const dropdownItems = [
      <DropdownItem key="routerlink">
        <Link to="/">Link</Link>
      </DropdownItem>
    ];

    return (
      <Dropdown
        onSelect={this.onSelect}
        toggle={
          <DropdownToggle id="toggle-id" onToggle={this.onToggle} iconComponent={CaretDownIcon}>
            Dropdown
          </DropdownToggle>
        }
        isOpen={isOpen}
        dropdownItems={dropdownItems}
      />
    );
  }
}
```
