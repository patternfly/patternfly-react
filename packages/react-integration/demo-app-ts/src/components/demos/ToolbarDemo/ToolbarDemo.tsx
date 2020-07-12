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
  Select,
  SelectOption,
  SelectOptionObject,
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
  type: ToolbarChipGroup[];
  key: string[];
}

interface ToolbarState {
  isOpen: boolean;
  inputValue: string;
  statusisOpen: boolean;
  riskisOpen: boolean;
  typeisOpen: boolean;
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
      typeisOpen: false,
      filters: {
        risk: ['Low'],
        status: ['New', 'Pending'],
        type: [{ key: 'type', name: 'Node' }],
        key: ['']
      },
      kebabIsOpen: false
    };
  }

  toggleisOpen = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  };

  closeExpandableContent = () => {
    this.setState(() => ({
      isOpen: false
    }));
  };

  onInputChange = (newValue: string) => {
    this.setState({ inputValue: newValue });
  };

  onSelect = (
    type: keyof Omit<Filter, 'type'>,
    event: React.MouseEvent | React.ChangeEvent,
    selection: string | SelectOptionObject
  ) => {
    const selectedTarget = event.target as HTMLInputElement;
    const checked = selectedTarget.checked;
    this.setState(prevState => {
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

  onTypeSelect = (event: React.MouseEvent | React.ChangeEvent, selection: string) => {
    const checked = (event.target as HTMLInputElement).checked;
    const prevSelections = this.state.filters.type;
    this.setState({
      filters: {
        ...this.state.filters,
        type: checked
          ? [...prevSelections, { key: 'type', name: selection }]
          : prevSelections.filter((value: ToolbarChipGroup) => value.name !== selection)
      }
    });
  };

  onDelete = (type: string | ToolbarChipGroup = '', id: ToolbarChipGroup | ToolbarChip | string = '') => {
    if (type) {
      const lowerCaseType = typeof type === 'string' ? type.toLowerCase() : type.name.toLowerCase();
      this.setState(prevState => {
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
          type: [],
          status: [],
          key: []
        }
      });
    }
  };

  onDeleteGroup = (category: string | ToolbarChipGroup) => {
    if (Boolean(category) === false) {
      return;
    }
    if (typeof category === 'string') {
      this.setState(prevState => {
        prevState.filters[category.toLowerCase() as 'risk' | 'key' | 'status'] = [];
        return {
          filters: prevState.filters
        };
      });
      return;
    }
    const { name } = category as ToolbarChipGroup;
    this.setState(prevState => ({
      filters: {
        ...prevState.filters,
        [name]: []
      }
    }));
  };

  onStatusToggle = (isOpen: boolean) => {
    this.setState({
      statusisOpen: isOpen
    });
  };

  onTypeToggle = (isOpen: boolean) => {
    this.setState({
      typeisOpen: isOpen
    });
  };

  onRiskToggle = (isOpen: boolean) => {
    this.setState({
      riskisOpen: isOpen
    });
  };

  onKebabToggle = (isOpen: boolean) => {
    this.setState({
      kebabIsOpen: isOpen
    });
  };

  componentDidMount() {
    window.addEventListener('resize', this.closeExpandableContent);
  }

  render() {
    const { inputValue, filters, typeisOpen, statusisOpen, riskisOpen, kebabIsOpen } = this.state;

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

    const typeMenuItems = [
      <SelectOption key="typeNode" value="Node" />,
      <SelectOption key="typeCluster" value="Cluster" />,
      <SelectOption key="typeRegion" value="Region" />
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
          <ToolbarFilter
            chips={filters.type}
            deleteChip={this.onDelete}
            deleteChipGroup={(category: string | ToolbarChipGroup) => this.onDeleteGroup(category)}
            categoryName="Type"
          >
            <Select
              variant={SelectVariant.checkbox}
              aria-label="Type"
              onToggle={this.onTypeToggle}
              onSelect={this.onTypeSelect}
              selections={filters.type.map((v: ToolbarChipGroup) => v.name)}
              isOpen={typeisOpen}
              placeholderText="Type"
            >
              {typeMenuItems}
            </Select>
          </ToolbarFilter>
        </ToolbarGroup>
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
            toggle={<KebabToggle onToggle={this.onKebabToggle} />}
            isOpen={kebabIsOpen}
            isPlain
            dropdownItems={dropdownItems}
          />
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
      </React.Fragment>
    );
  }
}
