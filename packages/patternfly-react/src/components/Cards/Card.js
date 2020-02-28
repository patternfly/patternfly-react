import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import CardBody from './CardBody';
import CardDropdownButton from './CardDropdownButton';
import CardFooter from './CardFooter';
import CardGrid from './CardGrid';
import CardHeading from './CardHeading';
import CardHeightMatching from './CardHeightMatching';
import CardLink from './CardLink';
import CardTitle from './CardTitle';
import {
  AggregateStatusCount,
  AggregateStatusNotification,
  AggregateStatusNotifications
} from './AggregateStatusCard';
import {
  UtilizationCard,
  UtilizationCardDetails,
  UtilizationCardDetailsCount,
  UtilizationCardDetailsDesc,
  UtilizationCardDetailsLine1,
  UtilizationCardDetailsLine2
} from './UtilizationTrendCard';

/**
 * Card Component for PatternFly React
 */
const Card = ({ children, className, accented, aggregated, aggregatedMini, matchHeight, cardRef, ...props }) => {
  const classes = classNames(
    'card-pf',
    { 'card-pf-accented': accented },
    { 'card-pf-aggregate-status': aggregated },
    {
      'card-pf-aggregate-status card-pf-aggregate-status-mini': aggregatedMini
    },
    { 'card-pf-match-height': matchHeight },
    className
  );

  return (
    <div className={classes} ref={cardRef} {...props}>
      {children}
    </div>
  );
};

Card.propTypes = {
  /** Child nodes */
  children: PropTypes.node.isRequired,
  /** Additional element css classes */
  className: PropTypes.string,
  /** Top Card Accent Bool */
  accented: PropTypes.bool,
  /** Aggregate Card Bool */
  aggregated: PropTypes.bool,
  /** Aggregate Mini Card Bool */
  aggregatedMini: PropTypes.bool,
  /** Match Height Bool */
  matchHeight: PropTypes.bool,
  /** Reference prop */
  cardRef: PropTypes.func
};

Card.defaultProps = {
  className: '',
  accented: false,
  aggregated: false,
  aggregatedMini: false,
  matchHeight: false,
  cardRef: null
};

Card.Title = CardTitle;
Card.Body = CardBody;
Card.Heading = CardHeading;
Card.Footer = CardFooter;
Card.Link = CardLink;
Card.Grid = CardGrid;
Card.DropdownButton = CardDropdownButton;
Card.HeightMatching = CardHeightMatching;
Card.AggregateStatusCount = AggregateStatusCount;
Card.AggregateStatusNotification = AggregateStatusNotification;
Card.AggregateStatusNotifications = AggregateStatusNotifications;
Card.UtilizationCard = UtilizationCard;
Card.UtilizationCardDetails = UtilizationCardDetails;
Card.UtilizationCardDetailsCount = UtilizationCardDetailsCount;
Card.UtilizationCardDetailsDesc = UtilizationCardDetailsDesc;
Card.UtilizationCardDetailsLine1 = UtilizationCardDetailsLine1;
Card.UtilizationCardDetailsLine2 = UtilizationCardDetailsLine2;

export default Card;
