import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const AggregateStatusCount = ({ children, className, ...props }) => {
  const classes = classNames('card-pf-aggregate-status-count', className);

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  );
};
AggregateStatusCount.propTypes = {
  /** Child node - contents of the element */
  children: PropTypes.node.isRequired,
  /** Additional element css classes */
  className: PropTypes.string
};
export default AggregateStatusCount;

AggregateStatusCount.defaultProps = {
  className: ''
};
