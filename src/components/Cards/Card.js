import ClassNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ children, className, ...props }) => {
  const classes = ClassNames('card-pf', className);

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};
Card.propTypes = {
  /** Child nodes */
  children: PropTypes.node.isRequired,
  /** Additional element css classes */
  className: PropTypes.string
};
export default Card;
