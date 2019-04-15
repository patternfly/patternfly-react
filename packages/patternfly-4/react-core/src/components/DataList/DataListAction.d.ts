import { FunctionComponent, HTMLProps, ReactNode } from 'react';
import { Omit } from '../../helpers/typeUtils';

export interface DataListActionProps extends Omit<HTMLProps<HTMLDivElement>, 'children'> {
  children: ReactNode | Array<ReactNode>;
  'aria-labelledby': string;
  'aria-label': string;
  id: string;
}

declare const DataListAction: FunctionComponent<DataListActionProps>;

export default DataListAction;
