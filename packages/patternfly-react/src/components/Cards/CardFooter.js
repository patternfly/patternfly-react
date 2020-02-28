import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const CardFooter = ({ children, className, ...props }) => {
  const classes = classNames('card-pf-footer', className);

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};
CardFooter.propTypes = {
  /** Child node - contents of the element */
  children: PropTypes.node.isRequired,
  /** Additional element css classes */
  className: PropTypes.string
};
CardFooter.defaultProps = {
  className: ''
};
export default CardFooter;
