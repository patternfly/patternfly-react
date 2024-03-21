import { ReactNode, FunctionComponent } from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Wizard/wizard';
import { Button, ButtonVariant } from '../../../components/Button';
import { WizardStep } from './Wizard';

export interface WizardFooterInternalProps {
  onNext: any;
  onBack: any;
  onClose: any;
  isValid: boolean;
  firstStep: boolean;
  activeStep: WizardStep;
  nextButtonText: ReactNode;
  backButtonText: ReactNode;
  cancelButtonText: ReactNode;
}

export const WizardFooterInternal: FunctionComponent<WizardFooterInternalProps> = ({
  onNext,
  onBack,
  onClose,
  isValid,
  firstStep,
  activeStep,
  nextButtonText,
  backButtonText,
  cancelButtonText
}: WizardFooterInternalProps) => (
  <footer className={css(styles.wizardFooter)}>
    {!activeStep.hideBackButton && (
      <Button variant={ButtonVariant.secondary} onClick={onBack} isDisabled={firstStep}>
        {backButtonText}
      </Button>
    )}
    <Button variant={ButtonVariant.primary} type="submit" onClick={onNext} isDisabled={!isValid}>
      {nextButtonText}
    </Button>
    {!activeStep.hideCancelButton && (
      <div className={styles.wizardFooterCancel}>
        <Button variant={ButtonVariant.link} onClick={onClose}>
          {cancelButtonText}
        </Button>
      </div>
    )}
  </footer>
);
WizardFooterInternal.displayName = 'WizardFooterInternal';
