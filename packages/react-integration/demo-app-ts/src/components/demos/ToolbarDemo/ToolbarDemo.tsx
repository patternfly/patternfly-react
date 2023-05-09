import React from 'react';
import {
  Button,
  ButtonVariant,
  Toolbar,
  ToolbarItem,
  ToolbarChip,
  ToolbarChipGroup,
  ToolbarContent,
  ToolbarFilter,
  ToolbarToggleGroup,
  ToolbarGroup,
  ToolbarProps,
  InputGroup,
  TextInput,
  Dropdown,
  DropdownItem,
  DropdownList,
  MenuToggle,
  Divider
} from '@patternfly/react-core';
import { Select, SelectOption, SelectOptionObject, SelectVariant } from '@patternfly/react-core/deprecated';
import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';
import FilterIcon from '@patternfly/react-icons/dist/esm/icons/filter-icon';
import EditIcon from '@patternfly/react-icons/dist/esm/icons/edit-icon';
import CloneIcon from '@patternfly/react-icons/dist/esm/icons/clone-icon';
import SyncIcon from '@patternfly/react-icons/dist/esm/icons/sync-icon';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';

interface Filter {
  risk: string[];
  status: string[];
  key: string[];
}

interface ToolbarState {
  isOpen: boolean;
  inputValue: string;
  statusisOpen: boolean;
  riskisOpen: boolean;
  filters: Filter;
  kebabIsOpen: boolean;
}

export class ToolbarDemo extends React.Component<ToolbarProps, ToolbarState> {
  static displayName = 'ToolbarDemo';
  constructor(props: ToolbarProps) {
    super(props);
    this.state = {
      isOpen: false,
      inputValue: '',
      statusisOpen: false,
      riskisOpen: false,
      filters: {
        risk: ['Low'],
        status: ['New', 'Pending'],
        key: ['']
      },
      kebabIsOpen: false
    };
  }

