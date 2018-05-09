import { ReactNode } from 'react';

export interface SelectionCellRowData {
  selected?: boolean;
  [key: string]: any;
}

declare function selectionCellFormatter(
  props: { rowData: SelectionCellRowData; rowIndex: number },
  onSelectRow?: (event: any, rowData: SelectionCellRowData) => void,
  id?: string,
  label?: string
): ReactNode;

export default selectionCellFormatter;
