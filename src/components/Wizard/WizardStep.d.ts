import { SFC, HTMLAttributes } from 'react';
import { Omit } from '../../typeUtils';

export interface WizardStepProps
  extends Omit<HTMLAttributes<HTMLLIElement>, 'onClick'> {
  stepIndex: number;
  activeStep?: string | number;
  label?: string;
  onClick?(stepIndex: number): void;
  step?: string | number;
  title?: string;
}

declare const WizardStep: SFC<WizardStepProps>;

export default WizardStep;
