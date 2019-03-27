import { FunctionComponent, HTMLProps, ReactNode, ReactElement } from 'react';
import { DropdownDirection } from '../Dropdown';
import { Omit, OneOf } from '../../helpers/typeUtils';

export const PaginationVariant: {
  top?: 'top';
  bottom?: 'bottom';
  left?: 'left';
  right?: 'right';
};

export interface PerPageOptions {
  title?: string;
  value?: number;
}

export interface PaginationTitles {
  page?: string;
  items?: string;
  itemsPerPage?: string;
  toFirstPage?: string;
  toPreviousPage?: string;
  toLastPage?: string;
  toNextPage?: string;
  optionsToggle?: string;
  currPage?: string;
  paginationTitle?: string;
}

export interface PaginationProps extends HTMLProps<HTMLDivElement> {
  itemCount: number;
  variant?: OneOf<typeof PaginationVariant, keyof typeof PaginationVariant>;
  perPage?: number;
  perPageOptions?: Array<PerPageOptions>;
  page?: number;
  itemsStart?: number;
  itemsEnd?: number;
  amountOfPages?: number;
  widgetId?: string;
  dropDirection?: OneOf<typeof DropdownDirection, keyof typeof DropdownDirection>;
  titles?: PaginationTitles;
  onSetPage?(event: React.SyntheticEvent<HTMLButtonElement>, page: number): void;
  onFirstClick?(event: React.SyntheticEvent<HTMLButtonElement>, page: number): void;
  onPreviousClick?(event: React.SyntheticEvent<HTMLButtonElement>, page: number): void;
  onNextClick?(event: React.SyntheticEvent<HTMLButtonElement>, page: number): void;
  onLastClick?(event: React.SyntheticEvent<HTMLButtonElement>, page: number): void;
  onPageInput?(event: React.SyntheticEvent<HTMLButtonElement>, page: number): void;
  onPerPageSelect?(event: React.SyntheticEvent<HTMLDivElement>, perPage: number): void;
}

declare const Pagination: FunctionComponent<PaginationProps>;

export default Pagination;
