import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { ListGroup } from '../ListGroup';

/**
 * WizardReviewSubSteps component for Patternfly React
 */
const WizardReviewSubSteps = ({ children, className, collapsed, ...rest }) => {
  const classes = cx(
    'wizard-pf-review-substeps',
    { collapse: collapsed },
    className,
  );
  return (
    <div className={classes} {...rest}>
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
  collapsed: PropTypes.bool,
};
export default WizardReviewSubSteps;
