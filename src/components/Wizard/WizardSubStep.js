import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

/**
 * WizardSubStep component for Patternfly React
 */
const WizardSubStep = ({
  className,
  subStep,
  title,
  activeSubStep,
  ...rest
}) => {
  const classes = cx(
    'wizard-pf-step-title-substep',
    { active: subStep === activeSubStep },
    className
  );
  return (
    <span className={classes} {...rest}>
      {title}
    </span>
  );
};
WizardSubStep.propTypes = {
  /** Additional css classes */
  className: PropTypes.string,
  /** The wizard sub step for this step */
  subStep: PropTypes.string,
  /** The wizard sub step title */
  title: PropTypes.string,
  /** The active step */
  activeSubStep: PropTypes.string
};
WizardSubStep.defaultProps = {
  className: '',
  subStep: '',
  title: '',
  activeSubStep: ''
};
export default WizardSubStep;
