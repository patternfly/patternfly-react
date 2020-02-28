import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * WizardSubStep component for Patternfly React
 */
const WizardSubStep = ({ className, subStep, title, activeSubStep, ...props }) => {
  const classes = classNames(
    'wizard-pf-step-title-substep',
    { active: `${subStep}` === `${activeSubStep}` },
    className
  );
  return (
    <span className={classes} {...props}>
      {title}
    </span>
  );
};
WizardSubStep.propTypes = {
  /** Additional css classes */
  className: PropTypes.string,
  /** The wizard sub step for this step */
  subStep: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** The wizard sub step title */
  title: PropTypes.string,
  /** The active step */
  activeSubStep: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
WizardSubStep.defaultProps = {
  className: '',
  subStep: '',
  title: '',
  activeSubStep: ''
};
export default WizardSubStep;
