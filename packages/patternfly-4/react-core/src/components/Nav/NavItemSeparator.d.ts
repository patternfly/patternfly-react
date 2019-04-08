import { FunctionComponent, HTMLProps } from 'react';

export interface NavItemSeparatorProps extends HTMLProps<HTMLLIElement> {
  className?: string;
}

declare const NavItemSeparator: FunctionComponent<NavItemSeparatorProps>;

export default NavItemSeparator;
