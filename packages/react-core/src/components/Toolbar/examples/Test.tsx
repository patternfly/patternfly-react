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
  ToolbarExpandableContent,
  Badge
} from '@patternfly/react-core';
import FilterIcon from '@patternfly/react-icons/dist/esm/icons/filter-icon';

export const Test: React.FunctionComponent = () => {
  const statusExpandableContentRef = React.useRef<HTMLDivElement>();
  const statusChipContainerRef = React.useRef<HTMLDivElement>();
  const riskExpandableContentRef = React.useRef<HTMLDivElement>();
  const riskChipContainerRef = React.useRef<HTMLDivElement>();

  const [isStatusGroupExpanded, setIsStatusGroupExpanded] = React.useState(false);
  const [isRiskGroupExpanded, setIsRiskGroupExpanded] = React.useState(false);

  const [isStatusMenuExpanded, setIsStatusExpanded] = React.useState(false);
  const [isRiskMenuExpanded, setIsRiskExpanded] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('');
  const [filters, setFilters] = React.useState({
    risk: ['Low'],
    status: ['New', 'Pending']
  });

  const closeToggleGroups = () => {
    setIsStatusGroupExpanded(false);
    setIsRiskGroupExpanded(false);
  };

  React.useEffect(() => {
    window.addEventListener('resize', closeToggleGroups); // Resize observer to toggle off expand groups is required to properly reformat toolbar when growing
    return () => {
      window.removeEventListener('resize', closeToggleGroups);
    };
  }, []);

  const onInputChange = (newValue: string) => {
    setInputValue(newValue);
  };

  const onStatusToggle = () => {
    setIsStatusExpanded(!isStatusMenuExpanded);
  };

  const onRiskToggle = () => {
    setIsRiskExpanded(!isRiskMenuExpanded);
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

  const statusToggleGroupItems = (
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
          isExpanded={isStatusGroupExpanded}
          expandableChipContainerRef={statusChipContainerRef} // Required to link the toolbar filter chip group to the custom expandable group
        >
          <Select
            aria-label="Status"
            role="menu"
            toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
              <MenuToggle
                ref={toggleRef}
                onClick={onStatusToggle}
                isExpanded={isStatusMenuExpanded}
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
            isOpen={isStatusMenuExpanded}
            onOpenChange={(isOpen) => setIsStatusExpanded(isOpen)}
          >
            <SelectList>
              <SelectOption hasCheckbox key="statusNew" value="New" isSelected={filters.status.includes('New')}>
                New
              </SelectOption>
              <SelectOption
                hasCheckbox
                key="statusPending"
                value="Pending"
                isSelected={filters.status.includes('Pending')}
              >
                Pending
              </SelectOption>
              <SelectOption
                hasCheckbox
                key="statusRunning"
                value="Running"
                isSelected={filters.status.includes('Running')}
              >
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
          </Select>
        </ToolbarFilter>
      </ToolbarGroup>
    </React.Fragment>
  );

  const riskToggleGroupItems = (
    <ToolbarGroup variant="filter-group">
      <ToolbarFilter
        chips={filters.risk}
        deleteChip={(category, chip) => onDelete(category as string, chip as string)}
        categoryName="Risk"
        isExpanded={isRiskGroupExpanded}
        expandableChipContainerRef={riskChipContainerRef} // Required to link the toolbar filter chip group to the custom expandable group
      >
        <Select
          aria-label="Risk"
          role="menu"
          toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
            <MenuToggle
              ref={toggleRef}
              onClick={onRiskToggle}
              isExpanded={isRiskMenuExpanded}
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
          isOpen={isRiskMenuExpanded}
          onOpenChange={(isOpen) => setIsRiskExpanded(isOpen)}
        >
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
        </Select>
      </ToolbarFilter>
    </ToolbarGroup>
  );

  const toggleExpandGroups = (
    <>
      <ToolbarExpandableContent // Expandable content group for the first toggle group
        id={'expandable-1'}
        isExpanded={isStatusGroupExpanded}
        expandableContentRef={statusExpandableContentRef}
        chipContainerRef={statusChipContainerRef}
        showClearFiltersButton
        clearAllFilters={() => onDeleteGroup('Status')}
        clearFiltersButtonText="Clear status filter"
      />
      <ToolbarExpandableContent // Expandable content group for the second toggle group
        id={'expandable-2'}
        isExpanded={isRiskGroupExpanded}
        expandableContentRef={riskExpandableContentRef}
        chipContainerRef={riskChipContainerRef}
        showClearFiltersButton
        clearAllFilters={() => onDeleteGroup('Risk')}
        clearFiltersButtonText="Clear risk filter"
      />
    </>
  );

  return (
    <Toolbar id="toolbar-multiple-toggle-groups" className="pf-m-toggle-group-container">
      <ToolbarContent
        expandableContent={toggleExpandGroups} // Required to bypass default expandable content div
      >
        <ToolbarToggleGroup
          isExpanded={isStatusGroupExpanded} // Required to control expanded state
          onToggle={() => {
            setIsStatusGroupExpanded(!isStatusGroupExpanded);
            setIsRiskGroupExpanded(false);
          }} // Required to control expanded state
          expandableContentRef={statusExpandableContentRef} // Required to link the toggle group to a specific expandable content group
          toggleIcon={<FilterIcon />}
          breakpoint="md"
        >
          {statusToggleGroupItems}
        </ToolbarToggleGroup>
        <ToolbarToggleGroup
          isExpanded={isRiskGroupExpanded} // Required to control expanded state
          onToggle={() => {
            setIsRiskGroupExpanded(!isRiskGroupExpanded);
            setIsStatusGroupExpanded(false);
          }} // Required to control expanded state
          expandableContentRef={riskExpandableContentRef} // Required to link the toggle group to a specific expandable content group
          toggleIcon={<FilterIcon />}
          breakpoint="xl"
        >
          {riskToggleGroupItems}
        </ToolbarToggleGroup>
      </ToolbarContent>
    </Toolbar>
  );
};
