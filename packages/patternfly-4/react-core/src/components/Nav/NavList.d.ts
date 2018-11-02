import { SFC, HTMLProps, ReactNode } from 'react';
import { OneOf } from '../../typeUtils';
import { NavVariants } from './NavVariants';

export interface NavListProps extends HTMLProps<HTMLDivElement> {
  variant?: OneOf<typeof NavVariants, keyof typeof NavVariants>;
  id?: string;
  srText?: string;
  children?: ReactNode;
  className?: string;
  innerClassName?: string;
  title?: string;
  isExpandable?: boolean;
  isExpanded?: boolean;
  isActive?: boolean;
  isTall?: boolean;
}

declare const NavList: SFC<NavListProps>;

export default NavList;
