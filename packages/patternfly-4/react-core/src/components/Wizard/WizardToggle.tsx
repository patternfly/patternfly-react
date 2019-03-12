import * as React from 'react';
import styles from '@patternfly/patternfly/components/Wizard/wizard.css';
import { css } from '@patternfly/react-styles';
import { AngleRightIcon, CaretDownIcon } from '@patternfly/react-icons';
import { Step } from './Wizard';

interface WizardToggleProps {
  nav: any;
  steps: Step[];
  activeStep: Step;
}

class WizardToggle extends React.Component<WizardToggleProps> {
  public state = {
    isOpen: false
  };

  private toggleNav = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  public render() {
    const { isOpen } = this.state;
    const { nav, steps, activeStep } = this.props;
    let activeStepIndex;
    let activeStepName;
    let activeStepSubName;
    for (let i = 0; i < steps.length; i++) {
      if (steps[i].steps) {
        for (let j = 0; j < steps[i].steps.length; j++) {
          if (steps[i].steps[j] === activeStep) {
            activeStepIndex = i + 1;
            activeStepName = steps[i].name;
            activeStepSubName = steps[i].steps[j].name;
            break;
          }
        }
      }
      if (steps[i] === activeStep) {
        activeStepIndex = i + 1;
        activeStepName = steps[i].name;
        break;
      }
    }
    return (
      <>
        <button onClick={this.toggleNav} className={css(styles.wizardToggle, isOpen && 'pf-m-expanded')} aria-expanded={isOpen}>
          <ol className={css(styles.wizardToggleList)}>
            <li className={css(styles.wizardToggleListItem)}>
              <span className={css(styles.wizardToggleNum)}>{activeStepIndex}</span> {activeStepName}
              {activeStepSubName && <AngleRightIcon className={css(styles.wizardToggleDivider)} aria-hidden="true" />}
            </li>
            {activeStepSubName && <li className={css(styles.wizardToggleListItem)}>
              {activeStepSubName}
            </li>}
          </ol>
          <CaretDownIcon className={css(styles.wizardToggleIcon)} aria-hidden="true" />
        </button>
        {isOpen && (
          <div className={css(styles.wizardOuterWrap)}>
            <div className={css(styles.wizardInnerWrap)}>
              {nav(isOpen)}
            </div>
          </div>
        )}
      </>
    );
  }

}

export default WizardToggle;