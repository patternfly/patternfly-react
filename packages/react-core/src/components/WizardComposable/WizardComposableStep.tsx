import React from 'react';

import { Step } from './types';
import { WizardComposableBody, WizardComposableBodyProps } from './WizardComposableBody';

export type WizardComposableStepProps = Omit<Step, 'parentId'> &
  WizardComposableBodyProps & {
    /** Optional for when the Step is used as a parent to sub-steps */
    children?: React.ReactNode;
    /** Flag indicating whether to use a WizardBody to wrap step contents or not */
    includeStepBody?: boolean;
    /** Optional list of sub-steps */
    steps?: React.ReactElement<WizardComposableStepProps>[];
  };

export const WizardComposableStep = ({
  hasNoBodyPadding = false,
  wrapperElement = 'div',
  includeStepBody = true,
  'aria-label': ariaLabel = 'Wizard body',
  'aria-labelledby': ariaLabelledBy,
  children
}: WizardComposableStepProps) =>
  includeStepBody ? (
    <WizardComposableBody
      wrapperElement={wrapperElement}
      hasNoBodyPadding={hasNoBodyPadding}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
    >
      {children}
    </WizardComposableBody>
  ) : (
    <>{children}</>
  );

WizardComposableStep.displayName = 'WizardComposableStep';
