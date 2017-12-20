import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

/**
 * WizardStep component for Patternfly React
 */
const WizardStep = ({
  children,
  className,
  stepIndex,
  step,
  label,
  title,
  activeStep,
  onClick,
  ...rest
}) => {
  const classes = cx(
    'wizard-pf-step',
    { active: step === activeStep },
    className
  );
  return (
    <li className={classes} {...rest}>
      <a
        href="#"
        onClick={e => {
          e.preventDefault();
          onClick(stepIndex);
        }}
      >
        <span className="wizard-pf-step-number">{label}</span>
        <span className="wizard-pf-step-title">{title}</span>
        {children}
      </a>
    </li>
  );
};
WizardStep.propTypes = {
  /** Children nodes */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string,
  /** The wizard step index */
  stepIndex: PropTypes.number,
  /** The wizard step for this step */
  step: PropTypes.string,
  /** The wizard step number label */
  label: PropTypes.string,
  /** The wizard step title */
  title: PropTypes.string,
  /** The active step */
  activeStep: PropTypes.string,
  /** Step click handler */
  onClick: PropTypes.func
};
export default WizardStep;
