import React from 'react';
import {
  Toolbar,
  ToolbarItem,
  ToolbarContent,
  ToolbarToggleGroup,
  ToolbarGroup,
  SelectOptionObject
} from '@patternfly/react-core';
import { Select, SelectOption, SelectVariant, SearchInput } from '@patternfly/react-core';
import FilterIcon from '@patternfly/react-icons/dist/esm/icons/filter-icon';

export const ToolbarComponentManagedToggleGroup: React.FunctionComponent = () => {
  const [inputValue, setInputValue] = React.useState<string>('');
  const [statusIsExpanded, setStatusIsExpanded] = React.useState(false);
  const [statusSelected, setStatusSelected] = React.useState<string | SelectOptionObject>();
  const [riskIsExpanded, setRiskIsExpanded] = React.useState(false);
  const [riskSelected, setRiskSelected] = React.useState<string | SelectOptionObject>();

  const statusOptions = [
    { value: 'Status', disabled: false, isPlaceholder: true },
    { value: 'New', disabled: false },
    { value: 'Pending', disabled: false },
    { value: 'Running', disabled: false },
    { value: 'Cancelled', disabled: false }
  ];

  const riskOptions = [
    { value: 'Risk', disabled: false, isPlaceholder: true },
    { value: 'Low', disabled: false },
    { value: 'Medium', disabled: false },
    { value: 'High', disabled: false }
  ];

  const onInputChange = (newValue: string) => {
    setInputValue(newValue);
  };

  const onStatusToggle = (isExpanded: boolean) => {
    setStatusIsExpanded(isExpanded);
  };

  const onStatusSelect = (
    _event: React.MouseEvent | React.ChangeEvent,
    selection: string | SelectOptionObject,
    isPlaceholder: boolean | undefined
  ) => {
    if (isPlaceholder) {
      clearStatusSelection();
    }
    setStatusSelected(selection);
    setStatusIsExpanded(false);
  };

  const clearStatusSelection = () => {
    setStatusSelected(undefined);
    setStatusIsExpanded(false);
  };

  const onRiskToggle = (isExpanded: boolean) => {
    setRiskIsExpanded(isExpanded);
  };

  const onRiskSelect = (
    _event: React.MouseEvent | React.ChangeEvent,
    selection: string | SelectOptionObject,
    isPlaceholder: boolean | undefined
  ) => {
    if (isPlaceholder) {
      clearRiskSelection();
    }
    setRiskSelected(selection);
    setRiskIsExpanded(false);
  };

  const clearRiskSelection = () => {
    setRiskSelected(undefined);
    setRiskIsExpanded(false);
  };

  const toggleGroupItems = (
    <React.Fragment>
      <ToolbarItem variant="search-filter">
        <SearchInput
          aria-label="Component toggle groups example search input"
          onChange={(_event, value) => onInputChange(value)}
          value={inputValue}
          onClear={() => {
            onInputChange('');
          }}
        />
      </ToolbarItem>
      <ToolbarGroup variant="filter-group">
        <ToolbarItem>
          <Select
            variant={SelectVariant.single}
            aria-label="Select Input"
            onToggle={onStatusToggle}
            onSelect={onStatusSelect}
            selections={statusSelected}
            isOpen={statusIsExpanded}
          >
            {statusOptions.map((option, index) => (
              <SelectOption isDisabled={option.disabled} key={index} value={option.value} />
            ))}
          </Select>
        </ToolbarItem>
        <ToolbarItem>
          <Select
            variant={SelectVariant.single}
            aria-label="Select Input"
            onToggle={onRiskToggle}
            onSelect={onRiskSelect}
            selections={riskSelected}
            isOpen={riskIsExpanded}
          >
            {riskOptions.map((option, index) => (
              <SelectOption isDisabled={option.disabled} key={index} value={option.value} />
            ))}
          </Select>
        </ToolbarItem>
      </ToolbarGroup>
    </React.Fragment>
  );

  const items = (
    <ToolbarToggleGroup toggleIcon={<FilterIcon />} breakpoint="xl">
      {toggleGroupItems}
    </ToolbarToggleGroup>
  );

  return (
    <Toolbar id="toolbar-component-managed-toggle-groups" className="pf-m-toggle-group-container">
      <ToolbarContent>{items}</ToolbarContent>
    </Toolbar>
  );
};
