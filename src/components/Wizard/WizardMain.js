import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * WizardMain component for Patternfly React
 */
const WizardMain = ({ children, className, ...props }) => {
  const classes = classNames('wizard-pf-main', className);
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};
WizardMain.propTypes = {
  /** WizardStep nodes */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string
};
WizardMain.defaultProps = {
  children: null,
  className: ''
};
export default WizardMain;
