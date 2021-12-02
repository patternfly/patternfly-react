/* eslint-disable no-console */
import React from 'react';
import {
  ButtonVariant,
  Checkbox,
  DropdownToggle,
  ToggleGroup,
  ToggleGroupItem,
  ToggleGroupItemProps,
  Toolbar,
  ToolbarContent,
  ToolbarItem
} from '@patternfly/react-core';
import {
  CustomActionsToggleProps,
  headerCol,
  TableProps,
  IAction,
  IActions,
  IActionsResolver,
  Table,
  TableBody,
  TableHeader
} from '@patternfly/react-table';

interface Repository {
  name: string;
  branches: string;
  prs: string;
  workspaces: string;
  lastCommit: string;
}

type ExampleType = 'actions' | 'actionResolver';

export const LegacyTableActions: React.FunctionComponent = () => {
  // In real usage, this data would come from some external source like an API via props.
  const repositories: Repository[] = [
    { name: 'a', branches: 'two', prs: '1', workspaces: 'four', lastCommit: 'five' },
    { name: 'disable actions', branches: 'two', prs: '3', workspaces: 'four', lastCommit: 'five' },
    { name: 'green actions', branches: 'two', prs: '4', workspaces: 'four', lastCommit: 'five' },
    { name: 'extra action props', branches: 'two', prs: '5', workspaces: 'four', lastCommit: 'five' },
    { name: 'blue actions', branches: 'two', prs: '6', workspaces: 'four', lastCommit: 'five' }
  ];

  // This state is just for the ToggleGroup in this example and isn't necessary for Table usage.
  const [propToUse, setPropToUse] = React.useState<ExampleType>('actions');
  const onPropToUseChange: ToggleGroupItemProps['onChange'] = (_isSelected, event) => {
    const id = event.currentTarget.id;
    setPropToUse(id as ExampleType);
  };

  const [useCustomToggle, setUseCustomToggle] = React.useState(false);
  const [useExtraAction, setUseExtraAction] = React.useState(false);

  const customActionsToggle = (props: CustomActionsToggleProps) => (
    <DropdownToggle onToggle={props.onToggle} isDisabled={props.isDisabled}>
      Actions
    </DropdownToggle>
  );

  const columns: TableProps['cells'] = [
    { title: 'Repositories', cellTransforms: [headerCol()] },
    'Branches',
    'Pull requests',
    'Workspaces',
    'Last commit'
  ];
  const rows: TableProps['rows'] = repositories.map(repo => {
    const cells = [repo.name, repo.branches, repo.prs, repo.workspaces, repo.lastCommit];
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

  /**
   * Use actions or actionResolver, not both
   */
  const extraAction: IAction = {
    title: 'Start',
    variant: ButtonVariant.secondary,
    onClick: (_event, rowId, rowData, extra) => console.log('clicked on extra action on row: ', rowId, rowData, extra),
    isOutsideDropdown: true
  };
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
    },
    ...(useExtraAction ? [extraAction] : [])
  ];

  /**
   * Use actions or actionResolver, not both
   */
  const actionResolver: IActionsResolver = (rowData, { rowIndex }) => {
    if (rowIndex === 1) {
      return [];
    }

    const extraAction: IActions = [
      {
        title: 'Start',
        variant: ButtonVariant.secondary,
        onClick: (_event, rowId, rowData, extra) =>
          console.log('clicked on extra action on row: ', rowId, rowData, extra),
        isOutsideDropdown: true
      }
    ];

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
      ...(useExtraAction ? extraAction : []),
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
              onChange={setUseCustomToggle}
              aria-label="toggle use of custom actions toggle"
              id="toggle-custom-actions-toggle"
              name="toggle-custom-actions-toggle"
            />
          </ToolbarItem>
          <ToolbarItem>
            <Checkbox
              label="Add extra actions"
              isChecked={useExtraAction}
              onChange={setUseExtraAction}
              aria-label="toggle extra actions"
              id="toggle-extra-action"
              name="toggle-extra-action"
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
        areActionsDisabled={rowData => !!rowData.disableActions}
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
