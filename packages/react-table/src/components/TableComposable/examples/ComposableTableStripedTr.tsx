import React from 'react';
import { TableComposable, Caption, Thead, Tr, Th, Tbody, Td } from '@patternfly/react-table';

interface Repository {
  name: string;
  branches: number;
  prs: number;
  workspaces: number;
  lastCommit: string;
}

export const ComposableTableStripedTr: React.FunctionComponent = () => {
  // In real usage, this data would come from some external source like an API via props.
  const repositories: Repository[] = [
    { name: 'Repository 1', branches: 10, prs: 25, workspaces: 5, lastCommit: '2 days ago' },
    { name: 'Repository 2', branches: 10, prs: 25, workspaces: 5, lastCommit: '2 days ago' },
    { name: 'Repository 3', branches: 10, prs: 25, workspaces: 5, lastCommit: '2 days ago' },
    { name: 'Repository 4', branches: 10, prs: 25, workspaces: 5, lastCommit: '2 days ago' }
  ];

  const columnNames = {
    name: 'Repositories',
    branches: 'Branches',
    prs: 'Pull requests',
    workspaces: 'Workspaces',
    lastCommit: 'Last commit'
  };

  return (
    <TableComposable aria-label="Simple table">
      <Caption>Manually striped table using composable components</Caption>
      <Thead>
        <Tr>
          <Th>{columnNames.name}</Th>
          <Th>{columnNames.branches}</Th>
          <Th>{columnNames.prs}</Th>
          <Th>{columnNames.workspaces}</Th>
          <Th>{columnNames.lastCommit}</Th>
        </Tr>
      </Thead>
      <Tbody>
        {repositories.map((repo, index) => (
          <Tr key={repo.name} {...(index % 2 === 0 && { isStriped: true })}>
            <Td dataLabel={columnNames.name}>{repo.name}</Td>
            <Td dataLabel={columnNames.branches}>{repo.branches}</Td>
            <Td dataLabel={columnNames.prs}>{repo.prs}</Td>
            <Td dataLabel={columnNames.workspaces}>{repo.workspaces}</Td>
            <Td dataLabel={columnNames.lastCommit}>{repo.lastCommit}</Td>
          </Tr>
        ))}
      </Tbody>
    </TableComposable>
  );
};
