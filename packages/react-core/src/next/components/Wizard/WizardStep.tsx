import React from 'react';

import { isWizardParentStep, WizardNavItemType } from './types';
import { WizardBodyProps } from './WizardBody';
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
  children?: React.ReactNode | undefined;
  /** Props for WizardBody that wraps content by default. Can be set to null for exclusion of WizardBody. */
  body?: Omit<Omit<WizardBodyProps, 'children'>, 'children'> | null;
  /** Optional list of sub-steps */
  steps?: React.ReactElement<WizardStepProps>[];
  /** Flag to disable the step's navigation item */
  isDisabled?: boolean;
  /** Flag to determine whether the step is hidden */
  isHidden?: boolean;
  /** Replaces the step's navigation item or its properties. */
  navItem?: WizardNavItemType;
  /** Replaces the step's footer. The step's footer takes precedance over the wizard's footer. */
  footer?: React.ReactElement | Partial<WizardFooterProps>;
  /** Used to determine icon next to the step's navigation item */
  status?: 'default' | 'error';
  /** Flag to determine whether parent steps can expand or not. Defaults to false. */
  isExpandable?: boolean;
}

export const WizardStep = ({ children, steps: _subSteps, ...props }: WizardStepProps) => {
  const { activeStep, setStep } = useWizardContext();
  const { id, name, body, isDisabled, isHidden, navItem, footer, status } = props;
  const isParentStep = isWizardParentStep(activeStep);

  // Update step in context when props change or when the step is active has yet to be marked as visited.
  React.useEffect(() => {
    setStep({
      id,
      name,
      ...(body && { body }),
      ...(isDisabled && { isDisabled }),
      ...(isHidden && { isHidden }),
      ...(navItem && { navItem }),
      ...(footer && { footer }),
      ...(status && { status }),
      ...(!isParentStep && id === activeStep?.id && !activeStep?.isVisited && { isVisited: true })
    });
  }, [
    body,
    footer,
    id,
    isDisabled,
    isHidden,
    name,
    navItem,
    status,
    isParentStep,
    setStep,
    activeStep?.id,
    activeStep?.isVisited
  ]);

  return <>{children}</>;
};

WizardStep.displayName = 'WizardStep';
