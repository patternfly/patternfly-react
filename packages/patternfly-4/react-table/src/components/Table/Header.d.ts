import { SFC, HTMLProps, ReactType, ReactNode } from 'react';
import { ISortBy, IAction, ISeparator } from './Table';

export interface HeaderProps extends HTMLProps<HTMLTableRowElement> {
  className?: string;
}

declare const Header: SFC<HeaderProps>;

export default Header;
