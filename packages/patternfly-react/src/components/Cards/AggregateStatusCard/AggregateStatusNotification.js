import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const AggregateStatusNotification = ({ children, className, ...props }) => {
  const classes = classNames('card-pf-aggregate-status-notification', className);

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  );
};
AggregateStatusNotification.propTypes = {
  /** Child node - contents of the element */
  children: PropTypes.node.isRequired,
  /** Additional element css classes */
  className: PropTypes.string
};
AggregateStatusNotification.defaultProps = {
  className: ''
};

export default AggregateStatusNotification;
