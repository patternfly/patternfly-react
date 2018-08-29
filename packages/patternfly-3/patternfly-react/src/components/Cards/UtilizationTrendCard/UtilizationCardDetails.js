import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const UtilizationCardDetails = ({ children, className, ...props }) => {
  const classes = classNames('card-pf-utilization-details', className);

  return (
    <p className={classes} {...props}>
      {children}
    </p>
  );
};
UtilizationCardDetails.propTypes = {
  /** Child node - contents of the element */
  children: PropTypes.node.isRequired,
  /** Additional element css classes */
  className: PropTypes.string
};
UtilizationCardDetails.defaultProps = {
  className: ''
};
export default UtilizationCardDetails;
