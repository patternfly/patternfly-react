import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * EmptyStateHelp renders contents of the element
 */
const EmptyStateHelp = ({ children, className, ...props }) => {
  const classes = classNames('blank-slate-pf-helpLink', className);

  return (
    <p className={classes} {...props}>
      {children}
    </p>
  );
};
EmptyStateHelp.propTypes = {
  /** Child node - contents of the element */
  children: PropTypes.node.isRequired,
  /** Additional element css classes */
  className: PropTypes.string
};
EmptyStateHelp.defaultProps = {
  className: ''
};
export default EmptyStateHelp;
