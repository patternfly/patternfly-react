import { SFC, HTMLProps } from 'react';
import {  Omit } from '../../typeUtils';

export interface DataListProps extends Omit<HTMLProps<HTMLUListElement>, 'aria-label'> {
  'aria-label': string;
}

declare const DataList: SFC<DataListProps>;

export default DataList;
