import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Button } from '../Button';

/**
 * TableButton component for Patternfly React
 */
const TableButton = ({ children, className, onClick, ...props }) => {
  const classes = cx('table-view-pf-btn', className);
  return (
    <div className={classes} {...props}>
      <Button onClick={onClick}>{children}</Button>
    </div>
  );
};
TableButton.propTypes = {
  /** Children nodes  */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string,
  /** onClick callback for button */
  onClick: PropTypes.func
};
export default TableButton;
