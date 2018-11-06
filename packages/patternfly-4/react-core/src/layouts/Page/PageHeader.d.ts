import { SFC, HTMLProps, ReactNode } from 'react';
import { OneOf } from '../../typeUtils';

export interface PageHeaderProps extends HTMLProps<HTMLDivElement> {
  className?: string;
  logo?: ReactNode;
  logoProps?: object;
  toolbar?: ReactNode;
  avatar?: ReactNode;
  topNav?: ReactNode;
  showNavToggle?: boolean;
  onNavToggle?: Function;
  isTall?: boolean;
}

declare const PageHeader: SFC<PageHeaderProps>;

export default PageHeader;
