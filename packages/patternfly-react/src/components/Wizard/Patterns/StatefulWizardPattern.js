import React from 'react';
import PropTypes from 'prop-types';

import WizardPattern from './WizardPattern';
import { wizardStepShape } from './WizardPatternConstants';
import { noop, propOrState, excludeKeys } from '../../../index';

/**
 * StatefulWizardPattern - the Stateful Wizard Pattern component.
 */
class StatefulWizardPattern extends React.Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      activeStepIndex: propOrState(nextProps, prevState, 'activeStepIndex')
    };
  }

  constructor(props) {
    super(props);
    this.state = { activeStepIndex: 0 };
  }

  onStepChanged = newStepIndex => {
    const { shouldPreventStepChange, steps } = this.props;
    const { activeStepIndex } = this.state;
    const { shouldPreventExit } = steps[activeStepIndex];
    const { shouldPreventEnter } = steps[newStepIndex];
    if (
      shouldPreventStepChange(activeStepIndex, newStepIndex) ||
      (shouldPreventExit && shouldPreventExit(newStepIndex)) ||
      (shouldPreventEnter && shouldPreventEnter(activeStepIndex))
    ) {
      return;
    }
    this.setState({ activeStepIndex: newStepIndex });
  };

  render() {
    const { shouldDisableNextStep, shouldDisablePreviousStep, shouldDisableCancelButton, ...otherProps } = this.props;
    const { activeStepIndex } = this.state;
    // NOTE: the steps array is passed down with ...otherProps, including any shouldPreventEnter or shouldPreventExit functions inside it.
    // These functions are for StatefulWizardPattern only and should not be used in WizardPattern despite being passed down here.
    return (
      <WizardPattern
        nextStepDisabled={shouldDisableNextStep(activeStepIndex)}
        previousStepDisabled={shouldDisablePreviousStep(activeStepIndex)}
        cancelButtonDisabled={shouldDisableCancelButton(activeStepIndex)}
        {...excludeKeys(otherProps, ['shouldPreventStepChange'])}
        activeStepIndex={activeStepIndex} // Value from state, as set by getDerivedStateFromProps
        onStepChanged={this.onStepChanged}
      />
    );
  }
}

StatefulWizardPattern.propTypes = {
  ...excludeKeys(WizardPattern.propTypes, [
    'activeStepIndex',
    'nextStepDisabled',
    'previousStepDisabled',
    'cancelButtonDisabled'
  ]),
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      ...wizardStepShape,
      shouldPreventEnter: PropTypes.func,
      shouldPreventExit: PropTypes.func
    })
  ),
  shouldDisableNextStep: PropTypes.func,
  shouldDisablePreviousStep: PropTypes.func,
  shouldDisableCancelButton: PropTypes.func,
  shouldPreventStepChange: PropTypes.func
};

StatefulWizardPattern.defaultProps = {
  ...excludeKeys(WizardPattern.defaultProps, [
    'activeStepIndex',
    'nextStepDisabled',
    'previousStepDisabled',
    'cancelButtonDisabled'
  ]),
  shouldDisableNextStep: noop,
  shouldDisablePreviousStep: noop,
  shouldDisableCancelButton: noop,
  shouldPreventStepChange: noop
};

StatefulWizardPattern.displayName = 'StatefulWizardPattern';

export default StatefulWizardPattern;
