import { FunctionComponent, HTMLProps, ReactNode } from 'react';

export interface NavItemProps extends HTMLProps<HTMLDivElement> {
  children?: ReactNode | string;
  className?: string;
  to?: string;
  isActive?: boolean;
  isSeparated?: boolean;
  groupId?: string | number;
  itemId?: string | number;
  preventDefault?: boolean;
}

declare const NavItem: FunctionComponent<NavItemProps>;

export default NavItem;
