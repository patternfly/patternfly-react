import React from 'react';
import { TableComposable, Thead, Tr, Th, Tbody, Td } from '@patternfly/react-table';

interface Repository {
  name: string;
  branches: string | null;
  prs: string | null;
  workspaces: string;
  lastCommit: string;
}

export const ComposableTableSelectableRadio: React.FunctionComponent = () => {
  // In real usage, this data would come from some external source like an API via props.
  const repositories: Repository[] = [
    { name: 'one', branches: 'two', prs: 'a', workspaces: 'four', lastCommit: 'five' },
    { name: 'a', branches: 'two', prs: 'k', workspaces: 'four', lastCommit: 'five' },
    { name: 'p', branches: 'two', prs: 'b', workspaces: 'four', lastCommit: 'five' }
  ];
  const isRepoSelectable = (repo: Repository) => repo.name !== 'a'; // Arbitrary logic for this example

  // In this example, selected rows are tracked by the repo names from each row. This could be any unique identifier.
  // This is to prevent state from being based on row order index in case we later add sorting.
  // TODO put the generic type param back when the TS parser is fixed.
  // const [selectedRepoName, setSelectedRepoName] = React.useState<string | null>(null);
  const [selectedRepoName, setSelectedRepoName] = React.useState(null);

  return (
    <TableComposable aria-label="Selectable table">
      <Thead>
        <Tr>
          <Th />
          <Th>Repositories</Th>
          <Th>Branches</Th>
          <Th>Pull requests</Th>
          <Th>Workspaces</Th>
          <Th>Last commit</Th>
        </Tr>
      </Thead>
      <Tbody>
        {repositories.map((repo, rowIndex) => (
          <Tr key={repo.name}>
            <Td
              select={{
                rowIndex,
                onSelect: () => setSelectedRepoName(repo.name),
                isSelected: selectedRepoName === repo.name,
                disable: !isRepoSelectable(repo),
                variant: 'radio'
              }}
            />
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
