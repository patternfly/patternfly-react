import { SFC, HTMLAttributes } from 'react';

export interface WizardContentsProps extends HTMLAttributes<HTMLDivElement> {
  activeStepIndex: number;
  stepIndex: number;
  activeSubStepIndex: number;
  subStepIndex?: number;
}

declare const WizardContents: SFC<WizardContentsProps>;

export default WizardContents;
