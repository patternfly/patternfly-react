import { HTMLAttributes, MouseEvent, SFC } from 'react';

export interface PaginationRowBackProps
  extends HTMLAttributes<HTMLUListElement> {
  messagesFirstPage: string;
  messagesPreviousPage: string;
  page: number;
  onFirstPage?(event: MouseEvent<HTMLAnchorElement>): void;
  onPreviousPage?(event: MouseEvent<HTMLAnchorElement>): void;
}

declare const PaginationRowBack: SFC<PaginationRowBackProps>;

export default PaginationRowBack;
