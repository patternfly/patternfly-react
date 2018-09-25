import { SFC, HTMLProps, ReactNode } from 'react';

export interface NavItemProps extends HTMLProps<HTMLDivElement> {
  children?: ReactNode | string;
  className?: string;
  to?: string;
  isActive?: boolean;
  groupId?: string | number;
  itemId?: string | number;
}

declare const NavItem: SFC<NavItemProps>;

export default NavItem;
