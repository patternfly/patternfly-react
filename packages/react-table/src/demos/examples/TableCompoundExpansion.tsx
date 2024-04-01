import React from 'react';
import { ActionsColumn, Table, Thead, Tr, Th, Tbody, Td, ExpandableRowContent } from '@patternfly/react-table';
import {
  Button,
  Card,
  Flex,
  FlexItem,
  MenuToggle,
  MenuToggleElement,
  Toolbar,
  ToolbarContent,
  ToolbarGroup,
  ToolbarItem,
  Pagination,
  PageSection,
  Select,
  SelectOption,
  PaginationVariant
} from '@patternfly/react-core';
import CodeBranchIcon from '@patternfly/react-icons/dist/esm/icons/code-branch-icon';
import CodeIcon from '@patternfly/react-icons/dist/esm/icons/code-icon';
import CubeIcon from '@patternfly/react-icons/dist/esm/icons/cube-icon';
import { DashboardWrapper } from '@patternfly/react-table/dist/esm/demos/DashboardWrapper';
import FilterIcon from '@patternfly/react-icons/dist/esm/icons/filter-icon';
import spacing from '@patternfly/react-styles/css/utilities/Spacing/spacing';

export const TableCompoundExpansion: React.FunctionComponent = () => {
  // In real usage, this data would come from some external source like an API via props.
  const [isSelectOpen, setIsSelectOpen] = React.useState(false);

  const NestedItemsTable = () => {
    // In real usage, this data would come from some external source like an API via props.
    const items = [
      { description: 'Item 1', date: 'May 9, 2018', status: 'Active' },
      { description: 'Item 2', date: 'May 9, 2018', status: 'Warning' },
      { description: 'Item 3', date: 'May 9, 2018', status: 'Active' },
      { description: 'Item 4', date: 'May 9, 2018', status: 'Active' },
      { description: 'Item 5', date: 'May 9, 2018', status: 'Active' }
    ];

    const columnNames = {
      description: 'Description',
      date: 'Date',
      status: 'Status'
    };

    return (
      <Table borders={false} aria-label="Nested table" variant="compact">
        <Thead>
          <Tr>
            <Th>{columnNames.description}</Th>
            <Th>{columnNames.date}</Th>
            <Th>{columnNames.status}</Th>
            <Th screenReaderText="Actions" />
          </Tr>
        </Thead>
        <Tbody>
          {items.map((item) => (
            <Tr key={item.description}>
              <Td dataLabel={columnNames.description}>{item.description}</Td>
              <Td dataLabel={columnNames.date}>{item.date}</Td>
              <Td dataLabel={columnNames.status}>{item.status}</Td>
              <Td isActionCell>
                <ActionsColumn items={defaultActions()} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    );
  };

  const renderPagination = (variant: 'top' | 'bottom' | PaginationVariant, isCompact: boolean) => (
    <Pagination
      isCompact={isCompact}
      itemCount={36}
      page={1}
      perPage={10}
      variant={variant}
      titles={{
        paginationAriaLabel: `${variant} pagination`
      }}
    />
  );

  const tableToolbar = (
    <Toolbar id="compact-toolbar" usePageInsets>
      <ToolbarContent>
        <ToolbarItem>
          <Select
            id="select-example"
            aria-label="Select Input"
            toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
              <MenuToggle ref={toggleRef} onClick={() => setIsSelectOpen(!isSelectOpen)} isExpanded={isSelectOpen}>
                <FilterIcon /> Status
              </MenuToggle>
            )}
            isOpen={isSelectOpen}
            onOpenChange={(isOpen: boolean) => setIsSelectOpen(isOpen)}
            onSelect={() => setIsSelectOpen(!isSelectOpen)}
          >
            {[
              <SelectOption key={0} value="Debug">
                Debug
              </SelectOption>,
              <SelectOption key={1} value="Info">
                Info
              </SelectOption>,
              <SelectOption key={2} value="Warn">
                Warn
              </SelectOption>,
              <SelectOption key={3} value="Error">
                Error
              </SelectOption>
            ]}
          </Select>
        </ToolbarItem>
        <ToolbarGroup>
          <ToolbarItem>
            <Button variant="primary">Action</Button>
          </ToolbarItem>
        </ToolbarGroup>
        <ToolbarItem variant="pagination">{renderPagination('top', true)}</ToolbarItem>
      </ToolbarContent>
    </Toolbar>
  );

  const defaultActions = () => [
    {
      title: 'Settings',
      // eslint-disable-next-line no-console
      onClick: () => console.log(`clicked on Settings`)
    },
    {
      title: 'Help',
      // eslint-disable-next-line no-console
      onClick: () => console.log(`clicked on Help`)
    }
  ];

  interface Repo {
    name: string;
    branches: number;
    prs: number;
    workspaces: number;
    lastCommit: string;
  }

  interface IDictionary<T> {
    [Key: string]: T;
  }

  const repositories: Repo[] = [
    {
      name: 'siemur/test-space',
      branches: 10,
      prs: 4,
      workspaces: 4,
      lastCommit: '20 minutes'
    },
    { name: 'siemur/test-space-2', branches: 3, prs: 4, workspaces: 4, lastCommit: '20 minutes' }
  ];

  const columnNames: IDictionary<string> = {
    name: 'Repositories',
    branches: 'Branches',
    prs: 'Pull requests',
    workspaces: 'Workspaces',
    lastCommit: 'Last commit'
  };

  // In this example, expanded cells are tracked by the repo and property names from each row. This could be any pair of unique identifiers.
  // This is to prevent state from being based on row and column order index in case we later add sorting and rearranging columns.
  // Note that this behavior is very similar to selection state.
  const [expandedCells, setExpandedCells] = React.useState<IDictionary<string>>({
    'siemur/test-space': 'branches' // Default to the first cell of the first row being expanded
  });
  const setCellExpanded = (repo: Repo, columnKey: string, isExpanding = true) => {
    const newExpandedCells: IDictionary<string> = { ...expandedCells };
    if (isExpanding) {
      newExpandedCells[repo.name] = columnKey;
    } else {
      delete newExpandedCells[repo.name];
    }
    setExpandedCells(newExpandedCells);
  };
  const compoundExpandParams = (repo: Repo, columnKey: string, rowIndex: number, columnIndex: number) => ({
    isExpanded: expandedCells[repo.name] === columnKey,
    onToggle: () => setCellExpanded(repo, columnKey, expandedCells[repo.name] !== columnKey),
    expandId: 'compound-expandable-demo',
    rowIndex,
    columnIndex
  });

  return (
    <DashboardWrapper hasPageTemplateTitle>
      <PageSection padding={{ default: 'noPadding', xl: 'padding' }}>
        <Card>
          {tableToolbar}
          <Table aria-label="Compound expandable table">
            <Thead>
              <Tr>
                <Th>{columnNames.name}</Th>
                <Th>{columnNames.branches}</Th>
                <Th>{columnNames.prs}</Th>
                <Th>{columnNames.workspaces}</Th>
                <Th>{columnNames.lastCommit}</Th>
                <Th screenReaderText="URL" />
                <Th screenReaderText="Actions" />
              </Tr>
            </Thead>
            {repositories.map((repo, rowIndex) => {
              const expandedCellKey = expandedCells[repo.name];
              const isRowExpanded = !!expandedCellKey;
              return (
                <Tbody key={repo.name} isExpanded={isRowExpanded}>
                  <Tr>
                    <Td dataLabel={columnNames.name} component="th">
                      <a href="#">{repo.name}</a>
                    </Td>
                    <Td
                      dataLabel={columnNames.branches}
                      compoundExpand={compoundExpandParams(repo, 'branches', rowIndex, 1)}
                    >
                      <Flex spaceItems={{ default: 'spaceItemsSm' }}>
                        <FlexItem>
                          <CodeBranchIcon key="icon" />
                        </FlexItem>
                        <FlexItem>{repo.branches}</FlexItem>
                      </Flex>
                    </Td>
                    <Td dataLabel={columnNames.prs} compoundExpand={compoundExpandParams(repo, 'prs', rowIndex, 2)}>
                      <Flex spaceItems={{ default: 'spaceItemsSm' }}>
                        <FlexItem>
                          <CodeIcon key="icon" />
                        </FlexItem>
                        <FlexItem>{repo.prs}</FlexItem>
                      </Flex>{' '}
                    </Td>
                    <Td
                      dataLabel={columnNames.workspaces}
                      compoundExpand={compoundExpandParams(repo, 'workspaces', rowIndex, 3)}
                    >
                      <Flex spaceItems={{ default: 'spaceItemsSm' }}>
                        <FlexItem>
                          <CubeIcon key="icon" />
                        </FlexItem>
                        <FlexItem>{repo.workspaces}</FlexItem>
                      </Flex>
                    </Td>
                    <Td dataLabel={columnNames.lastCommit}>{repo.lastCommit}</Td>
                    <Td>
                      <a href="#">Open in GitHub</a>
                    </Td>
                    <Td isActionCell>
                      <ActionsColumn items={defaultActions()} />
                    </Td>
                  </Tr>
                  {isRowExpanded ? (
                    <Tr isExpanded={isRowExpanded}>
                      <Td dataLabel={columnNames[expandedCellKey]} noPadding colSpan={7}>
                        {expandedCellKey === 'branches' && repo.name === 'siemur/test-space' ? (
                          <NestedItemsTable />
                        ) : (
                          <ExpandableRowContent>
                            <div className={spacing.mMd}>
                              Expanded content for {repo.name}: {expandedCellKey} goes here!
                            </div>
                          </ExpandableRowContent>
                        )}
                      </Td>
                    </Tr>
                  ) : null}
                </Tbody>
              );
            })}
          </Table>
          {renderPagination('bottom', false)}
        </Card>
      </PageSection>
    </DashboardWrapper>
  );
};
