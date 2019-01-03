import React, { Component } from 'react';
import { Dropdown, DropdownItem, DropdownToggle, DropdownSeparator } from '@patternfly/react-core';
import { ThIcon } from '@patternfly/react-icons';

export default class IconDropdown extends Component {
  state = {
    isOpen: false
  };

  onToggle = isOpen => {
    this.setState({
      isOpen
    });
  };

  onSelect = event => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const { isOpen } = this.state;
    const dropdownItems = [
      <DropdownItem key="link">Link</DropdownItem>,
      <DropdownItem key="action" component="button">
        Action
      </DropdownItem>,
      <DropdownItem key="disabled link" isDisabled>
        Disabled Link
      </DropdownItem>,
      <DropdownItem key="disabled action" isDisabled component="button">
        Disabled Action
      </DropdownItem>,
      <DropdownSeparator key="separator" />,
      <DropdownItem key="separated link">Separated Link</DropdownItem>,
      <DropdownItem key="separated action" component="button">
        Separated Action
      </DropdownItem>
    ];
    return (
      <Dropdown
        onSelect={this.onSelect}
        toggle={
          <DropdownToggle iconComponent={null} onToggle={this.onToggle}>
            <ThIcon />
          </DropdownToggle>
        }
        isOpen={isOpen}
        isPlain
        dropdownItems={dropdownItems}
      />
    );
  }
}
