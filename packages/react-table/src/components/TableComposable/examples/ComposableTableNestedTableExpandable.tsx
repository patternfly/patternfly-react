/* eslint-disable no-console */
import React from 'react';
import {
  TableComposable,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  ExpandableRowContent,
  ActionsColumn,
  IAction
} from '@patternfly/react-table';

interface Repository {
  name: string;
  branches: string;
  prs: string;
  nestedComponent?: React.ReactNode;
  link?: React.ReactNode;
  noPadding?: boolean;
}
interface NestedRepository {
  name: string;
  branches: string | null;
  prs: string | null;
  workspaces: string | null;
  lastCommit: string | null;
}

const NestedReposTable: React.FunctionComponent = () => {
  // In real usage, this data would come from some external source like an API via props.
  const prs: NestedRepository[] = [
    { name: 'Repository 1', branches: '25', prs: '25', workspaces: '5', lastCommit: '2 days ago' },
    { name: 'Repository 2', branches: '25', prs: '25', workspaces: '5', lastCommit: '2 days ago' },
    { name: 'Repository 3', branches: '25', prs: '25', workspaces: '5', lastCommit: '2 days ago' },
    { name: 'Repository 4', branches: '25', prs: '25', workspaces: '5', lastCommit: '2 days ago' }
  ];

  const columnNames = {
    name: 'Repositories',
    branches: 'Branches',
    prs: 'Pull requests',
    workspaces: 'Workspaces',
    lastCommit: 'Last commit'
  };

  return (
    <TableComposable aria-label="Simple table" variant="compact">
      <Thead>
        <Tr>
          <Th>{columnNames.name}</Th>
          <Th>{columnNames.branches}</Th>
          <Th>{columnNames.prs}</Th>
          <Th>{columnNames.workspaces}</Th>
          <Th>{columnNames.lastCommit}</Th>
        </Tr>
      </Thead>
      <Tbody>
        {prs.map(repo => (
          <Tr key={repo.name}>
            <Td dataLabel={columnNames.name}>{repo.name}</Td>
            <Td dataLabel={columnNames.branches}>{repo.branches}</Td>
            <Td dataLabel={columnNames.prs}>{repo.prs}</Td>
            <Td dataLabel={columnNames.workspaces}>{repo.workspaces}</Td>
            <Td dataLabel={columnNames.lastCommit}>{repo.lastCommit}</Td>
          </Tr>
        ))}
      </Tbody>
    </TableComposable>
  );
};

export const ComposableTableExpandable: React.FunctionComponent = () => {
  // In real usage, this data would come from some external source like an API via props.
  const repositories: Repository[] = [
    { name: 'Node 1', branches: '10', prs: '2', nestedComponent: <NestedReposTable />, link: <a>Link 1</a> },
    { name: 'Node 2', branches: '3', prs: '4', link: <a>Link 2</a> },
    {
      name: 'Node 3',
      branches: '11',
      prs: '7',
      nestedComponent: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
      ),
      link: <a>Link 3</a>
    },
    {
      name: 'Node 4',
      branches: '11',
      prs: '7',
      nestedComponent: 'Expandable row content has no padding.',
      link: <a>Link 4</a>,
      noPadding: true
    }
  ];

  const columnNames = {
    name: 'Repositories',
    branches: 'Branches',
    prs: 'Pull requests',
    link: 'Link',
    action: 'Action'
  };
  // In this example, expanded rows are tracked by the repo names from each row. This could be any unique identifier.
  // This is to prevent state from being based on row order index in case we later add sorting.
  // Note that this behavior is very similar to selection state.
  const initialExpandedRepoNames = repositories.filter(repo => !!repo.nestedComponent).map(repo => repo.name); // Default to all expanded
  const [expandedRepoNames, setExpandedRepoNames] = React.useState<string[]>(initialExpandedRepoNames);
  const setRepoExpanded = (repo: Repository, isExpanding = true) =>
    setExpandedRepoNames(prevExpanded => {
      const otherExpandedRepoNames = prevExpanded.filter(r => r !== repo.name);
      return isExpanding ? [...otherExpandedRepoNames, repo.name] : otherExpandedRepoNames;
    });
  const isRepoExpanded = (repo: Repository) => expandedRepoNames.includes(repo.name);

  const defaultActions = (repo: Repository): IAction[] => [
    {
      title: 'Some action',
      onClick: () => console.log(`clicked on Some action, on row ${repo.name}`)
    },
    {
      title: <a href="https://www.patternfly.org">Link action</a>
    },
    {
      isSeparator: true
    },
    {
      title: 'Third action',
      onClick: () => console.log(`clicked on Third action, on row ${repo.name}`)
    }
  ];

  return (
    <TableComposable aria-label="Simple table">
      <Thead>
        <Tr>
          <Td />
          <Th width={20}>{columnNames.name}</Th>
          <Th>{columnNames.branches}</Th>
          <Th>{columnNames.prs}</Th>
          <Th>{columnNames.link}</Th>
          <Th>{columnNames.action}</Th>
        </Tr>
      </Thead>
      {repositories.map((repo, rowIndex) => (
        <Tbody key={repo.name} isExpanded={isRepoExpanded(repo)}>
          <Tr>
            <Td
              expand={
                repo.nestedComponent
                  ? {
                      rowIndex,
                      isExpanded: isRepoExpanded(repo),
                      onToggle: () => setRepoExpanded(repo, !isRepoExpanded(repo)),
                      expandId: 'composable-nested-table-expandable-example'
                    }
                  : undefined
              }
            />
            <Td dataLabel={columnNames.name}>{repo.name}</Td>
            <Td dataLabel={columnNames.branches}>{repo.branches}</Td>
            <Td dataLabel={columnNames.prs}>{repo.prs}</Td>
            <Td dataLabel={columnNames.link}>{repo.link}</Td>
            <Td dataLabel={columnNames.action}>
              <ActionsColumn items={defaultActions(repo)} />
            </Td>
          </Tr>
          {repo.nestedComponent ? (
            <Tr isExpanded={isRepoExpanded(repo)}>
              <Td
                noPadding={repo.noPadding}
                dataLabel={`${columnNames.name} expended`}
                colSpan={Object.keys(columnNames).length + 1}
              >
                <ExpandableRowContent>{repo.nestedComponent}</ExpandableRowContent>
              </Td>
            </Tr>
          ) : null}
        </Tbody>
      ))}
    </TableComposable>
  );
};
