import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import PaginationRowArrowIcon from './PaginationRowArrowIcon';

/**
 * PaginationRowForward component for Patternfly React
 */
const PaginationRowForward = ({
  className,
  page,
  amountOfPages,
  messagesNextPage,
  messagesLastPage,
  onNextPage,
  onLastPage,
  ...props
}) => {
  const classes = cx('pagination', 'pagination-pf-forward', className);
  return (
    <ul className={classes}>
      <li className={page === amountOfPages ? 'disabled' : ''}>
        <a
          href="#"
          title={messagesNextPage}
          onClick={e => {
            e.preventDefault();
            onNextPage(e);
          }}
        >
          <PaginationRowArrowIcon name="right" />
        </a>
      </li>
      <li className={page === amountOfPages ? 'disabled' : ''}>
        <a
          href="#"
          title={messagesLastPage}
          onClick={e => {
            e.preventDefault();
            onLastPage(e);
          }}
        >
          <PaginationRowArrowIcon name="double-right" />
        </a>
      </li>
    </ul>
  );
};
PaginationRowForward.propTypes = {
  /** additional class names */
  className: PropTypes.string,
  /** pagination page */
  page: PropTypes.number,
  /** calculated amount of pages */
  amountOfPages: PropTypes.number,
  /** messages next page */
  messagesNextPage: PropTypes.string,
  /** messages last page */
  messagesLastPage: PropTypes.string,
  /** next page callback */
  onNextPage: PropTypes.func,
  /** last page callback */
  onLastPage: PropTypes.func
};
export default PaginationRowForward;
