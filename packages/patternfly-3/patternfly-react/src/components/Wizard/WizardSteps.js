import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * WizardSteps component for Patternfly React
 */
const WizardSteps = ({ steps, className, ...props }) => {
  const classes = classNames('wizard-pf-steps', className);
  return (
    <div className={classes} {...props}>
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
WizardSteps.defaultProps = {
  steps: null,
  className: ''
};
export default WizardSteps;
