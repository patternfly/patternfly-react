import React from 'react';
import {
  Button,
  Dropdown,
  DropdownPosition,
  DropdownToggle,
  DropdownItem,
  KebabToggle,
  TextInput,
  Toolbar,
  ToolbarGroup,
  ToolbarItem,
  ToolbarSection
} from '@patternfly/react-core';
import { css } from '@patternfly/react-styles';
import flexStyles from '@patternfly/patternfly-next/utilities/Flex/flex.css';
import spacingStyles from '@patternfly/patternfly-next/utilities/Spacing/spacing.css';
import { ListUlIcon, SortAlphaDownIcon, TableIcon } from '@patternfly/react-icons';

class ComplexToolbarDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDropDownOpen: false,
      isKebabOpen: false,
      searchValue: ''
    };
  }

  handleTextInputChange = value => {
    this.setState({ searchValue: value });
  };

  onDropDownToggle = isOpen => {
    this.setState({
      isDropDownOpen: isOpen
    });
  };

  onDropDownSelect = event => {
    this.setState({
      isDropDownOpen: !this.state.isDropDownOpen
    });
  };

  onKebabToggle = isOpen => {
    this.setState({
      isKebabOpen: isOpen
    });
  };

  onKebabSelect = event => {
    this.setState({
      isKebabOpen: !this.state.isKebabOpen
    });
  };
  buildSearchBox = () => {
    const { value } = this.state.searchValue;
    return (
      <TextInput value={value} type="search" onChange={this.handleTextInputChange} aria-label="search text input" />
    );
  };
  buildDropdown = () => {
    const { isDropDownOpen } = this.state;
    return (
      <Dropdown
        onToggle={this.onDropDownToggle}
        onSelect={this.onDropDownSelect}
        position={DropdownPosition.right}
        toggle={<DropdownToggle onToggle={this.onDropDownToggle}>All</DropdownToggle>}
        isOpen={isDropDownOpen}
      >
        <DropdownItem>Item 1</DropdownItem>
        <DropdownItem>Item 2</DropdownItem>
        <DropdownItem>Item 3</DropdownItem>
        <DropdownItem isDisabled>All</DropdownItem>
      </Dropdown>
    );
  };
  buildKebab = () => {
    const { isKebabOpen } = this.state;

    return (
      <Dropdown
        onToggle={this.onKebabToggle}
        onSelect={this.onKebabSelect}
        position={DropdownPosition.right}
        toggle={<KebabToggle onToggle={this.onKebabToggle} />}
        isOpen={isKebabOpen}
        isPlain
      >
        <DropdownItem>Link</DropdownItem>
        <DropdownItem component="button">Action</DropdownItem>
        <DropdownItem isDisabled>Disabled Link</DropdownItem>
        <DropdownItem isDisabled component="button">
          Disabled Action
        </DropdownItem>
      </Dropdown>
    );
  };
  render() {
    return (
      <Toolbar className={css(flexStyles.justifyContentSpaceBetween, spacingStyles.mlXl, spacingStyles.myMd)}>
        <ToolbarGroup>
          <ToolbarItem className={css(spacingStyles.mrXl)}>{this.buildSearchBox()}</ToolbarItem>
          <ToolbarItem className={css(spacingStyles.mrMd)}>{this.buildDropdown()}</ToolbarItem>
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
          <ToolbarItem className={css(spacingStyles.mxMd)}>
            <Button variant="plain" aria-label="Insert Bulleted List">
              <ListUlIcon />
            </Button>
          </ToolbarItem>
          <ToolbarItem>
            <Button variant="plain" aria-label="Action 1">
              Action
            </Button>
          </ToolbarItem>
          <ToolbarItem className={css(spacingStyles.mxMd)}>
            <Button aria-label="Action 2">Action</Button>
          </ToolbarItem>
          <ToolbarItem>{this.buildKebab()}</ToolbarItem>
        </ToolbarGroup>
        <ToolbarSection>
          <ToolbarGroup>
            <ToolbarItem>17 of 80 items</ToolbarItem>
          </ToolbarGroup>
        </ToolbarSection>
      </Toolbar>
    );
  }
}

export default ComplexToolbarDemo;
