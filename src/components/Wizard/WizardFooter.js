import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * WizardFooter component for Patternfly React
 */
const WizardFooter = ({ children, className, ...props }) => {
  const classes = classNames('wizard-pf-footer', className);
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};
WizardFooter.propTypes = {
  /** Children nodes  */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string
};
WizardFooter.defaultProps = {
  children: null,
  className: ''
};
export default WizardFooter;
