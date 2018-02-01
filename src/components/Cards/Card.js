import ClassNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ children, className, accented, aggregated, ...props }) => {
  const classes = ClassNames(
    'card-pf',
    { 'card-pf-accented': accented },
    { 'card-pf-aggregate-status': aggregated },
    className
  );

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
  className: PropTypes.string,
  /** Accent & Aggregate bool */
  accented: PropTypes.bool,
  aggregated: PropTypes.bool
};

Card.defaultProps = {
  accented: false,
  aggregated: false
};
export default Card;
