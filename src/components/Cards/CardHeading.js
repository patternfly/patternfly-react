import ClassNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const CardHeading = ({ children, className, ...props }) => {
  const classes = ClassNames('card-pf-heading', className);

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};
CardHeading.propTypes = {
  /** Child node - contents of the element */
  children: PropTypes.node.isRequired,
  /** Additional element css classes */
  className: PropTypes.string
};
export default CardHeading;
