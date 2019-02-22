import React from 'react';
import { Button, Dropdown, KebabToggle, DropdownItem, DropdownSeparator } from '@patternfly/react-core';
import {
  Toolbar,
  ToolbarTotalItems,
  ToolbarActionGroup
} from '@patternfly/react-core/experimental';

class SimpleToolbarComponent extends React.Component {
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
    const toolbarButtons = [<Button>action 1</Button>];

    const dropdownItems = [
      <DropdownItem key="link">Link</DropdownItem>,
      <DropdownItem key="action">Action</DropdownItem>,
      <DropdownItem key="disabled link" isDisabled>
        Disabled Link
      </DropdownItem>,
      <DropdownItem key="disabled action" isDisabled>
        Disabled Action
      </DropdownItem>,
      <DropdownItem key="separated link">Separated Link</DropdownItem>,
      <DropdownItem key="separated action">Separated Action</DropdownItem>
    ];
    return (
      <Toolbar>
        <ToolbarActionGroup actionItems={toolbarButtons} />
        <ToolbarActionList dropdownItems={dropdownItems} />
        <ToolbarTotalItems totalItems={37} />
      </Toolbar>
    );
  }
}

export default SimpleToolbarComponent;
