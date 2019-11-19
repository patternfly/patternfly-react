import * as React from 'react';
import { DropdownDirection } from '../Dropdown';
import { ToggleTemplate, ToggleTemplateProps } from './ToggleTemplate';
import styles from '@patternfly/react-styles/css/components/Pagination/pagination';
import { css } from '@patternfly/react-styles';
import { Navigation } from './Navigation';
import { PaginationOptionsMenu } from './PaginationOptionsMenu';
import { InjectedOuiaProps, withOuiaContext } from '../withOuia';

export enum PaginationVariant {
  top = 'top',
  bottom = 'bottom',
  left = 'left',
  right = 'right'
}

const defaultPerPageOptions = [
  {
    title: '10',
    value: 10
  },
  {
    title: '20',
    value: 20
  },
  {
    title: '50',
    value: 50
  },
  {
    title: '100',
    value: 100
  }
];

export interface PerPageOptions {
  title?: string;
  value?: number;
}

export interface PaginationTitles {
  page?: string;
  items?: string;
  itemsPerPage?: string;
  perPageSuffix?: string;
  toFirstPage?: string;
  toPreviousPage?: string;
  toLastPage?: string;
  toNextPage?: string;
  optionsToggle?: string;
  currPage?: string;
  paginationTitle?: string;
}

export interface PaginationProps extends React.HTMLProps<HTMLDivElement> {
  /** What should be rendered inside */
  children?: React.ReactNode;
  /** Additional classes for the container. */
  className?: string;
  /** Total number of items. */
  itemCount: number;
  /** Position where pagination is rendered. */
  variant?: 'top' | 'bottom' | 'left' | 'right';
  /** Flag indicating if pagination is disabled */
  isDisabled?: boolean;
  /** Flag indicating if pagination is compact */
  isCompact?: boolean;
  /** Number of items per page. */
  perPage?: number;
  /** Select from options to number of items per page. */
  perPageOptions?: PerPageOptions[];
  /** Page we start at. */
  firstPage?: number;
  /** Current page number. */
  page?: number;
  /** First index of items on current page. */
  itemsStart?: number;
  /** Last index of items on current page. */
  itemsEnd?: number;
  /** ID to ideintify widget on page. */
  widgetId?: string;
  /** Direction of dropdown context menu. */
  dropDirection?: 'up' | 'down';
  /** Object with titles to display in pagination. */
  titles?: PaginationTitles;
  /** This will be shown in pagination toggle span. You can use firstIndex, lastIndex, itemCount, itemsTitle props. */
  toggleTemplate?: ((props: ToggleTemplateProps) => React.ReactElement) | string;
  /** Function called when user sets page. */
  onSetPage?: (event: React.SyntheticEvent<HTMLButtonElement>, page: number) => void;
  /** Function called when user clicks on navigate to first page. */
  onFirstClick?: (event: React.SyntheticEvent<HTMLButtonElement>, page: number) => void;
  /** Function called when user clicks on navigate to previous page. */
  onPreviousClick?: (event: React.SyntheticEvent<HTMLButtonElement>, page: number) => void;
  /** Function called when user clicks on navigate to next page. */
  onNextClick?: (event: React.SyntheticEvent<HTMLButtonElement>, page: number) => void;
  /** Function called when user clicks on navigate to last page. */
  onLastClick?: (event: React.SyntheticEvent<HTMLButtonElement>, page: number) => void;
  /** Function called when user inputs page number. */
  onPageInput?: (event: React.SyntheticEvent<HTMLButtonElement>, page: number) => void;
  /** Function called when user selects number of items per page. */
  onPerPageSelect?: (event: React.MouseEvent | React.KeyboardEvent | MouseEvent, perPage: number) => void;
}

