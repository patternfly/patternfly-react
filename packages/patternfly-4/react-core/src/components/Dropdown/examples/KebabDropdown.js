import React, { Component } from 'react';
import { Dropdown, KebabToggle, DropdownItem, DropdownSeparator } from '@patternfly/react-core';

export default class ExampleDropdown extends Component {
  static title = 'Kebab';

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
        toggle={<KebabToggle onToggle={this.onToggle} />}
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
