import { FunctionComponent, HTMLProps, ReactNode } from 'react';

export interface NavExpandableProps extends HTMLProps<HTMLDivElement> {
  title: string;
  srText?: string;
  isExpanded?: boolean;
  children?: ReactNode;
  className?: string;
  groupId?: string | number;
  isActive?: boolean;
  id?: string;
}

declare const NavExpandable: FunctionComponent<NavExpandableProps>;

export default NavExpandable;
