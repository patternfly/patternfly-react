/* eslint-disable no-console */
import React from 'react';
import {
  ButtonVariant,
  DropdownToggle,
  ToggleGroup,
  ToggleGroupItem,
  ToggleGroupItemProps
} from '@patternfly/react-core';
import {
  TableComposable,
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
}

type ExampleType = 'defaultToggle' | 'customToggle';

export const ComposableTableActions: React.FunctionComponent = () => {
  // In real usage, this data would come from some external source like an API via props.
  const repositories: Repository[] = [
    { name: 'one', branches: 'two', prs: 'a', workspaces: 'four', lastCommit: 'five' },
    { name: 'a', branches: 'two', prs: 'k', workspaces: 'four', lastCommit: 'five' },
    { name: 'p', branches: 'two', prs: 'b', workspaces: 'four', lastCommit: 'five' },
    { name: '4', branches: '2', prs: 'b', workspaces: 'four', lastCommit: 'five' },
    { name: '5', branches: '2', prs: 'b', workspaces: 'four', lastCommit: 'five' }
  ];

  const columnNames = {
    name: 'Repositories',
    branches: 'Branches',
    prs: 'Pull requests',
    workspaces: 'Workspaces',
    lastCommit: 'Last commit'
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
    },
    {
      title: 'Start',
      variant: ButtonVariant.secondary,
      onClick: () => console.log(`clicked on extra action, on row ${repo.name}`),
      isOutsideDropdown: true
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
          </Tr>
        </Thead>
        <Tbody>
          {repositories.map(repo => {
            // Arbitrary logic to determine which rows get which actions in this example
            let rowActions = defaultActions(repo);
            if (repo.name === 'a') {
              rowActions = null;
            }
            if (repo.name === '5') {
              rowActions = lastRowActions(repo);
            }
            return (
              <Tr key={repo.name}>
                <Td dataLabel={columnNames.name}>{repo.name}</Td>
                <Td dataLabel={columnNames.branches}>{repo.branches}</Td>
                <Td dataLabel={columnNames.prs}>{repo.prs}</Td>
                <Td dataLabel={columnNames.workspaces}>{repo.workspaces}</Td>
                <Td dataLabel={columnNames.lastCommit}>{repo.lastCommit}</Td>
                <Td>
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
