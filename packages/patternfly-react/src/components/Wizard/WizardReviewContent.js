import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * WizardReviewContent component for Patternfly React
 */
const WizardReviewContent = ({ children, className, collapsed, ...props }) => {
  const classes = classNames('wizard-pf-review-content', { collapse: collapsed }, className);
  return (
    <div className={classes} {...props}>
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
  collapsed: PropTypes.bool
};
WizardReviewContent.defaultProps = {
  children: null,
  className: '',
  collapsed: false
};
export default WizardReviewContent;
