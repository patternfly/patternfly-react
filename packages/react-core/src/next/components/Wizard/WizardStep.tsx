import React from 'react';

import { WizardBasicStep } from './types';
import { WizardBody, WizardBodyProps } from './WizardBody';

/**
 * Used as a passthrough of step properties for Wizard and all supporting child components.
 * Also acts as a wrapper for content, with an optional inclusion of WizardBody.
 */

export interface WizardStepProps extends Omit<WizardBasicStep, 'visited'> {
  /** Optional for when the step is used as a parent to sub-steps */
  children?: React.ReactNode;
  /** Props for WizardBody that wraps content by default. Can be set to null for exclusion of WizardBody. */
  body?: Omit<WizardBodyProps, 'children'> | null;
  /** Optional list of sub-steps */
  steps?: React.ReactElement<WizardStepProps>[];
}

export const WizardStep = ({ body, children }: WizardStepProps) =>
  body || body === undefined ? <WizardBody {...body}>{children}</WizardBody> : <>{children}</>;

WizardStep.displayName = 'WizardStep';
