import { HTMLAttributes, SFC } from 'react';

export interface PaginationRowItemsProps
  extends HTMLAttributes<HTMLSpanElement> {
  /** calculated number of rows */
  itemCount: number;
  /** calculated items start */
  itemsStart: number;
  /** calculated items end */
  itemsEnd: number;
  /** messages Of */
  messagesOf: string;
}

declare const PaginationRowItems: SFC<PaginationRowItemsProps>;

export default PaginationRowItems;
