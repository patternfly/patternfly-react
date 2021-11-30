import React from 'react';
import {
  TableProps,
  sortable,
  info,
  cellWidth,
  wrappable,
  Table,
  TableBody,
  TableHeader
} from '@patternfly/react-table';

interface Repository {
  name: string;
  branches: string;
  prs: string;
  workspaces: string;
  lastCommit: string;
}

export const LegacyTableSortable: React.FunctionComponent = () => {
  // In real usage, this data would come from some external source like an API via props.
  const repositories: Repository[] = [
    { name: 'one', branches: 'two', prs: 'a', workspaces: 'four', lastCommit: 'five' },
    { name: 'a', branches: 'two', prs: 'k', workspaces: 'four', lastCommit: 'five' },
    { name: 'p', branches: 'two', prs: 'b', workspaces: 'four', lastCommit: 'five' }
  ];

  // Index of the currently sorted column
  // Note: if you intend to make columns reorderable, you may instead want to use a non-numeric key
  // as the identifier of the sorted column. See the "Compound expandable" example.
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

  const columns: TableProps['cells'] = [
    { title: 'Repositories', transforms: [sortable] },
    {
      title: 'Branches',
      transforms: [
        info({
          tooltip: 'More information about branches'
        }),
        sortable
      ]
    },
    { title: 'Pull requests', transforms: [sortable] },
    {
      title: 'Workspaces - Also this long header will wrap since we have applied the wrappable transform',
      transforms: [sortable, wrappable, cellWidth(20)]
    },
    {
      title: 'Last commit',
      transforms: [
        info({
          tooltip: 'More information about commits'
        })
      ]
    }
  ];
  const rows: TableProps['rows'] = sortedRepositories.map(repo => [
    repo.name,
    repo.branches,
    repo.prs,
    repo.workspaces,
    repo.lastCommit
  ]);

  return (
    <Table
      aria-label="Sortable Table"
      sortBy={{
        index: activeSortIndex,
        direction: activeSortDirection,
        defaultDirection: 'asc' // starting sort direction when first sorting a column. Defaults to 'asc'
      }}
      onSort={(_event, index, direction) => {
        setActiveSortIndex(index);
        setActiveSortDirection(direction);
      }}
      cells={columns}
      rows={rows}
    >
      <TableHeader />
      <TableBody />
    </Table>
  );
};
