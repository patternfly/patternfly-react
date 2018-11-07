import { SFC, HTMLProps, ReactType, ReactNode } from 'react';
import { OneOf, Omit } from '../../../react-core/src/typeUtils';
import { SortByDirection } from './SortColumn';
import { ISortBy, IAction, ISeparator } from './Table';

export interface IColumn {
  title: String,
  cellTransforms?: Array<Function>,
  transforms?: Array<Function>
}


export interface HeaderProps extends Omit<HTMLProps<HTMLTableRowElement>, 'onSelect'> {
  headerRows: Array<String | IColumn>;
  children?: ReactNode;
  className?: string;
  onSort?: Function;
  onCollapse?: Function;
  onSelect?: Function;
  actions?: Array<IAction | ISeparator>;
}

declare const Header: SFC<HeaderProps>;

export default Header;
