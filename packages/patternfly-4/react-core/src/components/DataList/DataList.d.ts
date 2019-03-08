import { FunctionComponent, HTMLProps } from 'react';
import { Omit } from '../../helpers/typeUtils';

export interface DataListProps extends Omit<HTMLProps<HTMLUListElement>, 'aria-label'> {
  'aria-label': string;
}

declare const DataList: FunctionComponent<DataListProps>;

export default DataList;
