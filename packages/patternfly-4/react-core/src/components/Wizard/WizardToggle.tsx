import * as React from 'react';
import styles from '@patternfly/patternfly/components/Wizard/wizard.css';
import { css } from '@patternfly/react-styles';
import { AngleRightIcon, CaretDownIcon } from '@patternfly/react-icons';
import { WizardStep } from './Wizard';
import WizardBody from './WizardBody';

interface WizardToggleProps {
  nav: any;
  steps: WizardStep[];
  activeStep: WizardStep;
  children: React.ReactNode,
  hasBodyPadding: boolean;
  isNavOpen: boolean;
  onNavToggle: (isOpen: boolean) => void;
}

class WizardToggle extends React.Component<WizardToggleProps> {

  private toggleNav = () => {
    this.props.onNavToggle(!this.props.isNavOpen);
  }

  public render() {
    const { isNavOpen: isOpen } = this.props;
    const { nav, steps, activeStep, children, hasBodyPadding } = this.props;
    let activeStepIndex;
    let activeStepName;
    let activeStepSubName;
    for (let i = 0; i < steps.length; i++) {
      if (steps[i].steps) {
        // tslint:disable-next-line
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
        <div className={css(styles.wizardOuterWrap)}>
          <div className={css(styles.wizardInnerWrap)}>
            {nav(isOpen)}
            <WizardBody hasBodyPadding={hasBodyPadding}>{activeStep.component}</WizardBody>
          </div>
          {children}
        </div>
      </>
    );
  }

}

export default WizardToggle;