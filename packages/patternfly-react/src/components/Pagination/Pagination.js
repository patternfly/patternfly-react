import paginate from './paginate';
import { PAGINATION_VIEW, PAGINATION_VIEW_TYPES } from './PaginationConstants';
import Pager from './Pager';
import Paginator from './Paginator';
import PaginationRow from './PaginationRow';
import PaginationRowAmountOfPages from './PaginationRowAmountOfPages';
import PaginationRowArrowIcon from './PaginationRowArrowIcon';
import PaginationRowBack from './PaginationRowBack';
import PaginationRowButtonGroup from './PaginationRowButtonGroup';
import PaginationRowForward from './PaginationRowForward';
import PaginationRowItems from './PaginationRowItems';

export const Pagination = {
  paginate,
  Pager,
  Paginator,
  PAGINATION_VIEW,
  PAGINATION_VIEW_TYPES,
  Row: PaginationRow,
  RowAmountOfPages: PaginationRowAmountOfPages,
  RowArrowIcon: PaginationRowArrowIcon,
  RowBack: PaginationRowBack,
  RowButtonGroup: PaginationRowButtonGroup,
  RowForward: PaginationRowForward,
  RowItems: PaginationRowItems
};
