import React from 'react';
import { Table, TableHeader, TableBody, classNames, cellWidth, Visibility, TableProps } from '@patternfly/react-table';

interface Repository {
  name: string;
  branches: string;
  prs: string;
  workspaces: string;
  lastCommit: string;
}

export const LegacyTableCellWidth: React.FunctionComponent = () => {
  // In real usage, this data would come from some external source like an API via props.
  const repositories: Repository[] = [
    {
      name: 'one - 1',
      branches: 'two - 1 (visible only on md)',
      prs: 'three - 1 (hidden only on md)',
      workspaces: 'four - 1 (hidden on xs)',
      lastCommit: 'five - 1'
    },
    {
      name: 'one - 2',
      branches: 'two - 2 (visible only on md)',
      prs: 'three - 2 (hidden only on md)',
      workspaces: 'four - 2 (hidden on xs)',
      lastCommit: 'five - 2'
    }
  ];

  const columns: TableProps['cells'] = [
    { title: 'Header cell', transforms: [cellWidth(10)] },
    {
      title: 'Branches (visible only on md and 2Xl)',
      columnTransforms: [
        classNames(Visibility.hidden, Visibility.visibleOnMd, Visibility.hiddenOnLg, Visibility.visibleOn2Xl)
      ]
    },
    {
      title: 'Pull requests (hidden only on md)',
      columnTransforms: [classNames(Visibility.hiddenOnMd, Visibility.visibleOnLg)]
    },
    {
      title: 'Workspaces (hidden on xs)',
      columnTransforms: [classNames(Visibility.hidden, Visibility.visibleOnSm)]
    },
    {
      title: 'Last commit',
      transforms: [cellWidth(30)]
    }
  ];
  const rows: TableProps['rows'] = repositories.map(repo => [
    repo.name,
    repo.branches,
    repo.prs,
    repo.workspaces,
    repo.lastCommit
  ]);

  return (
    <Table aria-label="Table with width and breakpoint visibility modifiers" cells={columns} rows={rows}>
      <TableHeader />
      <TableBody />
    </Table>
  );
};
