import React from 'react';
import { sortable } from '@patternfly/react-table';
import { Table, TableHeader, TableBody, TableProps } from '@patternfly/react-table/deprecated';
import { Checkbox } from '@patternfly/react-core';

interface Repository {
  name: string;
  branches: string;
  prs: string;
  workspaces: string;
  lastCommit: string;
}

export const LegacyTableFavoritable: React.FunctionComponent = () => {
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

  // Favorite state is similar to selection state. See selectedRepoNames and associated code below.
  const [favoriteRepoNames, setFavoriteRepoNames] = React.useState<string[]>([]);
  const setRepoFavorited = (repo: Repository, isFavoriting = true) =>
    setFavoriteRepoNames((prevFavorites) => {
      const otherFavorites = prevFavorites.filter((r) => r !== repo.name);
      return isFavoriting ? [...otherFavorites, repo.name] : otherFavorites;
    });
  const isRepoFavorited = (repo: Repository) => favoriteRepoNames.includes(repo.name);

  // Since OnSort specifies sorted columns by index, we need sortable values for our object by column index.
  // Note: We also memoize the sortable values with useCallback to prevent rows jumping around when you change
  // the favorites while sorting on that column. Only updating the sort state will reorder the rows.
  const getSortableRowValues = React.useCallback(
    (repo: Repository): (boolean | string | number)[] => {
      const { name, branches, prs, workspaces, lastCommit } = repo;
      // Blank value for first column (select checkboxes)
      return ['', isRepoFavorited(repo), name, branches, prs, workspaces, lastCommit];
    },
    [activeSortIndex, activeSortDirection]
  );

  // Note that we perform the sort as part of the component's render logic and not in onSort.
  // We shouldn't store the list of data in state because we don't want to have to sync that with props.
  let sortedRepositories = repositories;
  if (activeSortIndex !== null) {
    sortedRepositories = repositories.sort((a, b) => {
      const aValue = getSortableRowValues(a)[activeSortIndex];
      const bValue = getSortableRowValues(b)[activeSortIndex];
      if (typeof aValue === 'number' || typeof aValue === 'boolean') {
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

  const isRepoSelectable = (repo: Repository) => repo.name !== 'a'; // Arbitrary logic for this example
  const selectableRepos = repositories.filter(isRepoSelectable);

  // In this example, selected rows are tracked by the repo names from each row. This could be any unique identifier.
  // This is to prevent state from being based on row order index in case we later add sorting.
  const [selectedRepoNames, setSelectedRepoNames] = React.useState<string[]>([]);
  const setRepoSelected = (repo: Repository, isSelecting = true) =>
    setSelectedRepoNames((prevSelected) => {
      const otherSelectedRepoNames = prevSelected.filter((r) => r !== repo.name);
      return isSelecting && isRepoSelectable(repo) ? [...otherSelectedRepoNames, repo.name] : otherSelectedRepoNames;
    });
  const selectAllRepos = (isSelecting = true) =>
    setSelectedRepoNames(isSelecting ? selectableRepos.map((r) => r.name) : []);
  const isRepoSelected = (repo: Repository) => selectedRepoNames.includes(repo.name);

  const columns: TableProps['cells'] = [
    { title: 'Repositories', transforms: [sortable] },
    'Branches',
    'Pull requests',
    'Workspaces',
    'Last commit'
  ];
  const rows: TableProps['rows'] = sortedRepositories.map((repo) => {
    const favorited = isRepoFavorited(repo);
    return {
      favorited,
      // The favorites button has defaults that can be overriden
      favoritesProps: {
        'aria-label': favorited ? 'Favorited' : 'Not favorited', // Defaults to 'Starred' / 'Not starred'
        id: `favorites-button-${repo.name}`, // Defaults to `favorites-button-${rowIndex}`
        'aria-labelledby': `favorites-button-${repo.name}` // Defaults to `favorites-button-${rowIndex}`
      },
      selected: isRepoSelected(repo),
      disableSelection: !isRepoSelectable(repo),
      cells: [repo.name, repo.branches, repo.prs, repo.workspaces, repo.lastCommit]
    };
  });

  const [canSortFavorites, setCanSortFavorites] = React.useState(true);

  return (
    <div>
      <Checkbox
        label="Can sort favorites"
        isChecked={canSortFavorites}
        onChange={(_event, checked) => setCanSortFavorites(checked)}
        aria-label="toggle can sort favorites checkbox"
        id="toggle-can-sort-favorites"
        name="toggle-can-sort-favorites"
      />
      <Table
        // using this prop enables the favorites column
        onFavorite={(_event, isFavoriting, rowIndex) => {
          const repo = sortedRepositories[rowIndex];
          setRepoFavorited(repo, isFavoriting);
        }}
        // if the onSort prop is detected, favorites can be sorted
        // if you want to exclude favorites from sorting you can use this prop with a value of `false`
        canSortFavorites={canSortFavorites}
        onSelect={(_event, isSelecting, rowIndex) => {
          if (rowIndex === -1) {
            selectAllRepos(isSelecting);
          } else {
            const repo = sortedRepositories[rowIndex];
            setRepoSelected(repo, isSelecting);
          }
        }}
        onSort={(_event, index, direction) => {
          setActiveSortIndex(index);
          setActiveSortDirection(direction);
        }}
        sortBy={{
          index: activeSortIndex,
          direction: activeSortDirection
        }}
        aria-label="Favoritable Table"
        cells={columns}
        rows={rows}
      >
        <TableHeader />
        <TableBody />
      </Table>
    </div>
  );
};
