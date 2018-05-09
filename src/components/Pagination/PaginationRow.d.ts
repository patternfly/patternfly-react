import { FormEvent, SFC } from 'react';
import { PAGINATION_VIEW } from './PaginationConstants';
import { PaginationRowBackProps } from './PaginationRowBack';
import { PaginationRowForwardProps } from './PaginationRowForward';
import { DropdownButtonProps } from '../Button';

export interface PaginationConfig {
  /** the current page */
  page: number;
  /** the current per page setting */
  perPage: number;
  /** per page options */
  perPageOptions: number;
}

export interface PaginationRowMessages {
  firstPage?: string;
  previousPage?: string;
  nextPage: string;
  lastPage: string;
  perPage: string;
  of: string;
}

export interface PaginationRowProps {
  /** calculated amount of pages */
  amountOfPages: number;
  /** calculated number of rows */
  itemCount: number;
  /** calculated items end */
  itemsEnd: number;
  /** calculated items start */
  itemsStart: number;
  /** user pagination settings */
  pagination: PaginationConfig;
  /** pagination row view type */
  viewType: PAGINATION_VIEW;
  /** Base css class */
  baseClassName?: string;
  /** Additional css classes */
  className?: string;
  /** dropdown button id */
  dropdownButtonId?: string;
  /** message text inputs for i18n */
  messages?: PaginationRowMessages;
  /** first page callback */
  onFirstPage?: PaginationRowBackProps['onFirstPage'];
  /** last page callback */
  onLastPage?: PaginationRowForwardProps['onLastPage'];
  /** next page callback */
  onNextPage?: PaginationRowForwardProps['onNextPage'];
  /** user page input callback */
  onPageInput?(event: FormEvent<HTMLInputElement>): void;
  /** per page selection callback */
  onPerPageSelect?: DropdownButtonProps['onSelect'];
  /** previous page selection callback */
  onPreviousPage?: PaginationRowBackProps['onPreviousPage'];
  /** onSubmit callback */
  onSubmit?(event: FormEvent<HTMLFormElement>): void;
  /** page input (optional override for page input) */
  pageInputValue?: string | number;
  /** Page size button drops up */
  pageSizeDropUp?: boolean;
}

declare const PaginationRow: SFC<PaginationRowProps>;

export default PaginationRow;
