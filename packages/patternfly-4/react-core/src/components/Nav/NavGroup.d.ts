import { FunctionComponent, HTMLProps, ReactNode } from 'react';

export interface NavGroupProps extends HTMLProps<HTMLDivElement> {
  title: string;
  children?: ReactNode;
  className?: string;
  id?: string;
}

declare const NavGroup: FunctionComponent<NavGroupProps>;

export default NavGroup;
