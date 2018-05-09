import { WizardPatternStep } from './WizardPattern';
import { SFC } from 'react';

export interface WizardPatternBodyProps {
  activeStepIndex?: number;
  activeStepStr?: string;
  goToStep?(index: number): void;
  loading?: boolean;
  loadingMessage?: string;
  loadingTitle?: string;
  steps?: WizardPatternStep[];
}

declare const WizardPatternBody: SFC<WizardPatternBodyProps>;

export default WizardPatternBody;
