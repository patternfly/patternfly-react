import { FunctionComponent, HTMLProps, ReactNode } from 'react';

export interface DataListActionProps extends HTMLProps<HTMLDivElement> {
  'aria-labelledby': string;
  'aria-label': string;
  id: string;
  actions: ReactNode[];
}

declare const DataListAction: FunctionComponent<DataListActionProps>;

export default DataListAction;
