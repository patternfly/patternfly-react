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
  ToolbarItem
} from '@patternfly/react-core';
import FilterIcon from '@patternfly/react-icons/dist/js/icons/filter-icon';

export class ViewToolbar extends React.Component {
  state = {
    filterType: 'Name',
    filterValue: '',
    filterDropDownOpen: false,
    actionKebabOpen: false
  };

  onFilterDropDownToggle = isOpen => {
    this.setState({ filterDropDownOpen: isOpen });
  };

  onFilterTypeSelect = (e, filterType) => {
    e.preventDefault();
    this.setState({
      filterType,
      filterDropDownOpen: false,
      filterValue: filterType === this.state.filterType ? this.state.filterValue : ''
    });
  };

  handleFilterInputChange = value => {
    this.setState({ filterValue: value });
  };

  onActionKebabToggle = isOpen => {
    this.setState({ actionKebabOpen: isOpen });
  };

  onActionKebabSelect = e => {
    e.preventDefault();
    this.setState({ actionKebabOpen: false });
  };

  renderFilterInput = () => {
    const { filterValue } = this.state;
    return (
      <TextInput
        value={filterValue || ''}
        type="text"
        onChange={this.handleFilterInputChange}
        aria-label="filter text input"
      />
    );
  };

  renderFilterTypeDropdown = () => {
    const { filterDropDownOpen, filterType } = this.state;
    return (
      <Dropdown
        onToggle={this.onFilterDropDownToggle}
        position={DropdownPosition.right}
        className="topology-view-filter-dropdown"
        toggle={
          <DropdownToggle onToggle={this.onFilterDropDownToggle}>
            <FilterIcon className="pf-u-mr-sm" />
            {filterType}
          </DropdownToggle>
        }
        isOpen={filterDropDownOpen}
        dropdownItems={[
          <DropdownItem key="name" onClick={e => this.onFilterTypeSelect(e, 'Name')}>
            Name
          </DropdownItem>,
          <DropdownItem key="type" onClick={e => this.onFilterTypeSelect(e, 'Type')}>
            Type
          </DropdownItem>,
          <DropdownItem key="status" onClick={e => this.onFilterTypeSelect(e, 'Status')}>
            Status
          </DropdownItem>
        ]}
      />
    );
  };

  renderActionsdKebab = () => {
    const { actionKebabOpen } = this.state;

    return (
      <Dropdown
        onToggle={this.onActionKebabToggle}
        position={DropdownPosition.right}
        toggle={<KebabToggle onToggle={this.onActionKebabToggle} />}
        isOpen={actionKebabOpen}
        isPlain
        dropdownItems={[
          <DropdownItem key="action-3" onClick={e => this.onActionKebabSelect(e, 'Action 3')}>
            Action 3
          </DropdownItem>,
          <DropdownItem key="action-4" onClick={e => this.onActionKebabSelect(e, 'Action 4')}>
            Action 4
          </DropdownItem>,
          <DropdownItem isDisabled key="disabled-action" onClick={e => this.onActionKebabSelect(e, 'Disabled Action')}>
            Disabled Action
          </DropdownItem>
        ]}
      />
    );
  };

  render() {
    return (
      <Toolbar className="view-toolbar pf-u-px-md pf-u-py-md" style={{ borderBottom: '1px solid #ccc' }}>
        <ToolbarGroup>
          <ToolbarItem>{this.renderFilterTypeDropdown()}</ToolbarItem>
          <ToolbarItem className="pf-u-mr-md">{this.renderFilterInput()}</ToolbarItem>
        </ToolbarGroup>
        <ToolbarGroup>
          <ToolbarItem>
            <Button variant="primary" aria-label="Action 1">
              Action 1
            </Button>
          </ToolbarItem>
          <ToolbarItem className="pf-u-mx-md">
            <Button variant="plain" aria-label="Action 2">
              Action 2
            </Button>
          </ToolbarItem>
          <ToolbarItem>{this.renderActionsdKebab()}</ToolbarItem>
        </ToolbarGroup>
      </Toolbar>
    );
  }
}
