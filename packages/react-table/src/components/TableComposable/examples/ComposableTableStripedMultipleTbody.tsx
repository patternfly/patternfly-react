import React from 'react';
import { TableComposable, Caption, Thead, Tr, Th, Tbody, Td } from '@patternfly/react-table';

interface Repository {
  name: string;
  branches: number;
  description?: string;
  prs: number;
  workspaces: number;
  lastCommit: string;
}

export const ComposableTableStripedMultipleTbody: React.FunctionComponent = () => {
  // In real usage, this data would come from some external source like an API via props.
  const repositories1: Repository[] = [
    {
      name: 'tbody 1 - Repository 1',
      description: '(odd rows striped)',
      branches: 10,
      prs: 25,
      workspaces: 5,
      lastCommit: '2 days ago'
    },
    { name: 'tbody 1 - Repository 2', branches: 10, prs: 25, workspaces: 5, lastCommit: '2 days ago' },
    {
      name: 'tbody 1 - Repository 3',
      description: '(odd rows striped)',
      branches: 10,
      prs: 25,
      workspaces: 5,
      lastCommit: '2 days ago'
    }
  ];

  const repositories2: Repository[] = [
    { name: 'tbody 2 - Repository 4', branches: 10, prs: 25, workspaces: 5, lastCommit: '2 days ago' },
    {
      name: 'tbody 2 - Repository 5',
      description: '(even rows striped)',
      branches: 10,
      prs: 25,
      workspaces: 5,
      lastCommit: '2 days ago'
    },
    { name: 'tbody 2 - Repository 6', branches: 10, prs: 25, workspaces: 5, lastCommit: '2 days ago' },
    {
      name: 'tbody 2 - Repository 7',
      description: '(even rows striped)',
      branches: 10,
      prs: 25,
      workspaces: 5,
      lastCommit: '2 days ago'
    }
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
      <Caption>Striped table using multiple tbody components</Caption>
      <Thead>
        <Tr>
          <Th>{columnNames.name}</Th>
          <Th>{columnNames.branches}</Th>
          <Th>{columnNames.prs}</Th>
          <Th>{columnNames.workspaces}</Th>
          <Th>{columnNames.lastCommit}</Th>
        </Tr>
      </Thead>
      <Tbody isOddStriped>
        {repositories1.map(repo => (
          <Tr key={repo.name}>
            <Td dataLabel={columnNames.name}>
              {repo.description ? (
                <React.Fragment>
                  {repo.name}
                  <br />
                  <small>{repo.description}</small>
                </React.Fragment>
              ) : (
                repo.name
              )}
            </Td>
            <Td dataLabel={columnNames.branches}>{repo.branches}</Td>
            <Td dataLabel={columnNames.prs}>{repo.prs}</Td>
            <Td dataLabel={columnNames.workspaces}>{repo.workspaces}</Td>
            <Td dataLabel={columnNames.lastCommit}>{repo.lastCommit}</Td>
          </Tr>
        ))}
      </Tbody>
      <Tbody isEvenStriped>
        {repositories2.map(repo => (
          <Tr key={repo.name}>
            <Td dataLabel={columnNames.name}>
              {repo.description ? (
                <React.Fragment>
                  {repo.name}
                  <br />
                  <small>{repo.description}</small>
                </React.Fragment>
              ) : (
                repo.name
              )}
            </Td>
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
