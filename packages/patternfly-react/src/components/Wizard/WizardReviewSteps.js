import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ListGroup } from '../ListGroup';

/**
 * WizardReviewSteps component for Patternfly React
 */
const WizardReviewSteps = ({ children, className, ...props }) => {
  const classes = classNames('wizard-pf-review-steps', className);
  return (
    <div className={classes} {...props}>
      <ListGroup componentClass="ul">{children}</ListGroup>
    </div>
  );
};
WizardReviewSteps.propTypes = {
  /** Children nodes */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string
};
WizardReviewSteps.defaultProps = {
  children: null,
  className: ''
};
export default WizardReviewSteps;
