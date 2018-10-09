import { SFC, HTMLProps, ReactNode } from 'react';
import { OneOf } from '../../typeUtils';

export interface PageHeaderProps extends HTMLProps<HTMLDivElement> {
  className?: string;
  logo?: ReactNode;
  toolbar?: ReactNode;
  avatar?: ReactNode;
  topNav?: ReactNode;
  showNavToggle?: boolean;
  onNavToggle?: Function;
}

declare const PageHeader: SFC<PageHeaderProps>;

export default PageHeader;
