import React from 'react';
import { SelectOptionObject, Toolbar, ToolbarContent, ToolbarGroup, ToolbarItem } from '@patternfly/react-core';
import { Button, Select, SelectOption, SelectVariant } from '@patternfly/react-core';
import EditIcon from '@patternfly/react-icons/dist/esm/icons/edit-icon';
import CloneIcon from '@patternfly/react-icons/dist/esm/icons/clone-icon';
import SyncIcon from '@patternfly/react-icons/dist/esm/icons/sync-icon';

export const ToolbarGroups: React.FunctionComponent = () => {
  const firstOptions = [
    { value: 'Filter 1', disabled: false, isPlaceholder: true },
    { value: 'A', disabled: false },
    { value: 'B', disabled: false },
    { value: 'C', disabled: false }
  ];

  const secondOptions = [
    { value: 'Filter 2', disabled: false, isPlaceholder: true },
    { value: '1', disabled: false },
    { value: '2', disabled: false },
    { value: '3', disabled: false }
  ];

  const thirdOptions = [
    { value: 'Filter 3', disabled: false, isPlaceholder: true },
    { value: 'I', disabled: false },
    { value: 'II', disabled: false },
    { value: 'III', disabled: false }
  ];

  const [firstIsExpanded, setFirstIsExpanded] = React.useState(false);
  const [firstSelected, setFirstSelected] = React.useState<string | SelectOptionObject>();
  const [secondIsExpanded, setSecondIsExpanded] = React.useState(false);
  const [secondSelected, setSecondSelected] = React.useState<string | SelectOptionObject>();
  const [thirdIsExpanded, setThirdIsExpanded] = React.useState(false);
  const [thirdSelected, setThirdSelected] = React.useState<string | SelectOptionObject>();

  const onFirstToggle = (isExpanded: boolean) => {
    setFirstIsExpanded(isExpanded);
  };

  const onFirstSelect = (_event: React.MouseEvent | React.ChangeEvent, selection: string | SelectOptionObject) => {
    setFirstSelected(selection);
    setFirstIsExpanded(false);
  };

  const onSecondToggle = (isExpanded: boolean) => {
    setSecondIsExpanded(isExpanded);
  };

  const onSecondSelect = (_event: React.MouseEvent | React.ChangeEvent, selection: string | SelectOptionObject) => {
    setSecondSelected(selection);
    setSecondIsExpanded(false);
  };

  const onThirdToggle = (isExpanded: boolean) => {
    setThirdIsExpanded(isExpanded);
  };

  const onThirdSelect = (_event: React.MouseEvent | React.ChangeEvent, selection: string | SelectOptionObject) => {
    setThirdSelected(selection);
    setThirdIsExpanded(false);
  };

  const filterGroupItems = (
    <React.Fragment>
      <ToolbarItem>
        <Select
          variant={SelectVariant.single}
          aria-label="Select Input"
          onToggle={onFirstToggle}
          onSelect={onFirstSelect}
          selections={firstSelected}
          isOpen={firstIsExpanded}
        >
          {firstOptions.map((option, index) => (
            <SelectOption isDisabled={option.disabled} key={index} value={option.value} />
          ))}
        </Select>
      </ToolbarItem>
      <ToolbarItem>
        <Select
          variant={SelectVariant.single}
          aria-label="Select Input"
          onToggle={onSecondToggle}
          onSelect={onSecondSelect}
          selections={secondSelected}
          isOpen={secondIsExpanded}
        >
          {secondOptions.map((option, index) => (
            <SelectOption isDisabled={option.disabled} key={index} value={option.value} />
          ))}
        </Select>
      </ToolbarItem>
      <ToolbarItem>
        <Select
          variant={SelectVariant.single}
          aria-label="Select Input"
          onToggle={onThirdToggle}
          onSelect={onThirdSelect}
          selections={thirdSelected}
          isOpen={thirdIsExpanded}
        >
          {thirdOptions.map((option, index) => (
            <SelectOption isDisabled={option.disabled} key={index} value={option.value} />
          ))}
        </Select>
      </ToolbarItem>
    </React.Fragment>
  );

  const iconButtonGroupItems = (
    <React.Fragment>
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
    </React.Fragment>
  );

  const buttonGroupItems = (
    <React.Fragment>
      <ToolbarItem>
        <Button variant="primary">Action</Button>
      </ToolbarItem>
      <ToolbarItem>
        <Button variant="secondary">Secondary</Button>
      </ToolbarItem>
      <ToolbarItem>
        <Button variant="tertiary">Tertiary</Button>
      </ToolbarItem>
    </React.Fragment>
  );

  const items = (
    <React.Fragment>
      <ToolbarGroup variant="filter-group">{filterGroupItems}</ToolbarGroup>
      <ToolbarGroup variant="icon-button-group">{iconButtonGroupItems}</ToolbarGroup>
      <ToolbarGroup variant="button-group">{buttonGroupItems}</ToolbarGroup>
    </React.Fragment>
  );

  return (
    <Toolbar id="toolbar-group-types">
      <ToolbarContent>{items}</ToolbarContent>
    </Toolbar>
  );
};
