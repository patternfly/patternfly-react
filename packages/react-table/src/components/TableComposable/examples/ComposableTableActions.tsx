/* eslint-disable no-console */
import React from 'react';
import { Button, DropdownToggle, ToggleGroup, ToggleGroupItem, ToggleGroupItemProps } from '@patternfly/react-core';
import {
  TableComposable,
  TableText,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  CustomActionsToggleProps,
  ActionsColumn,
  IAction
} from '@patternfly/react-table';

interface Repository {
  name: string;
  branches: string;
  prs: string;
  workspaces: string;
  lastCommit: string;
  singleAction: string;
}

type ExampleType = 'defaultToggle' | 'customToggle';

export const ComposableTableActions: React.FunctionComponent = () => {
  // In real usage, this data would come from some external source like an API via props.
  const repositories: Repository[] = [
    { name: 'one', branches: 'two', prs: 'a', workspaces: 'four', lastCommit: 'five', singleAction: 'Start' },
    { name: 'a', branches: 'two', prs: 'k', workspaces: 'four', lastCommit: 'five', singleAction: '' },
    { name: 'p', branches: 'two', prs: 'b', workspaces: 'four', lastCommit: 'five', singleAction: 'Start' },
    { name: '4', branches: '2', prs: 'b', workspaces: 'four', lastCommit: 'five', singleAction: 'Start' },
    { name: '5', branches: '2', prs: 'b', workspaces: 'four', lastCommit: 'five', singleAction: 'Start' }
  ];

  const columnNames = {
    name: 'Repositories',
    branches: 'Branches',
    prs: 'Pull requests',
    workspaces: 'Workspaces',
    lastCommit: 'Last commit',
    singleAction: 'Single action'
  };

  // This state is just for the ToggleGroup in this example and isn't necessary for TableComposable usage.
  const [exampleChoice, setExampleChoice] = React.useState<ExampleType>('defaultToggle');
  const onExampleTypeChange: ToggleGroupItemProps['onChange'] = (_isSelected, event) => {
    const id = event.currentTarget.id;
    setExampleChoice(id as ExampleType);
  };

  const customActionsToggle = (props: CustomActionsToggleProps) => (
    <DropdownToggle onToggle={props.onToggle} isDisabled={props.isDisabled}>
      Actions
    </DropdownToggle>
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

  const lastRowActions = (repo: Repository): IAction[] => [
    {
      title: 'Some action',
      onClick: () => console.log(`clicked on Some action, on row ${repo.name}`)
    },
    {
      title: <div>Another action</div>,
      onClick: () => console.log(`clicked on Another action, on row ${repo.name}`)
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
    <React.Fragment>
      <ToggleGroup aria-label="Default uses kebab toggle">
        <ToggleGroupItem
          text="Default actions toggle"
          buttonId="defaultToggle"
          isSelected={exampleChoice === 'defaultToggle'}
          onChange={onExampleTypeChange}
        />
        <ToggleGroupItem
          text="Custom actions toggle"
          buttonId="customToggle"
          isSelected={exampleChoice === 'customToggle'}
          onChange={onExampleTypeChange}
        />
      </ToggleGroup>
      <TableComposable aria-label="Actions table">
        <Thead>
          <Tr>
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
          {repositories.map(repo => {
            // Arbitrary logic to determine which rows get which actions in this example
            let rowActions: IAction[] | null = defaultActions(repo);
            if (repo.name === 'a') {
              rowActions = null;
            }
            if (repo.name === '5') {
              rowActions = lastRowActions(repo);
            }
            let singleActionButton = null;
            if (repo.singleAction !== '') {
              singleActionButton = (
                <TableText>
                  <Button variant="secondary">{repo.singleAction}</Button>
                </TableText>
              );
            }

            return (
              <Tr key={repo.name}>
                <Td dataLabel={columnNames.name}>{repo.name}</Td>
                <Td dataLabel={columnNames.branches}>{repo.branches}</Td>
                <Td dataLabel={columnNames.prs}>{repo.prs}</Td>
                <Td dataLabel={columnNames.workspaces}>{repo.workspaces}</Td>
                <Td dataLabel={columnNames.lastCommit}>{repo.lastCommit}</Td>
                <Td dataLabel={columnNames.singleAction} modifier="fitContent">
                  {singleActionButton}
                </Td>
                <Td isActionCell>
                  {rowActions ? (
                    <ActionsColumn
                      items={rowActions}
                      isDisabled={repo.name === '4'} // Also arbitrary for the example
                      actionsToggle={exampleChoice === 'customToggle' ? customActionsToggle : undefined}
                    />
                  ) : null}
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </TableComposable>
    </React.Fragment>
  );
};
