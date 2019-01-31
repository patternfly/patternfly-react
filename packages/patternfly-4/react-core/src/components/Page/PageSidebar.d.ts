import { FunctionComponent, HTMLProps, ReactNode } from 'react';

export interface PageSidebarProps extends HTMLProps<HTMLDivElement> {
  className?: string;
  nav?: ReactNode;
  isNavOpen?: boolean;
}

declare const PageSidebar: FunctionComponent<PageSidebarProps>;

export default PageSidebar;
