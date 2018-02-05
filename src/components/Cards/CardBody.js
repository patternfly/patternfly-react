import ClassNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const CardBody = ({ children, className, ...props }) => {
  const classes = ClassNames('card-pf-body', className);

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};
CardBody.propTypes = {
  /** Child node - contents of the element */
  children: PropTypes.node.isRequired,
  /** Additional element css classes */
  className: PropTypes.string
};
export default CardBody;
