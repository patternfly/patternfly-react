import { FunctionComponent, HTMLProps, ReactNode } from 'react';
import { OneOf } from '../../helpers/typeUtils';
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
}

declare const NavList: FunctionComponent<NavListProps>;

export default NavList;
