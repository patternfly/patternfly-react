import ClassNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const Card = ({
  children,
  className,
  accented,
  aggregated,
  aggregatedMini,
  ...props
}) => {
  const classes = ClassNames(
    'card-pf',
    { 'card-pf-accented': accented },
    { 'card-pf-aggregate-status': aggregated },
    { 'card-pf-aggregate-status-mini': aggregatedMini },
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
  /** Accent & Aggregate/Mini bool */
  accented: PropTypes.bool,
  aggregated: PropTypes.bool,
  aggregatedMini: PropTypes.bool
};

export default Card;
