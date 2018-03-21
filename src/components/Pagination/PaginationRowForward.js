import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import PaginationRowArrowIcon from './PaginationRowArrowIcon';
import { noop } from '../../common/helpers';

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
  const classes = classNames('pagination', 'pagination-pf-forward', className);
  return (
    <ul className={classes}>
      <li className={page === amountOfPages ? 'disabled' : ''}>
        <a
          href="#"
          title={messagesNextPage}
          onClick={e => {
            e.preventDefault();
            if (page !== amountOfPages) {
              onNextPage(e);
            }
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
            if (page !== amountOfPages) {
              onLastPage(e);
            }
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
  page: PropTypes.number.isRequired,
  /** calculated amount of pages */
  amountOfPages: PropTypes.number.isRequired,
  /** messages next page */
  messagesNextPage: PropTypes.string.isRequired,
  /** messages last page */
  messagesLastPage: PropTypes.string.isRequired,
  /** next page callback */
  onNextPage: PropTypes.func,
  /** last page callback */
  onLastPage: PropTypes.func
};
PaginationRowForward.defaultProps = {
  className: '',
  onNextPage: noop,
  onLastPage: noop
};
export default PaginationRowForward;
