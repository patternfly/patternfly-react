import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Wizard/wizard';
import { Button, ButtonVariant } from '../../../components/Button';
import { WizardStep } from './Wizard';
import { ActionList, ActionListGroup, ActionListItem } from '../../../components/ActionList';
export interface WizardFooterInternalProps {
  onNext: any;
  onBack: any;
  onClose: any;
  isValid: boolean;
  firstStep: boolean;
  activeStep: WizardStep;
  nextButtonText: React.ReactNode;
  backButtonText: React.ReactNode;
  cancelButtonText: React.ReactNode;
}

export const WizardFooterInternal: React.FunctionComponent<WizardFooterInternalProps> = ({
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
    <ActionList>
      <ActionListGroup>
        {!activeStep.hideBackButton && (
          <ActionListItem>
            <Button variant={ButtonVariant.secondary} onClick={onBack} isDisabled={firstStep}>
              {backButtonText}
            </Button>
          </ActionListItem>
        )}
        <ActionListItem>
          <Button variant={ButtonVariant.primary} type="submit" onClick={onNext} isDisabled={!isValid}>
            {nextButtonText}
          </Button>
        </ActionListItem>
      </ActionListGroup>
      {!activeStep.hideCancelButton && (
        <ActionListGroup>
          <ActionListItem>
            <Button variant={ButtonVariant.link} onClick={onClose}>
              {cancelButtonText}
            </Button>
          </ActionListItem>
        </ActionListGroup>
      )}
    </ActionList>
  </footer>
);
WizardFooterInternal.displayName = 'WizardFooterInternal';
