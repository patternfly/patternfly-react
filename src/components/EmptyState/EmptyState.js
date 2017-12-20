import ClassNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Empty State Component for Patternfly React
 */
const EmptyState = ({ children, className, ...props }) => {
  const classes = ClassNames('blank-slate-pf', className);

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
export default EmptyState;
