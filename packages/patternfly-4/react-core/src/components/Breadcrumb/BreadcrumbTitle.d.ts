import { SFC, HTMLProps, ReactNode } from 'react';
import { Omit } from '../../typeUtils';

export interface BreadcrumbTitleProps extends Omit<HTMLProps<HTMLHeadingElement>, 'children'> {
  children: ReactNode
}

declare const BreadcrumbTitle: SFC<BreadcrumbTitleProps>;

export default BreadcrumbTitle;
