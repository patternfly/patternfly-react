import { SFC, ReactNode, HTMLAttributes } from 'react';

export interface WizardStepsProps extends HTMLAttributes<HTMLDivElement> {
  steps?: ReactNode;
}

declare const WizardSteps: SFC<WizardStepsProps>;

export default WizardSteps;
