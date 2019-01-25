import { FunctionComponent, HTMLProps } from 'react';

export interface HeaderProps extends HTMLProps<HTMLTableRowElement> {
  className?: string;
}

declare const Header: FunctionComponent<HeaderProps>;

export default Header;
