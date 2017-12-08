import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

/**
 * WizardFooter component for Patternfly React
 */
const WizardFooter = ({ children, className, ...rest }) => {
  const classes = cx('wizard-pf-footer', className);
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};
WizardFooter.propTypes = {
  /** Children nodes  */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string,
};
export default WizardFooter;
