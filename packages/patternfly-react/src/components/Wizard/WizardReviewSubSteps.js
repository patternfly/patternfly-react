import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ListGroup } from '../ListGroup';

/**
 * WizardReviewSubSteps component for Patternfly React
 */
const WizardReviewSubSteps = ({ children, className, collapsed, ...props }) => {
  const classes = classNames('wizard-pf-review-substeps', { collapse: collapsed }, className);
  return (
    <div className={classes} {...props}>
      <ListGroup componentClass="ul">{children}</ListGroup>
    </div>
  );
};
WizardReviewSubSteps.propTypes = {
  /** Children nodes */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string,
  /** Step collapsed */
  collapsed: PropTypes.bool
};
WizardReviewSubSteps.defaultProps = {
  children: null,
  className: '',
  collapsed: false
};
export default WizardReviewSubSteps;
