import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const UtilizationCardDetailsLine1 = ({ children, className, ...props }) => {
  const classes = classNames('card-pf-utilization-card-details-line-1', className);

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  );
};
UtilizationCardDetailsLine1.propTypes = {
  /** Child node - contents of the element */
  children: PropTypes.node.isRequired,
  /** Additional element css classes */
  className: PropTypes.string
};
UtilizationCardDetailsLine1.defaultProps = {
  className: ''
};
export default UtilizationCardDetailsLine1;
