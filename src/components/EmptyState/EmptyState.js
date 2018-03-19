import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Empty State Component for Patternfly React
 */
const EmptyState = ({ children, className, ...props }) => {
  const classes = classNames('blank-slate-pf', className);

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};
EmptyState.propTypes = {
  /** Child nodes */
  children: PropTypes.node.isRequired,
  /** Additional element css classes */
  className: PropTypes.string
};
EmptyState.defaultProps = {
  className: ''
};
export default EmptyState;
