import React from 'react';
import {
  Masthead,
  MastheadToggle,
  MastheadMain,
  MastheadBrand,
  MastheadContent,
  Button,
  Toolbar,
  ToolbarContent,
  ToolbarGroup,
  ToolbarItem
} from '@patternfly/react-core';
import { ContextSelector, ContextSelectorItem } from '@patternfly/react-core/deprecated';
import {
  ContextSelector,
  ContextSelectorItem,
  Dropdown as DropdownDeprecated,
  DropdownToggle,
  KebabToggle,
  DropdownSeparator,
  DropdownItem as DropdownItemDeprecated
} from '@patternfly/react-core/deprecated';
import imgBrand from '@patternfly/react-core/src/demos/examples/pfColorLogo.svg';
import BarsIcon from '@patternfly/react-icons/dist/js/icons/bars-icon';
import CaretDownIcon from '@patternfly/react-icons/dist/js/icons/caret-down-icon';

export class MastheadDemo extends React.Component {
  displayName = 'MastheadDemo';
  items = [
    'My Project',
    'OpenShift Cluster',
    'Production Ansible',
    'AWS',
    'Azure',
    'My Project 2',
    'OpenShift Cluster ',
    'Production Ansible 2 ',
    'AWS 2',
    'Azure 2'
  ];

  state = {
    isOpen: false,
    isDropdownOpen: false,
    isKebabOpen: false,
    selected: this.items[0],
    searchValue: '',
    filteredItems: this.items
  };

  onToggle = (event: any, isOpen: boolean) => {
    this.setState({
      isOpen
    });
  };

  onDropdownToggle = (_event: any, isDropdownOpen: boolean) => {
    this.setState({
      isDropdownOpen
    });
  };

  onKebabToggle = (_event: any, isKebabOpen: boolean) => {
    this.setState({
      isKebabOpen
    });
  };

  onSelect = (event: any, value: string) => {
    this.setState({
      selected: value,
      isOpen: !this.state.isOpen
    });
  };

  onDropdownSelect = () => {
    this.setState({
      isDropdownOpen: !this.state.isDropdownOpen
    });
  };

  onKebabSelect = () => {
    this.setState({
      isKebabOpen: !this.state.isKebabOpen
    });
  };

  onSearchInputChange = (value: string) => {
    this.setState({ searchValue: value });
  };

  onSearchButtonClick = () => {
    const filtered =
      this.state.searchValue === ''
        ? this.items
        : this.items.filter((str) => str.toLowerCase().indexOf(this.state.searchValue.toLowerCase()) !== -1);

    this.setState({ filteredItems: filtered || [] });
  };

  render() {
    const { isOpen, isDropdownOpen, isKebabOpen, selected, searchValue, filteredItems } = this.state;

    const dropdownItems = [
      <DropdownItemDeprecated key="link">Link</DropdownItemDeprecated>,
      <DropdownItemDeprecated key="action" component="button">
        Action
      </DropdownItemDeprecated>,
      <DropdownItemDeprecated key="disabled link" isDisabled href="www.google.com">
        Disabled Link
      </DropdownItemDeprecated>,
      <DropdownItemDeprecated
        key="disabled action"
        isAriaDisabled
        component="button"
        tooltip="Tooltip for disabled item"
        tooltipProps={{ position: 'top' }}
      >
        Disabled Action
      </DropdownItemDeprecated>,
      <DropdownSeparator key="separator" />,
      <DropdownItemDeprecated key="separated link">Separated Link</DropdownItemDeprecated>,
      <DropdownItemDeprecated key="separated action" component="button">
        Separated Action
      </DropdownItemDeprecated>
    ];

    return (
      <Masthead id="basic">
        <MastheadToggle>
          <Button variant="plain" onClick={() => {}} aria-label="Global navigation">
            <BarsIcon />
          </Button>
        </MastheadToggle>
        <MastheadMain>
          <MastheadBrand>
            <img src={imgBrand} alt="Patternfly logo" />
          </MastheadBrand>
        </MastheadMain>
        <MastheadContent>
          <Toolbar id="toolbar">
            <ToolbarContent>
              <ToolbarItem>
                <ContextSelector
                  toggleText={selected}
                  onSearchInputChange={this.onSearchInputChange}
                  isOpen={isOpen}
                  searchInputValue={searchValue}
                  onToggle={this.onToggle}
                  onSelect={this.onSelect}
                  onSearchButtonClick={this.onSearchButtonClick}
                  screenReaderLabel="Selected Project:"
                  isFullHeight
                >
                  {filteredItems.map((item, index) => (
                    <ContextSelectorItem key={index}>{item}</ContextSelectorItem>
                  ))}
                </ContextSelector>
              </ToolbarItem>
              <ToolbarGroup align={{ default: 'alignRight' }}>
                <ToolbarItem visibility={{ default: 'hidden', lg: 'visible' }}>
                  <DropdownDeprecated
                    onSelect={this.onDropdownSelect}
                    toggle={
                      <DropdownToggle id="toggle-id" onToggle={this.onDropdownToggle} toggleIndicator={CaretDownIcon}>
                        Dropdown
                      </DropdownToggle>
                    }
                    isOpen={isDropdownOpen}
                    dropdownItems={dropdownItems}
                    isFullHeight
                  />
                </ToolbarItem>
                <ToolbarItem>
                  <DropdownDeprecated
                    onSelect={this.onKebabSelect}
                    toggle={<KebabToggle onToggle={this.onKebabToggle} id="toggle-id-kebab" />}
                    isOpen={isKebabOpen}
                    isPlain
                    dropdownItems={dropdownItems}
                  />
                </ToolbarItem>
              </ToolbarGroup>
            </ToolbarContent>
          </Toolbar>
        </MastheadContent>
      </Masthead>
    );
  }
}

export default MastheadDemo;
