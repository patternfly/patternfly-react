import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const CardTitle = ({ children, className, ...props }) => {
  const classes = classNames('card-pf-title', className);

  return (
    <h2 className={classes} {...props}>
      {children}
    </h2>
  );
};
CardTitle.propTypes = {
  /** Child node - contents of the element */
  children: PropTypes.node.isRequired,
  /** Additional element css classes */
  className: PropTypes.string
};
CardTitle.defaultProps = {
  className: ''
};
export default CardTitle;
