import React from 'react';
import { TableComposable, Thead, Tr, Th, Tbody, Td, TdProps, ExpandableRowContent } from '@patternfly/react-table';

import CodeBranchIcon from '@patternfly/react-icons/dist/esm/icons/code-branch-icon';
import CodeIcon from '@patternfly/react-icons/dist/esm/icons/code-icon';
import CubeIcon from '@patternfly/react-icons/dist/esm/icons/cube-icon';

// https://github.com/patternfly/patternfly-react/blob/main/packages/react-table/src/components/Table/composable-table-examples/DemoSortableTable.js
import DemoSortableTable from './DemoSortableTable';

interface Repository {
  name: string;
  branches: number;
  prs: number;
  workspaces: number;
  lastCommit: string;
}

export const ComposableTableCompoundExpandable: React.FunctionComponent = () => {
  // In real usage, this data would come from some external source like an API via props.
  const repositories: Repository[] = [
    { name: 'siemur/test-space', branches: 10, prs: 4, workspaces: 4, lastCommit: '20 minutes' },
    { name: 'siemur/test-space-2', branches: 3, prs: 4, workspaces: 4, lastCommit: '20 minutes' }
  ];

  // In this example, expanded cells are tracked by the repo and property names from each row. This could be any unique identifier.
  // This is to prevent state from being based on row and column order index in case we later add sorting and rearranging columns.
  // Note that this behavior is very similar to selection state.
  const [expandedCells, setExpandedCells] = React.useState<Record<string, keyof Repository>>({
    'siemur/test-space': 'branches'
  });
  const setCellExpanded = (repo: Repository, columnKey: keyof Repository, isExpanding = true) => {
    const newExpandedCells = { ...expandedCells };
    if (isExpanding) {
      newExpandedCells[repo.name] = columnKey;
    } else {
      delete newExpandedCells[repo.name];
    }
    setExpandedCells(newExpandedCells);
  };
  // TODO export types like TdCompoundExpandType from packages/react-table/src/components/Table/base/types.tsx in packages/react-table/src/components/Table/TableTypes.ts
  const compoundExpandParams = (repo: Repository, columnKey: keyof Repository): TdProps['compoundExpand'] => ({
    isExpanded: expandedCells[repo.name] === columnKey,
    onToggle: () => setCellExpanded(repo, columnKey, expandedCells[repo.name] !== columnKey)
  });

  // TODO do this for the other examples to consolidate dataLabel
  const columnNames: Record<keyof Repository, string> = {
    name: 'Repositories',
    branches: 'Branches',
    prs: 'Pull requests',
    workspaces: 'Workspaces',
    lastCommit: 'Last commit'
  };

  return (
    <TableComposable aria-label="Compound expandable table">
      <Thead>
        <Tr>
          <Th>{columnNames.name}</Th>
          <Th>{columnNames.branches}</Th>
          <Th>{columnNames.prs}</Th>
          <Th>{columnNames.workspaces}</Th>
          <Th>{columnNames.lastCommit}</Th>
          <Th />
        </Tr>
      </Thead>
      {repositories.map(repo => {
        const expandedCellKey = expandedCells[repo.name];
        const isRowExpanded = !!expandedCellKey;
        return (
          <Tbody key={repo.name} isExpanded={isRowExpanded}>
            <Tr>
              <Td dataLabel={columnNames.name} component="th">
                <a href="#">{repo.name}</a>
              </Td>
              <Td dataLabel={columnNames.branches} compoundExpand={compoundExpandParams(repo, 'branches')}>
                <CodeBranchIcon key="icon" /> {repo.branches}
              </Td>
              <Td dataLabel={columnNames.prs} compoundExpand={compoundExpandParams(repo, 'prs')}>
                <CodeIcon key="icon" /> {repo.prs}
              </Td>
              <Td dataLabel={columnNames.workspaces} compoundExpand={compoundExpandParams(repo, 'workspaces')}>
                <CubeIcon key="icon" /> {repo.workspaces}
              </Td>
              <Td dataLabel={columnNames.lastCommit} compoundExpand={compoundExpandParams(repo, 'lastCommit')}>
                {repo.lastCommit}
              </Td>
              <Td>
                <a href="#">Open in GitHub</a>
              </Td>
            </Tr>
            {isRowExpanded ? (
              <Tr isExpanded={isRowExpanded}>
                <Td dataLabel={columnNames[expandedCellKey]} noPadding colSpan={6}>
                  <ExpandableRowContent>
                    <DemoSortableTable
                      firstColumnRows={[`parent-${repo.name}`, `compound-${expandedCellKey}`, 'three', 'four', 'five']}
                      id={`compound-expansion-table-${repo.name}_${expandedCellKey}`}
                      key={`${repo.name}_${expandedCellKey}`}
                    />
                  </ExpandableRowContent>
                </Td>
              </Tr>
            ) : null}
          </Tbody>
        );
      })}
    </TableComposable>
  );
};
