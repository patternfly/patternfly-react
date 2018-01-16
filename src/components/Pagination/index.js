import paginate from './paginate';
import { PAGINATION_VIEW, PAGINATION_VIEW_TYPES } from './constants';
import PaginationRow from './PaginationRow';
import PaginationRowAmountOfPages from './PaginationRowAmountOfPages';
import PaginationRowBack from './PaginationRowBack';
import PaginationRowButtonGroup from './PaginationRowButtonGroup';
import PaginationRowForward from './PaginationRowForward';
import PaginationRowItems from './PaginationRowItems';

PaginationRow.AmountOfPages = PaginationRowAmountOfPages;
PaginationRow.Back = PaginationRowBack;
PaginationRow.ButtonGroup = PaginationRowButtonGroup;
PaginationRow.Forward = PaginationRowForward;
PaginationRow.Items = PaginationRowItems;
PaginationRow.PAGINATION_VIEW = PAGINATION_VIEW;
PaginationRow.PAGINATION_VIEW_TYPES = PAGINATION_VIEW_TYPES;

export {
  paginate,
  PAGINATION_VIEW,
  PAGINATION_VIEW_TYPES,
  PaginationRow,
  PaginationRowAmountOfPages,
  PaginationRowBack,
  PaginationRowButtonGroup,
  PaginationRowForward,
  PaginationRowItems
};