const Pagination: React.FunctionComponent<PaginationProps & InjectedOuiaProps> = ({
  children = null,
  className = '',
  variant = PaginationVariant.top,
  isDisabled = false,
  isCompact = false,
  perPage = defaultPerPageOptions[0].value,
  titles = {
    items: '',
    page: '',
    itemsPerPage: 'Items per page',
    perPageSuffix: 'per page',
    toFirstPage: 'Go to first page',
    toPreviousPage: 'Go to previous page',
    toLastPage: 'Go to last page',
    toNextPage: 'Go to next page',
    optionsToggle: 'Items per page',
    currPage: 'Current page',
    paginationTitle: 'Pagination'
  },
  firstPage = 1,
  page = 1,
  itemCount,
  itemsStart = null,
  itemsEnd = null,
  perPageOptions = defaultPerPageOptions,
  dropDirection = DropdownDirection.down,
  widgetId = 'pagination-options-menu',
  toggleTemplate = ToggleTemplate,
  onSetPage = () => undefined,
  onPerPageSelect = () => undefined,
  onFirstClick = () => undefined,
  onPreviousClick = () => undefined,
  onNextClick = () => undefined,
  onPageInput = () => undefined,
  onLastClick = () => undefined,
  ouiaContext = null,
  ouiaId = null,
  ...props
}: PaginationProps & InjectedOuiaProps) => {
  const lastPage = Math.ceil(itemCount / perPage);
  if (page < firstPage) {
    page = firstPage;
  } else if (page > lastPage) {
    page = lastPage;
  }

  const firstIndex = itemCount <= 0 ? 0 : (page - 1) * perPage + 1;
  let lastIndex;
  if (itemCount <= 0) {
    lastIndex = 0;
  } else {
    lastIndex = page === lastPage ? itemCount : page * perPage;
  }

  return (
    <div
      className={css(
        styles.pagination,
        variant === PaginationVariant.bottom && styles.modifiers.footer,
        isCompact && styles.modifiers.compact,
        className
      )}
      id={widgetId}
      {...(ouiaContext.isOuia && {
        'data-ouia-component-type': 'Pagination',
        'data-ouia-component-id': ouiaId || ouiaContext.ouiaId
      })}
      {...props}
    >
      {variant === PaginationVariant.top && (
        <div className={css(styles.paginationTotalItems)}>
          <ToggleTemplate
            firstIndex={firstIndex}
            lastIndex={lastIndex}
            itemCount={itemCount}
            itemsTitle={titles.items}
          />
        </div>
      )}
      <PaginationOptionsMenu
        itemsPerPageTitle={titles.itemsPerPage}
        perPageSuffix={titles.perPageSuffix}
        itemsTitle={isCompact ? '' : titles.items}
        optionsToggle={titles.optionsToggle}
        perPageOptions={perPageOptions}
        firstIndex={itemsStart !== null ? itemsStart : firstIndex}
        lastIndex={itemsEnd !== null ? itemsEnd : lastIndex}
        itemCount={itemCount}
        perPage={perPage}
        onPerPageSelect={onPerPageSelect}
        dropDirection={dropDirection}
        widgetId={widgetId}
        toggleTemplate={toggleTemplate}
        isDisabled={isDisabled}
      />
      <Navigation
        pagesTitle={titles.page}
        toLastPage={titles.toLastPage}
        toPreviousPage={titles.toPreviousPage}
        toNextPage={titles.toNextPage}
        toFirstPage={titles.toFirstPage}
        currPage={titles.currPage}
        paginationTitle={titles.paginationTitle}
        page={itemCount <= 0 ? 0 : page}
        firstPage={itemsStart !== null ? itemsStart : 1}
        lastPage={lastPage}
        onSetPage={onSetPage}
        onFirstClick={onFirstClick}
        onPreviousClick={onPreviousClick}
        onNextClick={onNextClick}
        onLastClick={onLastClick}
        onPageInput={onPageInput}
        isDisabled={isDisabled}
        isCompact={isCompact}
      />
      {children}
    </div>
  );
};

const PaginationWithOuiaContext = withOuiaContext(Pagination);
PaginationWithOuiaContext.displayName = 'Pagination';

export { PaginationWithOuiaContext as Pagination };
