import { SFC, HTMLProps, ReactNode } from 'react';
import { Omit } from '../../typeUtils';

export interface BreadcrumbProps extends Omit<HTMLProps<HTMLElement>, 'children'> {
  children: ReactNode
}

declare const Breadcrumb: SFC<BreadcrumbProps>;

export default Breadcrumb;
