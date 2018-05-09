import { PaginationRowProps } from './PaginationRow';
import { ComponentClass } from 'react';

export interface PaginatorProps
  extends Pick<
      PaginationRowProps,
      | 'className'
      | 'dropdownButtonId'
      | 'itemCount'
      | 'messages'
      | 'onPerPageSelect'
      | 'pagination'
      | 'viewType'
    > {
  /** A callback triggered when a page is switched */
  onPageSet?(page: number): void;
}

declare const Paginator: ComponentClass<PaginatorProps>;

export default Paginator;
