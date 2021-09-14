import React from 'react';
import { TableComposable, Thead, Tr, Th, Tbody, Td, TdProps, ExpandableRowContent } from '@patternfly/react-table';

import CodeBranchIcon from '@patternfly/react-icons/dist/esm/icons/code-branch-icon';
import CodeIcon from '@patternfly/react-icons/dist/esm/icons/code-icon';
import CubeIcon from '@patternfly/react-icons/dist/esm/icons/cube-icon';

// https://github.com/patternfly/patternfly-react/blob/main/packages/react-table/src/components/TableComposable/examples/DemoSortableTable.tsx
// import DemoSortableTable from './DemoSortableTable';

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

  // TODO move this back the useState below as Record<string, keyof Repository> when the TS parser issues are resolved:
  type CellRecord = Record<string, string>;

  // In this example, expanded cells are tracked by the repo and property names from each row. This could be any unique identifier.
  // This is to prevent state from being based on row and column order index in case we later add sorting and rearranging columns.
  // Note that this behavior is very similar to selection state.
  // TODO restore the `keyof` here when it is supported by the TS parser:
  // const [expandedCells, setExpandedCells] = React.useState<Record<string, keyof Repository>>({
  const [expandedCells, setExpandedCells] = React.useState<CellRecord>({
    'siemur/test-space': 'branches'
  });
  // TODO restore the `keyof` here when it is supported by the TS parser:
  // const setCellExpanded = (repo: Repository, columnKey: keyof Repository, isExpanding = true) => {
  const setCellExpanded = (repo: Repository, columnKey: string, isExpanding = true) => {
    const newExpandedCells = { ...expandedCells };
    if (isExpanding) {
      newExpandedCells[repo.name] = columnKey;
    } else {
      delete newExpandedCells[repo.name];
    }
    setExpandedCells(newExpandedCells);
  };
  // TODO export types like TdCompoundExpandType from packages/react-table/src/components/Table/base/types.tsx in packages/react-table/src/components/Table/TableTypes.ts
  // TODO restore the `keyof` here when it is supported by the TS parser:
  // const compoundExpandParams = (repo: Repository, columnKey: keyof Repository): TdProps['compoundExpand'] => ({
  const compoundExpandParams = (repo: Repository, columnKey: string): TdProps['compoundExpand'] => ({
    isExpanded: expandedCells[repo.name] === columnKey,
    onToggle: () => setCellExpanded(repo, columnKey, expandedCells[repo.name] !== columnKey)
  });

  // TODO do this for the other examples to consolidate dataLabel
  // TODO restore the `keyof` here when it is supported by the TS parser:
  const columnNames: Record<string, string> = {
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
              <Td dataLabel={columnNames.lastCommit}>{repo.lastCommit}</Td>
              <Td>
                <a href="#">Open in GitHub</a>
              </Td>
            </Tr>
            {isRowExpanded ? (
              <Tr isExpanded={isRowExpanded}>
                <Td dataLabel={columnNames[expandedCellKey]} noPadding colSpan={6}>
                  <ExpandableRowContent>
                    {/* <DemoSortableTable
                      firstColumnRows={[`parent-${repo.name}`, `compound-${expandedCellKey}`, 'three', 'four', 'five']}
                      id={`compound-expansion-table-${repo.name}_${expandedCellKey}`}
                    /> */}
                    Expanded content goes here!
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
