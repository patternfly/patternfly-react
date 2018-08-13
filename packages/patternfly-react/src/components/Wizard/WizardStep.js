import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { noop } from '../../common/helpers';

/**
 * WizardStep component for Patternfly React
 */
const WizardStep = ({ children, className, stepIndex, step, label, title, activeStep, onClick, ...props }) => {
  const classes = classNames('wizard-pf-step', { active: `${step}` === `${activeStep}` }, className);
  return (
    <li className={classes} {...props}>
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
  stepIndex: PropTypes.number.isRequired,
  /** The wizard step for this step */
  step: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** The wizard step number label */
  label: PropTypes.string,
  /** The wizard step title */
  title: PropTypes.string,
  /** The active step */
  activeStep: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Step click handler */
  onClick: PropTypes.func
};
WizardStep.defaultProps = {
  children: null,
  className: '',
  step: '',
  label: '',
  title: '',
  activeStep: '',
  onClick: noop
};
export default WizardStep;
