import React from 'react';
import {
  Toolbar,
  ToolbarItem,
  ToolbarContent,
  ToolbarFilter,
  ToolbarToggleGroup,
  ToolbarGroup,
  SelectOptionObject
} from '@patternfly/react-core';
import { Button, Select, SelectOption, SelectVariant, SearchInput } from '@patternfly/react-core';
import {
  Dropdown as DropdownDeprecated,
  DropdownItem as DropdownItemDeprecated,
  DropdownSeparator,
  DropdownPosition,
  KebabToggle
} from '@patternfly/react-core/deprecated';
import FilterIcon from '@patternfly/react-icons/dist/esm/icons/filter-icon';
import EditIcon from '@patternfly/react-icons/dist/esm/icons/edit-icon';
import CloneIcon from '@patternfly/react-icons/dist/esm/icons/clone-icon';
import SyncIcon from '@patternfly/react-icons/dist/esm/icons/sync-icon';

export const ToolbarWithFilters: React.FunctionComponent = () => {
  const [inputValue, setInputValue] = React.useState('');
  const [statusIsExpanded, setStatusIsExpanded] = React.useState(false);
  const [riskIsExpanded, setRiskIsExpanded] = React.useState(false);
  const [filters, setFilters] = React.useState({
    risk: ['Low'],
    status: ['New', 'Pending']
  });
  const [kebabIsOpen, setKebabIsOpen] = React.useState(false);

  const onInputChange = (newValue: string) => {
    setInputValue(newValue);
  };

  const onSelect = (
    type: string,
    event: React.MouseEvent | React.ChangeEvent,
    selection: string | SelectOptionObject
  ) => {
    const checked = (event.target as HTMLInputElement).checked;
    setFilters((prev) => {
      const prevSelections = prev[type];
      return {
        ...prev,
        [type]: checked ? [...prevSelections, selection] : prevSelections.filter((value) => value !== selection)
      };
    });
  };

  const onStatusSelect = (event: React.MouseEvent | React.ChangeEvent, selection: string | SelectOptionObject) => {
    onSelect('status', event, selection);
  };

  const onRiskSelect = (event: React.MouseEvent | React.ChangeEvent, selection: string | SelectOptionObject) => {
    onSelect('risk', event, selection);
  };

  const onDelete = (type: string, id: string) => {
    if (type === 'Risk') {
      setFilters({ risk: filters.risk.filter((fil: string) => fil !== id), status: filters.status });
    } else if (type === 'Status') {
      setFilters({ risk: filters.risk, status: filters.status.filter((fil: string) => fil !== id) });
    } else {
      setFilters({ risk: [], status: [] });
    }
  };

  const onDeleteGroup = (type: string) => {
    if (type === 'Risk') {
      setFilters({ risk: [], status: filters.status });
    } else if (type === 'Status') {
      setFilters({ risk: filters.risk, status: [] });
    }
  };

  const onStatusToggle = (_event: any, isExpanded: boolean) => {
    setStatusIsExpanded(isExpanded);
  };

  const onRiskToggle = (_event: any, isExpanded: boolean) => {
    setRiskIsExpanded(isExpanded);
  };

  const onKebabToggle = (_event: any, isOpen: boolean) => {
    setKebabIsOpen(isOpen);
  };

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
      <ToolbarItem variant="search-filter">
        <SearchInput
          aria-label="With filters example search input"
          onChange={(_event, value) => onInputChange(value)}
          value={inputValue}
          onClear={() => {
            onInputChange('');
          }}
        />
      </ToolbarItem>
      <ToolbarGroup variant="filter-group">
        <ToolbarFilter
          chips={filters.status}
          deleteChip={(category, chip) => onDelete(category as string, chip as string)}
          deleteChipGroup={(category) => onDeleteGroup(category as string)}
          categoryName="Status"
        >
          <Select
            variant={SelectVariant.checkbox}
            aria-label="Status"
            onToggle={onStatusToggle}
            onSelect={onStatusSelect}
            selections={filters.status}
            isOpen={statusIsExpanded}
            placeholderText="Status"
          >
            {statusMenuItems}
          </Select>
        </ToolbarFilter>
        <ToolbarFilter
          chips={filters.risk}
          deleteChip={(category, chip) => onDelete(category as string, chip as string)}
          categoryName="Risk"
        >
          <Select
            variant={SelectVariant.checkbox}
            aria-label="Risk"
            onToggle={onRiskToggle}
            onSelect={onRiskSelect}
            selections={filters.risk}
            isOpen={riskIsExpanded}
            placeholderText="Risk"
          >
            {riskMenuItems}
          </Select>
        </ToolbarFilter>
      </ToolbarGroup>
    </React.Fragment>
  );

  const dropdownItems = [
    <DropdownItemDeprecated key="link">Link</DropdownItemDeprecated>,
    <DropdownItemDeprecated key="action" component="button">
      Action
    </DropdownItemDeprecated>,
    <DropdownItemDeprecated key="disabled link" isDisabled>
      Disabled Link
    </DropdownItemDeprecated>,
    <DropdownItemDeprecated key="disabled action" isDisabled component="button">
      Disabled Action
    </DropdownItemDeprecated>,
    <DropdownSeparator key="separator" />,
    <DropdownItemDeprecated key="separated link">Separated Link</DropdownItemDeprecated>,
    <DropdownItemDeprecated key="separated action" component="button">
      Separated Action
    </DropdownItemDeprecated>
  ];

  const toolbarItems = (
    <React.Fragment>
      <ToolbarToggleGroup toggleIcon={<FilterIcon />} breakpoint="xl">
        {toggleGroupItems}
      </ToolbarToggleGroup>
      <ToolbarGroup variant="icon-button-group">
        <ToolbarItem>
          <Button variant="plain" aria-label="edit">
            <EditIcon />
          </Button>
        </ToolbarItem>
        <ToolbarItem>
          <Button variant="plain" aria-label="clone">
            <CloneIcon />
          </Button>
        </ToolbarItem>
        <ToolbarItem>
          <Button variant="plain" aria-label="sync">
            <SyncIcon />
          </Button>
        </ToolbarItem>
      </ToolbarGroup>
      <ToolbarItem>
        <DropdownDeprecated
          toggle={<KebabToggle onToggle={onKebabToggle} />}
          isOpen={kebabIsOpen}
          isPlain
          dropdownItems={dropdownItems}
          position={DropdownPosition.right}
        />
      </ToolbarItem>
    </React.Fragment>
  );

  return (
    <Toolbar
      id="toolbar-with-filter"
      className="pf-m-toggle-group-container"
      collapseListedFiltersBreakpoint="xl"
      clearAllFilters={() => onDelete('', '')}
    >
      <ToolbarContent>{toolbarItems}</ToolbarContent>
    </Toolbar>
  );
};
