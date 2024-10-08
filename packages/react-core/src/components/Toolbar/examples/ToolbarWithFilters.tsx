import React from 'react';
import {
  Button,
  Dropdown,
  DropdownList,
  DropdownItem,
  Toolbar,
  ToolbarItem,
  ToolbarContent,
  ToolbarFilter,
  ToolbarToggleGroup,
  ToolbarGroup,
  Badge,
  MenuToggle,
  MenuToggleElement,
  SearchInput,
  Select,
  SelectList,
  SelectOption
} from '@patternfly/react-core';
import FilterIcon from '@patternfly/react-icons/dist/esm/icons/filter-icon';
import EditIcon from '@patternfly/react-icons/dist/esm/icons/edit-icon';
import CloneIcon from '@patternfly/react-icons/dist/esm/icons/clone-icon';
import SyncIcon from '@patternfly/react-icons/dist/esm/icons/sync-icon';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';

export const ToolbarWithFilters: React.FunctionComponent = () => {
  const [inputValue, setInputValue] = React.useState('');
  const [isStatusExpanded, setIsStatusExpanded] = React.useState(false);
  const [isRiskExpanded, setIsRiskExpanded] = React.useState(false);
  const [filters, setFilters] = React.useState({
    risk: ['Low'],
    status: ['New', 'Pending']
  });
  const [isKebabOpen, setIsKebabOpen] = React.useState(false);

  const onInputChange = (newValue: string) => {
    setInputValue(newValue);
  };

  const onSelect = (type: string, event: React.MouseEvent | React.ChangeEvent, selection: string) => {
    const checked = (event.target as HTMLInputElement).checked;
    setFilters((prev) => {
      const prevSelections = prev[type];
      return {
        ...prev,
        [type]: checked ? [...prevSelections, selection] : prevSelections.filter((value) => value !== selection)
      };
    });
  };

  const onStatusSelect = (event: React.MouseEvent | React.ChangeEvent, selection: string) => {
    onSelect('status', event, selection);
  };

  const onRiskSelect = (event: React.MouseEvent | React.ChangeEvent, selection: string) => {
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

  const onStatusToggle = () => {
    setIsStatusExpanded(!isStatusExpanded);
  };

  const onRiskToggle = () => {
    setIsRiskExpanded(!isRiskExpanded);
  };

  const onKebabToggle = () => {
    setIsKebabOpen(!isKebabOpen);
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
      <ToolbarItem>
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
          labels={filters.status}
          deleteLabel={(category, label) => onDelete(category as string, label as string)}
          deleteLabelGroup={(category) => onDeleteGroup(category as string)}
          categoryName="Status"
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
            onSelect={onStatusSelect}
            selected={filters.status}
            isOpen={isStatusExpanded}
            onOpenChange={(isOpen) => setIsStatusExpanded(isOpen)}
          >
            {statusMenuItems}
          </Select>
        </ToolbarFilter>
        <ToolbarFilter
          labels={filters.risk}
          deleteLabel={(category, label) => onDelete(category as string, label as string)}
          categoryName="Risk"
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
            onSelect={onRiskSelect}
            selected={filters.risk}
            isOpen={isRiskExpanded}
            onOpenChange={(isOpen) => setIsRiskExpanded(isOpen)}
          >
            {riskMenuItems}
          </Select>
        </ToolbarFilter>
      </ToolbarGroup>
    </React.Fragment>
  );

  const toolbarItems = (
    <React.Fragment>
      <ToolbarToggleGroup toggleIcon={<FilterIcon />} breakpoint="xl">
        {toggleGroupItems}
      </ToolbarToggleGroup>
      <ToolbarGroup variant="action-group-plain">
        <ToolbarItem>
          <Button variant="plain" aria-label="edit" icon={<EditIcon />} />
        </ToolbarItem>
        <ToolbarItem>
          <Button variant="plain" aria-label="clone" icon={<CloneIcon />} />
        </ToolbarItem>
        <ToolbarItem>
          <Button variant="plain" aria-label="sync" icon={<SyncIcon />} />
        </ToolbarItem>
      </ToolbarGroup>
      <ToolbarItem>
        <Dropdown
          popperProps={{ position: 'right' }}
          isOpen={isKebabOpen}
          onOpenChange={(isOpen: boolean) => setIsKebabOpen(isOpen)}
          toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
            <MenuToggle
              ref={toggleRef}
              isExpanded={isKebabOpen}
              onClick={onKebabToggle}
              variant="plain"
              aria-label="Toolbar with filters example kebab toggle"
              icon={<EllipsisVIcon aria-hidden="true" />}
            />
          )}
        >
          <DropdownList>
            <DropdownItem>Action</DropdownItem>
            <DropdownItem
              to="#default-link2"
              // Prevent the default onClick functionality for example purposes
              onClick={(ev: any) => ev.preventDefault()}
            >
              Link
            </DropdownItem>
            <DropdownItem isDisabled>Disabled Action</DropdownItem>
            <DropdownItem isDisabled to="#default-link4">
              Disabled Link
            </DropdownItem>
          </DropdownList>
        </Dropdown>
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
