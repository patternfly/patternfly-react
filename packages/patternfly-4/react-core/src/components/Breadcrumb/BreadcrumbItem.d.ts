import { SFC, HTMLProps, ReactNode } from 'react';
import { Omit } from '../../typeUtils';

export interface BreadcrumbItemProps extends Omit<HTMLProps<HTMLLIElement>, 'children'> {
  children: ReactNode
  isCurrent: boolean
}

declare const BreadcrumbItem: SFC<BreadcrumbItemProps>;

export default BreadcrumbItem;
