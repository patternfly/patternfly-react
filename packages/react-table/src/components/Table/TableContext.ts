import * as React from 'react';
import { IHeaderRow, IRow } from './TableTypes';
import { ColumnsType } from './base';

export const TableContext = React.createContext({
  headerData: null as ColumnsType,
  headerRows: null as IHeaderRow[],
  rows: [] as (IRow | string[])[]
});
