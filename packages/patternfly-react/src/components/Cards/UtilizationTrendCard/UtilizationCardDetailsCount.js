import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const UtilizationCardDetailsCount = ({ children, className, ...props }) => {
  const classes = classNames('card-pf-utilization-card-details-count', className);

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  );
};
UtilizationCardDetailsCount.propTypes = {
  /** Child node - contents of the element */
  children: PropTypes.node.isRequired,
  /** Additional element css classes */
  className: PropTypes.string
};
UtilizationCardDetailsCount.defaultProps = {
  className: ''
};
export default UtilizationCardDetailsCount;
