import React, { Component } from 'react';
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
  ToolbarItem,
  Dropdown,
  DropdownItem,
  DropdownList,
  MenuToggle,
  Divider,
  MenuToggleElement,
  MastheadProps
} from '@patternfly/react-core';
import imgBrand from '@patternfly/react-core/src/demos/assets/pf-logo.svg';
import BarsIcon from '@patternfly/react-icons/dist/js/icons/bars-icon';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';

export class MastheadDemo extends Component<MastheadProps> {
  static displayName = 'MastheadDemo';
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

  onToggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  onDropdownToggle = () => {
    this.setState({
      isDropdownOpen: !this.state.isDropdownOpen
    });
  };

  onKebabToggle = () => {
    this.setState({
      isKebabOpen: !this.state.isKebabOpen
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
      isDropdownOpen: false
    });
  };

  onKebabSelect = () => {
    this.setState({
      isKebabOpen: false
    });
  };

  onSearchInputChange = (_event: any, value: string) => {
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
    const { isDropdownOpen, isKebabOpen, filteredItems } = this.state;
    const dropdownItems = [
      <DropdownItem key="link">Link</DropdownItem>,
      <DropdownItem key="action">Action</DropdownItem>,
      <DropdownItem key="disabled link" isDisabled to="www.google.com">
        Disabled Link
      </DropdownItem>,
      <DropdownItem key="disabled action" isDisabled>
        Disabled Action
      </DropdownItem>,
      <Divider component="li" key="separator" />,
      <DropdownItem key="separated link">Separated Link</DropdownItem>,
      <DropdownItem key="separated action">Separated Action</DropdownItem>
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
                <Dropdown
                  isOpen={isDropdownOpen}
                  onSelect={this.onSelect}
                  onOpenChange={() =>
                    this.setState({
                      isOpen: !this.state.isOpen
                    })
                  }
                  popperProps={{ position: 'right' }}
                  toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
                    <MenuToggle ref={toggleRef} onClick={this.onToggle} isFullHeight isExpanded={isDropdownOpen}>
                      Ned Username
                    </MenuToggle>
                  )}
                >
                  <DropdownList>
                    {filteredItems.map((item, index) => (
                      <DropdownItem key={index}>{item}</DropdownItem>
                    ))}
                  </DropdownList>
                </Dropdown>
              </ToolbarItem>
              <ToolbarGroup align={{ default: 'alignRight' }}>
                <ToolbarItem visibility={{ default: 'hidden', lg: 'visible' }}>
                  <Dropdown
                    onSelect={this.onDropdownSelect}
                    isOpen={isDropdownOpen}
                    toggle={(toggleRef: any) => (
                      <MenuToggle
                        isFullHeight
                        ref={toggleRef}
                        isExpanded={isDropdownOpen}
                        onClick={this.onDropdownToggle}
                      >
                        Dropdown
                      </MenuToggle>
                    )}
                  >
                    <DropdownList>{dropdownItems}</DropdownList>
                  </Dropdown>
                </ToolbarItem>
                <ToolbarItem>
                  <Dropdown
                    onSelect={this.onKebabSelect}
                    isOpen={isKebabOpen}
                    toggle={(toggleRef: any) => (
                      <MenuToggle
                        ref={toggleRef}
                        isExpanded={isKebabOpen}
                        onClick={this.onKebabToggle}
                        id="toggle-id-kebab"
                        variant="plain"
                      >
                        <EllipsisVIcon />
                      </MenuToggle>
                    )}
                  >
                    <DropdownList>{dropdownItems}</DropdownList>
                  </Dropdown>
                </ToolbarItem>
              </ToolbarGroup>
            </ToolbarContent>
          </Toolbar>
        </MastheadContent>
      </Masthead>
    );
  }
}

MastheadDemo.displayName = 'MastheadDemo';
