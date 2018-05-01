import { SFC, HTMLAttributes } from 'react';
import { ButtonProps, ButtonStyle } from '../Button';
import { Omit } from '../../typeUtils';

export interface TableButtonProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'onClick'> {
  onClick?: ButtonProps['onClick'];
  bsStyle?: ButtonStyle;
}

declare const TableButton: SFC<TableButtonProps>;

export default TableButton;
