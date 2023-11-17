import React from 'react';
import {
  Badge,
  Button,
  Bullseye,
  EmptyState,
  EmptyStateActions,
  EmptyStateBody,
  EmptyStateIcon,
  EmptyStateHeader,
  EmptyStateFooter,
  Label,
  MenuToggle,
  MenuToggleElement,
  Toolbar,
  ToolbarItem,
  ToolbarContent,
  ToolbarFilter,
  ToolbarToggleGroup,
  ToolbarGroup,
  Select,
  SelectOption,
  SearchInput,
  ToolbarChipGroup
} from '@patternfly/react-core';
import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';
import FilterIcon from '@patternfly/react-icons/dist/esm/icons/filter-icon';
import { Table, TableText, Thead, Tr, Th, Tbody, Td } from '@patternfly/react-table';
import { rows, columns } from '@patternfly/react-table/dist/esm/demos/sampleData';

export const TableFilterable: React.FunctionComponent = () => {
  const [filters, setFilters] = React.useState<Record<string, string[]>>({ location: [], name: [], status: [] });
  const [currentCategory, setCurrentCategory] = React.useState('Status');
  const [isFilterDropdownOpen, setIsFilterDropdownOpen] = React.useState(false);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('');

  const rowData = rows.slice(0, 10);

  const onDelete = (type: string | ToolbarChipGroup, id: string) => {
    if (type === 'Location') {
      setFilters({
        ...filters,
        location: filters.location.filter((fil: string) => fil !== id)
      });
    } else if (type === 'Name') {
      setFilters({
        ...filters,
        name: filters.name.filter((fil: string) => fil !== id)
      });
    } else if (type === 'Status') {
      setFilters({
        ...filters,
        status: filters.status.filter((fil: string) => fil !== id)
      });
    } else {
      setFilters({ location: [], name: [], status: [] });
    }
  };

  const onCategoryToggle = () => {
    setIsCategoryDropdownOpen(!isCategoryDropdownOpen);
  };

  const onCategorySelect = (event: React.MouseEvent<Element, MouseEvent>, value: string) => {
    setCurrentCategory(value);
    setIsCategoryDropdownOpen(false);
  };

  const onFilterToggle = () => {
    setIsFilterDropdownOpen(!isFilterDropdownOpen);
  };

  const onFilterSelect = () => {
    setIsFilterDropdownOpen(!isFilterDropdownOpen);
  };

  const onInputChange = (newValue: string) => {
    setInputValue(newValue);
  };

  const onStatusSelect = (event: React.MouseEvent<Element, MouseEvent>, selection: string) => {
    const checked = (event.target as HTMLInputElement).checked;
    setFilters({
      ...filters,
      status: checked ? [...filters.status, selection] : filters.status.filter((value) => value !== selection)
    });
    setIsFilterDropdownOpen(false);
  };

  const onNameInput = (event: React.KeyboardEvent) => {
    if (event.key && event.key !== 'Enter') {
      return;
    }

    const prevFilters = filters.name;
    setFilters({ ...filters, name: prevFilters.includes(inputValue) ? prevFilters : [...prevFilters, inputValue] });
  };

  const onLocationSelect = (event: React.MouseEvent<Element, MouseEvent>, selection: string) => {
    setFilters({ ...filters, location: [selection] });

    setIsFilterDropdownOpen(false);
    onFilterSelect();
  };

  const buildCategoryDropdown = () => {
    const categoryMenuItems = [
      <SelectOption key="cat1" value="Location">
        Location
      </SelectOption>,
      <SelectOption key="cat2" value="Name">
        Name
      </SelectOption>,
      <SelectOption key="cat3" value="Status">
        Status
      </SelectOption>
    ];

    return (
      <ToolbarItem>
        <Select
          onSelect={onCategorySelect}
          selected={currentCategory}
          toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
            <MenuToggle
              ref={toggleRef}
              onClick={onCategoryToggle}
              isExpanded={isCategoryDropdownOpen}
              icon={<FilterIcon />}
              style={
                {
                  width: '100%',
                  verticalAlign: 'text-bottom'
                } as React.CSSProperties
              }
            >
              {currentCategory}
            </MenuToggle>
          )}
          isOpen={isCategoryDropdownOpen}
        >
          {categoryMenuItems}
        </Select>
      </ToolbarItem>
    );
  };

  const buildFilterDropdown = () => {
    const locationMenuItems = [
      <SelectOption key="raleigh" value="Raleigh">
        Raleigh
      </SelectOption>,
      <SelectOption key="san francisco" value="San Francisco">
        San Francisco
      </SelectOption>,
      <SelectOption key="boston" value="Boston">
        Boston
      </SelectOption>,
      <SelectOption key="atlanta" value="Atlanta">
        Atlanta
      </SelectOption>
    ];

    const statusMenuItems = [
      <SelectOption hasCheckbox key="statusRunning" value="Running" isSelected={filters.status.includes('Running')}>
        Running
      </SelectOption>,
      <SelectOption hasCheckbox key="statusStopped" value="Stopped" isSelected={filters.status.includes('Stopped')}>
        Stopped
      </SelectOption>,
      <SelectOption hasCheckbox key="statusDown" value="Down" isSelected={filters.status.includes('Down')}>
        Down
      </SelectOption>,
      <SelectOption hasCheckbox key="statusDegraded" value="Degraded" isSelected={filters.status.includes('Degraded')}>
        Degraded
      </SelectOption>,
      <SelectOption
        hasCheckbox
        key="statusMaint"
        value="Needs maintenance"
        isSelected={filters.status.includes('Needs maintenance')}
      >
        Needs maintenance
      </SelectOption>
    ];

    return (
      <React.Fragment>
        <ToolbarFilter
          chips={filters.location}
          deleteChip={(category, chip) => onDelete(category, chip as string)}
          categoryName="Location"
          showToolbarItem={currentCategory === 'Location'}
        >
          <Select
            aria-label="Location"
            onSelect={onLocationSelect}
            selected={filters.location[0]}
            isOpen={isFilterDropdownOpen}
            popperProps={{ minWidth: '100px' }}
            toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
              <MenuToggle
                ref={toggleRef}
                onClick={onFilterToggle}
                isExpanded={isFilterDropdownOpen}
                style={
                  {
                    width: '100%',
                    verticalAlign: 'text-bottom'
                  } as React.CSSProperties
                }
              >
                {filters.location[0] || `Any`}
              </MenuToggle>
            )}
          >
            {locationMenuItems}
          </Select>
        </ToolbarFilter>
        <ToolbarFilter
          chips={filters.name}
          deleteChip={(category, chip) => onDelete(category, chip as string)}
          categoryName="Name"
          showToolbarItem={currentCategory === 'Name'}
        >
          <SearchInput
            aria-label="name filter"
            placeholder="Filter by name..."
            onChange={(_event, value) => onInputChange(value)}
            value={inputValue}
            onClear={() => {
              onInputChange('');
            }}
            onSearch={onNameInput}
          />
        </ToolbarFilter>
        <ToolbarFilter
          chips={filters.status}
          deleteChip={(category, chip) => onDelete(category, chip as string)}
          categoryName="Status"
          showToolbarItem={currentCategory === 'Status'}
        >
          <Select
            aria-label="Status"
            isOpen={isFilterDropdownOpen}
            popperProps={{ minWidth: '100px' }}
            onSelect={onStatusSelect}
            selected={filters.status}
            toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
              <MenuToggle
                ref={toggleRef}
                onClick={onFilterToggle}
                isExpanded={isFilterDropdownOpen}
                style={
                  {
                    width: '100%',
                    verticalAlign: 'text-bottom'
                  } as React.CSSProperties
                }
              >
                Filter by status
                {filters.status.length > 0 && <Badge isRead>{filters.status.length}</Badge>}
              </MenuToggle>
            )}
          >
            {statusMenuItems}
          </Select>
        </ToolbarFilter>
      </React.Fragment>
    );
  };

  const renderToolbar = () => (
    <Toolbar
      id="toolbar-with-chip-groups"
      clearAllFilters={() => setFilters({ location: [], name: [], status: [] })}
      collapseListedFiltersBreakpoint="xl"
    >
      <ToolbarContent>
        <ToolbarToggleGroup toggleIcon={<FilterIcon />} breakpoint="xl">
          <ToolbarGroup
            variant="filter-group"
            style={
              {
                lineHeight: '22px',
                alignItems: 'center'
              } as React.CSSProperties
            }
          >
            {buildCategoryDropdown()}
            {buildFilterDropdown()}
          </ToolbarGroup>
        </ToolbarToggleGroup>
      </ToolbarContent>
    </Toolbar>
  );

  const filteredRows =
    filters.name.length > 0 || filters.location.length > 0 || filters.status.length > 0
      ? rowData.filter(
          (row) =>
            (filters.name.length === 0 ||
              filters.name.some((name) => row.name.toLowerCase().includes(name.toLowerCase()))) &&
            (filters.location.length === 0 || filters.location.includes(row.location)) &&
            (filters.status.length === 0 || filters.status.includes(row.status))
        )
      : rowData;

  const emptyState = (
    <EmptyState>
      <EmptyStateHeader
        titleText="Clear all filters and try again."
        headingLevel="h5"
        icon={<EmptyStateIcon icon={SearchIcon} />}
      />
      <EmptyStateBody>No results match the filter criteria. Clear all filters and try again.</EmptyStateBody>
      <EmptyStateFooter>
        <EmptyStateActions>
          <Button
            variant="link"
            onClick={() => {
              setFilters({ location: [], name: [], status: [] });
            }}
          >
            Clear all filters
          </Button>
        </EmptyStateActions>
      </EmptyStateFooter>
    </EmptyState>
  );

  const renderLabel = (labelText: string) => {
    switch (labelText) {
      case 'Running':
        return <Label color="green">{labelText}</Label>;
      case 'Stopped':
        return <Label color="orange">{labelText}</Label>;
      case 'Needs maintenance':
        return <Label color="blue">{labelText}</Label>;
      case 'Down':
        return <Label color="red">{labelText}</Label>;
    }
  };

  return (
    <React.Fragment>
      {renderToolbar()}
      <Table aria-label="Filterable Table Demo">
        <Thead>
          <Tr>
            <Th key={0}>{columns[0]}</Th>
            <Th key={1}>{columns[1]}</Th>
            <Th key={2}>{columns[2]}</Th>
            <Th key={3}>{columns[3]}</Th>
            <Th key={4}>{columns[4]}</Th>
            <Th key={5}>{columns[5]}</Th>
            <Th key={6}>{columns[6]}</Th>
            <Th key={7} width={10}>
              {columns[7]}
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {filteredRows.slice(0, 10).map((row, rowIndex) => (
            <Tr key={rowIndex}>
              <>
                <Td dataLabel={columns[0]}>{row.name}</Td>
                <Td dataLabel={columns[1]}>{row.threads}</Td>
                <Td dataLabel={columns[2]}>{row.applications}</Td>
                <Td dataLabel={columns[3]}>{row.workspaces}</Td>
                <Td dataLabel={columns[4]}>{renderLabel(row.status)}</Td>
                <Td dataLabel={columns[5]}>{row.location}</Td>
                <Td dataLabel={columns[6]}>{row.lastModified}</Td>
                <Td dataLabel={columns[7]} modifier="truncate">
                  <TableText>
                    <a href="#">{row.url}</a>
                  </TableText>
                </Td>
              </>
            </Tr>
          ))}
          {filteredRows.length === 0 && (
            <Tr>
              <Td colSpan={8}>
                <Bullseye>{emptyState}</Bullseye>
              </Td>
            </Tr>
          )}
        </Tbody>
      </Table>
    </React.Fragment>
  );
};
