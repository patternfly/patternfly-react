import React from 'react';

import { WizardNavItemType } from './types';
import { WizardBody, WizardBodyProps } from './WizardBody';
import { useWizardFooter } from './hooks/useWizardFooter';
import { useWizardContext } from './WizardContext';
import { WizardFooterProps } from './WizardFooter';

/**
 * The primary child component for Wizard. Step props are used for the list of steps managed in context.
 */

export interface WizardStepProps {
  /** Name of the step's navigation item */
  name: React.ReactNode;
  /** Unique identifier */
  id: string | number;
  /** Optional for when the step is used as a parent to sub-steps */
  children?: React.ReactNode;
  /** Props for WizardBody that wraps content by default. Can be set to null for exclusion of WizardBody. */
  body?: Omit<Omit<WizardBodyProps, 'children'>, 'children'> | null;
  /** Optional list of sub-steps */
  steps?: React.ReactElement<WizardStepProps>[];
  /** Flag to disable the step's navigation item */
  isDisabled?: boolean;
  /** Flag to represent whether the step has been visited (navigated to) */
  isVisited?: boolean;
  /** Flag to determine whether the step is hidden */
  isHidden?: boolean;
  /** Replaces the step's navigation item or its properties. */
  navItem?: WizardNavItemType;
  /** Replaces the step's footer. The step's footer takes precedance over the wizard's footer. */
  footer?: React.ReactElement | Partial<WizardFooterProps>;
  /** Used to determine icon next to the step's navigation item */
  status?: 'default' | 'error';
}

export const WizardStep = ({ children, body, id, footer, isHidden, isDisabled, navItem, status }: WizardStepProps) => {
  const { currentStep, setStep, toggleStep } = useWizardContext();

  useWizardFooter(footer, id);

  // Update the controlled step when a change is detected with select properties
  React.useEffect(() => {
    if (currentStep?.id === id && (isDisabled || navItem || status || !currentStep?.isVisited)) {
      setStep({
        id,
        ...(isDisabled && { isDisabled }),
        ...(navItem && { navItem }),
        ...(status && { status }),
        // When the current step is active and isn't visited, set as isVisited
        ...(!currentStep?.isVisited && { isVisited: true })
      });
    }
  }, [id, setStep, currentStep?.id, isDisabled, navItem, status, currentStep?.isVisited]);

  // Toggle visibility when the isHidden flag updates.
  // Wizard's hasUnmountedSteps prop must be set to false for visibility changes to take effect.
  React.useEffect(() => {
    if (isHidden !== undefined) {
      toggleStep(id, isHidden);
    }
  }, [toggleStep, id, isHidden]);

  return body || body === undefined ? <WizardBody {...body}>{children}</WizardBody> : <>{children}</>;
};

WizardStep.displayName = 'WizardStep';
