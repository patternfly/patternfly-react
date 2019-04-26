import React from 'react';
import PropTypes from 'prop-types';
import styles from '@patternfly/patternfly/components/Pagination/pagination.css';
import { css } from '@patternfly/react-styles';
import { DropdownDirection } from '../Dropdown';
import ToggleTemplate from './ToggleTemplate';
import Navigation from './Navigation';
import PaginationOptionsMenu from './PaginationOptionsMenu';

const perPageOptions = [
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
]

export const PaginationVariant = {
  top: 'top',
  bottom: 'bottom'
}

const propTypes = {
  /** Position where pagination is rendered. */
  variant: PropTypes.oneOf(Object.values(PaginationVariant)),
  /** Number of items per page. */
  perPage: PropTypes.number,
  /** Select from options to number of items per page. */
  perPageOptions: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.node,
    value: PropTypes.number
  })),
  /** Total number of items. */
  itemCount: PropTypes.number.isRequired,
  /** Current page number. */
  page: PropTypes.number,
  /** First index of items on current page. */
  itemsStart: PropTypes.number,
  /** Last index of items on current page. */
  itemsEnd: PropTypes.number,
  /** Number of pages. */
  amountOfPages: PropTypes.number,
  /** ID to ideintify widget on page. */
  widgetId: PropTypes.string,
  /** Direction of dropdown context menu. */
  dropDirection: PropTypes.oneOf(Object.values(DropdownDirection)),
  /** Object with titles to display in pagination. */
  titles: PropTypes.shape({
    page: PropTypes.string,
    items: PropTypes.string,
    itemsPerPage: PropTypes.string,
    perPageSuffix: PropTypes.string,
    toFirstPage: PropTypes.string,
    toPreviousPage: PropTypes.string,
    toLastPage: PropTypes.string,
    toNextPage: PropTypes.string,
    optionsToggle: PropTypes.string,
    currPage: PropTypes.string,
    paginationTitle: PropTypes.string
  }),
  /** This will be shown in pagination toggle span. You can use firstIndex, lastIndex, itemCount, itemsTitle props. */
  toggleTemplate: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  /** Function called when user sets page. */
  onSetPage: PropTypes.func,
  /** Function called when user clicks on navigate to first page. */
  onFirstClick: PropTypes.func,
  /** Function called when user clicks on navigate to previous page. */
  onPreviousClick: PropTypes.func,
  /** Function called when user clicks on navigate to next page. */
  onNextClick: PropTypes.func,
  /** Function called when user clicks on navigate to last page. */
  onLastClick: PropTypes.func,
  /** Function called when user inputs page number. */
  onPageInput: PropTypes.func,
  /** Function called when user selects number of items per page. */
  onPerPageSelect: PropTypes.func
}

const defaultProps = {
  variant: PaginationVariant.top,
  perPage: perPageOptions[0].value,
  titles: {
    items: 'items',
    pages: 'pages',
    itemsPerPage: 'Items per page',
    perPageSuffix: 'per page',
    toFirstPage: 'Go to first page',
    toPreviousPage: 'Go to previous page',
    toLastPage: 'Go to last page',
    toNextPage: 'Go to next page',
    optionsToggle: 'Select',
    currPage: 'Current page',
    paginationTitle: 'Pagination'
  },
  page: 1,
  perPageOptions,
  dropDirection: DropdownDirection.down,
  widgetId: 'pagination-options-menu',
  toggleTemplate: ToggleTemplate,
  onSetPage: () => undefined,
  onPerPageSelect: () => undefined,
  onFirstClick: () => undefined,
  onPreviousClick: () => undefined,
  onNextClick: () => undefined,
  onPageInput: () => undefined,
  onLastClick: () => undefined
}

const Pagination = ({
  perPage,
  page,
  className,
  children,
  itemsStart,
  itemsEnd,
  variant,
  titles,
  itemCount,
  dropDirection,
  perPageOptions,
  onPerPageSelect,
  onSetPage,
  onFirstClick,
  onPreviousClick,
  onPageInput,
  onNextClick,
  onLastClick,
  toggleTemplate,
  widgetId,
  ...props
}) => {
  const lastPage = Math.ceil(itemCount / perPage);
  const firstIndex = itemCount === 0 ? 0 : (page - 1) * perPage + 1;
  const lastIndex = itemCount === 0 ? 0 : page === lastPage ? itemCount : page * perPage;
  return (
    <div className={
        css(styles.pagination, variant === PaginationVariant.bottom && styles.modifiers.footer , className)
      }
      {...props}
    >
      {
        variant === PaginationVariant.top &&
        <div className={css(styles.paginationTotalItems)}>
          {`${itemCount} ${titles.items}`}
        </div>
      }
      <PaginationOptionsMenu
        itemsPerPageTitle={titles.itemsPerPage}
        perPageSuffix={titles.perPageSuffix}
        itemsTitle={titles.items}
        optionsToggle={titles.optionsToggle}
        perPageOptions={perPageOptions}
        firstIndex={itemsStart !== undefined ? itemsStart : firstIndex}
        lastIndex={itemsEnd !== undefined ? itemsEnd : lastIndex}
        itemCount={itemCount}
        perPage={perPage}
        onPerPageSelect={onPerPageSelect}
        dropDirection={dropDirection}
        widgetId={widgetId}
        toggleTemplate={toggleTemplate}
      />
      <Navigation
        pagesTitle={titles.pages}
        toLastPage={titles.toLastPage}
        toPreviousPage={titles.toPreviousPage}
        toNextPage={titles.toNextPage}
        toFirstPage={titles.toFirstPage}
        currPage={titles.currPage}
        paginationTitle={titles.paginationTitle}
        page={page}
        lastPage={lastPage}
        onSetPage={onSetPage}
        onFirstClick={onFirstClick}
        onPreviousClick={onPreviousClick}
        onNextClick={onNextClick}
        onLastClick={onLastClick}
        onPageInput={onPageInput}
      />
      {children}
    </div>
  )
}

Pagination.propTypes = propTypes;
Pagination.defaultProps = defaultProps;
export default Pagination;
