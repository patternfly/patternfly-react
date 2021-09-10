import React from 'react';
import { ThProps, TableComposable, Tbody, Td, Th, Thead, Tr } from '@patternfly/react-table';

interface Repository {
  name: string;
  branches: string | null;
  prs: string | null;
  workspaces: string;
  lastCommit: string;
}

interface DemoSortableTableProps {
  firstColumnRows: string[];
  id: string;
}

const DemoSortableTable: React.FunctionComponent<DemoSortableTableProps> = ({
  firstColumnRows,
  id
}: DemoSortableTableProps) => {
  const repositories: Repository[] = [
    {
      name: firstColumnRows[0],
      branches: firstColumnRows[1],
      prs: firstColumnRows[2],
      workspaces: firstColumnRows[3],
      lastCommit: firstColumnRows[4]
    },
    { name: 'a', branches: 'two', prs: 'k', workspaces: 'four', lastCommit: 'five' },
    { name: 'p', branches: 'two', prs: 'b', workspaces: 'four', lastCommit: 'five' }
  ];

  const [activeSortIndex, setActiveSortIndex] = React.useState<number | null>(null);
  const [activeSortDirection, setActiveSortDirection] = React.useState<'asc' | 'desc' | null>(null);
  const getSortableRowValues = (repo: Repository): string[] => {
    const { name, branches, prs, workspaces, lastCommit } = repo;
    return [name, branches, prs, workspaces, lastCommit];
  };
  let sortedRepositories = repositories;
  if (activeSortIndex !== null) {
    sortedRepositories = repositories.sort((a, b) => {
      const aValue = getSortableRowValues(a)[activeSortIndex];
      const bValue = getSortableRowValues(b)[activeSortIndex];
      if (activeSortDirection === 'asc') {
        return aValue.localeCompare(bValue);
      }
      return bValue.localeCompare(aValue);
    });
  }

  const getSortParams = (columnIndex: number): ThProps['sort'] => ({
    sortBy: {
      index: activeSortIndex,
      direction: activeSortDirection
    },
    onSort: (_event, index, direction) => {
      setActiveSortIndex(index);
      setActiveSortDirection(direction);
    },
    columnIndex
  });

  return (
    <TableComposable aria-label="Sortable table" variant="compact" id={id} className="pf-m-no-border-rows" isNested>
      <Thead>
        <Tr>
          <Th sort={getSortParams(0)}>Repositories</Th>
          <Th>Branches</Th>
          <Th sort={getSortParams(2)}>Pull requests</Th>
          <Th>Workspaces</Th>
          <Th>Last commit</Th>
        </Tr>
      </Thead>
      <Tbody>
        {sortedRepositories.map((repo, rowIndex) => (
          <Tr key={rowIndex}>
            <Td dataLabel="Repositories">{repo.name}</Td>
            <Td dataLabel="Branches">{repo.branches}</Td>
            <Td dataLabel="Pull requests">{repo.prs}</Td>
            <Td dataLabel="Workspaces">{repo.workspaces}</Td>
            <Td dataLabel="Last commit">{repo.lastCommit}</Td>
          </Tr>
        ))}
      </Tbody>
    </TableComposable>
  );
};

export default DemoSortableTable;
