import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownItem, DropdownSeparator, DropdownDirection } from '@patternfly/react-core';

export default class DirectionUpDropdown extends Component {
  static title = 'Dropdown - direction up';

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

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
    return (
      <Dropdown
        onToggle={this.onToggle}
        direction={DropdownDirection.up}
        onSelect={this.onSelect}
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
