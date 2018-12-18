import { SFC, HTMLProps, ReactNode } from 'react';
import { OneOf } from '../../typeUtils';

export interface PageSidebarProps extends HTMLProps<HTMLDivElement> {
  className?: string;
  nav?: ReactNode;
  isNavOpen?: boolean;
}

declare const PageSidebar: SFC<PageSidebarProps>;

export default PageSidebar;
