import React from 'react';
import PropTypes from 'prop-types';
import { Form, FormControl, FormGroup, ControlLabel } from '../Form';
import { DropdownButton } from '../Button';
import { ListGroup, ListGroupItem } from '../ListGroup';
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
        <span> per page </span>
      </FormGroup>
      <FormGroup>
        <span>
          <span className="pagination-pf-items-current">
            {itemsStart}-{itemsEnd}
          </span>
          &nbsp;of&nbsp;
          <span className="pagination-pf-items-total">{itemCount}</span>
        </span>
        <ListGroup componentClass="ul" bsClass="pagination pagination-pf-back">
          <ListGroupItem
            bsClass=" "
            listItem
            className={page === 1 ? 'disabled' : ''}
          >
            <a
              href="#"
              title="First Page"
              onClick={e => {
                e.preventDefault();
                onFirstPage(e);
              }}
            >
              <Icon type="fa" name="angle-double-left" />
            </a>
          </ListGroupItem>
          <ListGroupItem
            bsClass=" "
            listItem
            className={page === 1 ? 'disabled' : ''}
          >
            <a
              href="#"
              title="Previous Page"
              onClick={e => {
                e.preventDefault();
                onPreviousPage(e);
              }}
            >
              <Icon type="fa" name="angle-left" />
            </a>
          </ListGroupItem>
        </ListGroup>
        <ControlLabel className="sr-only">Current Page</ControlLabel>
        <FormControl
          className="pagination-pf-page"
          type="text"
          value={pagination.page}
          onChange={onPageInput}
        />
        <span>
          &nbsp;of&nbsp;
          <span className="pagination-pf-pages">{amountOfPages}</span>
        </span>
        <ListGroup
          componentClass="ul"
          bsClass="pagination pagination-pf-forward"
        >
          <ListGroupItem
            bsClass=" "
            listItem
            className={page === amountOfPages ? 'disabled' : ''}
          >
            <a
              href="#"
              title="Next Page"
              onClick={e => {
                e.preventDefault();
                onNextPage(e);
              }}
            >
              <Icon type="fa" name="angle-right" />
            </a>
          </ListGroupItem>
          <ListGroupItem
            bsClass=" "
            listItem
            className={page === amountOfPages ? 'disabled' : ''}
          >
            <a
              href="#"
              title="Last Page"
              onClick={e => {
                e.preventDefault();
                onLastPage(e);
              }}
            >
              <Icon type="fa" name="angle-double-right" />
            </a>
          </ListGroupItem>
        </ListGroup>
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
export default Paginator;
