import { Component, FormEvent, MouseEvent, ChangeEvent, Ref } from 'react';
import {
  Button,
  ButtonVariant,
  Toolbar,
  ToolbarItem,
  ToolbarLabel,
  ToolbarLabelGroup,
  ToolbarContent,
  ToolbarFilter,
  ToolbarToggleGroup,
  ToolbarGroup,
  ToolbarProps,
  InputGroup,
  InputGroupItem,
  TextInput,
  Dropdown,
  DropdownItem,
  DropdownList,
  MenuToggle,
  Divider,
  Select,
  SelectList,
  SelectOption
} from '@patternfly/react-core';
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

class ToolbarDemo extends Component<ToolbarProps, ToolbarState> {
  static displayName = 'ToolbarDemo';
  state = {
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

  onInputChange = (_event: FormEvent<HTMLInputElement>, newValue: string) => {
    this.setState({ inputValue: newValue });
  };

  onSelect = (type: keyof Filter, event: MouseEvent | ChangeEvent, selection: string) => {
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

  onStatusSelect = (event: any, selection: any) => {
    this.onSelect('status', event, selection);
  };

  onRiskSelect = (event: any, selection: any) => {
    this.onSelect('risk', event, selection);
  };

  onDelete = (type: string | ToolbarLabelGroup = '', id: ToolbarLabel | string = '') => {
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

  onStatusToggle = (_event: any) => {
    this.setState({
      statusisOpen: !this.state.statusisOpen
    });
  };

  onRiskToggle = (_event: any) => {
    this.setState({
      riskisOpen: !this.state.riskisOpen
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
      <SelectOption hasCheckbox key="statusNew" value="New" />,
      <SelectOption hasCheckbox key="statusPending" value="Pending" />,
      <SelectOption hasCheckbox key="statusRunning" value="Running" />,
      <SelectOption hasCheckbox key="statusCancelled" value="Cancelled" />
    ];

    const riskMenuItems = [
      <SelectOption key="riskLow" value="Low" />,
      <SelectOption key="riskMedium" value="Medium" />,
      <SelectOption key="riskHigh" value="High" />
    ];

    const toggleGroupItems = (
      <>
        <ToolbarItem id="toolbar-demo-search">
          <InputGroup>
            <InputGroupItem>
              <TextInput
                name="textInput2"
                id="textInput2"
                type="search"
                aria-label="search input example"
                onChange={this.onInputChange}
                value={inputValue}
              />
            </InputGroupItem>
            <InputGroupItem>
              <Button
                variant={ButtonVariant.tertiary}
                aria-label="search button for search input"
                icon={<SearchIcon />}
              />
            </InputGroupItem>
          </InputGroup>
        </ToolbarItem>
        <ToolbarGroup variant="filter-group" id="toolbar-demo-filters">
          <ToolbarFilter labels={filters.status} deleteLabel={this.onDelete} categoryName="Status">
            <Select
              aria-label="Status"
              onSelect={this.onStatusSelect}
              selected={filters.status}
              isOpen={statusisOpen}
              toggle={(toggleRef: any) => (
                <MenuToggle ref={toggleRef} onClick={this.onStatusToggle} isExpanded={this.state.statusisOpen}>
                  {this.state.riskisOpen ? 'Expanded' : 'Collapsed'}
                </MenuToggle>
              )}
            >
              <SelectList>{statusMenuItems}</SelectList>
            </Select>
          </ToolbarFilter>
          <ToolbarFilter
            labels={filters.risk}
            deleteLabel={this.onDelete}
            deleteLabelGroup={(category: string | ToolbarLabelGroup) => this.onDeleteGroup(category as string)}
            categoryName="Risk"
          >
            <Select
              aria-label="Risk"
              onSelect={this.onRiskSelect}
              selected={filters.risk}
              isOpen={riskisOpen}
              toggle={(toggleRef: any) => (
                <MenuToggle ref={toggleRef} onClick={this.onRiskToggle} isExpanded={this.state.riskisOpen}>
                  {this.state.riskisOpen ? 'Expanded' : 'Collapsed'}
                </MenuToggle>
              )}
            >
              <SelectList>{riskMenuItems}</SelectList>
            </Select>
          </ToolbarFilter>
        </ToolbarGroup>
      </>
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

    const toolbarItems = (
      <>
        <ToolbarToggleGroup toggleIcon={<FilterIcon />} breakpoint="xl" id="demo-toggle-group">
          {toggleGroupItems}
        </ToolbarToggleGroup>
        {/* Example of new width and flexGrow props */}
        <ToolbarItem widths={{ default: 'md', lg: 'lg', xl: 'xl' }} flexGrow={{ default: 'flexGrow', lg: 'flexGrow' }}>
          <TextInput
            type="text"
            aria-label="width and flex-grow example"
            placeholder="This item has width and flex-grow"
          />
        </ToolbarItem>
        <ToolbarGroup variant="action-group-plain">
          <ToolbarItem>
            <Button variant="plain" icon={<EditIcon />} />
          </ToolbarItem>
          <ToolbarItem>
            <Button variant="plain" icon={<CloneIcon />} />
          </ToolbarItem>
          <ToolbarItem>
            <Button variant="plain" icon={<SyncIcon />} />
          </ToolbarItem>
        </ToolbarGroup>
        <ToolbarItem>
          <Dropdown
            isOpen={kebabIsOpen}
            onOpenChange={(_event: any) => this.setState({ kebabIsOpen: this.state.kebabIsOpen })}
            toggle={(toggleRef: Ref<any>) => (
              <MenuToggle
                variant="plain"
                ref={toggleRef}
                onClick={this.onKebabToggle}
                isExpanded={kebabIsOpen}
                icon={<EllipsisVIcon />}
              />
            )}
          >
            <DropdownList>{dropdownItems}</DropdownList>
          </Dropdown>
        </ToolbarItem>
      </>
    );

    return (
      <>
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
        <Toolbar
          id="toolbar-number-of-filters-text"
          clearAllFilters={this.onDelete}
          className="pf-m-toggle-group-container"
          clearFiltersButtonText="Clear filters"
          numberOfFiltersText={(numOfFilters: any) => `Applied filters: ${numOfFilters}`}
        >
          <ToolbarContent>{toolbarItems}</ToolbarContent>
        </Toolbar>
      </>
    );
  }
}

ToolbarDemo.displayName = 'ToolbarDemo';
export { ToolbarDemo };
