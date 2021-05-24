import * as React from 'react';
import { IHeaderRow, IRow } from './TableTypes';
import { ColumnsType } from './base';

export const TableContext = React.createContext({
  headerData: null as ColumnsType,
  headerRows: null as IHeaderRow[],
  rows: [] as (IRow | string[])[]
});

export const TableFocusContext = React.createContext({
  isTreeTable: false,
  isFocusInRow: false,
  setIsFocusInRow: () => {},
  focusableRowIndex: 0 as number,
  setFocusableRowIndex: () => {}
});
