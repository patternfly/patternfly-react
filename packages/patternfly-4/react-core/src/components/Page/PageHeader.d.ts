import { FunctionComponent, HTMLProps, ReactNode } from 'react';

export interface PageHeaderProps extends HTMLProps<HTMLDivElement> {
  className?: string;
  logo?: ReactNode;
  logoProps?: object;
  toolbar?: ReactNode;
  avatar?: ReactNode;
  topNav?: ReactNode;
  showNavToggle?: boolean;
  isNavOpen?: boolean;
  onNavToggle?: Function;
}

declare const PageHeader: FunctionComponent<PageHeaderProps>;

export default PageHeader;
