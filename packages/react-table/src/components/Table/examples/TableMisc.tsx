import React from 'react';
import { Table, Thead, Tr, Th, Tbody, Td } from '@patternfly/react-table';
/* eslint-disable camelcase */
import global_BackgroundColor_150 from '@patternfly/react-tokens/dist/esm/global_BackgroundColor_150';

interface Repository {
  name: string;
  branches: string | null;
  prs: string | null;
  workspaces: string;
  lastCommit: string;
}

export const TableMisc: React.FunctionComponent = () => {
  // In real usage, this data would come from some external source like an API via props.
  const repositories: Repository[] = [
    { name: 'one', branches: 'two', prs: 'three', workspaces: 'four', lastCommit: 'five' },
    { name: 'one - 2', branches: null, prs: null, workspaces: 'four - 2', lastCommit: 'five - 2' },
    { name: 'one - 3', branches: 'two - 3', prs: 'three - 3', workspaces: 'four - 3', lastCommit: 'five - 3' }
  ];

  const columnNames = {
    name: 'Repositories',
    branches: 'Branches',
    prs: 'Pull requests',
    workspaces: 'Workspaces',
    lastCommit: 'Last commit'
  };

  return (
    <Table aria-label="Misc table">
      <Thead noWrap>
        <Tr>
          <Th
            info={{
              tooltip: 'More information about repositories',
              className: 'repositories-info-tip',
              tooltipProps: {
                isContentLeftAligned: true
              }
            }}
          >
            {columnNames.name}
          </Th>
          <Th>{columnNames.branches}</Th>
          <Th
            info={{
              popover: (
                <div>
                  More <strong>information</strong> on pull requests
                </div>
              ),
              ariaLabel: 'More information on pull requests',
              popoverProps: {
                headerContent: columnNames.prs,
                footerContent: <a href="#">Click here for even more info</a>
              }
            }}
          >
            {columnNames.prs}
          </Th>
          <Th>{columnNames.workspaces}</Th>
          <Th textCenter>{columnNames.lastCommit}</Th>
        </Tr>
      </Thead>
      <Tbody>
        {repositories.map((repo, rowIndex) => {
          const isOddRow = (rowIndex + 1) % 2;
          const customStyle = {
            backgroundColor: global_BackgroundColor_150.var
          };
          // Some arbitrary logic to demonstrate that cell styles can be based on anything
          const nameColSpan = repo.branches === null && repo.prs === null ? 3 : 1;
          const lastCommitTextCenter = rowIndex !== 2;
          return (
            <Tr
              key={repo.name}
              className={isOddRow ? 'odd-row-class' : 'even-row-class'}
              style={isOddRow ? customStyle : {}}
            >
              <Td dataLabel={columnNames.name} colSpan={nameColSpan}>
                {repo.name}
              </Td>
              <Td dataLabel={columnNames.branches}>{repo.branches}</Td>
              <Td dataLabel={columnNames.prs}></Td>
              <Td dataLabel={columnNames.workspaces}></Td>
              <Td dataLabel={columnNames.lastCommit} textCenter={lastCommitTextCenter}></Td>
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};
