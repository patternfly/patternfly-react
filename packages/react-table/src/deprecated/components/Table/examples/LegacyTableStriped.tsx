import React from 'react';
import { Table, TableHeader, TableBody, TableProps } from '@patternfly/react-table/deprecated';
interface Repository {
  name: string;
  branches: string;
  prs: string;
  workspaces: string;
  lastCommit: string;
}

export const LegacyTableStriped: React.FunctionComponent = () => {
  // In real usage, this data would come from some external source like an API via props.
  const repositories: Repository[] = [
    {
      name: 'Repository one',
      branches: 'Branch one',
      prs: 'PR one',
      workspaces: 'Workspace one',
      lastCommit: 'Commit one'
    },
    {
      name: 'Repository two',
      branches: 'Branch two',
      prs: 'PR two',
      workspaces: 'Workspace two',
      lastCommit: 'Commit two'
    },
    {
      name: 'Repository three',
      branches: 'Branch three',
      prs: 'PR three',
      workspaces: 'Workspace three',
      lastCommit: 'Commit three'
    }
  ];

  const columns: TableProps['cells'] = ['Repositories', 'Branches', 'Pull requests', 'Workspaces', 'Last commit'];
  const rows: TableProps['rows'] = repositories.map((repo) => [
    repo.name,
    repo.branches,
    repo.prs,
    repo.workspaces,
    repo.lastCommit
  ]);

  return (
    <Table aria-label="Simple Table" cells={columns} rows={rows} isStriped>
      <TableHeader />
      <TableBody />
    </Table>
  );
};
