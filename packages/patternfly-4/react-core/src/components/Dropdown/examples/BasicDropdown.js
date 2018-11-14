import React, { Component } from 'react';
import { Dropdown, DropdownToggle } from '@patternfly/react-core';

export default class BasicDropdown extends Component {
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
        onSelect={this.onSelect}
        toggle={<DropdownToggle onToggle={this.onToggle}>Expanded Dropdown</DropdownToggle>}
        isOpen={isOpen}
      >
        <div>Expanded Dropdown</div>
      </Dropdown>
    );
  }
}
