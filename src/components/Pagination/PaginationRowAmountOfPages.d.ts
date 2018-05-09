import { HTMLAttributes, SFC } from 'react';

export interface PaginationRowAmountOfPagesProps
  extends HTMLAttributes<HTMLSpanElement> {
  messagesOf: string;
  amountOfPages: number;
}
declare const PaginationRowAmountOfPages: SFC<PaginationRowAmountOfPagesProps>;

export default PaginationRowAmountOfPages;
