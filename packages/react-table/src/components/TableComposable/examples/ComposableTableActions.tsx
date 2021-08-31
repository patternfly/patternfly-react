/* eslint-disable no-console */
import React from 'react';
import {
  ButtonVariant,
  DropdownToggle,
  ToggleGroup,
  ToggleGroupItem,
  ToggleGroupItemProps
} from '@patternfly/react-core';
import { TableComposable, Thead, Tr, Th, Tbody, Td, CustomActionsToggleProps, TdProps } from '@patternfly/react-table';

interface Repository {
  name: string;
  branches: string | null;
  prs: string | null;
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

  const defaultActions: TdProps['actions']['items'] = [
    {
      title: 'Some action',
      onClick: (_event, rowIndex, _rowData, _extra) => console.log(`clicked on Some action, on row ${rowIndex}`)
    },
    {
      title: <a href="https://www.patternfly.org">Link action</a>
    },
    {
      isSeparator: true
    },
    {
      title: 'Third action',
      onClick: (_event, rowIndex, _rowData, _extra) => console.log(`clicked on Third action, on row ${rowIndex}`)
    },
    {
      title: 'Start',
      variant: ButtonVariant.secondary,
      onClick: (_event, rowIndex, _rowData, _extra) => console.log(`clicked on extra action, on row ${rowIndex}`),
      isOutsideDropdown: true
    }
  ];

  const lastRowActions: TdProps['actions']['items'] = [
    {
      title: 'Some action',
      onClick: (_event, rowIndex, _rowData, _extra) => console.log(`clicked on Some action, on row ${rowIndex}`)
    },
    {
      title: <div>Another action</div>,
      onClick: (_event, rowIndex, _rowData, _extra) => console.log(`clicked on Another action, on row ${rowIndex}`)
    },
    {
      isSeparator: true
    },
    {
      title: 'Third action',
      onClick: (_event, rowIndex, _rowData, _extra) => console.log(`clicked on Third action, on row ${rowIndex}`)
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
            <Th>Repositories</Th>
            <Th>Branches</Th>
            <Th>Pull requests</Th>
            <Th>Workspaces</Th>
            <Th>Last commit</Th>
          </Tr>
        </Thead>
        <Tbody>
          {repositories.map(repo => {
            // Arbitrary logic to determine which rows get which actions in this example
            let rowActions: TdProps['actions']['items'] = defaultActions;
            if (repo.name === 'a') {
              rowActions = null;
            }
            if (repo.name === '5') {
              rowActions = lastRowActions;
            }
            return (
              <Tr key={repo.name}>
                <Td dataLabel="Repositories">{repo.name}</Td>
                <Td dataLabel="Branches">{repo.branches}</Td>
                <Td dataLabel="Pull requests">{repo.prs}</Td>
                <Td dataLabel="Workspaces">{repo.workspaces}</Td>
                <Td dataLabel="Last commit">{repo.lastCommit}</Td>
                <Td
                  actions={{
                    items: rowActions,
                    disable: repo.name === '4', // Also arbitrary for the example
                    actionsToggle: exampleChoice === 'customToggle' ? customActionsToggle : undefined
                  }}
                />
              </Tr>
            );
          })}
        </Tbody>
      </TableComposable>
    </React.Fragment>
  );
};
