import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownItem, DropdownSeparator, DropdownPosition } from '@patternfly/react-core';

export default class ExampleDropdown extends Component {
  static title = 'Dropdown - position right';

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  onToggle = isOpen => {
    this.setState({
      ...this.state,
      isOpen
    });
  };

  onSelect = event => {
    this.setState({
      ...this.state,
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const { isOpen } = this.state;
    return (
      <Dropdown
        onToggle={this.onToggle}
        onSelect={this.onSelect}
        position={DropdownPosition.right}
        toggle={<DropdownToggle onToggle={this.onToggle}>Dropdown</DropdownToggle>}
        isOpen={isOpen}
      >
        <DropdownItem>Link</DropdownItem>
        <DropdownItem component="button">Action</DropdownItem>
        <DropdownItem isDisabled>Disabled Link</DropdownItem>
        <DropdownItem isDisabled component="button">
          Disabled Action
        </DropdownItem>
        <DropdownSeparator />
        <DropdownItem>Separated Link</DropdownItem>
        <DropdownItem component="button">Separated Action</DropdownItem>
      </Dropdown>
    );
  }
}
