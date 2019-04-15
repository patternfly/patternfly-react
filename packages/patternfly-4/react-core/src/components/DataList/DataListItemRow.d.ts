import { FunctionComponent, HTMLProps, ReactNode } from 'react';
import { Omit } from '../../helpers/typeUtils';

export interface DataListItemRowProps extends Omit<HTMLProps<HTMLDivElement>, 'children'> {
  children: ReactNode | Array<ReactNode>;
}

declare const DataListItemRow: FunctionComponent<DataListItemRowProps>;

export default DataListItemRow;
