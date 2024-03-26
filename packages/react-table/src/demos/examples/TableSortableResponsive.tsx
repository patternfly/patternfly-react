import React from 'react';

import {
  Button,
  Card,
  Dropdown,
  DropdownList,
  Flex,
  FlexItem,
  MenuToggle,
  MenuToggleElement,
  PageSection,
  Pagination,
  SelectOption,
  SelectList,
  SelectGroup,
  Text,
  TextContent,
  Toolbar,
  ToolbarContent,
  ToolbarGroup,
  ToolbarItem,
  OverflowMenuDropdownItem,
  PaginationVariant,
  Label,
  Select,
  OverflowMenu,
  OverflowMenuContent,
  OverflowMenuControl,
  OverflowMenuGroup,
  OverflowMenuItem,
  PageSectionVariants
} from '@patternfly/react-core';
import { Table, Thead, Tr, Th, Tbody, Td } from '@patternfly/react-table';
import CloneIcon from '@patternfly/react-icons/dist/esm/icons/clone-icon';
import EditIcon from '@patternfly/react-icons/dist/esm/icons/edit-icon';
import SyncIcon from '@patternfly/react-icons/dist/esm/icons/sync-icon';
import CodeIcon from '@patternfly/react-icons/dist/esm/icons/code-icon';
import CodeBranchIcon from '@patternfly/react-icons/dist/esm/icons/code-branch-icon';
import SortAmountDownIcon from '@patternfly/react-icons/dist/esm/icons/sort-amount-down-icon';
import CubeIcon from '@patternfly/react-icons/dist/esm/icons/cube-icon';
import { DashboardWrapper } from '@patternfly/react-table/dist/esm/demos/DashboardWrapper';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';
import { rows, columns, SampleDataRow } from '@patternfly/react-table/dist/esm/demos/sampleData';

type Direction = 'asc' | 'desc' | undefined;

