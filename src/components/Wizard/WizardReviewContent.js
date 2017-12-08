import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

/**
 * WizardReviewContent component for Patternfly React
 */
const WizardReviewContent = ({ children, className, collapsed, ...rest }) => {
  const classes = cx(
    'wizard-pf-review-content',
    { collapse: collapsed },
    className,
  );
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};
WizardReviewContent.propTypes = {
  /** Children nodes  */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string,
  /** Step collapsed */
  collapsed: PropTypes.bool,
};
export default WizardReviewContent;
