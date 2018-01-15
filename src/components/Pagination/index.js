import paginate from './paginate';
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

export {
  paginate,
  PaginationRow,
  PaginationRowAmountOfPages,
  PaginationRowBack,
  PaginationRowButtonGroup,
  PaginationRowForward,
  PaginationRowItems
};
