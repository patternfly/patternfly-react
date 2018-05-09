import { Omit } from '../../../typeUtils';
import { SFC } from 'react';
import { WizardPatternStep, WizardPatternProps } from './WizardPattern';

export interface StatefulWizardPatternProps
  extends Omit<WizardPatternProps, 'activeStepIndex' | 'steps'> {
  steps?: (WizardPatternStep & {
    shouldPreventEnter?(activeStepIndex: number): boolean;
    shouldPreventExit?(activeStepIndex: number): boolean;
  })[];
  shouldPreventEnter?(activeStepIndex: number): boolean;
  shouldPreventExit?(activeStepIndex: number): boolean;
}

declare const StatefulWizardPattern: SFC<StatefulWizardPatternProps>;

export default StatefulWizardPattern;
