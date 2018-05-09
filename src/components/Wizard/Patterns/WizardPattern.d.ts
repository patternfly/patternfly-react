import { SFC, ReactNode } from 'react';
import { Button } from '../../Button';
import { WizardProps } from '../Wizard';

export interface WizardPatternStep {
  isInvalid?: boolean;
  onNext?(): void;
  preventEnter?: boolean;
  preventExit?: boolean;
  render?(activeStepIndex: number, title: string): ReactNode;
  title?: string;
}

export interface WizardPatternProps {
  activeStepIndex: number;
  backText?: string;
  bodyHeader?: ReactNode;
  cancelText?: string;
  children?: ReactNode;
  closeText?: string;
  loading: boolean;
  loadingMessage: string;
  loadingTitle?: string;
  nextButtonRef?(ref: typeof Button): void;
  nextStepDisabled?: boolean;
  nextText?: string;
  onBack?(newStepIndex: number): void;
  onExited?: WizardProps['onExited'];
  onHide?(onFinalStep: boolean): void;
  onNext?(newStepIndex: number): void;
  onStepChanged(newStepIndex: number): void;
  show?: boolean;
  stepButtonsDisabled?: boolean;
  steps?: WizardPatternStep[];
  title?: ReactNode;
}

declare const WizardPattern: SFC<WizardPatternProps>;

export default WizardPattern;
