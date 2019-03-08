import { FunctionComponent, HTMLProps } from 'react';
import { Omit } from '../../helpers/typeUtils';

export interface DataListContentProps extends Omit<HTMLProps<HTMLElement>, 'aria-label'> {
  isHidden: boolean;
  'aria-label': string;
}

declare const DataListContent: FunctionComponent<DataListContentProps>;

export default DataListContent;
