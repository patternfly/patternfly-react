import React from 'react';
import {
  ActionsColumn,
  TableComposable,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  ExpandableRowContent
} from '@patternfly/react-table';
import {
  Button,
  Card,
  Flex,
  FlexItem,
  Toolbar,
  ToolbarContent,
  ToolbarGroup,
  ToolbarItem,
  Pagination,
  Select,
  SelectVariant,
  SelectOption,
  PageSection
} from '@patternfly/react-core';
import CodeBranchIcon from '@patternfly/react-icons/dist/esm/icons/code-branch-icon';
import CodeIcon from '@patternfly/react-icons/dist/esm/icons/code-icon';
import CubeIcon from '@patternfly/react-icons/dist/esm/icons/cube-icon';
import DashboardWrapper from '@patternfly/react-core/src/demos/examples/DashboardWrapper';
import FilterIcon from '@patternfly/react-icons/dist/esm/icons/filter-icon';

export const CompoundExpandable = () => {
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
      <TableComposable borders={false} aria-label="Nested table" variant="compact">
        <Thead>
          <Tr>
            <Th>{columnNames.description}</Th>
            <Th>{columnNames.date}</Th>
            <Th>{columnNames.status}</Th>
            <Th />
          </Tr>
        </Thead>
        <Tbody>
          {items.map(item => (
            <Tr key={item.name}>
              <Td dataLabel={columnNames.description}>{item.description}</Td>
              <Td dataLabel={columnNames.date}>{item.date}</Td>
              <Td dataLabel={columnNames.status}>{item.status}</Td>
              <Td isActionCell>
                <ActionsColumn items={defaultActions()} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </TableComposable>
    );
  };

  const renderPagination = (variant, isCompact) => (
    <Pagination
      isCompact={isCompact}
      itemCount={36}
      page={1}
      perPage={10}
      variant={variant}
      titles={{
        paginationTitle: `${variant} pagination`
      }}
    />
  );

  const tableToolbar = (
    <Toolbar id="compact-toolbar" usePageInsets>
      <ToolbarContent>
        <ToolbarItem>
          <Select
            id="select-example"
            variant={SelectVariant.single}
            aria-label="Select Input"
            placeholderText={
              <>
                <FilterIcon /> Status
              </>
            }
            isOpen={isSelectOpen}
            onToggle={() => setIsSelectOpen(!isSelectOpen)}
            onSelect={() => setIsSelectOpen(!isSelectOpen)}
          >
            {[
              <SelectOption key={0} value="Debug" />,
              <SelectOption key={1} value="Info" />,
              <SelectOption key={2} value="Warn" />,
              <SelectOption key={3} value="Error" />
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

  const repositories = [
    {
      name: 'siemur/test-space',
      branches: 10,
      prs: 4,
      workspaces: 4,
      lastCommit: '20 minutes'
    },
    { name: 'siemur/test-space-2', branches: 3, prs: 4, workspaces: 4, lastCommit: '20 minutes' }
  ];

  const columnNames = {
    name: 'Repositories',
    branches: 'Branches',
    prs: 'Pull requests',
    workspaces: 'Workspaces',
    lastCommit: 'Last commit'
  };

  // In this example, expanded cells are tracked by the repo and property names from each row. This could be any pair of unique identifiers.
  // This is to prevent state from being based on row and column order index in case we later add sorting and rearranging columns.
  // Note that this behavior is very similar to selection state.
  const [expandedCells, setExpandedCells] = React.useState({
    'siemur/test-space': 'branches' // Default to the first cell of the first row being expanded
  });
  const setCellExpanded = (repo, columnKey, isExpanding = true) => {
    const newExpandedCells = { ...expandedCells };
    if (isExpanding) {
      newExpandedCells[repo.name] = columnKey;
    } else {
      delete newExpandedCells[repo.name];
    }
    setExpandedCells(newExpandedCells);
  };
  const compoundExpandParams = (repo, columnKey, rowIndex, columnIndex) => ({
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
          <TableComposable aria-label="Compound expandable table">
            <Thead>
              <Tr>
                <Th>{columnNames.name}</Th>
                <Th>{columnNames.branches}</Th>
                <Th>{columnNames.prs}</Th>
                <Th>{columnNames.workspaces}</Th>
                <Th>{columnNames.lastCommit}</Th>
                <Th />
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
                            <div className="pf-u-m-md">
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
          </TableComposable>
          {renderPagination('bottom', false)}
        </Card>
      </PageSection>
    </DashboardWrapper>
  );
};
