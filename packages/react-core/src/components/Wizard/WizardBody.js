import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * WizardBody component for Patternfly React
 */
const WizardBody = ({ children, className, ...rest }) => {
  const classes = classNames('wizard-pf-body', className);
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};
WizardBody.propTypes = {
  /** Children nodes  */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string
};
WizardBody.defaultProps = {
  children: null,
  className: ''
};
export default WizardBody;
