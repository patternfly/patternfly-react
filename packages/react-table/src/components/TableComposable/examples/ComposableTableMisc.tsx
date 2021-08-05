import React from 'react';
import { TableComposable, Thead, Tr, Th, Tbody, Td } from '@patternfly/react-table';

interface Repository {
  name: string;
  branches: string | null;
  prs: string | null;
  workspaces: string;
  lastCommit: string;
}

export const ComposableTableMisc: React.FunctionComponent = () => {
  // In real usage, this data would come from some external source like an API via props.
  const repositories: Repository[] = [
    { name: 'one', branches: 'two', prs: 'three', workspaces: 'four', lastCommit: 'five' },
    { name: 'one - 2', branches: null, prs: null, workspaces: 'four - 2', lastCommit: 'five - 2' },
    { name: 'one - 3', branches: 'two - 3', prs: 'three - 3', workspaces: 'four - 3', lastCommit: 'five - 3' }
  ];

  return (
    <TableComposable aria-label="Misc table">
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
            Repositories
          </Th>
          <Th>Branches</Th>
          <Th
            info={{
              popover: (
                <div>
                  More <strong>information</strong> on pull requests
                </div>
              ),
              ariaLabel: 'More information on pull requests',
              popoverProps: {
                headerContent: 'Pull requests',
                footerContent: <a href="">Click here for even more info</a>
              }
            }}
          >
            Pull requests
          </Th>
          <Th>Workspaces</Th>
          <Th textCenter>Last commit</Th>
        </Tr>
      </Thead>
      <Tbody>
        {repositories.map((repo, rowIndex) => {
          const isOddRow = (rowIndex + 1) % 2;
          const customStyle = {
            borderLeft: '3px solid var(--pf-global--primary-color--100)'
          };
          // Some arbitrary logic to demonstrate that cell styles can be based on anything
          const nameColSpan = repo.branches === null && repo.prs === null ? 3 : 1;
          const lastCommitTextCenter = rowIndex !== 2;
          return (
            <Tr
              key={rowIndex}
              className={isOddRow ? 'odd-row-class' : 'even-row-class'}
              style={isOddRow ? customStyle : {}}
            >
              <Td dataLabel="Repositories" colSpan={nameColSpan}>
                {repo.name}
              </Td>
              <Td dataLabel="Branches">{repo.branches}</Td>
              <Td dataLabel="Pull requests"></Td>
              <Td dataLabel="Workspaces"></Td>
              <Td dataLabel="Last commit" textCenter={lastCommitTextCenter}></Td>
            </Tr>
          );
        })}
      </Tbody>
    </TableComposable>
  );
};
