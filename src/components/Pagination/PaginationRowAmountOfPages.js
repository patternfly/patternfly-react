import React from 'react';
import PropTypes from 'prop-types';

/**
 * PaginationRowAmountOfPages component for Patternfly React
 */
const PaginationRowAmountOfPages = ({
  messagesOf,
  amountOfPages,
  ...props
}) => {
  return (
    <span {...props}>
      &nbsp;{messagesOf}&nbsp;
      <span className="pagination-pf-pages">{amountOfPages}</span>
    </span>
  );
};
PaginationRowAmountOfPages.propTypes = {
  /** messages of */
  messagesOf: PropTypes.string,
  /** calculated amount of pages */
  amountOfPages: PropTypes.number
};
export default PaginationRowAmountOfPages;
