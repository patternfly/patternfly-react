import { FunctionComponent, HTMLProps } from 'react';
import { Omit } from '../../helpers/typeUtils';

export interface DataListCellProps extends Omit<HTMLProps<HTMLDivElement>, 'width'> {
  width?: 1 | 2 | 3 | 4 | 5;
  isFilled?: boolean;
  alignRight?: boolean;
  isIcon?: boolean;
}

declare const DataListCell: FunctionComponent<DataListCellProps>;

export default DataListCell;
