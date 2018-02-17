import ClassNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * EmptyStateAction renders contents of the element
 */
const EmptyStateAction = ({ children, className, secondary, ...props }) => {
  const classes = ClassNames(
    {
      'blank-slate-pf-main-action': !secondary,
      'blank-slate-pf-secondary-action': secondary
    },
    className
  );

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};
EmptyStateAction.propTypes = {
  /** Child node - contents of the element */
  children: PropTypes.node.isRequired,
  /** Additional element css classes */
  className: PropTypes.string,
  /** Turn on secondary container styling */
  secondary: PropTypes.bool
};
EmptyStateAction.defaultProps = {
  className: '',
  secondary: false
};
export default EmptyStateAction;
