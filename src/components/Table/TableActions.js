import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

/**
 * TableActions component for Patternfly React
 */
const TableActions = ({ children, className, ...props }) => {
  const classes = cx('table-view-pf-actions', className);
  return (
    <td className={classes} {...props}>
      {children}
    </td>
  );
};
TableActions.propTypes = {
  /** Children nodes  */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string
};
export default TableActions;
