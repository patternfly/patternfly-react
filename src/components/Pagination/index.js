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

PaginationRow.AmountOfPages = PaginationRowAmountOfPages;
PaginationRow.ArrowIcon = PaginationRowArrowIcon;
PaginationRow.Back = PaginationRowBack;
PaginationRow.ButtonGroup = PaginationRowButtonGroup;
PaginationRow.Forward = PaginationRowForward;
PaginationRow.Items = PaginationRowItems;
PaginationRow.PAGINATION_VIEW = PAGINATION_VIEW;
PaginationRow.PAGINATION_VIEW_TYPES = PAGINATION_VIEW_TYPES;

export {
  paginate,
  Pager,
  Paginator,
  PAGINATION_VIEW,
  PAGINATION_VIEW_TYPES,
  PaginationRow,
  PaginationRowAmountOfPages,
  PaginationRowArrowIcon,
  PaginationRowBack,
  PaginationRowButtonGroup,
  PaginationRowForward,
  PaginationRowItems
};
