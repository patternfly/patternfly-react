/* eslint-disable no-console */
import React from 'react';
import {
  Button,
  OverflowMenu,
  OverflowMenuControl,
  OverflowMenuContent,
  OverflowMenuGroup,
  OverflowMenuItem,
  OverflowMenuDropdownItem,
  MenuToggle,
  Dropdown,
  DropdownList
} from '@patternfly/react-core';
import { Table, Thead, Tr, Th, Tbody, Td } from '@patternfly/react-table';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';

interface Repository {
  name: string;
  branches: string;
  prs: string;
  workspaces: string;
  lastCommit: string;
  isMenuOpen: boolean;
}

export const TableActions: React.FunctionComponent = () => {
  // In real usage, this data would come from some external source like an API via props.
  const repositories: Repository[] = [
    { name: 'one', branches: 'two', prs: 'a', workspaces: 'four', lastCommit: 'five', isMenuOpen: false },
    { name: 'a', branches: 'two', prs: 'k', workspaces: 'four', lastCommit: 'five', isMenuOpen: false },
    { name: 'p', branches: 'two', prs: 'b', workspaces: 'four', lastCommit: 'five', isMenuOpen: false },
    { name: '4', branches: '2', prs: 'b', workspaces: 'four', lastCommit: 'five', isMenuOpen: false },
    { name: '5', branches: '2', prs: 'b', workspaces: 'four', lastCommit: 'five', isMenuOpen: false }
  ];

  const [repos, setRepos] = React.useState(repositories);

  const columnNames = {
    name: 'Repositories',
    branches: 'Branches',
    prs: 'Pull requests',
    workspaces: 'Workspaces',
    lastCommit: 'Last commit'
  };

  const dropdownItems = [
    <OverflowMenuDropdownItem itemId={0} key="item1" isShared>
      Pimary
    </OverflowMenuDropdownItem>,
    <OverflowMenuDropdownItem itemId={1} key="item2" isShared>
      Secondary
    </OverflowMenuDropdownItem>,
    <OverflowMenuDropdownItem itemId={2} key="item3" isShared>
      Tertiary
    </OverflowMenuDropdownItem>
  ];

  return (
    <React.Fragment>
      <Table aria-label="Actions table">
        <Thead>
          <Tr>
            <Th>{columnNames.name}</Th>
            <Th>{columnNames.branches}</Th>
            <Th>{columnNames.prs}</Th>
            <Th>{columnNames.workspaces}</Th>
            <Th>{columnNames.lastCommit}</Th>
            <Th screenReaderText="Actions" />
          </Tr>
        </Thead>
        <Tbody>
          {repos.map((repo) => (
            <Tr key={repo.name}>
              <Td dataLabel={columnNames.name}>{repo.name}</Td>
              <Td dataLabel={columnNames.branches}>{repo.branches}</Td>
              <Td dataLabel={columnNames.prs}>{repo.prs}</Td>
              <Td dataLabel={columnNames.workspaces}>{repo.workspaces}</Td>
              <Td dataLabel={columnNames.lastCommit}>{repo.lastCommit}</Td>
              <Td isActionCell>
                <OverflowMenu breakpoint="lg">
                  <OverflowMenuContent>
                    <OverflowMenuGroup groupType="button">
                      <OverflowMenuItem>
                        <Button variant="primary">Primary</Button>
                      </OverflowMenuItem>
                      <OverflowMenuItem>
                        <Button variant="secondary">Secondary</Button>
                      </OverflowMenuItem>
                      <OverflowMenuItem>
                        <Button variant="tertiary">Tertiary</Button>
                      </OverflowMenuItem>
                    </OverflowMenuGroup>
                  </OverflowMenuContent>
                  <OverflowMenuControl>
                    <Dropdown
                      onSelect={() =>
                        setRepos(repos.map((r) => (r.name !== repo.name ? r : { ...r, isMenuOpen: !r.isMenuOpen })))
                      }
                      toggle={(toggleRef) => (
                        <MenuToggle
                          ref={toggleRef}
                          variant="plain"
                          aria-label="Table actions overflow menu"
                          onClick={() =>
                            setRepos(repos.map((r) => (r.name !== repo.name ? r : { ...r, isMenuOpen: !r.isMenuOpen })))
                          }
                          isExpanded={repo.isMenuOpen}
                        >
                          <EllipsisVIcon />
                        </MenuToggle>
                      )}
                      isOpen={repo.isMenuOpen}
                      onOpenChange={(isOpen) =>
                        setRepos(repos.map((r) => (r.name !== repo.name ? r : { ...r, isMenuOpen: isOpen })))
                      }
                    >
                      <DropdownList>{dropdownItems}</DropdownList>
                    </Dropdown>
                  </OverflowMenuControl>
                </OverflowMenu>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </React.Fragment>
  );
};
