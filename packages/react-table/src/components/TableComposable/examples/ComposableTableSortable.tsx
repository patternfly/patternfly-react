import React from 'react';
import { TableComposable, Thead, Tr, Th, Tbody, Td, ThProps } from '@patternfly/react-table';

interface Repository {
  name: string;
  branches: string | null;
  prs: string | null;
  workspaces: string;
  lastCommit: string;
}

export const ComposableTableSortable: React.FunctionComponent = () => {
  // In real usage, this data would come from some external source like an API via props.
  const repositories: Repository[] = [
    { name: 'one', branches: 'two', prs: 'a', workspaces: 'four', lastCommit: 'five' },
    { name: 'a', branches: 'two', prs: 'k', workspaces: 'four', lastCommit: 'five' },
    { name: 'p', branches: 'two', prs: 'b', workspaces: 'four', lastCommit: 'five' }
  ];

  // Index of the currently sorted column
  const [activeSortIndex, setActiveSortIndex] = React.useState<number | null>(null);
  // Sort direction of the currently sorted column
  const [activeSortDirection, setActiveSortDirection] = React.useState<'asc' | 'desc' | null>(null);

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
      direction: activeSortDirection,
      defaultDirection: 'asc' // starting sort direction when first sorting a column. Defaults to 'asc'
    },
    onSort: (_event, index, direction) => {
      setActiveSortIndex(index);
      setActiveSortDirection(direction);
    },
    columnIndex
  });

  // In this example, we wrap all but the 1st column and make the 1st and 3rd columns sortable just to demonstrate.
  return (
    <TableComposable aria-label="Sortable table">
      <Thead>
        <Tr>
          <Th sort={getSortParams(0)}>Repositories table header that goes on for a long time.</Th>
          <Th modifier="wrap">Branches table header that goes on for a long time.</Th>
          <Th modifier="wrap" sort={getSortParams(2)} info={{ tooltip: 'More information ' }}>
            Pull requests table header that goes on for a long time.
          </Th>
          <Th modifier="wrap">Workspaces table header that goes on for a long time.</Th>
          <Th modifier="wrap">Last commit table header that goes on for a long time.</Th>
        </Tr>
      </Thead>
      <Tbody>
        {sortedRepositories.map((repo, rowIndex) => (
          <Tr key={rowIndex}>
            <Td dataLabel="Repositories table header that goes on for a long time.">{repo.name}</Td>
            <Td dataLabel="Branches table header that goes on for a long time.">{repo.branches}</Td>
            <Td dataLabel="Pull requests table header that goes on for a long time.">{repo.prs}</Td>
            <Td dataLabel="Workspaces table header that goes on for a long time.">{repo.workspaces}</Td>
            <Td dataLabel="Last commit table header that goes on for a long time.">{repo.lastCommit}</Td>
          </Tr>
        ))}
      </Tbody>
    </TableComposable>
  );
};
