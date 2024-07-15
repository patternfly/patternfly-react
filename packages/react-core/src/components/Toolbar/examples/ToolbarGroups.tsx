import React from 'react';
import {
  Button,
  MenuToggle,
  MenuToggleElement,
  Toolbar,
  ToolbarContent,
  ToolbarGroup,
  ToolbarItem,
  Select,
  SelectList,
  SelectOption
} from '@patternfly/react-core';
import EditIcon from '@patternfly/react-icons/dist/esm/icons/edit-icon';
import CloneIcon from '@patternfly/react-icons/dist/esm/icons/clone-icon';
import SyncIcon from '@patternfly/react-icons/dist/esm/icons/sync-icon';

export const ToolbarGroups: React.FunctionComponent = () => {
  const firstOptions = ['A', 'B', 'C'];
  const secondOptions = ['1', '2', '3'];
  const thirdOptions = ['I', 'II', 'III'];

  const [firstIsExpanded, setFirstIsExpanded] = React.useState(false);
  const [firstSelected, setFirstSelected] = React.useState('');
  const [secondIsExpanded, setSecondIsExpanded] = React.useState(false);
  const [secondSelected, setSecondSelected] = React.useState('');
  const [thirdIsExpanded, setThirdIsExpanded] = React.useState(false);
  const [thirdSelected, setThirdSelected] = React.useState('');

  const onToggle = (filterName: string) => {
    switch (filterName) {
      case 'first':
        setFirstIsExpanded(!firstIsExpanded);
        break;
      case 'second':
        setSecondIsExpanded(!secondIsExpanded);
        break;
      case 'third':
        setThirdIsExpanded(!thirdIsExpanded);
        break;
    }
  };

  const onFirstSelect = (_event: React.MouseEvent<Element, MouseEvent> | undefined, selection: string) => {
    setFirstSelected(selection);
    setFirstIsExpanded(false);
  };

  const onSecondSelect = (_event: React.MouseEvent<Element, MouseEvent> | undefined, selection: string) => {
    setSecondSelected(selection);
    setSecondIsExpanded(false);
  };

  const onThirdSelect = (_event: React.MouseEvent<Element, MouseEvent> | undefined, selection: string) => {
    setThirdSelected(selection);
    setThirdIsExpanded(false);
  };

  const filterGroupItems = (
    <React.Fragment>
      <ToolbarItem>
        <Select
          toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
            <MenuToggle
              ref={toggleRef}
              onClick={() => onToggle('first')}
              isExpanded={firstIsExpanded}
              style={
                {
                  width: '88px'
                } as React.CSSProperties
              }
            >
              {firstSelected || 'First'}
            </MenuToggle>
          )}
          onSelect={onFirstSelect}
          onOpenChange={(isOpen) => setFirstIsExpanded(isOpen)}
          selected={firstSelected}
          isOpen={firstIsExpanded}
        >
          <SelectList>
            {firstOptions.map((option, index) => (
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
              onClick={() => onToggle('second')}
              isExpanded={secondIsExpanded}
              style={
                {
                  width: '120px'
                } as React.CSSProperties
              }
            >
              {secondSelected || 'Second'}
            </MenuToggle>
          )}
          onSelect={onSecondSelect}
          selected={secondSelected}
          onOpenChange={(isOpen) => setSecondIsExpanded(isOpen)}
          isOpen={secondIsExpanded}
        >
          <SelectList>
            {secondOptions.map((option, index) => (
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
              onClick={() => onToggle('third')}
              isExpanded={thirdIsExpanded}
              style={
                {
                  width: '96px'
                } as React.CSSProperties
              }
            >
              {thirdSelected || 'Third'}
            </MenuToggle>
          )}
          onSelect={onThirdSelect}
          selected={thirdSelected}
          onOpenChange={(isOpen) => setThirdIsExpanded(isOpen)}
          isOpen={thirdIsExpanded}
        >
          <SelectList>
            {thirdOptions.map((option, index) => (
              <SelectOption key={index} value={option}>
                {option}
              </SelectOption>
            ))}
          </SelectList>
        </Select>
      </ToolbarItem>
    </React.Fragment>
  );

  const iconButtonGroupItems = (
    <React.Fragment>
      <ToolbarItem>
        <Button variant="plain" aria-label="edit" icon={<EditIcon />} />
      </ToolbarItem>
      <ToolbarItem>
        <Button variant="plain" aria-label="clone" icon={<CloneIcon />} />
      </ToolbarItem>
      <ToolbarItem>
        <Button variant="plain" aria-label="sync" icon={<SyncIcon />} />
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
      <ToolbarGroup variant="action-group-plain">{iconButtonGroupItems}</ToolbarGroup>
      <ToolbarGroup variant="action-group">{buttonGroupItems}</ToolbarGroup>
    </React.Fragment>
  );

  return (
    <Toolbar id="toolbar-group-types">
      <ToolbarContent>{items}</ToolbarContent>
    </Toolbar>
  );
};
