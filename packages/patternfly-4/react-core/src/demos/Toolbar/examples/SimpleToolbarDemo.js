import React from 'react';
import {
  Button,
  Dropdown,
  DropdownPosition,
  DropdownToggle,
  DropdownItem,
  TextInput,
  Toolbar,
  ToolbarGroup,
  ToolbarItem
} from '@patternfly/react-core';
import { EllipsisVIcon, ListUlIcon, SortAlphaDownIcon, TableIcon } from '@patternfly/react-icons';

class SimpleToolbarDemo extends React.Component {
  static title = 'Toolbar Simple Example';

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      searchValue: ''
    };
  }

  handleTextInputChange = value => {
    this.setState({ searchValue: value });
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

  buildSearchBox = () => {
    const { value } = this.state.searchValue;
    return (
      <TextInput value={value} type="search" onChange={this.handleTextInputChange} aria-label="search text input" />
    );
  };
  buildDropdown = () => {
    const { isOpen } = this.state;
    return (
      <Dropdown
        onToggle={this.onToggle}
        onSelect={this.onSelect}
        position={DropdownPosition.right}
        toggle={<DropdownToggle onToggle={this.onToggle}>All</DropdownToggle>}
        isOpen={isOpen}
      >
        <DropdownItem>Item 1</DropdownItem>
        <DropdownItem>Item 2</DropdownItem>
        <DropdownItem>Item 3</DropdownItem>
        <DropdownItem isDisabled>All</DropdownItem>
      </Dropdown>
    );
  };
  render() {
    return (
      <Toolbar>
        <ToolbarGroup>
          <ToolbarItem>{this.buildSearchBox()}</ToolbarItem>
        </ToolbarGroup>
        <ToolbarGroup>
          <ToolbarItem>{this.buildDropdown()}</ToolbarItem>
          <ToolbarItem>
            <Button variant="plain" aria-label="Sort A-Z">
              <SortAlphaDownIcon />
            </Button>
          </ToolbarItem>
        </ToolbarGroup>
        <ToolbarGroup>
          <ToolbarItem>
            <Button variant="plain" aria-label="Insert Table">
              <TableIcon />
            </Button>
          </ToolbarItem>
          <ToolbarItem>
            <Button variant="plain" aria-label="Insert Bulleted List">
              <ListUlIcon />
            </Button>
          </ToolbarItem>
          <ToolbarItem>
            <Button variant="plain" aria-label="Action 1">
              Action
            </Button>
          </ToolbarItem>
          <ToolbarItem>
            <Button aria-label="Action 2">Action</Button>
          </ToolbarItem>
          <ToolbarItem>
            <Button variant="plain" aria-label="Kebab">
              <EllipsisVIcon />
            </Button>
          </ToolbarItem>
        </ToolbarGroup>
      </Toolbar>
    );
  }
}

export default SimpleToolbarDemo;
