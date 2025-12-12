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
  SelectOption,
  Title
} from '@patternfly/react-core';
import FilterIcon from '@patternfly/react-icons/dist/esm/icons/filter-icon';
import './Toolbar.css';

export const ToolbarContainerQueryBreakpoints: React.FunctionComponent = () => {
  const [inputValueMd, setInputValueMd] = useState('');
  const [statusExpandedMd, setStatusExpandedMd] = useState(false);
  const [statusSelectedMd, setStatusSelectedMd] = useState('');

  const [inputValueLg, setInputValueLg] = useState('');
  const [statusExpandedLg, setStatusExpandedLg] = useState(false);
  const [statusSelectedLg, setStatusSelectedLg] = useState('');

  const statusOptions = ['New', 'Pending', 'Running'];

  const createToolbar = (
    breakpoint: 'sm' | 'md' | 'lg',
    inputValue: string,
    setInputValue: (value: string) => void,
    statusExpanded: boolean,
    setStatusExpanded: (value: boolean) => void,
    statusSelected: string,
    setStatusSelected: (value: string) => void
  ) => {
    const toggleGroupItems = (
      <Fragment>
        <ToolbarItem>
          <SearchInput
            aria-label={`${breakpoint} breakpoint search input`}
            onChange={(_event, value) => setInputValue(value)}
            value={inputValue}
            onClear={() => setInputValue('')}
          />
        </ToolbarItem>
        <ToolbarGroup variant="filter-group">
          <ToolbarItem>
            <Select
              toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
                <MenuToggle
                  ref={toggleRef}
                  onClick={() => setStatusExpanded(!statusExpanded)}
                  isExpanded={statusExpanded}
                  style={{ width: '150px' } as React.CSSProperties}
                >
                  {statusSelected || 'Status'}
                </MenuToggle>
              )}
              onSelect={(_event, selection) => {
                setStatusSelected(selection as string);
                setStatusExpanded(false);
              }}
              onOpenChange={(isOpen) => setStatusExpanded(isOpen)}
              selected={statusSelected}
              isOpen={statusExpanded}
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
        </ToolbarGroup>
      </Fragment>
    );

    return (
      <div
        style={{
          marginBottom: 'var(--pf-t--global--spacer--lg, 24px)'
        }}
      >
        <Title headingLevel="h3" size="md" style={{ marginBottom: 'var(--pf-t--global--spacer--sm, 8px)' }}>
          Breakpoint: {breakpoint}
        </Title>
        <p
          style={{
            marginBottom: 'var(--pf-t--global--spacer--sm, 8px)',
            fontSize: 'var(--pf-t--global--font--size--body--sm, 14px)',
            color: 'var(--pf-t--global--text--color--subtle, #666)'
          }}
        >
          Collapses at {breakpoint} container width
        </p>
        <div className="ws-react-c-toolbar-resize-container">
          <Toolbar id={`toolbar-container-query-${breakpoint}`} useContainerQuery containerQueryBreakpoint={breakpoint}>
            <ToolbarContent>
              <ToolbarToggleGroup toggleIcon={<FilterIcon />} breakpoint={breakpoint}>
                {toggleGroupItems}
              </ToolbarToggleGroup>
            </ToolbarContent>
          </Toolbar>
        </div>
      </div>
    );
  };

  return (
    <div>
      {createToolbar(
        'md',
        inputValueMd,
        setInputValueMd,
        statusExpandedMd,
        setStatusExpandedMd,
        statusSelectedMd,
        setStatusSelectedMd
      )}

      {createToolbar(
        'xl',
        inputValueLg,
        setInputValueLg,
        statusExpandedLg,
        setStatusExpandedLg,
        statusSelectedLg,
        setStatusSelectedLg
      )}
    </div>
  );
};
