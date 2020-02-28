import React from 'react';
import PropTypes from 'prop-types';
import { noop, EmptyState, Spinner, Wizard } from '../../../index';
import { wizardStepShape } from './WizardPatternConstants';

/**
 * WizardPatternBody - the Wizard Pattern Body component.
 */
const WizardPatternBody = ({
  loading,
  steps,
  activeStepIndex,
  goToStep,
  loadingTitle,
  loadingMessage,
  activeStepStr
}) => {
  if (loading) {
    return (
      <Wizard.Row>
        <Wizard.Main>
          <EmptyState>
            <Spinner size="lg" className="blank-slate-pf-icon" loading />
            <EmptyState.Action>
              <h3>{loadingTitle}</h3>
            </EmptyState.Action>
            <EmptyState.Action secondary>
              <p>{loadingMessage}</p>
            </EmptyState.Action>
          </EmptyState>
        </Wizard.Main>
      </Wizard.Row>
    );
  }

  const stepProps = (stepIndex, title) => {
    const label = (stepIndex + 1).toString();
    return {
      key: `wizard-step-${title}`,
      stepIndex,
      label,
      step: label,
      title,
      activeStep: activeStepStr
    };
  };

  if (steps && steps.length) {
    const step = steps[activeStepIndex];

    const renderedStep = step && step.render && step.render(activeStepIndex, step.title);

    return (
      <React.Fragment>
        <Wizard.Steps
          steps={steps.map((stepObj, index) => (
            <Wizard.Step {...stepProps(index, stepObj.title)} onClick={() => goToStep(index)} />
          ))}
        />
        <Wizard.Row>
          <Wizard.Main>
            <Wizard.Contents stepIndex={activeStepIndex} activeStepIndex={activeStepIndex}>
              {renderedStep}
            </Wizard.Contents>
          </Wizard.Main>
        </Wizard.Row>
      </React.Fragment>
    );
  }
  return null;
};

WizardPatternBody.propTypes = {
  loadingTitle: PropTypes.string,
  loadingMessage: PropTypes.string,
  loading: PropTypes.bool,
  steps: PropTypes.arrayOf(PropTypes.shape(wizardStepShape)),
  activeStepIndex: PropTypes.number,
  activeStepStr: PropTypes.string,
  goToStep: PropTypes.func
};

WizardPatternBody.defaultProps = {
  loadingTitle: 'Loading Wizard...',
  loadingMessage: 'Loading...',
  loading: false,
  steps: [],
  activeStepIndex: 0,
  activeStepStr: '1',
  goToStep: noop
};

export default WizardPatternBody;
