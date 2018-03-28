import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * WizardReviewItem component for Patternfly React
 */
const WizardReviewItem = ({ children, className, ...rest }) => {
  const classes = classNames('wizard-pf-review-item', className);
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};
WizardReviewItem.propTypes = {
  /** Children nodes  */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string
};
WizardReviewItem.defaultProps = {
  children: null,
  className: ''
};
export default WizardReviewItem;
