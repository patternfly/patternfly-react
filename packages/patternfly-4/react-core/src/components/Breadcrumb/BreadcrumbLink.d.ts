import { SFC, HTMLProps, ReactNode } from 'react';
import { Omit } from '../../typeUtils';

export interface BreadcrumbLinkProps extends Omit<HTMLProps<HTMLAnchorElement>, 'children'> {
  children: ReactNode
  isCurrent: boolean
}

declare const BreadcrumbLink: SFC<BreadcrumbLinkProps>;

export default BreadcrumbLink;

