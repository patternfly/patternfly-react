import React from 'react';
import { Table, Thead, Tr, Th, Tbody, Td, TdProps, ExpandableRowContent } from '@patternfly/react-table';

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

export const TableCompoundExpandable: React.FunctionComponent = () => {
  // In real usage, this data would come from some external source like an API via props.
  const repositories: Repository[] = [
    { name: 'siemur/test-space', branches: 10, prs: 4, workspaces: 4, lastCommit: '20 minutes' },
    { name: 'siemur/test-space-2', branches: 3, prs: 4, workspaces: 4, lastCommit: '20 minutes' }
  ];

  const columnNames = {
    name: 'Repositories',
    branches: 'Branches',
    prs: 'Pull requests',
    workspaces: 'Workspaces',
    lastCommit: 'Last commit'
  };
  type ColumnKey = keyof typeof columnNames;

  // In this example, expanded cells are tracked by the repo and property names from each row. This could be any pair of unique identifiers.
  // This is to prevent state from being based on row and column order index in case we later add sorting and rearranging columns.
  // Note that this behavior is very similar to selection state.
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
  const compoundExpandParams = (
    repo: Repository,
    columnKey: ColumnKey,
    rowIndex: number,
    columnIndex: number
  ): TdProps['compoundExpand'] => ({
    isExpanded: expandedCells[repo.name] === columnKey,
    onToggle: () => setCellExpanded(repo, columnKey, expandedCells[repo.name] !== columnKey),
    expandId: 'compound-expandable-example',
    rowIndex,
    columnIndex
  });

  return (
    <Table aria-label="Compound expandable table">
      <Thead>
        <Tr>
          <Th>{columnNames.name}</Th>
          <Th>{columnNames.branches}</Th>
          <Th>{columnNames.prs}</Th>
          <Th>{columnNames.workspaces}</Th>
          <Th>{columnNames.lastCommit}</Th>
          <Th screenReaderText="URL" />
        </Tr>
      </Thead>
      {repositories.map((repo: Repository, rowIndex: number) => {
        const expandedCellKey = expandedCells[repo.name];
        const isRowExpanded = !!expandedCellKey;
        return (
          <Tbody key={repo.name} isExpanded={isRowExpanded}>
            <Tr>
              <Td width={25} dataLabel={columnNames.name} component="th">
                <a href="#">{repo.name}</a>
              </Td>
              <Td
                width={10}
                dataLabel={columnNames.branches}
                compoundExpand={compoundExpandParams(repo, 'branches', rowIndex, 1)}
              >
                <CodeBranchIcon key="icon" /> {repo.branches}
              </Td>
              <Td
                width={10}
                dataLabel={columnNames.prs}
                compoundExpand={compoundExpandParams(repo, 'prs', rowIndex, 2)}
              >
                <CodeIcon key="icon" /> {repo.prs}
              </Td>
              <Td
                width={10}
                dataLabel={columnNames.workspaces}
                compoundExpand={compoundExpandParams(repo, 'workspaces', rowIndex, 3)}
              >
                <CubeIcon key="icon" /> {repo.workspaces}
              </Td>
              <Td width={15} dataLabel={columnNames.lastCommit}>
                {repo.lastCommit}
              </Td>
              <Td width={30}>
                <a href="#">Open in GitHub</a>
              </Td>
            </Tr>
            {isRowExpanded ? (
              <Tr isExpanded={isRowExpanded}>
                <Td dataLabel={columnNames[expandedCellKey]} noPadding colSpan={6}>
                  <ExpandableRowContent>
                    <div className={spacing.mMd}>
                      Lorem ipsum sit dolor. Lorem ipsum sit dolor. Lorem ipsum sit dolor. Lorem ipsum sit dolor. Lorem
                      ipsum sit dolor. Lorem ipsum sit dolor. Lorem ipsum sit dolor. Lorem ipsum sit dolor. Lorem ipsum
                      sit dolor. Lorem ipsum sit dolor. Lorem ipsum sit dolor. Lorem ipsum sit dolor. Lorem ipsum sit
                      dolor. Lorem ipsum sit dolor. Lorem ipsum sit dolor. Lorem ipsum sit dolor. Lorem ipsum sit dolor.
                      Lorem ipsum sit dolor. Lorem ipsum sit dolor. Lorem ipsum sit dolor. Lorem ipsum sit dolor. Lorem
                      ipsum sit dolor. Lorem ipsum sit dolor. Lorem ipsum sit dolor. Lorem ipsum sit dolor. Lorem ipsum
                      sit dolor. Lorem ipsum sit dolor. Lorem ipsum sit dolor. Lorem ipsum sit dolor. Lorem ipsum sit
                      dolor. Lorem ipsum sit dolor. Lorem ipsum sit dolor. Lorem ipsum sit dolor.
                    </div>
                  </ExpandableRowContent>
                </Td>
              </Tr>
            ) : null}
          </Tbody>
        );
      })}
    </Table>
  );
};
