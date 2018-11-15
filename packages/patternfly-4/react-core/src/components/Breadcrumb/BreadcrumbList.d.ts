import { SFC, HTMLProps, ReactNode } from 'react';
import { Omit } from '../../typeUtils';

export interface BreadcrumbListProps extends Omit<HTMLProps<HTMLOListElement>, 'children'> {
  children: ReactNode
}

declare const BreadcrumbList: SFC<BreadcrumbListProps>;

export default BreadcrumbList;
