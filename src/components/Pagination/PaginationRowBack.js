import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import PaginationRowArrowIcon from './PaginationRowArrowIcon';

/**
 * PaginationRowBack component for Patternfly React
 */
const PaginationRowBack = ({
  className,
  page,
  messagesFirstPage,
  messagesPreviousPage,
  onFirstPage,
  onPreviousPage,
  ...props
}) => {
  const classes = cx('pagination', 'pagination-pf-back', className);
  return (
    <ul className={classes} {...props}>
      <li className={page === 1 ? 'disabled' : ''}>
        <a
          href="#"
          title={messagesFirstPage}
          onClick={e => {
            e.preventDefault();
            onFirstPage(e);
          }}
        >
          <PaginationRowArrowIcon name="double-left" />
        </a>
      </li>
      <li className={page === 1 ? 'disabled' : ''}>
        <a
          href="#"
          title={messagesPreviousPage}
          onClick={e => {
            e.preventDefault();
            onPreviousPage(e);
          }}
        >
          <PaginationRowArrowIcon name="left" />
        </a>
      </li>
    </ul>
  );
};
PaginationRowBack.propTypes = {
  /** additional class names */
  className: PropTypes.string,
  /** pagination page */
  page: PropTypes.number,
  /** messages firstPage */
  messagesFirstPage: PropTypes.string,
  /** messages previousPage */
  messagesPreviousPage: PropTypes.string,
  /** first page callback */
  onFirstPage: PropTypes.func,
  /** previous page selection callback */
  onPreviousPage: PropTypes.func
};
export default PaginationRowBack;
