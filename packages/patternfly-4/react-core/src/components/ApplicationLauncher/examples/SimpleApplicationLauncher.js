import React, { Component } from 'react';
import { ApplicationLauncher, DropdownItem, DropdownSeparator } from '@patternfly/react-core';

export default class SimpleApplicationLauncher extends Component {
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
      <DropdownItem key="application_1" component="button">
        Application 1
      </DropdownItem>,
      <DropdownItem key="application_2" component="button">
        Application 2
      </DropdownItem>,
      <DropdownItem key="application_3" component="button">
        Application 3
      </DropdownItem>,
      <DropdownItem key="disabled_application_4" isDisabled component="button">
        Unavailable Application
      </DropdownItem>
    ];
    return (
      <ApplicationLauncher
        aria-label="My Application Launcher"
        onSelect={this.onSelect}
        onToggle={this.onToggle}
        isOpen={isOpen}
        dropdownItems={dropdownItems}
      />
    );
  }
}
