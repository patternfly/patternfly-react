import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const AggregateStatusNotifications = ({ children, className, ...props }) => {
  const classes = classNames('card-pf-aggregate-status-notifications', className);

  return (
    <p className={classes} {...props}>
      {children}
    </p>
  );
};
AggregateStatusNotifications.propTypes = {
  /** Child node - contents of the element */
  children: PropTypes.node.isRequired,
  /** Additional element css classes */
  className: PropTypes.string
};
export default AggregateStatusNotifications;

AggregateStatusNotifications.defaultProps = {
  className: ''
};
