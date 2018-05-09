import { SFC } from 'react';

export type PaginationRowArrowIconName =
  | 'left'
  | 'double-left'
  | 'right'
  | 'double-right';

export interface PaginationRowArrowIconProps {
  name: 'left' | 'double-left' | 'right' | 'double-right';
}

declare const PaginationRowArrowIcon: SFC<PaginationRowArrowIconProps>;

export default PaginationRowArrowIcon;
