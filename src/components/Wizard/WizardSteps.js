import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

/**
 * WizardSteps component for Patternfly React
 */
const WizardSteps = ({ steps, className, ...rest }) => {
  const classes = cx('wizard-pf-steps', className);
  return (
    <div className={classes} {...rest}>
      <ul className="wizard-pf-steps-indicator">{steps}</ul>
    </div>
  );
};
WizardSteps.propTypes = {
  /** WizardStep nodes */
  steps: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string
};
export default WizardSteps;
