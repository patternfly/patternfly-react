import React from 'react';
import { Table, TableHeader, TableBody, TableProps } from '@patternfly/react-table/deprecated';
import { compoundExpand } from '@patternfly/react-table';

import CodeBranchIcon from '@patternfly/react-icons/dist/esm/icons/code-branch-icon';
import CodeIcon from '@patternfly/react-icons/dist/esm/icons/code-icon';
import CubeIcon from '@patternfly/react-icons/dist/esm/icons/cube-icon';
import spacing from '@patternfly/react-styles/css/utilities/Spacing/spacing';

interface Repository {
  name: string;
  branches: number;
  prs: number;
  workspaces: number;
  lastCommit: string;
}

export const LegacyTableCompoundExpandable: React.FunctionComponent = () => {
  // In real usage, this data would come from some external source like an API via props.
  const repositories: Repository[] = [
    { name: 'siemur/test-space', branches: 10, prs: 4, workspaces: 4, lastCommit: '20 minutes' },
    { name: 'siemur/test-space-2', branches: 3, prs: 4, workspaces: 4, lastCommit: '20 minutes' }
  ];

  // In this example, expanded cells are tracked by the repo and property names from each row. This could be any pair of unique identifiers.
  // This is to prevent state from being based on row and column order index in case we later add sorting and rearranging columns.
  // Note that these columnKeys must be in the same order as the `columns` below, because columnIndex will be used to look up the matching key.
  type ColumnKey = 'name' | 'branches' | 'prs' | 'workspaces' | 'lastCommit'; // For typechecking
  const columnKeys: ColumnKey[] = ['name', 'branches', 'prs', 'workspaces', 'lastCommit']; // For indexed order
  const [expandedCells, setExpandedCells] = React.useState<Record<string, ColumnKey>>({
    'siemur/test-space': 'branches' // Default to the first cell of the first row being expanded
  });
  const setCellExpanded = (repo: Repository, columnKey: ColumnKey, isExpanding = true) => {
    const newExpandedCells = { ...expandedCells };
    if (isExpanding) {
      newExpandedCells[repo.name] = columnKey;
    } else {
      delete newExpandedCells[repo.name];
    }
    setExpandedCells(newExpandedCells);
  };

  // We want to be able to reference the original data object based on row index. But because parent/child rows are
  // multiple elements in the rows array, repositories[rowIndex] will not be accurate like it would in a normal table.
  // One solution to this is to create an array of data objects indexed by the displayed row index.
  const reposByRowIndex: (Repository | null)[] = [];

  const columns: TableProps['cells'] = [
    'Repositories',
    {
      title: 'Branches',
      cellTransforms: [compoundExpand]
    },
    {
      title: 'Pull requests',
      cellTransforms: [compoundExpand]
    },
    {
      title: 'Workspaces',
      cellTransforms: [compoundExpand]
    },
    'Last Commit',
    {
      title: '',
      dataLabel: 'Action'
    }
  ];
  const rows: TableProps['rows'] = [];
  repositories.forEach((repo) => {
    const expandedCellKey = expandedCells[repo.name];
    const isRowExpanded = !!expandedCellKey;
    rows.push({
      isOpen: isRowExpanded,
      cells: [
        { title: <a href="#">{repo.name}</a>, props: { component: 'th' } },
        {
          title: (
            <React.Fragment>
              <CodeBranchIcon key="icon" /> {repo.branches}
            </React.Fragment>
          ),
          props: {
            isOpen: expandedCellKey === 'branches',
            ariaControls: `compound-expansion-table-${repo.name}-1`
          }
        },
        {
          title: (
            <React.Fragment>
              <CodeIcon key="icon" /> {repo.prs}
            </React.Fragment>
          ),
          props: {
            isOpen: expandedCellKey === 'prs',
            ariaControls: `compound-expansion-table-${repo.name}-2`
          }
        },
        {
          title: (
            <React.Fragment>
              <CubeIcon key="icon" /> {repo.branches}
            </React.Fragment>
          ),
          props: {
            isOpen: expandedCellKey === 'workspaces',
            ariaControls: `compound-expansion-table-${repo.name}-3`
          }
        },
        repo.lastCommit,
        { title: <a href="#">Open in Github</a> }
      ]
    });
    reposByRowIndex.push(repo);
    const parentIndex = rows.length - 1;
    rows.push({
      parent: parentIndex,
      compoundParent: 1,
      cells: [
        {
          title: (
            <div className={spacing.mMd} id={`compound-expansion-table-${repo.name}-1`}>
              Expanded content for {repo.name}: Branches goes here!
            </div>
          ),
          props: { colSpan: 6, className: 'pf-m-no-padding' }
        }
      ]
    });
    reposByRowIndex.push(null);
    rows.push({
      parent: parentIndex,
      compoundParent: 2,
      cells: [
        {
          title: (
            <div className={spacing.mMd} id={`compound-expansion-table-${repo.name}-2`}>
              Expanded content for {repo.name}: Pull requests goes here!
            </div>
          ),
          props: { colSpan: 6, className: 'pf-m-no-padding' }
        }
      ]
    });
    reposByRowIndex.push(null);
    rows.push({
      parent: parentIndex,
      compoundParent: 3,
      cells: [
        {
          title: (
            <div className={spacing.mMd} id={`compound-expansion-table-${repo.name}-3`}>
              Expanded content for {repo.name}: Workspaces goes here!
            </div>
          ),
          props: { colSpan: 6, className: 'pf-m-no-padding' }
        }
      ]
    });
    reposByRowIndex.push(null);
  });

  return (
    <Table
      aria-label="Compound expandable table"
      onExpand={(_event, rowIndex, colIndex, isOpen) => {
        if (reposByRowIndex[rowIndex]) {
          setCellExpanded(reposByRowIndex[rowIndex], columnKeys[colIndex], !isOpen);
        }
      }}
      rows={rows}
      cells={columns}
      expandId="compound-expandable-table-toggle"
      contentId="compound-expandable-table-content"
    >
      <TableHeader />
      <TableBody />
    </Table>
  );
};
