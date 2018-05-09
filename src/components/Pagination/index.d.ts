import paginate from './paginate';
import { PAGINATION_VIEW, PAGINATION_VIEW_TYPES } from './PaginationConstants';
import Pager, { PagerProps } from './Pager';
import Paginator, { PaginatorProps } from './Paginator';
import PaginationRowBase, {
  PaginationConfig,
  PaginationRowMessages,
  PaginationRowProps
} from './PaginationRow';
import PaginationRowAmountOfPages, {
  PaginationRowAmountOfPagesProps
} from './PaginationRowAmountOfPages';
import PaginationRowArrowIcon, {
  PaginationRowArrowIconName,
  PaginationRowArrowIconProps
} from './PaginationRowArrowIcon';
import PaginationRowBack, { PaginationRowBackProps } from './PaginationRowBack';
import PaginationRowButtonGroup, {
  PaginationRowButtonGroupProps
} from './PaginationRowButtonGroup';
import PaginationRowForward, {
  PaginationRowForwardProps
} from './PaginationRowForward';
import PaginationRowItems, {
  PaginationRowItemsProps
} from './PaginationRowItems';

declare const PaginationRow: typeof PaginationRowBase & {
  AmountOfPages: typeof PaginationRowAmountOfPages;
  ArrowIcon: typeof PaginationRowArrowIcon;
  Back: typeof PaginationRowBack;
  ButtonGroup: typeof PaginationRowButtonGroup;
  Forward: typeof PaginationRowForward;
  Items: typeof PaginationRowItems;
  PAGINATION_VIEW_TYPES: typeof PAGINATION_VIEW_TYPES;
  PAGINATION_VIEW: PAGINATION_VIEW;
};

export {
  paginate,
  Pager,
  PagerProps,
  Paginator,
  PaginatorProps,
  PAGINATION_VIEW,
  PAGINATION_VIEW_TYPES,
  PaginationRow,
  PaginationRowProps,
  PaginationConfig,
  PaginationRowMessages,
  PaginationRowAmountOfPages,
  PaginationRowAmountOfPagesProps,
  PaginationRowArrowIcon,
  PaginationRowArrowIconName,
  PaginationRowArrowIconProps,
  PaginationRowBack,
  PaginationRowBackProps,
  PaginationRowButtonGroup,
  PaginationRowButtonGroupProps,
  PaginationRowForward,
  PaginationRowForwardProps,
  PaginationRowItems,
  PaginationRowItemsProps
};
