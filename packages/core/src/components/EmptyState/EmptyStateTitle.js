import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * EmptyStateTitle renders contents of the element
 */
const EmptyStateTitle = ({ children, className, ...props }) => {
  const classes = classNames('h1', 'blank-slate-pf-title', className);
  return (
    <h4 className={classes} {...props}>
      {children}
    </h4>
  );
};
EmptyStateTitle.propTypes = {
  /** Child node - contents of the element */
  children: PropTypes.node.isRequired,
  /** Additional element css classes */
  className: PropTypes.string
};
EmptyStateTitle.defaultProps = {
  className: ''
};
export default EmptyStateTitle;
