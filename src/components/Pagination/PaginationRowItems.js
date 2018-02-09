import React from 'react';
import PropTypes from 'prop-types';

/**
 * PaginationRowItems component for Patternfly React
 */
const PaginationRowItems = ({
  itemCount,
  itemsStart,
  itemsEnd,
  messagesOf,
  ...props
}) => (
  <span {...props}>
    <span className="pagination-pf-items-current">
      {itemsStart}-{itemsEnd}
    </span>
    &nbsp;{messagesOf}&nbsp;
    <span className="pagination-pf-items-total">{itemCount}</span>
  </span>
);
PaginationRowItems.propTypes = {
  /** calculated number of rows */
  itemCount: PropTypes.number,
  /** calculated items start */
  itemsStart: PropTypes.number,
  /** calculated items end */
  itemsEnd: PropTypes.number,
  /** messages Of */
  messagesOf: PropTypes.string
};
export default PaginationRowItems;
