import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { Card } from '../index';

const UtilizationCard = ({ children, className, ...props }) => {
  const classes = classNames('card-pf-utilization', className);

  return (
    <Card className={classes} {...props}>
      {children}
    </Card>
  );
};
UtilizationCard.propTypes = {
  /** Child node - contents of the element */
  children: PropTypes.node.isRequired,
  /** Additional element css classes */
  className: PropTypes.string
};
UtilizationCard.defaultProps = {
  className: ''
};
export default UtilizationCard;
