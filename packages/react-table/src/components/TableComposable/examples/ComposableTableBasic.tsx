import React from 'react';
import { ToggleGroup, ToggleGroupItem, ToggleGroupItemProps } from '@patternfly/react-core';
import { TableComposable, Caption, Thead, Tr, Th, Tbody, Td } from '@patternfly/react-table';

interface Repository {
  name: string;
  branches: string | null;
  prs: string | null;
  workspaces: string;
  lastCommit: string;
}

type ExampleType = 'default' | 'compact' | 'compactBorderless';

export const ComposableTableBasic: React.FunctionComponent = () => {
  // In real usage, this data would come from some external source like an API via props.
  const repositories: Repository[] = [
    { name: 'one', branches: 'two', prs: 'three', workspaces: 'four', lastCommit: 'five' },
    { name: 'one - 2', branches: null, prs: null, workspaces: 'four - 2', lastCommit: 'five - 2' },
    { name: 'one - 3', branches: 'two - 3', prs: 'three - 3', workspaces: 'four - 3', lastCommit: 'five - 3' }
  ];

  // This state is just for the ToggleGroup in this example and isn't necessary for TableComposable usage.
  const [exampleChoice, setExampleChoice] = React.useState<ExampleType>('default');
  const onExampleTypeChange: ToggleGroupItemProps['onChange'] = (_isSelected, event) => {
    const id = event.currentTarget.id;
    setExampleChoice(id as ExampleType);
  };

  return (
    <React.Fragment>
      <ToggleGroup aria-label="Default with single selectable">
        <ToggleGroupItem
          text="Default"
          buttonId="default"
          isSelected={exampleChoice === 'default'}
          onChange={onExampleTypeChange}
        />
        <ToggleGroupItem
          text="Compact"
          buttonId="compact"
          isSelected={exampleChoice === 'compact'}
          onChange={onExampleTypeChange}
        />
        <ToggleGroupItem
          text="Compact borderless"
          buttonId="compactBorderless"
          isSelected={exampleChoice === 'compactBorderless'}
          onChange={onExampleTypeChange}
        />
      </ToggleGroup>
      <TableComposable
        aria-label="Simple table"
        variant={exampleChoice !== 'default' ? 'compact' : null}
        borders={exampleChoice !== 'compactBorderless'}
      >
        <Caption>Simple table using composable components</Caption>
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
          {repositories.map(repo => (
            <Tr key={repo.name}>
              <Td dataLabel="Repositories">{repo.name}</Td>
              <Td dataLabel="Branches">{repo.branches}</Td>
              <Td dataLabel="Pull requests">{repo.prs}</Td>
              <Td dataLabel="Workspaces">{repo.workspaces}</Td>
              <Td dataLabel="Last commit">{repo.lastCommit}</Td>
            </Tr>
          ))}
        </Tbody>
      </TableComposable>
    </React.Fragment>
  );
};
