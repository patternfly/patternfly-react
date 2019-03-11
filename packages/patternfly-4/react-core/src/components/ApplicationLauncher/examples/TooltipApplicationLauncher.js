import React, { Component } from 'react';
import { ApplicationLauncher, DropdownItem, Tooltip } from '@patternfly/react-core';

export default class TooltipApplicationLauncher extends Component {
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
      <Tooltip content={<div>Launch Application 1</div>}>
        <DropdownItem key="application_1" component="a">
          Application 1
        </DropdownItem>
      </Tooltip>
      ,
      <Tooltip content={<div>Launch Application 2</div>} position="right">
        <DropdownItem key="application_2" component="a">
          Application 2
        </DropdownItem>
      </Tooltip>
      ,
      <Tooltip content={<div>Launch Application 3</div>} position="right">
        <DropdownItem key="application_3" component="a">
          Application 3
        </DropdownItem>
      </Tooltip>
      ,
      <Tooltip content={<div>Application Unavailable At This Time</div>} position="bottom">
        <DropdownItem key="disabled_application_4" isDisabled component="a">
          Unavailable Application
        </DropdownItem>
      </Tooltip>
    ];
    return (
        <ApplicationLauncher
          onSelect={this.onSelect}
          onToggle={this.onToggle}
          isOpen={isOpen}
          dropdownItems={dropdownItems}
        />
    );
  }
}
