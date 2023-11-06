import React from 'react';

import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Wizard/wizard';

import { Button, ButtonVariant } from '../Button';
import { isCustomWizardFooter, WizardFooterButtonProps, WizardStepType } from './types';

/**
 * Hosts the standard structure of a footer with ties to the active step so that text for buttons can vary from step to step.
 */

export interface WizardFooterProps {
  /** The active step */
  activeStep: WizardStepType;
  /** Next button callback */
  onNext: (event: React.MouseEvent<HTMLButtonElement>) => void | Promise<void>;
  /** Back button callback */
  onBack: (event: React.MouseEvent<HTMLButtonElement>) => void | Promise<void>;
  /** Cancel link callback */
  onClose: (event: React.MouseEvent<HTMLButtonElement>) => void;
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
  /** Flag to hide the back button */
  isBackHidden?: boolean;
  /** Flag to hide the cancel button */
  isCancelHidden?: boolean;
  /** Additional props for the Next button. */
  nextButtonProps?: Omit<WizardFooterButtonProps, 'isDisabled' | 'type'>;
  /** Additional props for the Back button. */
  backButtonProps?: Omit<WizardFooterButtonProps, 'isDisabled'>;
  /** Additional props for the Cancel button. */
  cancelButtonProps?: WizardFooterButtonProps;
}

/**
 * Applies default wizard footer styling any number of child elements.
 */

interface WizardFooterWrapperProps {
  children: React.ReactNode;
}

export const WizardFooterWrapper = ({ children }: WizardFooterWrapperProps) => (
  <footer className={css(styles.wizardFooter)}>{children}</footer>
);

export const WizardFooter = ({ activeStep, ...internalProps }: WizardFooterProps) => {
  const activeStepFooter = !isCustomWizardFooter(activeStep?.footer) && activeStep?.footer;
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
  cancelButtonText = 'Cancel',
  nextButtonProps,
  backButtonProps,
  cancelButtonProps
}: Omit<WizardFooterProps, 'activeStep'>) => (
  <WizardFooterWrapper>
    {!isBackHidden && (
      <Button variant={ButtonVariant.secondary} onClick={onBack} isDisabled={isBackDisabled} {...backButtonProps}>
        {backButtonText}
      </Button>
    )}

    <Button
      variant={ButtonVariant.primary}
      type="submit"
      onClick={onNext}
      isDisabled={isNextDisabled}
      {...nextButtonProps}
    >
      {nextButtonText}
    </Button>

    {!isCancelHidden && (
      <div className={styles.wizardFooterCancel}>
        <Button variant={ButtonVariant.link} onClick={onClose} {...cancelButtonProps}>
          {cancelButtonText}
        </Button>
      </div>
    )}
  </WizardFooterWrapper>
);

WizardFooterWrapper.displayName = 'WizardFooterWrapper';
WizardFooter.displayName = 'WizardFooter';
