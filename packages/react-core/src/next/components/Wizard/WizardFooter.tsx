import React from 'react';

import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Wizard/wizard';

import { Button, ButtonVariant } from '../../../components/Button';
import { isCustomWizardFooter, WizardControlStep, WizardNavStepFunction } from './types';

/**
 * Hosts the standard structure of a footer with ties to the active step so that text for buttons can vary from step to step.
 */

export interface WizardFooterProps {
  /** The current step */
  currentStep: WizardControlStep;
  /** Next button callback */
  onNext: () => WizardNavStepFunction | void;
  /** Back button callback */
  onBack: () => WizardNavStepFunction | void;
  /** Cancel link callback */
  onClose: () => void;
  /** Custom text for the Next button. The current step's nextButtonText takes precedence. */
  nextButtonText?: React.ReactNode;
  /** Custom text for the Back button */
  backButtonText?: React.ReactNode;
  /** Custom text for the Cancel link */
  cancelButtonText?: React.ReactNode;
  /** Flag to disable the next button */
  isNextDisabled?: boolean;
  /** Flag to disable the back button */
  isBackDisabled?: boolean;
  /** True to hide the Back button */
  isBackHidden?: boolean;
  /** True to hide the Cancel button */
  isCancelHidden?: boolean;
}

export const WizardFooterWrapper: React.FunctionComponent = ({ children }) => (
  <footer className={css(styles.wizardFooter)}>{children}</footer>
);

export const WizardFooter = ({ currentStep, ...internalProps }: WizardFooterProps) => {
  const currentStepFooter = !isCustomWizardFooter(currentStep.footer) && currentStep.footer;
  return <InternalWizardFooter {...internalProps} {...currentStepFooter} />;
};

const InternalWizardFooter = ({
  onNext,
  onBack,
  onClose,
  isNextDisabled,
  isBackDisabled,
  isBackHidden,
  isCancelHidden,
  nextButtonText = 'Next',
  backButtonText = 'Back',
  cancelButtonText = 'Cancel'
}: Omit<WizardFooterProps, 'currentStep'>) => (
  <WizardFooterWrapper>
    <Button variant={ButtonVariant.primary} type="submit" onClick={onNext} isDisabled={isNextDisabled}>
      {nextButtonText}
    </Button>

    {!isBackHidden && (
      <Button variant={ButtonVariant.secondary} onClick={onBack} isDisabled={isBackDisabled}>
        {backButtonText}
      </Button>
    )}

    {!isCancelHidden && (
      <div className={styles.wizardFooterCancel}>
        <Button variant={ButtonVariant.link} onClick={onClose}>
          {cancelButtonText}
        </Button>
      </div>
    )}
  </WizardFooterWrapper>
);

WizardFooterWrapper.displayName = 'WizardFooterWrapper';
WizardFooter.displayName = 'WizardFooter';
