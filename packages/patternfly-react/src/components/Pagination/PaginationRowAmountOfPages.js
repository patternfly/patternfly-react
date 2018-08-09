import React from 'react';
import PropTypes from 'prop-types';

/**
 * PaginationRowAmountOfPages component for Patternfly React
 */
const PaginationRowAmountOfPages = ({ messagesOf, amountOfPages, ...props }) => (
  <span {...props}>
    &nbsp;
    {messagesOf}
    &nbsp;
    <span className="pagination-pf-pages">{amountOfPages}</span>
  </span>
);
PaginationRowAmountOfPages.propTypes = {
  /** messages of */
  messagesOf: PropTypes.string.isRequired,
  /** calculated amount of pages */
  amountOfPages: PropTypes.number.isRequired
};
export default PaginationRowAmountOfPages;
