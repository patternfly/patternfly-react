import { createContext } from 'react';
import { IHeaderRow, IRow } from '../../../components';
import { ColumnsType } from '../../../components/Table/base/types';

export const TableContext = createContext({
  headerData: null as ColumnsType,
  headerRows: null as IHeaderRow[],
  rows: [] as (IRow | string[])[]
});
