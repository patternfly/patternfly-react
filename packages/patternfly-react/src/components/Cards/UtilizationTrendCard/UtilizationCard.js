import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import UtilizationCardDetails from './UtilizationCardDetails';
import UtilizationCardDetailsCount from './UtilizationCardDetailsCount';
import UtilizationCardDetailsDesc from './UtilizationCardDetailsDesc';
import UtilizationCardDetailsLine1 from './UtilizationCardDetailsLine1';
import UtilizationCardDetailsLine2 from './UtilizationCardDetailsLine2';

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

UtilizationCard.Details = UtilizationCardDetails;
UtilizationCard.DetailsCount = UtilizationCardDetailsCount;
UtilizationCard.DetailsDesc = UtilizationCardDetailsDesc;
UtilizationCard.DetailsLine1 = UtilizationCardDetailsLine1;
UtilizationCard.DetailsLine2 = UtilizationCardDetailsLine2;

export default UtilizationCard;
