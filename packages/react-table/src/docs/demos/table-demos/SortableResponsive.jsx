import React from 'react';
import {
  Button,
  Card,
  Flex,
  FlexItem,
  Toolbar,
  ToolbarContent,
  ToolbarGroup,
  ToolbarItem,
  OptionsMenu,
  OptionsMenuToggle,
  Pagination,
  Text,
  TextContent,
  Dropdown,
  KebabToggle,
  OptionsMenuItem,
  OptionsMenuSeparator,
  OptionsMenuItemGroup,
  OverflowMenu,
  OverflowMenuContent,
  OverflowMenuControl,
  OverflowMenuDropdownItem,
  OverflowMenuGroup,
  OverflowMenuItem,
  PageSection
} from '@patternfly/react-core';
import { TableComposable, Thead, Tr, Th, Tbody, Td } from '@patternfly/react-table';
import { rows, columns } from '../../examples/Data.jsx';
import SortAmountDownIcon from '@patternfly/react-icons/dist/esm/icons/sort-amount-down-icon';
import CloneIcon from '@patternfly/react-icons/dist/esm/icons/clone-icon';
import EditIcon from '@patternfly/react-icons/dist/esm/icons/edit-icon';
import SyncIcon from '@patternfly/react-icons/dist/esm/icons/sync-icon';
import CodeIcon from '@patternfly/react-icons/dist/esm/icons/code-icon';
import CodeBranchIcon from '@patternfly/react-icons/dist/esm/icons/code-branch-icon';
import CubeIcon from '@patternfly/react-icons/dist/esm/icons/cube-icon';
import DashboardWrapper from '@patternfly/react-core/src/demos/examples/DashboardWrapper';

export const ComposableTableSortable = () => {
  const [isKebabDropdownOpen, setIsKebabDropdownOpen] = React.useState(false);

  const sortRows = (r, sortIndex, sortDirection) => {
    return [...r].sort((a, b) => {
      let returnValue = 0;
      if (sortIndex === 0 || sortIndex === 7) {
        returnValue = 1
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
    })
  };

const [sortedData, setSortedData] = React.useState([
   ...sortRows(rows, 0, 'asc')
  ]);
const [sortedRows, setSortedRows] = React.useState([
   ...sortedData
  ]);
  const [page, setPage] = React.useState(1);
  const [perPage, setPerPage] = React.useState(10);

  // index of the currently active column
  const [activeSortIndex, setActiveSortIndex] = React.useState(0);
  // sort direction of the currently active column
  const [activeSortDirection, setActiveSortDirection] = React.useState('asc');
  // sort dropdown expansion
  const [isSortDropdownOpen, setIsSortDropdownOpen] = React.useState(false);

  const onSort = (event, index, direction) => {
    setActiveSortIndex(index);
    setActiveSortDirection(direction);

    setSortedData(sortRows(rows, index, direction));
  };

  const kebabDropdownItems = [<OverflowMenuDropdownItem key="kebab-1">Some action</OverflowMenuDropdownItem>];

  React.useEffect(() => {
    setSortedRows(sortedData.slice((page - 1) * perPage, page * perPage -1));
  }, [sortedData, page, perPage]);

  const handleSetPage = (_evt, newPage) => {
    setPage(newPage);
  }

  const handlePerPageSelect = (_evt, newPerPage) => {
    setPerPage(newPerPage);
  }

  renderPagination = (variant) => (
      <Pagination
        isCompact
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
          paginationTitle: `${variant} pagination`
        }}
      />
    );

    const renderLabel = labelText => {
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
          <OptionsMenu
            id="options-menu-multiple-options-example"
            menuItems={[
              <OptionsMenuItemGroup key="first group" aria-label="Sort column">
                {columns.map((column, columnIndex) => (
                  <OptionsMenuItem
                    key={column}
                    isSelected={activeSortIndex === columnIndex}
                    onSelect={evt =>
                      onSort(evt, columnIndex, activeSortDirection !== 'none' ? activeSortDirection : 'asc')
                    }
                  >
                    {column}
                  </OptionsMenuItem>
                ))}
              </OptionsMenuItemGroup>,
              <OptionsMenuSeparator key="separator" />,
              <OptionsMenuItemGroup key="second group" aria-label="Sort direction">
                <OptionsMenuItem
                  onSelect={evt => onSort(evt, activeSortIndex, 'asc')}
                  isSelected={activeSortDirection === 'asc'}
                  id="ascending"
                  key="ascending"
                >
                  Ascending
                </OptionsMenuItem>
                <OptionsMenuItem
                  onSelect={evt => onSort(evt, activeSortIndex, 'desc')}
                  isSelected={activeSortDirection === 'desc'}
                  id="descending"
                  key="descending"
                >
                  Descending
                </OptionsMenuItem>
              </OptionsMenuItemGroup>
            ]}
            isOpen={isSortDropdownOpen}
            toggle={
              <OptionsMenuToggle
                hideCaret
                onToggle={() => setIsSortDropdownOpen(!isSortDropdownOpen)}
                toggleTemplate={<SortAmountDownIcon />}
              />
            }
            isPlain
            isGrouped
            menuAppendTo="parent"
            isFlipEnabled
          />
        </ToolbarItem>
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
              isPlain
              onSelect={() => setIsKebabDropdownOpen(!isKebabDropdownOpen)}
              toggle={<KebabToggle onToggle={() => setIsKebabDropdownOpen(!isKebabDropdownOpen)} />}
              isOpen={isKebabDropdownOpen}
              dropdownItems={kebabDropdownItems}
              isFlipEnabled
              menuAppendTo="parent"
            />
          </OverflowMenuControl>
        </OverflowMenu>
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
            <TableComposable aria-label="Sortable Table">
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
                      <Th modifier={columnIndex !== 6 ? "wrap" : undefined} key={columnIndex} {...sortParams}>
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
                      <Td dataLabel={columns[0]} width={15} >
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
                      <Td dataLabel={columns[7]} modifier="truncate"><a href="#">{row.url}</a></Td>
                    </>
                  </Tr>
                ))}
              </Tbody>
            </TableComposable>
            {renderPagination('bottom', false)}
          </Card>
        </PageSection>
      </DashboardWrapper>
    </React.Fragment>
  );
};
