import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

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
  ...rest
}) => {
  const classes = cx(
    'wizard-pf-contents',
    {
      // hide contents if the step is not active
      // OR if we have sub steps and this sub step is not active
      hidden:
        activeStepIndex !== stepIndex ||
        (activeSubStepIndex !== null && activeSubStepIndex !== subStepIndex)
    },
    className
  );
  return (
    <div className={classes} {...rest}>
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
  stepIndex: PropTypes.number,
  /** The wizard sub step index for these contents */
  subStepIndex: PropTypes.number,
  /** The active wizard step index */
  activeStepIndex: PropTypes.number,
  /** The active wizard sub step index */
  activeSubStepIndex: PropTypes.number
};
export default WizardContents;
