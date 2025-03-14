import { Fragment, useState } from 'react';
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

export const ToolbarConsumerManagedToggleGroup: React.FunctionComponent = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [statusIsExpanded, setStatusIsExpanded] = useState(false);
  const [statusSelected, setStatusSelected] = useState('');
  const [riskIsExpanded, setRiskIsExpanded] = useState(false);
  const [riskSelected, setRiskSelected] = useState('');

  const toggleIsExpanded = () => {
    setIsExpanded(!isExpanded);
  };

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
    <Fragment>
      <ToolbarItem>
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
    </Fragment>
  );

  const items = (
    <ToolbarToggleGroup toggleIcon={<FilterIcon />} breakpoint="xl">
      {toggleGroupItems}
    </ToolbarToggleGroup>
  );

  return (
    <Toolbar
      id="toolbar-consumer-managed-toggle-groups"
      isExpanded={isExpanded}
      className="pf-m-toggle-group-container"
      toggleIsExpanded={toggleIsExpanded}
    >
      <ToolbarContent>{items}</ToolbarContent>
    </Toolbar>
  );
};
