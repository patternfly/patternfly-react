/* eslint-disable no-console */
import React from 'react';
import {
  Button,
  Checkbox,
  MenuToggle,
  ToggleGroup,
  ToggleGroupItem,
  ToggleGroupItemProps,
  Toolbar,
  ToolbarContent,
  ToolbarItem
} from '@patternfly/react-core';
import {
  CustomActionsToggleProps,
  fitContent,
  headerCol,
  IActions,
  IActionsResolver,
  TableText
} from '@patternfly/react-table';
import { Table, TableBody, TableHeader, TableProps } from '@patternfly/react-table/deprecated';

interface Repository {
  name: string;
  branches: string;
  prs: string;
  workspaces: string;
  lastCommit: string;
  singleAction: string;
}

type ExampleType = 'actions' | 'actionResolver';

export const LegacyTableActions: React.FunctionComponent = () => {
  // In real usage, this data would come from some external source like an API via props.
  const repositories: Repository[] = [
    { name: 'a', branches: 'two', prs: '1', workspaces: 'four', lastCommit: 'five', singleAction: 'Start' },
    { name: 'disable actions', branches: 'two', prs: '3', workspaces: 'four', lastCommit: 'five', singleAction: '' },
    { name: 'green actions', branches: 'two', prs: '4', workspaces: 'four', lastCommit: 'five', singleAction: 'Start' },
    {
      name: 'extra action props',
      branches: 'two',
      prs: '5',
      workspaces: 'four',
      lastCommit: 'five',
      singleAction: 'Start'
    },
    { name: 'blue actions', branches: 'two', prs: '6', workspaces: 'four', lastCommit: 'five', singleAction: 'Start' }
  ];

  // This state is just for the ToggleGroup in this example and isn't necessary for Table usage.
  const [propToUse, setPropToUse] = React.useState<ExampleType>('actions');
  const onPropToUseChange: ToggleGroupItemProps['onChange'] = (event, _isSelected) => {
    const id = event.currentTarget.id;
    setPropToUse(id as ExampleType);
  };

  const [useCustomToggle, setUseCustomToggle] = React.useState(false);

  const customActionsToggle = (props: CustomActionsToggleProps) => (
    <MenuToggle ref={props.toggleRef} onClick={props.onToggle} isDisabled={props.isDisabled}>
      Actions
    </MenuToggle>
  );

  const columns: TableProps['cells'] = [
    { title: 'Repositories', cellTransforms: [headerCol('actions')] },
    'Branches',
    'Pull requests',
    'Workspaces',
    'Last commit',
    { title: '', dataLabel: 'Action', cellTransforms: [fitContent] }
  ];

  const rows: TableProps['rows'] = repositories.map((repo) => {
    let singleActionButton: React.ReactNode = null;
    if (repo.singleAction !== '') {
      singleActionButton = (
        <TableText>
          <Button variant="secondary">{repo.singleAction}</Button>
        </TableText>
      );
    }

    const cells = [repo.name, repo.branches, repo.prs, repo.workspaces, repo.lastCommit, singleActionButton];

    // These rows have arbitrary differences for this example, but these could be based on some other conditions
    if (repo.name === 'disable actions') {
      return { cells, disableActions: true };
    }
    if (repo.name === 'green actions') {
      return { cells, type: 'green' };
    }
    if (repo.name === 'extra action props') {
      return { cells, actionProps: { 'data-specific-attr': 'some-value' } };
    }
    if (repo.name === 'blue actions') {
      return { cells, type: 'blue' };
    }
    return { cells };
  });

  const actions: IActions = [
    {
      title: 'Some action',
      onClick: (_event, rowId, rowData, extra) => console.log('clicked on Some action, on row: ', rowId, rowData, extra)
    },
    {
      title: <a href="#">Link action</a>
    },
    {
      isSeparator: true
    },
    {
      title: 'Third action',
      onClick: (_event, rowId, rowData, extra) =>
        console.log('clicked on Third action, on row: ', rowId, rowData, extra)
    }
  ];

  /**
   * Use actions or actionResolver, not both
   */
  const actionResolver: IActionsResolver = (rowData, { rowIndex }) => {
    if (rowIndex === 1) {
      return [];
    }

    const thirdAction: IActions = [
      {
        isSeparator: true
      },
      {
        title: `${rowData.type} action`,
        onClick: (_event, rowId, rowData, extra) =>
          console.log(`clicked on ${rowData.type} action, on row ${rowId} of type ${rowData.type}`, extra)
      }
    ];

    return [
      {
        title: 'actionResolver action',
        onClick: (_event, rowId, rowData, extra) =>
          console.log(`clicked on Some action, on row ${rowId} of type ${rowData.type}`, extra)
      },
      {
        title: <div>Another action</div>,
        onClick: (_event, rowId, rowData, extra) =>
          console.log(`clicked on Another action, on row ${rowId} of type ${rowData.type}`, extra)
      },
      ...(rowData.type ? thirdAction : [])
    ];
  };

  return (
    <React.Fragment>
      <Toolbar>
        <ToolbarContent>
          <ToolbarItem>
            <ToggleGroup aria-label="actions or actionResolver">
              <ToggleGroupItem
                text="Use actions prop"
                buttonId="actions"
                isSelected={propToUse === 'actions'}
                onChange={onPropToUseChange}
              />
              <ToggleGroupItem
                text="Use actionResolver prop"
                buttonId="actionResolver"
                isSelected={propToUse === 'actionResolver'}
                onChange={onPropToUseChange}
              />
            </ToggleGroup>
          </ToolbarItem>
          <ToolbarItem>
            <Checkbox
              label="Use custom actions toggle"
              isChecked={useCustomToggle}
              onChange={(_event, checked) => setUseCustomToggle(checked)}
              aria-label="toggle use of custom actions toggle"
              id="toggle-custom-actions-toggle"
              name="toggle-custom-actions-toggle"
            />
          </ToolbarItem>
        </ToolbarContent>
      </Toolbar>
      <Table
        aria-label="Actions table"
        cells={columns}
        rows={rows}
        {...(propToUse === 'actions' && { actions })}
        {...(propToUse === 'actionResolver' && { actionResolver })}
        areActionsDisabled={(rowData) => !!rowData.disableActions}
        dropdownPosition="left"
        dropdownDirection="down"
        actionsToggle={useCustomToggle ? customActionsToggle : undefined}
      >
        <TableHeader />
        <TableBody />
      </Table>
    </React.Fragment>
  );
};
