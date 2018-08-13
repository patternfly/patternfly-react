import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * WizardContents component for Patternfly React
 */
const WizardContents = ({
  children,
  className,
  stepIndex,
  subStepIndex,
  activeStepIndex,
  activeSubStepIndex,
  ...props
}) => {
  const classes = classNames(
    'wizard-pf-contents',
    {
      // hide contents if the step is not active
      // OR if we have sub steps and this sub step is not active
      hidden: activeStepIndex !== stepIndex || (activeSubStepIndex !== null && activeSubStepIndex !== subStepIndex)
    },
    className
  );
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};
WizardContents.propTypes = {
  /** WizardStep nodes */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string,
  /** The wizard step index for these contents */
  stepIndex: PropTypes.number.isRequired,
  /** The wizard sub step index for these contents */
  subStepIndex: PropTypes.number,
  /** The active wizard step index */
  activeStepIndex: PropTypes.number.isRequired,
  /** The active wizard sub step index */
  activeSubStepIndex: PropTypes.number
};
WizardContents.defaultProps = {
  children: null,
  className: '',
  subStepIndex: null,
  activeSubStepIndex: null
};
export default WizardContents;
