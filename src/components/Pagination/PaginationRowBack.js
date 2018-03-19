import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import PaginationRowArrowIcon from './PaginationRowArrowIcon';
import { noop } from '../../common/helpers';

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
  const classes = classNames('pagination', 'pagination-pf-back', className);
  return (
    <ul className={classes} {...props}>
      <li className={page === 1 ? 'disabled' : ''}>
        <a
          href="#"
          title={messagesFirstPage}
          onClick={e => {
            e.preventDefault();
            if (page !== 1) {
              onFirstPage(e);
            }
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
            if (page !== 1) {
              onPreviousPage(e);
            }
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
  page: PropTypes.number.isRequired,
  /** messages firstPage */
  messagesFirstPage: PropTypes.string.isRequired,
  /** messages previousPage */
  messagesPreviousPage: PropTypes.string.isRequired,
  /** first page callback */
  onFirstPage: PropTypes.func,
  /** previous page selection callback */
  onPreviousPage: PropTypes.func
};
PaginationRowBack.defaultProps = {
  className: '',
  onFirstPage: noop,
  onPreviousPage: noop
};
export default PaginationRowBack;
