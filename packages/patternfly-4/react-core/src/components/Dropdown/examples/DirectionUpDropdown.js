import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownItem, DropdownSeparator, DropdownDirection } from '@patternfly/react-core';

export default class DirectionUpDropdown extends Component {
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
        direction={DropdownDirection.up}
        onSelect={this.onSelect}
        toggle={<DropdownToggle onToggle={this.onToggle}>Dropdown</DropdownToggle>}
        isOpen={isOpen}
        dropdownItems={dropdownItems}
      />
    );
  }
}
