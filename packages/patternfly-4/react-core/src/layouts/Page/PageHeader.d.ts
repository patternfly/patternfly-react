import { SFC, HTMLProps, ReactNode } from 'react';

export interface PageHeaderProps extends HTMLProps<HTMLDivElement> {
  className?: string;
  logo?: ReactNode;
  logoProps?: object;
  toolbar?: ReactNode;
  avatar?: ReactNode;
  topNav?: ReactNode;
  showNavToggle?: boolean;
  onNavToggle?: Function;
}

declare const PageHeader: SFC<PageHeaderProps>;

export default PageHeader;
