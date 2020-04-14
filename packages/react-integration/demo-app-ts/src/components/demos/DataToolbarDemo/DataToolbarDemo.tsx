import React from 'react';
import {
  Button,
  ButtonVariant,
  DataToolbar,
  DataToolbarItem,
  DataToolbarContent,
  DataToolbarFilter,
  DataToolbarToggleGroup,
  DataToolbarGroup,
  DataToolbarProps,
  InputGroup,
  Select,
  SelectOption,
  SelectVariant,
  Dropdown,
  DropdownItem,
  DropdownSeparator,
  KebabToggle,
  TextInput
} from '@patternfly/react-core';
import SearchIcon from '@patternfly/react-icons/dist/js/icons/search-icon';
import FilterIcon from '@patternfly/react-icons/dist/js/icons/filter-icon';
import EditIcon from '@patternfly/react-icons/dist/js/icons/edit-icon';
import CloneIcon from '@patternfly/react-icons/dist/js/icons/clone-icon';
import SyncIcon from '@patternfly/react-icons/dist/js/icons/sync-icon';

interface Filter {
  risk: string[];
  status: string[];
}

interface DataToolbarState {
  isExpanded: boolean;
  inputValue: string;
  statusIsExpanded: false;
  riskIsExpanded: false;
  filters: Filter;
  kebabIsOpen: false;
}

export class DataToolbarDemo extends React.Component<DataToolbarProps, DataToolbarState> {
  constructor(props: DataToolbarProps) {
    super(props);
    this.state = {
      isExpanded: false,
      inputValue: '',
      statusIsExpanded: false,
      riskIsExpanded: false,
      filters: {
        risk: ['Low'],
        status: ['New', 'Pending']
      },
      kebabIsOpen: false
    };
  }

  toggleIsExpanded = () => {
    this.setState(prevState => ({
      isExpanded: !prevState.isExpanded
    }));
  };

  closeExpandableContent = () => {
    this.setState(() => ({
      isExpanded: false
    }));
  };

  onInputChange = newValue => {
    this.setState({ inputValue: newValue });
  };

  onSelect = (type, event, selection) => {
    const checked = event.target.checked;
    this.setState(prevState => {
      const prevSelections = prevState.filters[type];
      return {
        filters: {
          ...prevState.filters,
          [type]: checked ? [...prevSelections, selection] : prevSelections.filter(value => value !== selection)
        }
      };
    });
  };

  onStatusSelect = (event, selection) => {
    this.onSelect('status', event, selection);
  };

  onRiskSelect = (event, selection) => {
    this.onSelect('risk', event, selection);
  };

  onDelete = (type = '', id = '') => {
    if (type) {
      this.setState(prevState => {
        prevState.filters[type.toLowerCase()] = prevState.filters[type.toLowerCase()].filter(s => s !== id);
        return {
          filters: prevState.filters
        };
      });
    } else {
      this.setState({
        filters: {
          risk: [],
          status: []
        }
      });
    }
  };

  onDeleteGroup = (type = '') => {
    if (type) {
      this.setState(prevState => {
        prevState.filters[type.toLowerCase()] = [];
        return {
          filters: prevState.filters
        };
      });
    }
  };

  onStatusToggle = isExpanded => {
    this.setState({
      statusIsExpanded: isExpanded
    });
  };

  onRiskToggle = isExpanded => {
    this.setState({
      riskIsExpanded: isExpanded
    });
  };

  onKebabToggle = isOpen => {
    this.setState({
      kebabIsOpen: isOpen
    });
  };

  componentDidMount() {
    window.addEventListener('resize', this.closeExpandableContent);
  }

  render() {
    const { inputValue, filters, statusIsExpanded, riskIsExpanded, kebabIsOpen } = this.state;

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
        <DataToolbarItem id="toolbar-demo-search">
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
        </DataToolbarItem>
        <DataToolbarGroup variant="filter-group" id="toolbar-demo-filters">
          <DataToolbarFilter chips={filters.status} deleteChip={this.onDelete} categoryName="Status">
            <Select
              variant={SelectVariant.checkbox}
              aria-label="Status"
              onToggle={this.onStatusToggle}
              onSelect={this.onStatusSelect}
              selections={filters.status}
              isExpanded={statusIsExpanded}
              placeholderText="Status"
            >
              {statusMenuItems}
            </Select>
          </DataToolbarFilter>
          <DataToolbarFilter
            chips={filters.risk}
            deleteChip={this.onDelete}
            deleteChipGroup={this.onDeleteGroup}
            categoryName="Risk"
          >
            <Select
              variant={SelectVariant.checkbox}
              aria-label="Risk"
              onToggle={this.onRiskToggle}
              onSelect={this.onRiskSelect}
              selections={filters.risk}
              isExpanded={riskIsExpanded}
              placeholderText="Risk"
            >
              {riskMenuItems}
            </Select>
          </DataToolbarFilter>
        </DataToolbarGroup>
      </React.Fragment>
    );

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

    const toolbarItems = (
      <React.Fragment>
        <DataToolbarToggleGroup toggleIcon={<FilterIcon />} breakpoint="xl" id="demo-toggle-group">
          {toggleGroupItems}
        </DataToolbarToggleGroup>
        <DataToolbarGroup variant="icon-button-group">
          <DataToolbarItem>
            <Button variant="plain">
              <EditIcon />
            </Button>
          </DataToolbarItem>
          <DataToolbarItem>
            <Button variant="plain">
              <CloneIcon />
            </Button>
          </DataToolbarItem>
          <DataToolbarItem>
            <Button variant="plain">
              <SyncIcon />
            </Button>
          </DataToolbarItem>
        </DataToolbarGroup>
        <DataToolbarItem>
          <Dropdown
            toggle={<KebabToggle onToggle={this.onKebabToggle} />}
            isOpen={kebabIsOpen}
            isPlain
            dropdownItems={dropdownItems}
          />
        </DataToolbarItem>
      </React.Fragment>
    );

    return (
      <DataToolbar
        id="data-toolbar-filter-demo"
        clearAllFilters={this.onDelete}
        className="pf-m-toggle-group-container"
        collapseListedFiltersBreakpoint="xl"
        clearFiltersButtonText="Clear filters"
      >
        <DataToolbarContent>{toolbarItems}</DataToolbarContent>
      </DataToolbar>
    );
  }
}
