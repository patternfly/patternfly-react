import React from 'react';

import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Wizard/wizard';

import { Button, ButtonVariant } from '../Button';
import { Step, SubStep, WizardNavStepFunction } from './types';

export interface WizardComposableFooterProps {
  /** The currently active WizardStep */
  activeStep: Step | SubStep;
  /** Next button callback */
  onNext(): WizardNavStepFunction | void;
  /** Back button callback */
  onBack(): WizardNavStepFunction | void;
  /** Cancel link callback */
  onClose(): void;
  /** Custom text for the Next button. The activeStep's nextButtonText takes precedence. */
  nextButtonText?: React.ReactNode;
  /** Custom text for the Back button */
  backButtonText?: React.ReactNode;
  /** Custom text for the Cancel link */
  cancelButtonText?: React.ReactNode;
  /** Optional flag to disable the first step's back button */
  disableBackButton?: boolean;
}

export const WizardComposableFooter = ({
  onNext,
  onBack,
  onClose,
  activeStep,
  disableBackButton,
  nextButtonText = 'Next',
  backButtonText = 'Back',
  cancelButtonText = 'Cancel'
}: WizardComposableFooterProps) => (
  <footer className={css(styles.wizardFooter)}>
    <Button variant={ButtonVariant.primary} type="submit" onClick={onNext} isDisabled={activeStep.disableNext}>
      {activeStep.nextButtonText || nextButtonText}
    </Button>

    {!activeStep.hideBackButton && (
      <Button variant={ButtonVariant.secondary} onClick={onBack} isDisabled={disableBackButton}>
        {backButtonText}
      </Button>
    )}

    {!activeStep.hideCancelButton && (
      <div className={styles.wizardFooterCancel}>
        <Button variant={ButtonVariant.link} onClick={onClose}>
          {cancelButtonText}
        </Button>
      </div>
    )}
  </footer>
);

WizardComposableFooter.displayName = 'WizardComposableFooter';
