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

  return (
    <TableComposable aria-label="Cell widths">
      <Thead>
        <Tr>
          <Th width={15}>Repositories</Th>
          <Th width={15}>Branches</Th>
          <Th width={40} visibility={['hiddenOnMd', 'visibleOnLg']}>
            Pull requests
          </Th>
          <Th width={15}>Workspaces</Th>
          <Th width={15}>Last commit</Th>
        </Tr>
      </Thead>
      <Tbody>
        {repositories.map(repo => (
          <Tr key={repo.name}>
            <Td dataLabel="Repositories">{repo.name}</Td>
            <Td dataLabel="Branches">{repo.branches}</Td>
            <Td dataLabel="Pull requests" visibility={['hiddenOnMd', 'visibleOnLg']}>
              {repo.prs}
            </Td>
            <Td dataLabel="Workspaces">{repo.workspaces}</Td>
            <Td dataLabel="Last commit">{repo.lastCommit}</Td>
          </Tr>
        ))}
      </Tbody>
    </TableComposable>
  );
};
