import React from 'react';
import { Table, TableHeader, TableBody, TableProps } from '@patternfly/react-table/deprecated';
import { ToggleGroup, ToggleGroupItem, ToggleGroupItemProps } from '@patternfly/react-core';
interface Repository {
  name: string;
  branches: string;
  prs: string;
  workspaces: string;
  lastCommit: string;
}

type ExampleType = 'default' | 'compact' | 'compactBorderless';

export const LegacyTableBasic: React.FunctionComponent = () => {
  // In real usage, this data would come from some external source like an API via props.
  const repositories: Repository[] = [
    {
      name: 'Repository one',
      branches: 'Branch one',
      prs: 'PR one',
      workspaces: 'Workspace one',
      lastCommit: 'Commit one'
    },
    {
      name: 'Repository two',
      branches: 'Branch two',
      prs: 'PR two',
      workspaces: 'Workspace two',
      lastCommit: 'Commit two'
    },
    {
      name: 'Repository three',
      branches: 'Branch three',
      prs: 'PR three',
      workspaces: 'Workspace three',
      lastCommit: 'Commit three'
    }
  ];

  // This state is just for the ToggleGroup in this example and isn't necessary for table usage.
  const [exampleChoice, setExampleChoice] = React.useState<ExampleType>('default');
  const onExampleTypeChange: ToggleGroupItemProps['onChange'] = (event, _isSelected) => {
    const id = event.currentTarget.id;
    setExampleChoice(id as ExampleType);
  };

  const columns: TableProps['cells'] = ['Repositories', 'Branches', 'Pull requests', 'Workspaces', 'Last commit'];
  const rows: TableProps['rows'] = repositories.map((repo) => [
    repo.name,
    repo.branches,
    repo.prs,
    repo.workspaces,
    repo.lastCommit
  ]);

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
      <Table
        aria-label="Simple Table"
        variant={exampleChoice !== 'default' ? 'compact' : undefined}
        borders={exampleChoice !== 'compactBorderless'}
        cells={columns}
        rows={rows}
      >
        <TableHeader />
        <TableBody />
      </Table>
    </React.Fragment>
  );
};
