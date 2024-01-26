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
  SelectOption
} from '@patternfly/react-core';
import FilterIcon from '@patternfly/react-icons/dist/esm/icons/filter-icon';

export const ToolbarComponentManagedToggleGroup: React.FunctionComponent = () => {
  const [inputValue, setInputValue] = React.useState('');
  const [statusIsExpanded, setStatusIsExpanded] = React.useState(false);
  const [statusSelected, setStatusSelected] = React.useState('');
  const [riskIsExpanded, setRiskIsExpanded] = React.useState(false);
  const [riskSelected, setRiskSelected] = React.useState('');

  const statusOptions = ['New', 'Pending', 'Running', 'Cancelled'];
  const riskOptions = ['Risk', 'Low', 'Medium', 'High'];

  const onInputChange = (newValue: string) => {
    setInputValue(newValue);
  };

  const onStatusToggle = () => {
    setStatusIsExpanded(!statusIsExpanded);
  };

  const onStatusSelect = (_event: React.MouseEvent<Element, MouseEvent> | undefined, selection: string) => {
    setStatusSelected(selection);
    setStatusIsExpanded(false);
  };

  const onRiskToggle = () => {
    setRiskIsExpanded(!riskIsExpanded);
  };

  const onRiskSelect = (_event: React.MouseEvent<Element, MouseEvent> | undefined, selection: string) => {
    setRiskSelected(selection);
    setRiskIsExpanded(false);
  };

  const toggleGroupItems = (
    <React.Fragment>
      <ToolbarItem>
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
            toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
              <MenuToggle
                ref={toggleRef}
                onClick={() => onStatusToggle()}
                isExpanded={statusIsExpanded}
                style={
                  {
                    width: '150px'
                  } as React.CSSProperties
                }
              >
                {statusSelected || 'Status'}
              </MenuToggle>
            )}
            onSelect={onStatusSelect}
            onOpenChange={(isOpen) => setStatusIsExpanded(isOpen)}
            selected={statusSelected}
            isOpen={statusIsExpanded}
          >
            <SelectList>
              {statusOptions.map((option, index) => (
                <SelectOption key={index} value={option}>
                  {option}
                </SelectOption>
              ))}
            </SelectList>
          </Select>
        </ToolbarItem>
        <ToolbarItem>
          <Select
            toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
              <MenuToggle
                ref={toggleRef}
                onClick={() => onRiskToggle()}
                isExpanded={riskIsExpanded}
                style={
                  {
                    width: '120px'
                  } as React.CSSProperties
                }
              >
                {riskSelected || 'Risk'}
              </MenuToggle>
            )}
            onSelect={onRiskSelect}
            selected={riskSelected}
            isOpen={riskIsExpanded}
            onOpenChange={(isOpen) => setRiskIsExpanded(isOpen)}
          >
            <SelectList>
              {riskOptions.map((option, index) => (
                <SelectOption key={index} value={option}>
                  {option}
                </SelectOption>
              ))}
            </SelectList>
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
