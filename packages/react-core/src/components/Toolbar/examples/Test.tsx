import React from 'react';
import {
  MenuToggle,
  MenuToggleElement,
  Toolbar,
  ToolbarItem,
  ToolbarContent,
  ToolbarToggleGroup,
  ToolbarGroup,
  SearchInput,
  Select,
  SelectList,
  SelectOption,
  ToolbarFilter,
  Badge
} from '@patternfly/react-core';
import FilterIcon from '@patternfly/react-icons/dist/esm/icons/filter-icon';

export const Test: React.FunctionComponent = () => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [isExpanded2, setIsExpanded2] = React.useState(false);

  const [inputValue, setInputValue] = React.useState('');
  const [filters, setFilters] = React.useState({
    risk: ['Low'],
    status: ['New', 'Pending']
  });

  const [isStatusExpanded, setIsStatusExpanded] = React.useState(false);
  const [isRiskExpanded, setIsRiskExpanded] = React.useState(false);

  const onInputChange = (newValue: string) => {
    setInputValue(newValue);
  };

  const onStatusToggle = () => {
    setIsStatusExpanded(!isStatusExpanded);
  };

  const onRiskToggle = () => {
    setIsRiskExpanded(!isRiskExpanded);
  };

  const onSelect = (type: string, event: React.MouseEvent | React.ChangeEvent | undefined, selection: string) => {
    const checked = (event?.target as HTMLInputElement).checked;
    setFilters((prev) => {
      const prevSelections = prev[type];
      return {
        ...prev,
        [type]: checked ? [...prevSelections, selection] : prevSelections.filter((value) => value !== selection)
      };
    });
  };

  const onStatusSelect = (event: React.MouseEvent | React.ChangeEvent | undefined, selection: string) => {
    onSelect('status', event, selection);
  };

  const onRiskSelect = (event: React.MouseEvent | React.ChangeEvent | undefined, selection: string) => {
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

  const statusMenuItems = (
    <SelectList>
      <SelectOption hasCheckbox key="statusNew" value="New" isSelected={filters.status.includes('New')}>
        New
      </SelectOption>
      <SelectOption hasCheckbox key="statusPending" value="Pending" isSelected={filters.status.includes('Pending')}>
        Pending
      </SelectOption>
      <SelectOption hasCheckbox key="statusRunning" value="Running" isSelected={filters.status.includes('Running')}>
        Running
      </SelectOption>
      <SelectOption
        hasCheckbox
        key="statusCancelled"
        value="Cancelled"
        isSelected={filters.status.includes('Cancelled')}
      >
        Cancelled
      </SelectOption>
    </SelectList>
  );

  const riskMenuItems = (
    <SelectList>
      <SelectOption hasCheckbox key="riskLow" value="Low" isSelected={filters.risk.includes('Low')}>
        Low
      </SelectOption>
      <SelectOption hasCheckbox key="riskMedium" value="Medium" isSelected={filters.risk.includes('Medium')}>
        Medium
      </SelectOption>
      <SelectOption hasCheckbox key="riskHigh" value="High" isSelected={filters.risk.includes('High')}>
        High
      </SelectOption>
    </SelectList>
  );

  const toggleGroupItems = (
    <React.Fragment>
      <ToolbarItem variant="search-filter">
        <SearchInput
          aria-label="Consumer toggle groups example search input"
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
          isExpanded={isExpanded}
        >
          <Select
            aria-label="Status"
            role="menu"
            toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
              <MenuToggle
                ref={toggleRef}
                onClick={onStatusToggle}
                isExpanded={isStatusExpanded}
                style={
                  {
                    width: '140px'
                  } as React.CSSProperties
                }
              >
                Status
                {filters.status.length > 0 && <Badge isRead>{filters.status.length}</Badge>}
              </MenuToggle>
            )}
            onSelect={(event, selection) => onStatusSelect(event, selection as string)}
            selected={filters.status}
            isOpen={isStatusExpanded}
            onOpenChange={(isOpen) => setIsStatusExpanded(isOpen)}
          >
            {statusMenuItems}
          </Select>
        </ToolbarFilter>
      </ToolbarGroup>
    </React.Fragment>
  );

  const toggleGroup2Items = (
    <ToolbarGroup variant="filter-group">
      <ToolbarFilter
        chips={filters.risk}
        deleteChip={(category, chip) => onDelete(category as string, chip as string)}
        categoryName="Risk"
        isExpanded={isExpanded2}
      >
        <Select
          aria-label="Risk"
          role="menu"
          toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
            <MenuToggle
              ref={toggleRef}
              onClick={onRiskToggle}
              isExpanded={isRiskExpanded}
              style={
                {
                  width: '140px'
                } as React.CSSProperties
              }
            >
              Risk
              {filters.risk.length > 0 && <Badge isRead>{filters.risk.length}</Badge>}
            </MenuToggle>
          )}
          onSelect={(event, selection) => onRiskSelect(event, selection as string)}
          selected={filters.risk}
          isOpen={isRiskExpanded}
          onOpenChange={(isOpen) => setIsRiskExpanded(isOpen)}
        >
          {riskMenuItems}
        </Select>
      </ToolbarFilter>
    </ToolbarGroup>
  );

  return (
    <Toolbar id="toolbar-consumer-managed-toggle-groups" className="pf-m-toggle-group-container">
      <ToolbarContent isExpanded={isExpanded || isExpanded2}>
        <ToolbarToggleGroup
          isExpanded={isExpanded}
          onToggle={() => setIsExpanded(!isExpanded)}
          toggleIcon={<FilterIcon />}
          breakpoint="md"
        >
          {toggleGroupItems}
        </ToolbarToggleGroup>
        <ToolbarToggleGroup
          isExpanded={isExpanded2}
          onToggle={() => setIsExpanded2(!isExpanded2)}
          toggleIcon={<FilterIcon />}
          breakpoint="xl"
        >
          {toggleGroup2Items}
        </ToolbarToggleGroup>
      </ToolbarContent>
    </Toolbar>
  );
};
