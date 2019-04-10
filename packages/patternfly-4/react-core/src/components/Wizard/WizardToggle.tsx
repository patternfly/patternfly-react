import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/patternfly/components/Wizard/wizard.css';
import { AngleRightIcon, CaretDownIcon } from '@patternfly/react-icons';
import { WizardStep } from './Wizard';
import WizardBody from './WizardBody';

interface WizardToggleProps {
  nav: any;
  steps: WizardStep[];
  activeStep: WizardStep;
  children: React.ReactNode;
  hasBodyPadding: boolean;
  isNavOpen: boolean;
  onNavToggle: (isOpen: boolean) => void;
}

const WizardToggle: React.FunctionComponent<WizardToggleProps> = ({
  isNavOpen,
  onNavToggle,
  nav,
  steps,
  activeStep,
  children,
  hasBodyPadding,
  ...props
}: WizardToggleProps) => {
  let activeStepIndex;
  let activeStepName;
  let activeStepSubName;
  for (let i = 0; i < steps.length; i++) {
    if (steps[i] === activeStep) {
      activeStepIndex = i + 1;
      activeStepName = steps[i].name;
      break;
    } else if (steps[i].steps) {
      for (let j = 0; j < steps[i].steps!.length; j++) {
        if (steps[i].steps![j] === activeStep) {
          activeStepIndex = i + 1;
          activeStepName = steps[i].name;
          activeStepSubName = steps[i].steps![j].name;
          break;
        }
      }
    }
  }
  return (
    <>
      <button
        onClick={() => onNavToggle(!isNavOpen)}
        className={css(styles.wizardToggle, isNavOpen && 'pf-m-expanded')}
        aria-expanded={isNavOpen}
      >
        <ol className={css(styles.wizardToggleList)}>
          <li className={css(styles.wizardToggleListItem)}>
            <span className={css(styles.wizardToggleNum)}>{activeStepIndex}</span> {activeStepName}
            {activeStepSubName && <AngleRightIcon className={css(styles.wizardToggleSeparator)} aria-hidden="true" />}
          </li>
          {activeStepSubName && <li className={css(styles.wizardToggleListItem)}>{activeStepSubName}</li>}
        </ol>
        <CaretDownIcon className={css(styles.wizardToggleIcon)} aria-hidden="true" />
      </button>
      <div className={css(styles.wizardOuterWrap)}>
        <div className={css(styles.wizardInnerWrap)}>
          {nav(isNavOpen)}
          <WizardBody hasBodyPadding={hasBodyPadding}>{activeStep.component}</WizardBody>
        </div>
        {children}
      </div>
    </>
  );
};

export default WizardToggle;
