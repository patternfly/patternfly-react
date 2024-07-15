import React from 'react';
import {
  Toolbar,
  ToolbarItem,
  ToolbarContent,
  ToolbarFilter,
  ToolbarToggleGroup,
  ToolbarGroup,
  Badge,
  Button,
  MenuToggle,
  MenuToggleElement,
  Select,
  SelectList,
  SelectOption
} from '@patternfly/react-core';
import FilterIcon from '@patternfly/react-icons/dist/esm/icons/filter-icon';
import EditIcon from '@patternfly/react-icons/dist/esm/icons/edit-icon';
import CloneIcon from '@patternfly/react-icons/dist/esm/icons/clone-icon';
import SyncIcon from '@patternfly/react-icons/dist/esm/icons/sync-icon';

export const ToolbarCustomLabelGroupContent: React.FunctionComponent = () => {
  const [statusIsExpanded, setStatusIsExpanded] = React.useState<boolean>(false);
  const [riskIsExpanded, setRiskIsExpanded] = React.useState<boolean>(false);
  const [filters, setFilters] = React.useState({
    risk: ['Low'],
    status: ['New', 'Pending']
  });

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

  const onSelect = (type: 'Risk' | 'Status', event: React.MouseEvent | React.ChangeEvent, selection: string) => {
    const checked = (event.target as any).checked;
    if (type === 'Risk') {
      setFilters({
        risk: checked ? [...filters.risk, selection] : filters.risk.filter((fil: string) => fil !== selection),
        status: filters.status
      });
    } else if (type === 'Status') {
      setFilters({
        risk: filters.risk,
        status: checked ? [...filters.status, selection] : filters.status.filter((fil: string) => fil !== selection)
      });
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
                onClick={() => setStatusIsExpanded(!statusIsExpanded)}
                isExpanded={statusIsExpanded}
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
            onSelect={(event, selection) => onSelect('Status', event, selection as string)}
            selected={filters.status}
            isOpen={statusIsExpanded}
            onOpenChange={(isOpen) => setStatusIsExpanded(isOpen)}
          >
            {statusMenuItems}
          </Select>
        </ToolbarFilter>
        <ToolbarFilter
          labels={filters.risk}
          deleteLabel={(category, label) => onDelete(category as string, label as string)}
          deleteLabelGroup={(category) => onDeleteGroup(category as string)}
          categoryName="Risk"
        >
          <Select
            aria-label="Risk"
            role="menu"
            toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
              <MenuToggle
                ref={toggleRef}
                onClick={() => setRiskIsExpanded(!riskIsExpanded)}
                isExpanded={riskIsExpanded}
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
            onSelect={(event, selection) => onSelect('Risk', event, selection as string)}
            selected={filters.risk}
            isOpen={riskIsExpanded}
            onOpenChange={(isOpen) => setRiskIsExpanded(isOpen)}
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
    </React.Fragment>
  );

  const customLabelGroupContent = (
    <React.Fragment>
      <ToolbarItem>
        <Button variant="link" onClick={() => {}} isInline>
          Save filters
        </Button>
      </ToolbarItem>
      <ToolbarItem>
        <Button variant="link" onClick={() => onDelete('', '')} isInline>
          Clear all filters
        </Button>
      </ToolbarItem>
    </React.Fragment>
  );

  return (
    <Toolbar
      id="toolbar-with-custom-label-group"
      className="pf-m-toggle-group-container"
      collapseListedFiltersBreakpoint="xl"
      customLabelGroupContent={customLabelGroupContent}
    >
      <ToolbarContent>{toolbarItems}</ToolbarContent>
    </Toolbar>
  );
};
