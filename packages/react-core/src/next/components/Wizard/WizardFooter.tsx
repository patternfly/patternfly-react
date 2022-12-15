import React from 'react';

import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Wizard/wizard';

import { Button, ButtonVariant } from '../../../components/Button';
import { isCustomWizardFooter, WizardControlStep, WizardNavStepFunction } from './types';

/**
 * Hosts the standard structure of a footer with ties to the active step so that text for buttons can vary from step to step.
 */

export interface WizardFooterProps {
  /** The active step */
  activeStep: WizardControlStep;
  /** Next button callback */
  onNext: () => WizardNavStepFunction | void | Promise<void>;
  /** Back button callback */
  onBack: () => WizardNavStepFunction | void | Promise<void>;
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

interface WizardFooterWrapperProps {
  children: React.ReactNode;
}

export const WizardFooterWrapper = ({ children }: WizardFooterWrapperProps) => (
  <footer className={css(styles.wizardFooter)}>{children}</footer>
);

export const WizardFooter = ({ activeStep, ...internalProps }: WizardFooterProps) => {
  const activeStepFooter = !isCustomWizardFooter(activeStep.footer) && activeStep.footer;
  return <InternalWizardFooter {...internalProps} {...activeStepFooter} />;
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
}: Omit<WizardFooterProps, 'activeStep'>) => (
  <WizardFooterWrapper>
    {!isBackHidden && (
      <Button variant={ButtonVariant.secondary} onClick={onBack} isDisabled={isBackDisabled}>
        {backButtonText}
      </Button>
    )}

    <Button variant={ButtonVariant.primary} type="submit" onClick={onNext} isDisabled={isNextDisabled}>
      {nextButtonText}
    </Button>

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
