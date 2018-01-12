import React from 'react';
import PropTypes from 'prop-types';
import { Form, FormControl, FormGroup, ControlLabel } from '../Form';
import { DropdownButton } from '../Button';
import { MenuItem } from '../MenuItem';
import { Icon } from '../Icon';

/**
 * Paginator component for Patternfly React
 */
const Paginator = ({
  className,
  pagination,
  amountOfPages,
  itemCount,
  itemsStart,
  itemsEnd,
  messages,
  onPerPageSelect,
  onFirstPage,
  onPreviousPage,
  onPageInput,
  onNextPage,
  onLastPage
}) => {
  const { page, perPage, perPageOptions } = pagination;

  return (
    <Form className={className}>
      <FormGroup>
        <DropdownButton
          title={perPage}
          dropup
          onSelect={onPerPageSelect}
          id="paginator-dropdown"
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
        <span>
          <span className="pagination-pf-items-current">
            {itemsStart}-{itemsEnd}
          </span>
          &nbsp;{messages.of}&nbsp;
          <span className="pagination-pf-items-total">{itemCount}</span>
        </span>
        <ul className="pagination pagination-pf-back">
          <li className={page === 1 ? 'disabled' : ''}>
            <a
              href="#"
              title={messages.firstPage}
              onClick={e => {
                e.preventDefault();
                onFirstPage(e);
              }}
            >
              <Icon type="fa" name="angle-double-left" />
            </a>
          </li>
          <li className={page === 1 ? 'disabled' : ''}>
            <a
              href="#"
              title={messages.previousPage}
              onClick={e => {
                e.preventDefault();
                onPreviousPage(e);
              }}
            >
              <Icon type="fa" name="angle-left" />
            </a>
          </li>
        </ul>
        <ControlLabel className="sr-only">Current Page</ControlLabel>
        <FormControl
          className="pagination-pf-page"
          type="text"
          value={pagination.page}
          onChange={onPageInput}
        />
        <span>
          &nbsp;{messages.of}&nbsp;
          <span className="pagination-pf-pages">{amountOfPages}</span>
        </span>
        <ul className="pagination pagination-pf-forward">
          <li className={page === amountOfPages ? 'disabled' : ''}>
            <a
              href="#"
              title={messages.nextPage}
              onClick={e => {
                e.preventDefault();
                onNextPage(e);
              }}
            >
              <Icon type="fa" name="angle-right" />
            </a>
          </li>
          <li className={page === amountOfPages ? 'disabled' : ''}>
            <a
              href="#"
              title={messages.lastPage}
              onClick={e => {
                e.preventDefault();
                onLastPage(e);
              }}
            >
              <Icon type="fa" name="angle-double-right" />
            </a>
          </li>
        </ul>
      </FormGroup>
    </Form>
  );
};
Paginator.propTypes = {
  /** Additional css classes */
  className: PropTypes.string,
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
Paginator.defaultProps = {
  messages: {
    firstPage: 'First Page',
    previousPage: 'Previous Page',
    nextPage: 'Next Page',
    lastPage: 'Last Page',
    perPage: 'per page',
    of: 'of'
  }
};
export default Paginator;