  toggleisOpen = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen
    }));
  };

  closeExpandableContent = () => {
    this.setState(() => ({
      isOpen: false
    }));
  };

  onInputChange = (_event: React.FormEvent<HTMLInputElement>, newValue: string) => {
    this.setState({ inputValue: newValue });
  };

  onSelect = (
    type: keyof Filter,
    event: React.MouseEvent | React.ChangeEvent,
    selection: string | SelectOptionObject
  ) => {
    const selectedTarget = event.target as HTMLInputElement;
    const checked = selectedTarget.checked;
    this.setState((prevState) => {
      const prevSelections = prevState.filters[type];
      return {
        filters: {
          ...prevState.filters,
          [type]: checked
            ? [...prevSelections, selection.toString()]
            : prevSelections.filter((value: string) => value !== selection.toString())
        }
      };
    });
  };

  onStatusSelect = (event: React.MouseEvent | React.ChangeEvent, selection: string | SelectOptionObject) => {
    this.onSelect('status', event, selection);
  };

  onRiskSelect = (event: React.MouseEvent | React.ChangeEvent, selection: string | SelectOptionObject) => {
    this.onSelect('risk', event, selection);
  };

  onDelete = (type: string | ToolbarChipGroup = '', id: ToolbarChip | string = '') => {
    if (type) {
      const lowerCaseType = typeof type === 'string' ? type.toLowerCase() : type.name.toLowerCase();
      this.setState((prevState) => {
        const newState = Object.assign(prevState);
        newState.filters[lowerCaseType] = newState.filters[lowerCaseType].filter((s: string) => s !== id);
        return {
          filters: newState.filters
        };
      });
    } else {
      this.setState({
        filters: {
          risk: [],
          status: [],
          key: []
        }
      });
    }
  };

  onDeleteGroup = (category: string) => {
    if (category) {
      this.setState((prevState) => {
        prevState.filters[category.toLowerCase() as 'risk' | 'key' | 'status'] = [];
        return {
          filters: prevState.filters
        };
      });
    }
  };

  onStatusToggle = (_event: any, isOpen: boolean) => {
    this.setState({
      statusisOpen: isOpen
    });
  };

  onRiskToggle = (_event: any, isOpen: boolean) => {
    this.setState({
      riskisOpen: isOpen
    });
  };

  onKebabToggle = () => {
    this.setState((prevState) => ({
      kebabIsOpen: !prevState.kebabIsOpen
    }));
  };

  componentDidMount() {
    window.addEventListener('resize', this.closeExpandableContent);
  }

  render() {
    const { inputValue, filters, statusisOpen, riskisOpen, kebabIsOpen } = this.state;

    const statusMenuItems = [
      <SelectOption key="statusNew" value="New" />,
      <SelectOption key="statusPending" value="Pending" />,
      <SelectOption key="statusRunning" value="Running" />,
      <SelectOption key="statusCancelled" value="Cancelled" />
    ];

    const riskMenuItems = [
      <SelectOption key="riskLow" value="Low" />,
      <SelectOption key="riskMedium" value="Medium" />,
      <SelectOption key="riskHigh" value="High" />
    ];

    const toggleGroupItems = (
      <React.Fragment>
        <ToolbarItem id="toolbar-demo-search">
          <InputGroup>
            <TextInput
              name="textInput2"
              id="textInput2"
              type="search"
              aria-label="search input example"
              onChange={this.onInputChange}
              value={inputValue}
            />
            <Button variant={ButtonVariant.tertiary} aria-label="search button for search input">
              <SearchIcon />
            </Button>
          </InputGroup>
        </ToolbarItem>
        <ToolbarGroup variant="filter-group" id="toolbar-demo-filters">
          <ToolbarFilter chips={filters.status} deleteChip={this.onDelete} categoryName="Status">
            <Select
              variant={SelectVariant.checkbox}
              aria-label="Status"
              onToggle={this.onStatusToggle}
              onSelect={this.onStatusSelect}
              selections={filters.status}
              isOpen={statusisOpen}
              placeholderText="Status"
            >
              {statusMenuItems}
            </Select>
          </ToolbarFilter>
          <ToolbarFilter
            chips={filters.risk}
            deleteChip={this.onDelete}
            deleteChipGroup={(category: string | ToolbarChipGroup) => this.onDeleteGroup(category as string)}
            categoryName="Risk"
          >
            <Select
              variant={SelectVariant.checkbox}
              aria-label="Risk"
              onToggle={this.onRiskToggle}
              onSelect={this.onRiskSelect}
              selections={filters.risk}
              isOpen={riskisOpen}
              placeholderText="Risk"
            >
              {riskMenuItems}
            </Select>
          </ToolbarFilter>
        </ToolbarGroup>
      </React.Fragment>
    );

    const dropdownItems = [
      <DropdownItem key="link">Link</DropdownItem>,
      <DropdownItem key="action">Action</DropdownItem>,
      <DropdownItem key="disabled link" isDisabled>
        Disabled Link
      </DropdownItem>,
      <DropdownItem key="disabled action" isDisabled>
        Disabled Action
      </DropdownItem>,
      <Divider component="li" key="separator" />,
      <DropdownItem key="separated link">Separated Link</DropdownItem>,
      <DropdownItem key="separated action">Separated Action</DropdownItem>
    ];

    const widths = {
      default: '100px',
      sm: '80px',
      md: '150px',
      lg: '200px',
      xl: '250px',
      '2xl': '300px'
    };

    const widthsToolbarItems = (
      <ToolbarItem id="width-item" widths={widths}>
        <Button variant="plain">Test </Button>
      </ToolbarItem>
    );

    const toolbarItems = (
      <React.Fragment>
        <ToolbarToggleGroup toggleIcon={<FilterIcon />} breakpoint="xl" id="demo-toggle-group">
          {toggleGroupItems}
        </ToolbarToggleGroup>
        <ToolbarGroup variant="icon-button-group">
          <ToolbarItem>
            <Button variant="plain">
              <EditIcon />
            </Button>
          </ToolbarItem>
          <ToolbarItem>
            <Button variant="plain">
              <CloneIcon />
            </Button>
          </ToolbarItem>
          <ToolbarItem>
            <Button variant="plain">
              <SyncIcon />
            </Button>
          </ToolbarItem>
        </ToolbarGroup>
        <ToolbarItem>
          <Dropdown
            isOpen={kebabIsOpen}
            onOpenChange={(isOpen) => this.setState({ kebabIsOpen: isOpen })}
            toggle={(toggleRef) => (
              <MenuToggle variant="plain" ref={toggleRef} onClick={this.onKebabToggle} isExpanded={kebabIsOpen}>
                <EllipsisVIcon />
              </MenuToggle>
            )}
          >
            <DropdownList>{dropdownItems}</DropdownList>
          </Dropdown>
        </ToolbarItem>
      </React.Fragment>
    );

    return (
      <React.Fragment>
        <Toolbar
          id="toolbar-filter-demo"
          clearAllFilters={this.onDelete}
          className="pf-m-toggle-group-container"
          collapseListedFiltersBreakpoint="xl"
          clearFiltersButtonText="Clear filters"
        >
          <ToolbarContent>{toolbarItems}</ToolbarContent>
        </Toolbar>
        <Toolbar
          id="toolbar-width-demo"
          clearAllFilters={this.onDelete}
          className="pf-m-toggle-group-container"
          collapseListedFiltersBreakpoint="xl"
          clearFiltersButtonText="Clear filters"
        >
          <ToolbarContent>{widthsToolbarItems}</ToolbarContent>
        </Toolbar>
        <Toolbar
          id="toolbar-no-inset"
          clearAllFilters={this.onDelete}
          className="pf-m-toggle-group-container"
          collapseListedFiltersBreakpoint="xl"
          clearFiltersButtonText="Clear filters"
          inset={{
            default: 'insetNone',
            sm: 'insetNone',
            md: 'insetNone',
            lg: 'insetNone',
            xl: 'insetNone',
            '2xl': 'insetNone'
          }}
        >
          <ToolbarContent>{toolbarItems}</ToolbarContent>
        </Toolbar>
        <Toolbar
          id="toolbar-sm-inset"
          clearAllFilters={this.onDelete}
          className="pf-m-toggle-group-container"
          collapseListedFiltersBreakpoint="xl"
          clearFiltersButtonText="Clear filters"
          inset={{
            default: 'insetSm',
            sm: 'insetSm',
            md: 'insetSm',
            lg: 'insetSm',
            xl: 'insetSm',
            '2xl': 'insetSm'
          }}
        >
          <ToolbarContent>{toolbarItems}</ToolbarContent>
        </Toolbar>
        <Toolbar
          id="toolbar-md-inset"
          clearAllFilters={this.onDelete}
          className="pf-m-toggle-group-container"
          collapseListedFiltersBreakpoint="xl"
          clearFiltersButtonText="Clear filters"
          inset={{
            default: 'insetMd',
            sm: 'insetMd',
            md: 'insetMd',
            lg: 'insetMd',
            xl: 'insetMd',
            '2xl': 'insetMd'
          }}
        >
          <ToolbarContent>{toolbarItems}</ToolbarContent>
        </Toolbar>
        <Toolbar
          id="toolbar-lg-inset"
          clearAllFilters={this.onDelete}
          className="pf-m-toggle-group-container"
          collapseListedFiltersBreakpoint="xl"
          clearFiltersButtonText="Clear filters"
          inset={{
            default: 'insetLg',
            sm: 'insetLg',
            md: 'insetLg',
            lg: 'insetLg',
            xl: 'insetLg',
            '2xl': 'insetLg'
          }}
        >
          <ToolbarContent>{toolbarItems}</ToolbarContent>
        </Toolbar>
        <Toolbar
          id="toolbar-xl-inset"
          clearAllFilters={this.onDelete}
          className="pf-m-toggle-group-container"
          collapseListedFiltersBreakpoint="xl"
          clearFiltersButtonText="Clear filters"
          inset={{
            default: 'insetXl',
            sm: 'insetXl',
            md: 'insetXl',
            lg: 'insetXl',
            xl: 'insetXl',
            '2xl': 'insetXl'
          }}
        >
          <ToolbarContent>{toolbarItems}</ToolbarContent>
        </Toolbar>
        <Toolbar
          id="toolbar-2xl-inset"
          clearAllFilters={this.onDelete}
          className="pf-m-toggle-group-container"
          collapseListedFiltersBreakpoint="xl"
          clearFiltersButtonText="Clear filters"
          inset={{
            default: 'inset2xl',
            sm: 'inset2xl',
            md: 'inset2xl',
            lg: 'inset2xl',
            xl: 'inset2xl',
            '2xl': 'inset2xl'
          }}
        >
          <ToolbarContent>{toolbarItems}</ToolbarContent>
        </Toolbar>
        <Toolbar
          id="toolbar-number-of-filters-text"
          clearAllFilters={this.onDelete}
          className="pf-m-toggle-group-container"
          clearFiltersButtonText="Clear filters"
          numberOfFiltersText={(numOfFilters) => `Applied filters: ${numOfFilters}`}
        >
          <ToolbarContent>{toolbarItems}</ToolbarContent>
        </Toolbar>
      </React.Fragment>
    );
  }
}
