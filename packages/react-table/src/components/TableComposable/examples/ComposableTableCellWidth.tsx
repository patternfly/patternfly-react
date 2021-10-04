import React from 'react';
import { TableComposable, Thead, Tr, Th, Tbody, Td } from '@patternfly/react-table';

interface Repository {
  name: string;
  branches: string | null;
  prs: string | null;
  workspaces: string;
  lastCommit: string;
}

export const ComposableTableCellWidth: React.FunctionComponent = () => {
  // In real usage, this data would come from some external source like an API via props.
  const repositories: Repository[] = [
    { name: 'one', branches: 'two', prs: 'three', workspaces: 'four', lastCommit: 'five' },
    { name: 'one - 2', branches: null, prs: null, workspaces: 'four - 2', lastCommit: 'five - 2' },
    { name: 'one - 3', branches: 'two - 3', prs: 'three - 3', workspaces: 'four - 3', lastCommit: 'five - 3' }
  ];

  const columnNames = {
    name: 'Repositories',
    branches: 'Branches',
    prs: 'Pull requests',
    workspaces: 'Workspaces',
    lastCommit: 'Last commit'
  };

  return (
    <TableComposable aria-label="Cell widths">
      <Thead>
        <Tr>
          <Th width={15}>{columnNames.name}</Th>
          <Th width={15}>{columnNames.branches}</Th>
          <Th width={40} visibility={['hiddenOnMd', 'visibleOnLg']}>
            {columnNames.prs}
          </Th>
          <Th width={15}>{columnNames.workspaces}</Th>
          <Th width={15}>{columnNames.lastCommit}</Th>
        </Tr>
      </Thead>
      <Tbody>
        {repositories.map(repo => (
          <Tr key={repo.name}>
            <Td dataLabel={columnNames.name}>{repo.name}</Td>
            <Td dataLabel={columnNames.branches}>{repo.branches}</Td>
            <Td dataLabel={columnNames.prs} visibility={['hiddenOnMd', 'visibleOnLg']}>
              {repo.prs}
            </Td>
            <Td dataLabel={columnNames.workspaces}>{repo.workspaces}</Td>
            <Td dataLabel={columnNames.lastCommit}>{repo.lastCommit}</Td>
          </Tr>
        ))}
      </Tbody>
    </TableComposable>
  );
};
