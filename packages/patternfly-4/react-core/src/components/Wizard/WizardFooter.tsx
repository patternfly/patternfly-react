import * as React from 'react';
import styles from '@patternfly/patternfly/components/Wizard/wizard.css';
import { css } from '@patternfly/react-styles';
import { Button, ButtonVariant } from '../Button';
import { WizardStep } from './Wizard';

export interface WizardFooterProps {
  /** Buttons in the footer */
  children: any;
}

export const WizardFooter: React.SFC<WizardFooterProps> = ({
  children
}) => {
  return (
    <footer className={css(styles.wizardFooter)}>
      {children}
    </footer>
  )
};

export interface WizardFooterInternalProps {
  onNext: any;
  onBack: any;
  onClose: any;
  isValid: boolean;
  firstStep: boolean;
  activeStep: WizardStep;
  nextButtonText: string;
  backButtonText: string;
  cancelButtonText: string;
}

export const WizardFooterInternal: React.SFC<WizardFooterInternalProps> = ({
  onNext,
  onBack,
  onClose,
  isValid,
  firstStep,
  activeStep,
  nextButtonText,
  backButtonText,
  cancelButtonText
}) => (
    <footer className={css(styles.wizardFooter)}>
      <Button variant={ButtonVariant.primary} type="submit" onClick={onNext} isDisabled={!isValid}>
        {nextButtonText}
      </Button>
      {!activeStep.hideBackButton && <Button variant={ButtonVariant.secondary} onClick={onBack} className={css(firstStep && 'pf-m-disabled')}>
        {backButtonText}
      </Button>}
      {!activeStep.hideCancelButton && <Button variant={ButtonVariant.link} onClick={onClose}>
        {cancelButtonText}
      </Button>}
    </footer>
  );
