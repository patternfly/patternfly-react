import { MouseEvent, SFC } from 'react';

export interface PaginationRowForwardProps {
  /** calculated amount of pages */
  amountOfPages: number;
  /** messages last page */
  messagesLastPage: string;
  /** messages next page */
  messagesNextPage: string;
  /** pagination page */
  page: number;
  /** additional class names */
  className?: string;
  /** next page callback */
  onNextPage?(event: MouseEvent<HTMLAnchorElement>): void;
  /** last page callback */
  onLastPage?(event: MouseEvent<HTMLAnchorElement>): void;
}

declare const PaginationRowForward: SFC<PaginationRowForwardProps>;

export default PaginationRowForward;
