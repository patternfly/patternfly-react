import ClassNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * EmptyStateInfo renders contents of the element
 */
const EmptyStateInfo = ({ children, className, ...props }) => {
  const classes = ClassNames('blank-slate-pf-info', className);

  return (
    <p className={classes} {...props}>
      {children}
    </p>
  );
};
EmptyStateInfo.propTypes = {
  /** Child node - contents of the element */
  children: PropTypes.node.isRequired,
  /** Additional element css classes */
  className: PropTypes.string
};
export default EmptyStateInfo;
