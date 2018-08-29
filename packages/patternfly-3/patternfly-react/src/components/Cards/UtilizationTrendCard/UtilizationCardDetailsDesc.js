import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const UtilizationCardDetailsDesc = ({ children, className, ...props }) => {
  const classes = classNames('card-pf-utilization-card-details-description', className);

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  );
};
UtilizationCardDetailsDesc.propTypes = {
  /** Child node - contents of the element */
  children: PropTypes.node.isRequired,
  /** Additional element css classes */
  className: PropTypes.string
};
UtilizationCardDetailsDesc.defaultProps = {
  className: ''
};
export default UtilizationCardDetailsDesc;
