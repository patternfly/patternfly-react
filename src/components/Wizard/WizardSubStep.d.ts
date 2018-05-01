import { SFC, HTMLAttributes } from 'react';

export interface WizardSubStepProps extends HTMLAttributes<HTMLSpanElement> {
  activeSubStep?: string | number;
  subStep?: string | number;
  title?: string;
}
declare const WizardSubStep: SFC<WizardSubStepProps>;

export default WizardSubStep;
