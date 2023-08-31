import React from 'react';
import { headerCol } from '@patternfly/react-table';
import { Table, TableHeader, TableBody, TableProps } from '@patternfly/react-table/deprecated';

interface Repository {
  name: string;
  branches: string;
  prs: string;
  workspaces: string;
  lastCommit: string;
}

export const LegacyTableSelectableRadio: React.FunctionComponent = () => {
  // In real usage, this data would come from some external source like an API via props.
  const repositories: Repository[] = [
    { name: 'one', branches: 'two', prs: 'a', workspaces: 'four', lastCommit: 'five' },
    { name: 'a', branches: 'two', prs: 'k', workspaces: 'four', lastCommit: 'five' },
    { name: 'p', branches: 'two', prs: 'b', workspaces: 'four', lastCommit: 'five' }
  ];

  const isRepoSelectable = (repo: Repository) => repo.name !== 'a'; // Arbitrary logic for this example

  // In this example, selected rows are tracked by the repo names from each row. This could be any unique identifier.
  // This is to prevent state from being based on row order index in case we later add sorting.
  const [selectedRepoName, setSelectedRepoName] = React.useState<string | null>(null);

  const columns: TableProps['cells'] = [
    { title: 'Repositories', cellTransforms: [headerCol('selectable-radio')] },
    'Branches',
    { title: 'Pull requests' },
    'Workspaces',
    'Last commit'
  ];
  const rows: TableProps['rows'] = repositories.map((repo) => ({
    cells: [repo.name, repo.branches, repo.prs, repo.workspaces, repo.lastCommit],
    selected: selectedRepoName === repo.name,
    disableSelection: !isRepoSelectable(repo)
  }));

  return (
    <Table
      onSelect={(_event, _isSelecting, rowIndex) => {
        const repo = repositories[rowIndex];
        setSelectedRepoName(repo.name);
      }}
      selectVariant="radio"
      aria-label="Selectable Table with Radio Buttons"
      cells={columns}
      rows={rows}
    >
      <TableHeader />
      <TableBody />
    </Table>
  );
};
