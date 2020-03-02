import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const UtilizationCardDetailsLine2 = ({ children, className, ...props }) => {
  const classes = classNames('card-pf-utilization-card-details-line-2', className);

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  );
};
UtilizationCardDetailsLine2.propTypes = {
  /** Child node - contents of the element */
  children: PropTypes.node.isRequired,
  /** Additional element css classes */
  className: PropTypes.string
};
UtilizationCardDetailsLine2.defaultProps = {
  className: ''
};
export default UtilizationCardDetailsLine2;
