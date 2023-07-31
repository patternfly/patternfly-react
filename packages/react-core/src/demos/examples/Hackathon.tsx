/* eslint-disable no-console */
import React from 'react';
import {
  Modal,
  PageSection,
  Toolbar,
  ToolbarContent,
  ToolbarGroup,
  ToolbarItem,
  Flex,
  FlexItem,
  Button
} from '@patternfly/react-core';
import {
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  ActionsColumn,
  IAction,
  CustomActionsToggleProps
} from '@patternfly/react-table';
import CodeIcon from '@patternfly/react-icons/dist/esm/icons/code-icon';
import CodeBranchIcon from '@patternfly/react-icons/dist/esm/icons/code-branch-icon';
import CubeIcon from '@patternfly/react-icons/dist/esm/icons/cube-icon';
import ColumnsIcon from '@patternfly/react-icons/dist/esm/icons/columns-icon';
import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';
import EllipsisHIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-h-icon';
import DashboardWrapper from './DashboardWrapper';
import { ToolbarDropdown } from './DashboardHeader';

interface Repository {
  name: string;
  branches: string;
  prs: string;
  workspaces: string;
  lastCommit: string;
  action: React.ReactNode;
}

const ActionLink = <a href="#">Action link</a>;

export const TableSelectable: React.FunctionComponent = () => {
  // In real usage, this data would come from some external source like an API via props.
  const repositories: Repository[] = [
    { name: 'Node 1', branches: '10', prs: '25', workspaces: '5', lastCommit: '2 days ago', action: ActionLink },
    { name: 'Node 2', branches: '8', prs: '30', workspaces: '2', lastCommit: '2 days ago', action: ActionLink },
    { name: 'Node 3', branches: '12', prs: '48', workspaces: '13', lastCommit: '30 days ago', action: ActionLink },
    { name: 'Node 4', branches: '3', prs: '8', workspaces: '20', lastCommit: '8 days ago', action: ActionLink },
    { name: 'Node 5', branches: '34', prs: '21', workspaces: '26', lastCommit: '2 days ago', action: ActionLink }
  ];

  const columnNames = {
    name: 'Repositories',
    branches: 'Branches',
    prs: 'Pull requests',
    workspaces: 'Workspaces',
    lastCommit: 'Last commit',
    action: 'Action'
  };

  const isRepoSelectable = (repo: Repository) => repo.name !== 'a'; // Arbitrary logic for this example
  const selectableRepos = repositories.filter(isRepoSelectable);

  // In this example, selected rows are tracked by the repo names from each row. This could be any unique identifier.
  // This is to prevent state from being based on row order index in case we later add sorting.
  const [selectedRepoNames, setSelectedRepoNames] = React.useState<string[]>([]);
  const setRepoSelected = (repo: Repository, isSelecting = true) =>
    setSelectedRepoNames((prevSelected) => {
      const otherSelectedRepoNames = prevSelected.filter((r) => r !== repo.name);
      return isSelecting && isRepoSelectable(repo) ? [...otherSelectedRepoNames, repo.name] : otherSelectedRepoNames;
    });
  const selectAllRepos = (isSelecting = true) =>
    setSelectedRepoNames(isSelecting ? selectableRepos.map((r) => r.name) : []);
  const areAllReposSelected = selectedRepoNames.length === selectableRepos.length;
  const isRepoSelected = (repo: Repository) => selectedRepoNames.includes(repo.name);

  // To allow shift+click to select/deselect multiple rows
  const [recentSelectedRowIndex, setRecentSelectedRowIndex] = React.useState<number | null>(null);
  const [shifting, setShifting] = React.useState(false);

  const onSelectRepo = (repo: Repository, rowIndex: number, isSelecting: boolean) => {
    // If the user is shift + selecting the checkboxes, then all intermediate checkboxes should be selected
    if (shifting && recentSelectedRowIndex !== null) {
      const numberSelected = rowIndex - recentSelectedRowIndex;
      const intermediateIndexes =
        numberSelected > 0
          ? Array.from(new Array(numberSelected + 1), (_x, i) => i + recentSelectedRowIndex)
          : Array.from(new Array(Math.abs(numberSelected) + 1), (_x, i) => i + rowIndex);
      intermediateIndexes.forEach((index) => setRepoSelected(repositories[index], isSelecting));
    } else {
      setRepoSelected(repo, isSelecting);
    }
    setRecentSelectedRowIndex(rowIndex);
  };

  React.useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Shift') {
        setShifting(true);
      }
    };
    const onKeyUp = (e: KeyboardEvent) => {
      if (e.key === 'Shift') {
        setShifting(false);
      }
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('keyup', onKeyUp);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('keyup', onKeyUp);
    };
  }, []);

  const ModalButton = ({ variant, children }: { variant?: "primary" | "link", children: React.ReactNode}) => {
    const [isModalOpen, setIsModalOpen] = React.useState(false);
  
    const handleModalToggle = (_event: KeyboardEvent | React.MouseEvent) => {
      setIsModalOpen(!isModalOpen);
    };
  
    return (
      <ToolbarItem>
        <Button variant={variant ? variant : 'plain'} onClick={handleModalToggle} ouiaId="ShowBasicModal">
          {children}
        </Button>
        <Modal
          title="Basic modal"
          isOpen={isModalOpen}
          onClose={handleModalToggle}
          actions={[
            <Button key="confirm" variant="primary" onClick={handleModalToggle}>
              Confirm
            </Button>,
            <Button key="cancel" variant="link" onClick={handleModalToggle}>
              Cancel
            </Button>
          ]}
          ouiaId="BasicModal"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </Modal>
      </ToolbarItem>
    );
  };

  const toolbar = (
    <Toolbar id="toolbar" inset={{ default: 'insetNone' }}>
      <ToolbarContent>
        <ToolbarGroup>
          <ToolbarDropdown>Dropdown menu</ToolbarDropdown>
          <ToolbarDropdown>Another one</ToolbarDropdown>
        </ToolbarGroup>
        <ToolbarGroup className="pf-m-align-right">
          <ToolbarGroup variant="icon-button-group">
            <ModalButton><ColumnsIcon /></ModalButton>
            <ModalButton><CogIcon /></ModalButton>
          </ToolbarGroup>
          <ModalButton variant='primary'>Primary</ModalButton>
        </ToolbarGroup>
      </ToolbarContent>
    </Toolbar>
  );

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

  const customActionsToggle = (props: CustomActionsToggleProps) => (
    <Button ref={props.toggleRef} onClick={props.onToggle} isDisabled={props.isDisabled} variant="plain">
      <EllipsisHIcon />
    </Button>
  );

  const CustomTd = ({ columnName, icon, children }: { columnName: string, icon: React.ReactNode, children: React.ReactNode}) => (
    <Td dataLabel={columnName}>
      <Flex spaceItems={{ default: 'spaceItemsSm' }}>
        <FlexItem>{icon}</FlexItem>
        <FlexItem>{children}</FlexItem>
      </Flex>
    </Td>
  );

  const table = (
    <Table aria-label="Selectable table">
      <Thead>
        <Tr>
          <Th
            select={{
              onSelect: (_event: any, isSelecting: boolean) => selectAllRepos(isSelecting),
              isSelected: areAllReposSelected
            }}
          />
          <Th>{columnNames.name}</Th>
          <Th>{columnNames.branches}</Th>
          <Th>{columnNames.prs}</Th>
          <Th>{columnNames.workspaces}</Th>
          <Th>{columnNames.lastCommit}</Th>
          <Td></Td>
          <Td></Td>
        </Tr>
      </Thead>
      <Tbody>
        {repositories.map((repo, rowIndex) => {
          const rowActions = defaultActions(repo);

          return (
            <Tr key={repo.name}>
              <Td
                select={{
                  rowIndex,
                  onSelect: (_event: any, isSelecting: boolean) => onSelectRepo(repo, rowIndex, isSelecting),
                  isSelected: isRepoSelected(repo),
                  isDisabled: !isRepoSelectable(repo)
                }}
              />
              <Td dataLabel={columnNames.name}>{repo.name}</Td>
              <CustomTd columnName={columnNames.branches} icon={<CodeBranchIcon />}>
                {repo.branches}
              </CustomTd>
              <CustomTd columnName={columnNames.prs} icon={<CodeIcon />}>
                {repo.prs}
              </CustomTd>
              <CustomTd columnName={columnNames.workspaces} icon={<CubeIcon />}>
                {repo.workspaces}
              </CustomTd>
              <Td dataLabel={columnNames.lastCommit}>{repo.lastCommit}</Td>
              <Td dataLabel={columnNames.action}>{repo.action}</Td>
              <Td isActionCell>
                <ActionsColumn
                  items={rowActions}
                  isDisabled={repo.name === '4'} // Also arbitrary for the example
                  actionsToggle={customActionsToggle}
                />
              </Td>
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );

  return (
    <DashboardWrapper hasPageTemplateTitle>
      <PageSection isWidthLimited>
        {toolbar}
        {table}
      </PageSection>
    </DashboardWrapper>
  );
};
