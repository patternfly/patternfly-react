import { SFC } from 'react';
import {
  BreadcrumbProps as BsBreadcrumbProps,
  BreadcrumbItemProps as BsBreadcrumbItemProps
} from 'react-bootstrap';
import { Omit } from '../../typeUtils';

export interface BreadcrumbProps extends Omit<BsBreadcrumbProps, 'title'> {
  title?: boolean;
}

export interface BreadcrumbItemProps extends BreadcrumbProps {}

declare const Breadcrumb: SFC<BreadcrumbProps> & {
  Item: SFC<BreadcrumbItemProps>;
};

export default Breadcrumb;
