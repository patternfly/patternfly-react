import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * TableGridBody Component for PatternFly
 */

const TableGridBody = ({ children, className, ...props }) => {
  const classes = classNames('table-grid-pf-body', className);
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

TableGridBody.propTypes = {
  /** Children nodes */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string
};
TableGridBody.defaultProps = {
  children: null,
  className: ''
};

export default TableGridBody;
