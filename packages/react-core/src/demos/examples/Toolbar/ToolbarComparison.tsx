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
  Title,
  Card,
  CardBody,
  Stack,
  StackItem,
  CardHeader
} from '@patternfly/react-core';
import FilterIcon from '@patternfly/react-icons/dist/esm/icons/filter-icon';
import './Toolbar.css';

export const ToolbarComparison: React.FunctionComponent = () => {
  // Media query toolbar state
  const [mediaInputValue, setMediaInputValue] = useState('');
  const [mediaStatusExpanded, setMediaStatusExpanded] = useState(false);
  const [mediaStatusSelected, setMediaStatusSelected] = useState('');

  // Container query toolbar state
  const [containerInputValue, setContainerInputValue] = useState('');
  const [containerStatusExpanded, setContainerStatusExpanded] = useState(false);
  const [containerStatusSelected, setContainerStatusSelected] = useState('');

  const statusOptions = ['Active', 'Inactive', 'Pending'];

  const createToolbarContent = (
    inputValue: string,
    setInputValue: (value: string) => void,
    statusExpanded: boolean,
    setStatusExpanded: (value: boolean) => void,
    statusSelected: string,
    setStatusSelected: (value: string) => void,
    label: string
  ) => (
    <Fragment>
      <ToolbarItem>
        <SearchInput
          aria-label={`${label} search input`}
          placeholder="Search..."
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
    <div>
      <Stack hasGutter>
        <StackItem>
          <Card>
            <CardHeader>
              <Title headingLevel="h3" size="md">
                Viewport Media Queries (Default)
              </Title>
              <p>
                Collapses at <code>lg</code> viewport breakpoint
              </p>
            </CardHeader>
            <CardBody>
              <div className="ws-react-c-toolbar-resize-container">
                <Toolbar id="toolbar-media-query">
                  <ToolbarContent>
                    <ToolbarToggleGroup toggleIcon={<FilterIcon />} breakpoint="lg">
                      {createToolbarContent(
                        mediaInputValue,
                        setMediaInputValue,
                        mediaStatusExpanded,
                        setMediaStatusExpanded,
                        mediaStatusSelected,
                        setMediaStatusSelected,
                        'Media query'
                      )}
                    </ToolbarToggleGroup>
                  </ToolbarContent>
                </Toolbar>
              </div>
            </CardBody>
          </Card>
        </StackItem>

        <StackItem>
          <Card>
            <CardHeader>
              <Title headingLevel="h3" size="md">
                Container Queries
              </Title>
              <p>
                Collapses at <code>lg</code> container breakpoint
              </p>
            </CardHeader>
            <CardBody>
              <div className="ws-react-c-toolbar-resize-container">
                <Toolbar id="toolbar-container-query" useContainerQuery>
                  <ToolbarContent>
                    <ToolbarToggleGroup toggleIcon={<FilterIcon />} breakpoint="lg">
                      {createToolbarContent(
                        containerInputValue,
                        setContainerInputValue,
                        containerStatusExpanded,
                        setContainerStatusExpanded,
                        containerStatusSelected,
                        setContainerStatusSelected,
                        'Container query'
                      )}
                    </ToolbarToggleGroup>
                  </ToolbarContent>
                </Toolbar>
              </div>
            </CardBody>
          </Card>
        </StackItem>
      </Stack>
    </div>
  );
};
