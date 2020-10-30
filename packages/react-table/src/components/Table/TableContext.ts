import * as React from 'react';
import { IHeaderRow, IRow } from './Table';
import { ColumnsType } from './base';

export const TableContext = React.createContext({
  headerData: null as ColumnsType,
  headerRows: null as IHeaderRow[],
  rows: [] as (IRow | string[])[]
});
