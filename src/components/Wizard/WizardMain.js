import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

/**
 * WizardMain component for Patternfly React
 */
const WizardMain = ({ children, className, ...rest }) => {
  const classes = cx('wizard-pf-main', className);
  return (
    <div className={classes} {...rest}>
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
export default WizardMain;
