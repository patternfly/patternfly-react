import * as React from 'react';
import { ColumnsType, IHeaderRow, IRow } from './base';

export const TableContext = React.createContext({
  headerData: null as ColumnsType,
  headerRows: null as IHeaderRow[],
  rows: [] as (IRow | string[])[]
});
