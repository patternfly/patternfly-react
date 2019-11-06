/* eslint-disable no-console */
import * as React from 'react';
import { IRow, ICell, IActions } from '../components/Table/Table';

export const columns: (ICell | string)[] = [
  { title: 'Header cell' },
  'Branches',
  { title: 'Pull requests' },
  'Workspaces',
  {
    title: 'Last Commit'
  }
];

export const rows: IRow[] = [
  {
    cells: ['one', 'two', 'three', 'four', 'five']
  },
  {
    cells: ['one', 'two', 'three', 'four', 'five']
  },
  {
    cells: ['one', 'two', 'three', 'four', 'five']
  },
  {
    cells: ['one', 'two', 'three', 'four', 'five']
  },
  {
    cells: ['one', 'two', 'three', 'four', 'five']
  },
  {
    cells: ['one', 'two', 'three', 'four', 'five']
  },
  {
    cells: ['one', 'two', 'three', 'four', 'five']
  },
  {
    cells: ['one', 'two', 'three', 'four', 'five']
  },
  {
    cells: ['one', 'two', 'three', 'four', 'five']
  }
];

export const actions: IActions = [
  {
    title: 'Some action',
    onClick: (event: React.MouseEvent, rowId: number) =>
      // tslint:disable-next-line:no-console
      console.log('clicked on Some action, on row: ', rowId)
  },
  {
    title: <div>Another action</div>,
    onClick: (event: React.MouseEvent, rowId: number) =>
      // tslint:disable-next-line:no-console
      console.log('clicked on Another action, on row: ', rowId)
  },
  {
    isSeparator: true,
    onClick: null
  },
  {
    title: 'Third action',
    onClick: (event: React.MouseEvent, rowId: number) =>
      // tslint:disable-next-line:no-console
      console.log('clicked on Third action, on row: ', rowId)
  }
];
