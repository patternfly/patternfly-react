import React from 'react';
import { Table, TableHeader, TableBody, TableProps } from '@patternfly/react-table';
import { css } from '@patternfly/react-styles';

interface Repository {
  name: string;
  branches: string | null;
  prs: string | null;
  workspaces: string;
  lastCommit: string;
}

export const LegacyTableStripedCustomTr: React.FunctionComponent = () => {
  // In real usage, this data would come from some external source like an API via props.
  const repositories: Repository[] = [
    { name: 'one', branches: 'two', prs: 'three', workspaces: 'four', lastCommit: 'five' },
    { name: 'one - 2', branches: null, prs: null, workspaces: 'four - 2', lastCommit: 'five - 2' },
    { name: 'one - 3', branches: 'two - 3', prs: 'three - 3', workspaces: 'four - 3', lastCommit: 'five - 3' }
  ];

  const columns: TableProps['cells'] = ['Repositories', 'Branches', 'Pull requests', 'Workspaces', 'Last commit'];
  const rows: TableProps['rows'] = repositories.map(repo => [
    repo.name,
    repo.branches || '',
    repo.prs || '',
    repo.workspaces,
    repo.lastCommit
  ]);

  const customRowWrapper: TableProps['rowWrapper'] = ({ trRef, className, rowProps, row: _row, ...props }) => {
    const isOddRow = rowProps ? !!((rowProps.rowIndex + 1) % 2) : true;
    return (
      <tr
        {...props}
        ref={trRef as React.LegacyRef<HTMLTableRowElement>}
        className={css(className, isOddRow && 'pf-m-striped')}
      />
    );
  };

  return (
    <Table
      caption="Table with custom row wrapper that stripes odd rows"
      cells={columns}
      rows={rows}
      rowWrapper={customRowWrapper}
    >
      <TableHeader />
      <TableBody />
    </Table>
  );
};
