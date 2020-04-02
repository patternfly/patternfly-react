/* eslint-disable no-console */
import * as React from 'react';
import { IRow, ICell, IActions, EditableTextCell } from '../components/Table';

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

export const editableColumns: (ICell | string)[] = [
  'Text input col 1',
  'Disabled text input col 2',
  'Text input col 3',
  'Text input col 4'
];

export const editableRows: IRow[] = [
  {
    isEditable: true,
    cells: [
      {
        title: (value: string, rowIndex: number, cellIndex: number, props: any) => (
          <EditableTextCell
            value={value}
            rowIndex={rowIndex}
            cellIndex={cellIndex}
            props={props}
            handleTextInputChange={() => {}}
            inputAriaLabel="Row 1 cell 1 content"
          />
        ),
        props: {
          value: 'Row 1 cell 1 content',
          name: 'uniqueIdRow1Cell1'
        }
      },
      {
        title: (value: string, rowIndex: number, cellIndex: number, props: any) => (
          <EditableTextCell
            value={value}
            rowIndex={rowIndex}
            cellIndex={cellIndex}
            props={props}
            isDisabled
            handleTextInputChange={() => {}}
            inputAriaLabel="Row 1 cell 2 content"
          />
        ),
        props: {
          value: 'Row 1 cell 2, disabled content',
          name: 'uniqueIdRow1Cell2'
        }
      },
      {
        title: (value: string, rowIndex: number, cellIndex: number, props: any) => (
          <EditableTextCell
            value={value}
            rowIndex={rowIndex}
            cellIndex={cellIndex}
            props={props}
            handleTextInputChange={() => {}}
            inputAriaLabel="Row 1 cell 3 content"
          />
        ),
        props: {
          value: 'Row 1 cell 3 content',
          name: 'uniqueIdRow1Cell3'
        }
      },
      {
        title: (value: string, rowIndex: number, cellIndex: number, props: any) => (
          <EditableTextCell
            value={value}
            rowIndex={rowIndex}
            cellIndex={cellIndex}
            props={props}
            handleTextInputChange={() => {}}
            inputAriaLabel="Row 1 cell 4 content"
          />
        ),
        props: {
          value: 'Row 1 cell 4 content',
          name: 'uniqueIdRow1Cell4'
        }
      }
    ]
  },
  {
    isEditable: false,
    cells: [
      {
        title: (value: string, rowIndex: number, cellIndex: number, props: any) => (
          <EditableTextCell
            value={value}
            rowIndex={rowIndex}
            cellIndex={cellIndex}
            props={props}
            handleTextInputChange={() => {}}
            inputAriaLabel="Row 1 cell 1 content"
          />
        ),
        props: {
          value: 'Row 2 cell 1 content',
          name: 'uniqueIdRow2Cell1'
        }
      },
      {
        title: (value: string, rowIndex: number, cellIndex: number, props: any) => (
          <EditableTextCell
            value={value}
            rowIndex={rowIndex}
            cellIndex={cellIndex}
            props={props}
            isDisabled
            handleTextInputChange={() => {}}
            inputAriaLabel="Row 2 cell 2 content"
          />
        ),
        props: {
          value: 'Row 2 cell 2, disabled content',
          name: 'uniqueIdRow2Cell2'
        }
      },
      {
        title: (value: string, rowIndex: number, cellIndex: number, props: any) => (
          <EditableTextCell
            value={value}
            rowIndex={rowIndex}
            cellIndex={cellIndex}
            props={props}
            handleTextInputChange={() => {}}
            inputAriaLabel="Row 2 cell 3 content"
          />
        ),
        props: {
          value: 'Row 2 cell 3 content',
          name: 'uniqueIdRow2Cell3'
        }
      },
      {
        title: (value: string, rowIndex: number, cellIndex: number, props: any) => (
          <EditableTextCell
            value={value}
            rowIndex={rowIndex}
            cellIndex={cellIndex}
            props={props}
            handleTextInputChange={() => {}}
            inputAriaLabel="Row 2 cell 4 content"
          />
        ),
        props: {
          value: 'Row 2 cell 4 content',
          name: 'uniqueIdRow2Cell4'
        }
      }
    ]
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
