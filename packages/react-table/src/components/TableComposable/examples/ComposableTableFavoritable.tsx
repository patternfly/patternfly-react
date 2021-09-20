import React from 'react';
import { TableComposable, Thead, Tr, Th, Tbody, Td, ThProps } from '@patternfly/react-table';

interface Repository {
  name: string;
  branches: string | null;
  prs: string | null;
  workspaces: string;
  lastCommit: string;
}

export const ComposableTableFavoritable: React.FunctionComponent = () => {
  // In real usage, this data would come from some external source like an API via props.
  const repositories: Repository[] = [
    {
      name: 'one',
      branches: 'two',
      prs: 'a',
      workspaces: 'four',
      lastCommit: 'five'
    },
    {
      name: 'a',
      branches: 'two',
      prs: 'k',
      workspaces: 'four',
      lastCommit: 'five'
    },
    {
      name: 'p',
      branches: 'two',
      prs: 'b',
      workspaces: 'four',
      lastCommit: 'five'
    }
  ];

  // TODO maybe change this to use column keys instead of indexes, like compound expand state? how?
  // Index of the currently sorted column
  const [activeSortIndex, setActiveSortIndex] = React.useState<number | null>(null);

  // Sort direction of the currently sorted column
  const [activeSortDirection, setActiveSortDirection] = React.useState<'asc' | 'desc' | null>(null);

  // Favorite state is similar to selection state, see Composable: Selectable with checkbox.
  const [favoriteRepoNames, setFavoriteRepoNames] = React.useState<string[]>([]);
  const setRepoFavorited = (repo: Repository, isFavoriting = true) =>
    setFavoriteRepoNames(prevFavorites => {
      const otherFavorites = prevFavorites.filter(r => r !== repo.name);
      return isFavoriting ? [...otherFavorites, repo.name] : otherFavorites;
    });
  const isRepoFavorited = (repo: Repository) => favoriteRepoNames.includes(repo.name);

  // Since OnSort specifies sorted columns by index, we need sortable values for our object by column index.
  // In this example we only deal with booleans here because we only sort on the favorites column.
  // For more complex sorting, see Composable: Sortable.
  const getSortableRowValues = (repo: Repository): boolean[] => [isRepoFavorited(repo)];

  // Note that we perform the sort as part of the component's render logic and not in onSort.
  // We shouldn't store the list of data in state because we don't want to have to sync that with props.
  let sortedRepositories = repositories;
  if (activeSortIndex !== null) {
    sortedRepositories = repositories.sort((a, b) => {
      const aValue = getSortableRowValues(a)[activeSortIndex];
      const bValue = getSortableRowValues(b)[activeSortIndex];
      if (aValue === bValue) {
        return 0;
      }
      if (activeSortDirection === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return bValue > aValue ? 1 : -1;
      }
    });
  }

  const getSortParams = (columnIndex: number): ThProps['sort'] => ({
    isFavorites: columnIndex === 0, // Not just statically true in case we add sorting on other columns later
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
    <TableComposable aria-label="Favoritable table" variant="compact">
      <Thead>
        <Tr>
          <Th sort={getSortParams(0)} />
          <Th>Repositories</Th>
          <Th>Branches</Th>
          <Th>Pull requests</Th>
          <Th>Workspaces</Th>
          <Th>Last commit</Th>
        </Tr>
      </Thead>
      <Tbody>
        {sortedRepositories.map((repo, rowIndex) => (
          <Tr key={rowIndex}>
            <Td
              favorites={{
                isFavorited: isRepoFavorited(repo),
                onFavorite: (_event, isFavoriting) => setRepoFavorited(repo, isFavoriting),
                rowIndex
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
