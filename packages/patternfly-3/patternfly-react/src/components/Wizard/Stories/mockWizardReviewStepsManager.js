import React from 'react';
import PropTypes from 'prop-types';
import { Wizard } from '../index';

class MockWizardReviewStepsManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      steps: [...props.steps]
    };
  }
  stepClicked = (e, stepIndex) => {
    e.preventDefault();
    const updated = [...this.state.steps];
    updated[stepIndex].collapsed = !updated[stepIndex].collapsed;
    this.setState({
      steps: updated
    });
  };
  subStepClicked = (e, stepIndex, subStepIndex) => {
    e.preventDefault();
    const updated = [...this.state.steps];
    updated[stepIndex].subSteps[subStepIndex].collapsed = !updated[stepIndex].subSteps[subStepIndex].collapsed;
    this.setState({
      steps: updated
    });
  };
  render() {
    const { steps } = this.state;
    return (
      <Wizard.ReviewSteps>
        {steps.map((step, stepIndex) => {
          if (stepIndex === 2) {
            return null;
          }
          return (
            <Wizard.ReviewStep
              title={step.title}
              collapsed={step.collapsed}
              onClick={e => this.stepClicked(e, stepIndex)}
              key={stepIndex}
            >
              <Wizard.ReviewSubSteps collapsed={step.collapsed}>
                {step.subSteps.map((sub, subStepIndex) => (
                  <Wizard.ReviewSubStep
                    label={sub.label}
                    title={sub.title}
                    collapsed={sub.collapsed}
                    onClick={e => this.subStepClicked(e, stepIndex, subStepIndex)}
                    key={subStepIndex}
                  >
                    <Wizard.ReviewContent collapsed={sub.collapsed}>
                      <Wizard.ReviewItem>
                        <span className="wizard-pf-review-item-label">{sub.contents.label1}:</span>
                        <span className="wizard-pf-review-item-value">Brian Johnson</span>
                      </Wizard.ReviewItem>
                      <Wizard.ReviewItem>
                        <span className="wizard-pf-review-item-label">{sub.contents.label2}:</span>
                        <span className="wizard-pf-review-item-value">This is the description.</span>
                      </Wizard.ReviewItem>
                    </Wizard.ReviewContent>
                  </Wizard.ReviewSubStep>
                ))}
              </Wizard.ReviewSubSteps>
            </Wizard.ReviewStep>
          );
        })}
      </Wizard.ReviewSteps>
    );
  }
}
MockWizardReviewStepsManager.propTypes = {
  /** Wizard steps */
  steps: PropTypes.array.isRequired
};
export default MockWizardReviewStepsManager;
