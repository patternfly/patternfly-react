import { FunctionComponent, HTMLProps } from 'react';

export interface DataListActionProps extends HTMLProps<HTMLDivElement> {
  'aria-labelledby': string;
  'aria-label': string;
  id: string;
}

declare const DataListAction: FunctionComponent<DataListActionProps>;

export default DataListAction;
