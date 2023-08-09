import React from 'react';
import { info, textCenter, ICell } from '@patternfly/react-table';
import { Table, TableHeader, TableBody, TableProps } from '@patternfly/react-table/deprecated';
import styles from '@patternfly/react-styles/css/components/Table/table';

interface Repository {
  name: string;
  branches: string | null;
  prs: string | null;
  workspaces: string;
  lastCommit: string;
}

export const LegacyTableClickable: React.FunctionComponent = () => {
  // In real usage, this data would come from some external source like an API via props.
  const repositories: Repository[] = [
    {
      name: 'Repository one',
      branches: 'Branch one',
      prs: 'PR one',
      workspaces: 'Workspace one',
      lastCommit: 'Commit one'
    },
    { name: 'one - 2', branches: null, prs: null, workspaces: 'four - 2', lastCommit: 'five - 2' },
    {
      name: 'one - 3',
      branches: 'two - 3',
      prs: 'three - 3',
      workspaces: 'four - 3',
      lastCommit: 'five - 3 (not centered)'
    }
  ];

  // In this example, selected rows are tracked by the repo names from each row. This could be any unique identifier.
  // This is to prevent state from being based on row order index in case we later add sorting.
  const [selectedRepoName, setSelectedRepoName] = React.useState('');
  const columns: TableProps['cells'] = [
    {
      title: 'Repositories',
      transforms: [
        info({
          tooltip: 'More information about repositories',
          className: 'repositories-info-tip',
          tooltipProps: {
            isContentLeftAligned: true
          }
        })
      ]
    },
    'Branches',
    {
      title: 'Pull requests',
      transforms: [
        info({
          popover: (
            <div>
              More <strong>information</strong> on pull requests
            </div>
          ),
          ariaLabel: 'More information on pull requests',
          popoverProps: {
            headerContent: 'Pull requests',
            footerContent: <a href="#">Click here for even more info</a>
          }
        })
      ]
    },
    'Workspaces',
    {
      title: 'Last commit',
      transforms: [textCenter],
      cellTransforms: [textCenter]
    }
  ];
  const rows: TableProps['rows'] = repositories.map((repo) => {
    let cells: (string | ICell)[] = [repo.name, repo.branches || '', repo.prs || '', repo.workspaces, repo.lastCommit];
    // These rows have arbitrary differences for this example, but these could be based on some other conditions
    if (repo.name === 'one - 2') {
      cells = [
        {
          title: <div>{repo.name}</div>,
          props: { title: 'hover title', colSpan: 3 }
        },
        repo.workspaces,
        repo.lastCommit
      ];
    } else if (repo.name === 'five - 3 (not centrered)') {
      cells = [
        repo.name,
        repo.branches || '',
        repo.prs || '',
        repo.workspaces,
        {
          title: repo.lastCommit,
          props: { textCenter: false }
        }
      ];
    }
    return {
      cells,
      isClickable: true,
      isRowSelected: selectedRepoName === repo.name
    };
  });

  return (
    <Table caption="Row click handler table" cells={columns} rows={rows}>
      <TableHeader className={styles.modifiers.nowrap} />
      <TableBody
        onRowClick={(_event, row, rowProps) => {
          if (rowProps) {
            const repo = repositories[rowProps.rowIndex];
            setSelectedRepoName(repo.name);
          }
        }}
      />
    </Table>
  );
};
