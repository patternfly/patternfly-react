import { FunctionComponent, HTMLProps, ReactNode } from 'react';

export interface DataListItemContentProps extends HTMLProps<HTMLDivElement> {
  dataListCells: Array<ReactNode>;
}

declare const DataListItemCells: FunctionComponent<DataListItemContentProps>;

export default DataListItemCells;