export const TableSortableResponsive: React.FunctionComponent = () => {
  const [isKebabDropdownOpen, setIsKebabDropdownOpen] = React.useState(false);

  const sortRows = (rows: SampleDataRow[], sortIndex: number, sortDirection: Direction) =>
    [...rows].sort((a, b) => {
      let returnValue = 0;
      if (sortIndex === 0 || sortIndex === 7) {
        returnValue = 1;
      } else if (typeof Object.values(a)[sortIndex] === 'number') {
        // numeric sort
        returnValue = Object.values(a)[sortIndex] - Object.values(b)[sortIndex];
      } else {
        // string sort
        returnValue = Object.values(a)[sortIndex].localeCompare(Object.values(b)[sortIndex]);
      }
      if (sortDirection === 'desc') {
        return returnValue * -1;
      }
      return returnValue;
    });

  const [sortedData, setSortedData] = React.useState([...sortRows(rows, 0, 'asc')]);
  const [sortedRows, setSortedRows] = React.useState([...sortedData]);
  const [page, setPage] = React.useState(1);
  const [perPage, setPerPage] = React.useState(10);

  // index of the currently active column
  const [activeSortIndex, setActiveSortIndex] = React.useState(0);
  // sort direction of the currently active column
  const [activeSortDirection, setActiveSortDirection] = React.useState<Direction>('asc');
  // sort dropdown expansion
  const [isSortDropdownOpen, setIsSortDropdownOpen] = React.useState(false);

  const onSort = (_event: any, index: number, direction: Direction) => {
    setActiveSortIndex(index);
    setActiveSortDirection(direction);

    setSortedData(sortRows(rows, index, direction));
  };

  const kebabDropdownItems = [<OverflowMenuDropdownItem key="kebab-1">Some action</OverflowMenuDropdownItem>];

  React.useEffect(() => {
    setSortedRows(sortedData.slice((page - 1) * perPage, page * perPage));
  }, [sortedData, page, perPage]);

  const handleSetPage = (_evt: React.MouseEvent | React.KeyboardEvent | MouseEvent, newPage: number) => {
    setPage(newPage);
  };

  const handlePerPageSelect = (_evt: React.MouseEvent | React.KeyboardEvent | MouseEvent, newPerPage: number) => {
    setPerPage(newPerPage);
  };

  const renderPagination = (variant: 'top' | 'bottom' | PaginationVariant, isCompact: boolean) => (
    <Pagination
      isCompact={isCompact}
      itemCount={rows.length}
      page={page}
      perPage={perPage}
      onSetPage={handleSetPage}
      onPerPageSelect={handlePerPageSelect}
      perPageOptions={[
        { title: '10', value: 10 },
        { title: '20', value: 20 },
        { title: '50', value: 50 },
        { title: '100', value: 100 }
      ]}
      variant={variant}
      titles={{
        paginationAriaLabel: `${variant} pagination`
      }}
    />
  );

  const renderLabel = (labelText: string) => {
    switch (labelText) {
      case 'Running':
        return <Label color="green">{labelText}</Label>;
      case 'Stopped':
        return <Label color="orange">{labelText}</Label>;
      case 'Needs Maintenance':
        return <Label color="blue">{labelText}</Label>;
      case 'Down':
        return <Label color="red">{labelText}</Label>;
    }
  };

  const tableToolbar = (
    <Toolbar id="sortable-toolbar">
      <ToolbarContent>
        <ToolbarItem visibility={{ md: 'hidden' }}>
          <Select
            isOpen={isSortDropdownOpen}
            selected={[activeSortDirection, activeSortIndex]}
            onOpenChange={(isOpen: boolean) => setIsSortDropdownOpen(isOpen)}
            onSelect={(event: React.MouseEvent<Element, MouseEvent>, value: string | number) => {
              if (value === 'asc' || value === 'desc') {
                onSort(event, activeSortIndex, value);
              } else {
                onSort(event, value as number, activeSortDirection ?? 'asc');
              }
            }}
            toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
              <MenuToggle
                ref={toggleRef}
                onClick={() => setIsSortDropdownOpen(!isSortDropdownOpen)}
                isExpanded={isSortDropdownOpen}
                variant="plain"
              >
                <SortAmountDownIcon />
              </MenuToggle>
            )}
          >
            <SelectGroup label="Sort column">
              <SelectList>
                {columns.map((column, columnIndex) => (
                  <SelectOption key={column} value={columnIndex} isSelected={activeSortIndex === columnIndex}>
                    {column}
                  </SelectOption>
                ))}
              </SelectList>
            </SelectGroup>
            <SelectGroup label="Sort direction">
              <SelectList>
                <SelectOption isSelected={activeSortDirection === 'asc'} value="asc" key="ascending">
                  Ascending
                </SelectOption>
                <SelectOption isSelected={activeSortDirection === 'desc'} value="desc" key="descending">
                  Descending
                </SelectOption>
              </SelectList>
            </SelectGroup>
          </Select>
        </ToolbarItem>
        <ToolbarItem>
          <OverflowMenu breakpoint="lg">
            <OverflowMenuContent isPersistent>
              <OverflowMenuGroup isPersistent groupType="button">
                <OverflowMenuItem>
                  <Button variant="primary">Create instance</Button>
                </OverflowMenuItem>
                <OverflowMenuItem>
                  <Button variant="secondary">Action</Button>
                </OverflowMenuItem>
              </OverflowMenuGroup>
            </OverflowMenuContent>
            <OverflowMenuControl hasAdditionalOptions>
              <Dropdown
                onSelect={() => setIsKebabDropdownOpen(!isKebabDropdownOpen)}
                onOpenChange={(isKebabDropdownOpen: boolean) => setIsKebabDropdownOpen(isKebabDropdownOpen)}
                toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
                  <MenuToggle
                    ref={toggleRef}
                    aria-label="overflow menu"
                    variant="plain"
                    onClick={() => setIsKebabDropdownOpen(!isKebabDropdownOpen)}
                    isExpanded={false}
                  >
                    <EllipsisVIcon />
                  </MenuToggle>
                )}
                isOpen={isKebabDropdownOpen}
              >
                <DropdownList>{kebabDropdownItems}</DropdownList>
              </Dropdown>
            </OverflowMenuControl>
          </OverflowMenu>
        </ToolbarItem>
        <ToolbarGroup variant="icon-button-group">
          <ToolbarItem>
            <Button aria-label="Edit" variant="plain" icon={<EditIcon />} />
          </ToolbarItem>
          <ToolbarItem>
            <Button aria-label="Clone" variant="plain" icon={<CloneIcon />} />
          </ToolbarItem>
          <ToolbarItem>
            <Button aria-label="Sync" variant="plain" icon={<SyncIcon />} />
          </ToolbarItem>
        </ToolbarGroup>
        <ToolbarItem variant="pagination">{renderPagination('top', true)}</ToolbarItem>
      </ToolbarContent>
    </Toolbar>
  );

  return (
    <React.Fragment>
      <DashboardWrapper>
        <PageSection isWidthLimited variant={PageSectionVariants.light}>
          <TextContent>
            <Text component="h1">Table demos</Text>
            <Text component="p">
              Below is an example of a responsive sortable table. When the screen size shrinks the table into a compact
              form, the toolbar will display a dropdown menu containing sorting options.
            </Text>
          </TextContent>
        </PageSection>
        <PageSection
          padding={{
            default: 'noPadding',
            xl: 'padding'
          }}
        >
          <Card component="div">
            {tableToolbar}
            <Table aria-label="Sortable Table">
              <Thead>
                <Tr>
                  {columns.map((column, columnIndex) => {
                    const sortParams = {
                      sort: {
                        sortBy: {
                          index: activeSortIndex,
                          direction: activeSortDirection
                        },
                        onSort,
                        columnIndex
                      }
                    };
                    return (
                      <Th modifier={columnIndex !== 6 ? 'wrap' : undefined} key={columnIndex} {...sortParams}>
                        {column}
                      </Th>
                    );
                  })}
                </Tr>
              </Thead>
              <Tbody>
                {sortedRows.map((row, rowIndex) => (
                  <Tr key={rowIndex}>
                    <>
                      <Td dataLabel={columns[0]} width={15}>
                        <div>{row.name}</div>
                      </Td>
                      <Td dataLabel={columns[1]} width={10}>
                        <Flex spaceItems={{ default: 'spaceItemsSm' }}>
                          <FlexItem>
                            <CodeBranchIcon key="icon" />
                          </FlexItem>
                          <FlexItem>{row.threads}</FlexItem>
                        </Flex>
                      </Td>
                      <Td dataLabel={columns[2]} width={10}>
                        <Flex spaceItems={{ default: 'spaceItemsSm' }}>
                          <FlexItem>
                            <CodeIcon key="icon" />
                          </FlexItem>
                          <FlexItem>{row.applications}</FlexItem>
                        </Flex>
                      </Td>
                      <Td dataLabel={columns[3]} width={10}>
                        <Flex spaceItems={{ default: 'spaceItemsSm' }}>
                          <FlexItem>
                            <CubeIcon key="icon" />
                          </FlexItem>
                          <FlexItem>{row.workspaces}</FlexItem>
                        </Flex>
                      </Td>
                      <Td dataLabel={columns[4]} width={15}>
                        <Flex spaceItems={{ default: 'spaceItemsSm' }}>
                          <FlexItem>{renderLabel(row.status)}</FlexItem>
                        </Flex>
                      </Td>
                      <Td dataLabel={columns[5]} width={10}>
                        <Flex spaceItems={{ default: 'spaceItemsSm' }}>
                          <FlexItem>{row.location}</FlexItem>
                        </Flex>
                      </Td>
                      <Td dataLabel={columns[6]} width={10}>
                        <Flex spaceItems={{ default: 'spaceItemsSm' }}>
                          <FlexItem>{row.lastModified[0]} days ago</FlexItem>
                        </Flex>
                      </Td>
                      <Td dataLabel={columns[7]} modifier="truncate">
                        <a href="#">{row.url}</a>
                      </Td>
                    </>
                  </Tr>
                ))}
              </Tbody>
            </Table>
            {renderPagination('bottom', false)}
          </Card>
        </PageSection>
      </DashboardWrapper>
    </React.Fragment>
  );
};
