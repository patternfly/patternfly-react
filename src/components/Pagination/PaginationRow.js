import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import PaginationRowAmountOfPages from './PaginationRowAmountOfPages';
import PaginationRowButtonGroup from './PaginationRowButtonGroup';
import PaginationRowItems from './PaginationRowItems';
import PaginationRowBack from './PaginationRowBack';
import PaginationRowForward from './PaginationRowForward';
import { PAGINATION_VIEW_TYPES, PAGINATION_VIEW } from './constants';
import { Form, FormControl, FormGroup, ControlLabel } from '../Form';
import { DropdownButton } from '../Button';
import { MenuItem } from '../MenuItem';

/**
 * PaginationRow component for Patternfly React
 */
const PaginationRow = ({
  className,
  contentView,
  viewType,
  pagination,
  amountOfPages,
  itemCount,
  itemsStart,
  itemsEnd,
  messages,
  dropdownButtonId,
  onPerPageSelect,
  onFirstPage,
  onPreviousPage,
  onPageInput,
  onNextPage,
  onLastPage
}) => {
  const { page, perPage, perPageOptions } = pagination;
  const classes = cx(
    {
      'content-view-pf-pagination': contentView,
      'list-view-pf-pagination': viewType === PAGINATION_VIEW.LIST,
      'card-view-pf-pagination': viewType === PAGINATION_VIEW.CARD,
      'table-view-pf-pagination': viewType === PAGINATION_VIEW.TABLE,
      clearfix: true
    },
    className
  );
  return (
    <Form className={classes}>
      <FormGroup>
        <DropdownButton
          title={perPage}
          dropup
          componentClass={PaginationRowButtonGroup}
          onSelect={onPerPageSelect}
          id={dropdownButtonId}
        >
          {perPageOptions &&
            perPageOptions.length &&
            perPageOptions.map((option, i) => {
              return (
                <MenuItem eventKey={option} active={option === perPage} key={i}>
                  {option}
                </MenuItem>
              );
            })}
        </DropdownButton>
        <span> {messages.perPage} </span>
      </FormGroup>
      <FormGroup>
        <PaginationRowItems
          itemCount={itemCount}
          itemsStart={itemsStart}
          itemsEnd={itemsEnd}
          messagesOf={messages.of}
        />

        <PaginationRowBack
          page={page}
          messagesFirstPage={messages.firstPage}
          messagesPreviousPage={messages.previousPage}
          onFirstPage={onFirstPage}
          onPreviousPage={onPreviousPage}
        />

        <ControlLabel className="sr-only">Current Page</ControlLabel>
        <FormControl
          className="pagination-pf-page"
          type="text"
          value={pagination.page}
          onChange={onPageInput}
        />

        <PaginationRowAmountOfPages
          messagesOf={messages.of}
          amountOfPages={amountOfPages}
        />

        <PaginationRowForward
          page={page}
          amountOfPages={amountOfPages}
          messagesNextPage={messages.nextPage}
          messagesLastPage={messages.lastPage}
          onNextPage={onNextPage}
          onLastPage={onLastPage}
        />
      </FormGroup>
    </Form>
  );
};
PaginationRow.propTypes = {
  /** Additional css classes */
  className: PropTypes.string,
  /** content view pagination row */
  contentView: PropTypes.bool,
  /** pagination row view type */
  viewType: PropTypes.oneOf(PAGINATION_VIEW_TYPES),
  /** user pagination settings */
  pagination: PropTypes.object,
  /** calculated amount of pages */
  amountOfPages: PropTypes.number,
  /** calculated number of rows */
  itemCount: PropTypes.number,
  /** calculated items start */
  itemsStart: PropTypes.number,
  /** calculated items end */
  itemsEnd: PropTypes.number,
  /** message text inputs for i18n */
  messages: PropTypes.shape({
    firstPage: PropTypes.string,
    previousPage: PropTypes.string,
    nextPage: PropTypes.string,
    lastPage: PropTypes.string,
    perPage: PropTypes.string,
    of: PropTypes.string
  }),
  /** dropdown button id */
  dropdownButtonId: PropTypes.string,
  /** per page selection callback */
  onPerPageSelect: PropTypes.func,
  /** first page callback */
  onFirstPage: PropTypes.func,
  /** previous page selection callback */
  onPreviousPage: PropTypes.func,
  /** user page input callback */
  onPageInput: PropTypes.func,
  /** next page callback */
  onNextPage: PropTypes.func,
  /** last page callback */
  onLastPage: PropTypes.func
};
PaginationRow.defaultProps = {
  messages: {
    firstPage: 'First Page',
    previousPage: 'Previous Page',
    nextPage: 'Next Page',
    lastPage: 'Last Page',
    perPage: 'per page',
    of: 'of'
  },
  dropdownButtonId: 'pagination-row-dropdown'
};
export default PaginationRow;
