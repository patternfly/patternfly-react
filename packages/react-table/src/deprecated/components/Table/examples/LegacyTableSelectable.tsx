import React from 'react';
import { headerCol } from '@patternfly/react-table';
import { Table, TableHeader, TableBody, TableProps } from '@patternfly/react-table/deprecated';
import { Checkbox } from '@patternfly/react-core';
import spacing from '@patternfly/react-styles/css/utilities/Spacing/spacing';

interface Repository {
  name: string;
  branches: string;
  prs: string;
  workspaces: string;
  lastCommit: string;
}

export const LegacyTableSelectable: React.FunctionComponent = () => {
  // In real usage, this data would come from some external source like an API via props.
  const repositories: Repository[] = [
    { name: 'one', branches: 'two', prs: 'a', workspaces: 'four', lastCommit: 'five' },
    { name: 'a', branches: 'two', prs: 'k', workspaces: 'four', lastCommit: 'five' },
    { name: 'b', branches: 'two', prs: 'k', workspaces: 'four', lastCommit: 'five' },
    { name: 'c', branches: 'two', prs: 'k', workspaces: 'four', lastCommit: 'five' },
    { name: 'd', branches: 'two', prs: 'k', workspaces: 'four', lastCommit: 'five' },
    { name: 'e', branches: 'two', prs: 'b', workspaces: 'four', lastCommit: 'five' }
  ];

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

  const [canSelectAll, setCanSelectAll] = React.useState(true);

  // To allow shift+click to select/deselect multiple rows
  const [recentSelectedRowIndex, setRecentSelectedRowIndex] = React.useState<number | null>(null);
  const [shifting, setShifting] = React.useState(false);

  const onSelectRepo = (repo: Repository, rowIndex: number, isSelecting: boolean) => {
    // If the user is shift + selecting the checkboxes, then all intermediate checkboxes should be selected
    if (shifting && recentSelectedRowIndex !== null) {
      const numberSelected = rowIndex - recentSelectedRowIndex;
      const intermediateIndexes =
        numberSelected > 0
          ? Array.from(new Array(numberSelected + 1), (_x, i) => i + recentSelectedRowIndex)
          : Array.from(new Array(Math.abs(numberSelected) + 1), (_x, i) => i + rowIndex);
      intermediateIndexes.forEach((index) => setRepoSelected(repositories[index], isSelecting));
    } else {
      setRepoSelected(repo, isSelecting);
    }
    setRecentSelectedRowIndex(rowIndex);
  };

  React.useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Shift') {
        setShifting(true);
      }
    };
    const onKeyUp = (e: KeyboardEvent) => {
      if (e.key === 'Shift') {
        setShifting(false);
      }
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('keyup', onKeyUp);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('keyup', onKeyUp);
    };
  }, []);

  const columns: TableProps['cells'] = [
    { title: 'Repositories', cellTransforms: [headerCol()] },
    'Branches',
    { title: 'Pull requests' },
    'Workspaces',
    'Last commit'
  ];
  const rows: TableProps['rows'] = repositories.map((repo) => ({
    cells: [repo.name, repo.branches, repo.prs, repo.workspaces, repo.lastCommit],
    selected: isRepoSelected(repo),
    disableSelection: !isRepoSelectable(repo)
  }));

  return (
    <div>
      <Checkbox
        label="Can select all"
        className={spacing.mbLg}
        isChecked={canSelectAll}
        onChange={(_event, checked) => setCanSelectAll(checked)}
        aria-label="toggle select all checkbox"
        id="toggle-select-all"
        name="toggle-select-all"
      />
      <Table
        onSelect={(_event, isSelecting, rowIndex) => {
          if (rowIndex === -1) {
            selectAllRepos(isSelecting);
          } else {
            const repo = repositories[rowIndex];
            onSelectRepo(repo, rowIndex, isSelecting);
          }
        }}
        canSelectAll={canSelectAll}
        aria-label="Selectable Table"
        cells={columns}
        rows={rows}
      >
        <TableHeader />
        <TableBody />
      </Table>
    </div>
  );
};
