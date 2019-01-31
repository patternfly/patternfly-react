import { FunctionComponent, HTMLProps, ReactNode, ReactElement } from 'react';
import { Omit } from '../../typeUtils';

export const PaginationVariant: {
  top: 'top';
  bottom: 'bottom';
  left: 'left';
  right: 'right';
};

export interface PaginationProps extends HTMLProps<HTMLDivElement> {

}

declare const Pagination: FunctionComponent<PaginationProps>;

export default Pagination;
