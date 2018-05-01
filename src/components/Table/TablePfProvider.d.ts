import { SFC } from 'react';

export interface TablePfProviderProps {
  className?: string;
  dataTable?: boolean;
  striped?: boolean;
  bordered?: boolean;
  hover?: boolean;
  condensed?: boolean;
  inlineEdit?: boolean;
  components?: any;
}
declare const TablePfProvider: SFC<TablePfProviderProps>;

export default TablePfProvider;
