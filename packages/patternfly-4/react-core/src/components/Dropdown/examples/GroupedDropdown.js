import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownGroup, DropdownItem, DropdownSeparator } from '@patternfly/react-core';

export default class GroupedDropdown extends Component {
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
    const dropdownItems = [
      <DropdownGroup key="group 1">
        <DropdownItem key="group 1 link">Link</DropdownItem>
        <DropdownItem key="group 1 action" component="button">
          Action
        </DropdownItem>
      </DropdownGroup>,
      <DropdownGroup label="Group 2" key="group 2">
        <DropdownItem key="group 2 link">Group 2 Link</DropdownItem>
        <DropdownItem key="group 2 action" component="button">
          Group 2 Action
        </DropdownItem>
      </DropdownGroup>,
      <DropdownGroup label="Group 3" key="group 3">
        <DropdownItem key="group 3 link">Group 3 Link</DropdownItem>
        <DropdownItem key="group 3 action" component="button">
          Group 3 Action
        </DropdownItem>
      </DropdownGroup>
    ];
    return (
      <Dropdown
        onSelect={this.onSelect}
        toggle={<DropdownToggle onToggle={this.onToggle}>Dropdown</DropdownToggle>}
        isOpen={isOpen}
        dropdownItems={dropdownItems}
        isGrouped
      />
    );
  }
}
