import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * TableActions component for Patternfly React
 */
const TableActions = ({ children, className, ...props }) => {
  const classes = classNames('table-view-pf-actions', className);
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
TableActions.defaultProps = {
  children: null,
  className: ''
};
export default TableActions;
