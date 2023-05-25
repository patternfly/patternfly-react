import React from 'react';
import { Table, Thead, Tr, Th, Tbody, Td, ThProps } from '@patternfly/react-table';
import {
  Toolbar,
  ToolbarContent,
  ToolbarItem,
  Select,
  SelectGroup,
  SelectList,
  SelectOption,
  MenuToggle,
  MenuToggleElement
} from '@patternfly/react-core';
import SortAmountDownIcon from '@patternfly/react-icons/dist/esm/icons/sort-amount-down-icon';

interface Repository {
  name: string;
  branches: string;
  prs: string;
  workspaces: string;
  lastCommit: string;
}

export const TableSortableCustom: React.FunctionComponent = () => {
  // In real usage, this data would come from some external source like an API via props.
  const repositories: Repository[] = [
    { name: 'one', branches: 'two', prs: 'a', workspaces: 'four', lastCommit: 'five' },
    { name: 'a', branches: 'two', prs: 'k', workspaces: 'four', lastCommit: 'five' },
    { name: 'p', branches: 'two', prs: 'b', workspaces: 'four', lastCommit: 'five' }
  ];

  const columnNames = {
    name: 'Repositories',
    branches: 'Branches',
    prs: 'Pull requests',
    workspaces: 'Workspaces',
    lastCommit: 'Last commit'
  };

  const [isSortDropdownOpen, setIsSortDropdownOpen] = React.useState(false);

  // Index of the currently sorted column
  // Note: if you intend to make columns reorderable, you may instead want to use a non-numeric key
  // as the identifier of the sorted column. See the "Compound expandable" example.
  const [activeSortIndex, setActiveSortIndex] = React.useState<number | null>(null);

  // Sort direction of the currently sorted column
  const [activeSortDirection, setActiveSortDirection] = React.useState<'asc' | 'desc' | null>(null);

  // Sort dropdown expansion
  // const [isSortDropdownOpen, setIsSortDropdownOpen] = React.useState(false);

  // Since OnSort specifies sorted columns by index, we need sortable values for our object by column index.
  // This example is trivial since our data objects just contain strings, but if the data was more complex
  // this would be a place to return simplified string or number versions of each column to sort by.
  const getSortableRowValues = (repo: Repository): (string | number)[] => {
    const { name, branches, prs, workspaces, lastCommit } = repo;
    return [name, branches, prs, workspaces, lastCommit];
  };

  // Note that we perform the sort as part of the component's render logic and not in onSort.
  // We shouldn't store the list of data in state because we don't want to have to sync that with props.
  let sortedRepositories = repositories;
  if (activeSortIndex !== null) {
    sortedRepositories = repositories.sort((a, b) => {
      const aValue = getSortableRowValues(a)[activeSortIndex];
      const bValue = getSortableRowValues(b)[activeSortIndex];
      if (typeof aValue === 'number') {
        // Numeric sort
        if (activeSortDirection === 'asc') {
          return (aValue as number) - (bValue as number);
        }
        return (bValue as number) - (aValue as number);
      } else {
        // String sort
        if (activeSortDirection === 'asc') {
          return (aValue as string).localeCompare(bValue as string);
        }
        return (bValue as string).localeCompare(aValue as string);
      }
    });
  }

  const getSortParams = (columnIndex: number): ThProps['sort'] => ({
    sortBy: {
      index: activeSortIndex,
      direction: activeSortDirection
    },
    onSort: (_event, index, direction) => {
      setActiveSortIndex(index);
      setActiveSortDirection(direction as 'desc' | 'asc');
    },
    columnIndex
  });

  return (
    <React.Fragment>
      <Toolbar id="toolbar">
        <ToolbarContent>
          <ToolbarItem>
            <Select
              isOpen={isSortDropdownOpen}
              selected={[activeSortDirection, activeSortIndex]}
              onOpenChange={(isOpen) => setIsSortDropdownOpen(isOpen)}
              onSelect={(event, value) => {
                if (value === 'asc' || value === 'desc') {
                  setActiveSortDirection(value as 'desc' | 'asc');
                } else {
                  setActiveSortIndex(value as number);
                  setActiveSortDirection(activeSortDirection !== null ? activeSortDirection : 'asc');
                }
              }}
              toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
                <MenuToggle
                  ref={toggleRef}
                  onClick={() => setIsSortDropdownOpen(!isSortDropdownOpen)}
                  isExpanded={isSortDropdownOpen}
                  variant="plain"
                  aria-label="Sort columns"
                >
                  <SortAmountDownIcon />
                </MenuToggle>
              )}
            >
              <SelectGroup label="Sort column">
                <SelectList>
                  {Object.values(columnNames).map((column, columnIndex) => (
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
        </ToolbarContent>
      </Toolbar>
      <Table aria-label="Sortable table custom toolbar">
        <Thead>
          <Tr>
            <Th sort={getSortParams(0)}>{columnNames.name}</Th>
            <Th sort={getSortParams(1)}>{columnNames.branches}</Th>
            <Th sort={getSortParams(2)} info={{ tooltip: 'More information ' }}>
              {columnNames.prs}
            </Th>
            <Th sort={getSortParams(3)}>{columnNames.workspaces}</Th>
            <Th sort={getSortParams(4)}>{columnNames.lastCommit}</Th>
          </Tr>
        </Thead>
        <Tbody>
          {sortedRepositories.map((repo, rowIndex) => (
            <Tr key={rowIndex}>
              <Td dataLabel={columnNames.name}>{repo.name}</Td>
              <Td dataLabel={columnNames.branches}>{repo.branches}</Td>
              <Td dataLabel={columnNames.prs}>{repo.prs}</Td>
              <Td dataLabel={columnNames.workspaces}>{repo.workspaces}</Td>
              <Td dataLabel={columnNames.lastCommit}>{repo.lastCommit}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </React.Fragment>
  );
};
