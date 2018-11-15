import { SFC, HTMLProps } from 'react';

export interface DataListActionProps extends HTMLProps<HTMLDivElement> {
  'aria-labelledby': string;
  'aria-label': string;
  id: string;
}

declare const DataListAction: SFC<DataListActionProps>;

export default DataListAction;
