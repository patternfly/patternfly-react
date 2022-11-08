import * as React from 'react';
import { ColumnsType } from "./base/types";
import { IHeaderRow, IRow } from './TableTypes';

export const TableContext = React.createContext({
  headerData: null as ColumnsType,
  headerRows: null as IHeaderRow[],
  rows: [] as (IRow | string[])[]
});
