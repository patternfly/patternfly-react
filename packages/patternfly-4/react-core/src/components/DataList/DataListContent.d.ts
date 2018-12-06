import { SFC, HTMLProps } from 'react';
import { Omit } from '../../typeUtils';

export interface DataListContentProps extends Omit<HTMLProps<HTMLElement>, 'aria-label'> {
  isHidden: boolean;
  'aria-label': string;
}

declare const DataListContent: SFC<DataListContentProps>;

export default DataListContent;
